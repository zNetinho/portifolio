import React, { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import { z } from 'zod'
import { schemaFormContact } from './schema/schema-form-contact'

export type messageContact = z.infer<typeof schemaFormContact>
export default function FormContact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const keyApi = process.env.VERCEL_API_KEY_STATIC_FORM

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: 'Contato feito pelo portifolio',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        message: '',
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: keyApi // get your access key from https://www.staticforms.xyz
      });
    
      const [response, setResponse] = useState({
        type: '',
        message: ''
      });
      const handleChange = (e: any) =>
        setContact({ ...contact, [e.target.name]: e.target.value });
    
      const handleSend = async (e : FormEvent) => {
        e.preventDefault();
        contact.name = name
        contact.email = email
        contact.message = message
        try {
          const res = await fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' }
          });
    
          const json = await res.json();
    
          if (json.success) {
            setResponse({
              type: 'success',
              message: 'Thank you for reaching out to us.'
            });
          } else {
            setResponse({
              type: 'error',
              message: json.message
            });
          }
        } catch (e) {
          console.log('An error occurred', e);
          setResponse({
            type: 'error',
            message: 'An error occured while submitting the form'
          });
        }
      };

    return (
        <form onSubmit={handleSend} action='https://api.staticforms.xyz/submit' method='post'>
            <div className='flex flex-col gap-6 justify-around border-[1px] border-neutral-700'>
                <div className='flex flex-col w-full px-20 py-5'>
                    <label htmlFor='name'>Nome:</label>
                    <input 
                        name='name'
                        type='text' 
                        className='p-[10px] rounded-lg placeholder:text-neutral-300 focus:outline-neutral-800 focus:border-neutral-800 selection:bg-white selection:text-black'
                        onChange={handleChange}
                        required
                        onKeyUp={(e) => setName(e.currentTarget.value)}
                    />
                </div>
                <div className='flex flex-col w-full px-20 py-5'>
                    <label >E-mail:</label>
                    <input
                        type='email'
                        className='p-[10px] rounded-lg placeholder:text-neutral-300 focus:outline-neutral-800 focus:border-neutral-800 selection:bg-white selection:text-black'
                        pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                        name='email'
                        required
                        onChange={handleChange}
                        onKeyUp={(e) => setEmail(e.currentTarget.value)}
                    />
                </div>
                <div className='flex flex-col w-full px-20 py-5'>
                    <p>Envie sua mensagem :)</p>
                    <textarea name="message" rows={10} onChange={handleChange} onKeyUp={(e) => setMessage(e.currentTarget.value)}></textarea>
                </div>
                <div className='w-4/5 m-auto pb-8'>
                    <Button
                        className='w-full bg-neutral-700 text-white hover:bg-neutral-800'
                        type='submit'
                    >
                        Enviar
                    </Button>

                </div>
            </div>
        </form>
    )
}
