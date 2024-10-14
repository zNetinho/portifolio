'use client'
import { getPostById } from '@/services/db/posts';
import { Post } from '@/types/Post/post';
import { useEffect, useState } from 'react';
import { Editor } from '../_components/editor/editor';
import { FormEditor, InputForms, LabelForms } from '../_components/form-editor';
import ButtonsEditor from '../_components/editor/buttons-editor';

function PagePost({ ...props }) {
  const [post, setPost] = useState<Post>()
  const [title_post, setTitle_post] = useState('')
  const [description_post, setDescription_post] = useState('')
  const [slug_post, setSlug_post] = useState('')
  const [value, setValue] = useState('')
  const idPost = props.params.id

  async function handleAction() {
    console.log("disparou a função do post [id]");
    await fetch(`localhost:3000/api/posts/${idPost}`, {
      body: JSON.stringify({
        title: title_post,
        description: description_post,
        content: value,
        slug: slug_post
      })
    })
  }

  if (idPost) {
    useEffect(() => {
      async function fetchPost() {
        const data = await getPostById(idPost);
        if (data) setPost(data)
        console.log("Erro ao carregar o post:");
      }
      fetchPost();
    }, [])

    return (
      <div className='py-2'>
        <FormEditor className="">
          <div className="flex-1">
            <LabelForms>
              Titúlo do post (SEO)
            </LabelForms>
            <InputForms<string>
              value={post?.title || ""}
              setAction={setTitle_post}
            />
            <LabelForms>
              Descrição do post (SEO)
            </LabelForms>
            <InputForms<string>
              value={post?.description || ""}
              setAction={setDescription_post}
            />
          </div>
          <div className='flex-1'>
            <LabelForms>
              slug do post (URL)
            </LabelForms>
            <InputForms<string>
              value={post?.slug || ""}
              setAction={setSlug_post}
            />
          </div>
        </FormEditor>
        <div>
          <Editor
            content={post?.content}
            value={value}
            setValue={setValue}
          />
          <ButtonsEditor
            action={handleAction}
          />
        </div>
      </div>
    )
  }


  return (
    <div className='py-2'>
      {idPost}
      <FormEditor />
      <div>
        <Editor />
      </div>
      <ButtonsEditor
        action={handleAction}
      />
    </div>
  )
}

export default PagePost
