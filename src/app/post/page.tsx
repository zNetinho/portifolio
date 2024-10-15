'use client'
import { motion } from 'framer-motion'
import { SaveIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { FormEditor, InputForms, LabelForms } from './_components/form-editor';
import { Editor } from './_components/editor/editor';

function PagePost() {

  const [title_post, setTitle_post] = useState('')
  const [description_post, setDescription_post] = useState('')
  const [slug_post, setSlug_post] = useState('')
  const [value, setValue] = useState('')

  async function handleAction() {
    console.log("disparou a função do post");
    await fetch(`http://localhost:3000/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: title_post,
        description: description_post,
        content: value,
        slug: slug_post,
        authorId: "1"
      })
    })
  }

  return (
    <div className='py-2'>
      <FormEditor className="">
        <div className="flex-1">
          <LabelForms
            htmlFor="title_post"
          >
            Titúlo do post (SEO)
          </LabelForms>
          <InputForms
            id="title_post"
            value={title_post}
            setAction={setTitle_post}
          />
          <LabelForms
            htmlFor="description_post"
          >
            Descrição do post (SEO)
          </LabelForms>
          <InputForms
            id="description_post"
            value={description_post}
            setAction={setDescription_post}
          />
        </div>
        <div className='flex-1'>
          <LabelForms
            htmlFor="slug_post"
          >
            slug do post (URL)
          </LabelForms>
          <InputForms
            id="slug_post"
            value={slug_post}
            setAction={setSlug_post}
          />
        </div>
      </FormEditor>
      <div>
        <Editor
          content={value}
          value={value}
          setValue={setValue}
        />
        <div className="flex justify-end gap-2 pt-2">
          <motion.button
            className="flex gap-1 p-1 border-[1px] rounded-md bg-green-700"
            onClick={handleAction}
            type="button"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            whileInView={{ opacity: 1 }}
          >
            Salvar <SaveIcon />
          </motion.button>
          <motion.button
            className="flex gap-1 p-1 border-[1px] rounded-md bg-red-800"
            type="reset"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            whileInView={{ opacity: 1 }}
          >
            Cancelar <XIcon />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default PagePost;
