'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

type contentForm = {
    title_post_fetched?: string
    description_post_fetched?: string
    slug_post_fectched?: string
} 

function FormEditor({title_post_fetched, description_post_fetched, slug_post_fectched}: contentForm) {

    const [title_post, setTitle_post] = useState('')
    const [description_post, setDescription_post] = useState('')
    const [slug_post, setSlug_post] = useState('')

  return (
    <>
        <div className='flex gap-2 flex-wrap'>
            <div className='w-full flex gap-2'>
                <div className='w-1/2'>
                    <Label>Titúlo do post (SEO)</Label>
                    <Input 
                        type='text' 
                        className='py-1 px-1 dark:bg-slate-300 dark:text-neutral-800'
                        value={title_post? title_post : title_post_fetched}
                        onChange={(e) => setTitle_post(title_post_fetched ? title_post_fetched : e.target.value)}
                    />
                </div>
                <div className='w-1/2'>
                    <Label>Description (SEO)</Label>
                    <Input 
                        type='text'
                        className='py-1 px-1 dark:bg-slate-300 dark:text-neutral-800'
                        value={description_post? description_post : description_post_fetched}
                        onChange={(e) => setDescription_post(e.target.value)}
                    />
                </div>
            </div>
            <div className='w-full flex gap-2'>
                <div className='w-1/2'>
                    <Label>URL (slug)</Label>
                    <Input
                        type='text'
                        className='py-1 px-1 dark:bg-slate-300 dark:text-neutral-800'
                        value={slug_post? slug_post : slug_post_fectched}
                        onChange={(e) => setSlug_post(e.target.value)}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default FormEditor