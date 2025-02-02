'use client'
import { motion } from 'framer-motion'
import { SaveIcon, XIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { FormEditor, InputForms, LabelForms } from './_components/form-editor';
import { Editor } from './_components/editor/editor';

function PagePost() {

  const [title_post, setTitle_post] = useState('')
  const [description_post, setDescription_post] = useState('')
  const [slug_post, setSlug_post] = useState('')
  const [value, setValue] = useState('')
  const fileInput = useRef<HTMLInputElement>(null);

  async function handleAction() {
    const formData = new FormData();
    formData.append('image_featured', fileInput?.current?.files?.[0]!);
    formData.append('title', title_post);
    formData.append('description', description_post);
    formData.append('content', value);
    formData.append('slug', slug_post);
    formData.append('authorId', "1");

    await fetch(`http://localhost:3000/api/posts`, {
      method: 'POST',
      body: formData
    });
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
           <LabelForms
            htmlFor="slug_post"
          >
            Imagem de capa do post
          </LabelForms>
          <input
            id="image_featured"
            type="file"
            ref={fileInput}
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
