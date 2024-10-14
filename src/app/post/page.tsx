'use client'
import ButtonComponent from '@/components/button';
import { SaveIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Editor } from './_components/editor/editor';
import { FormEditor, InputForms, LabelForms } from './_components/form-editor';

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
        slug: slug_post
      })
    })
  }

    return (
      <div className='py-2'>
      <FormEditor className="">
        <div className="flex-1">
          <LabelForms>
            Titúlo do post (SEO)
          </LabelForms>
          <InputForms<string>
            value={title_post}
            setAction={setTitle_post}
          />
          <LabelForms>
            Descrição do post (SEO)
          </LabelForms>
          <InputForms<string>
            value={description_post}
            setAction={setDescription_post}
          />
        </div>
        <div className='flex-1'>
          <LabelForms>
            slug do post (URL)
          </LabelForms>
          <InputForms<string>
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
          <ButtonComponent 
            className="flex gap-1 p-1 border-[1px] rounded-md bg-green-700"
            onClick={handleAction}
            type="button"
          >
              Salvar <SaveIcon />
          </ButtonComponent>
          <ButtonComponent 
            className="flex gap-1 p-1 border-[1px] rounded-md bg-red-800"
            type="reset"
          >
              Cancelar <XIcon />
          </ButtonComponent>
      </div>
      </div>
    </div>
  );
}

export default PagePost;
