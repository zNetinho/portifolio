'use client'
import { getPostById } from '@/services/db/posts';
import { Post } from '@/types/Post/post';
import { useEffect, useState } from 'react';
import ButtonsEditor from '../_components/editor/buttons-editor';
import { Editor } from '../_components/editor/editor';
import { FormEditor, InputForms, LabelForms } from '../_components/form-editor';

// Tipagem dos props
interface PagePostProps {
  params: {
    id: string;
  };
}
function PagePost({ params }: PagePostProps) {
  const [post, setPost] = useState<Post>()
  const [title_post, setTitlePost] = useState('')
  const [description_post, setDescriptionPost] = useState('')
  const [slug_post, setSlugPost] = useState('')
  const [value, setValue] = useState('')
  const [selectedFile, setSelectedFile] = useState<string>('');
  const idPost = Number(params.id)

  async function handleActionEdit() {
    await fetch(`/api/posts/${idPost}`, {
      method: 'POST',
      body: JSON.stringify({
        id: idPost,
        title: title_post,
        description: description_post,
        content: value,
        slug: slug_post,
        image_featured: selectedFile,
      })
    })
  }

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const file = event.target.files[0];
    setSelectedFile(file.name);
  }

  if (idPost) {
    useEffect(() => {
      async function fetchPost() {
        try {
          const response = await getPostById(idPost);
          if (response && response.data) {
            const data = response.data;
            setPost(data);
            setTitlePost(data.title);
            setDescriptionPost(data.description);
            setSlugPost(data.slug);
            setValue(data.content);
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error(error.message);
          }
        }
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
            <InputForms
              id='title_post'
              value={title_post}
              setAction={setTitlePost}
            />
            <LabelForms>
              Descrição do post (SEO)
            </LabelForms>
            <InputForms
              id='description_post'
              value={description_post}
              setAction={setDescriptionPost}
            />
          </div>
          <div className='flex-1'>
            <LabelForms>
              slug do post (URL)
            </LabelForms>
            <InputForms
              id='slug_post'
              value={slug_post}
              setAction={setSelectedFile}
            />
            <input type="file" onChange={handleFile} />
          </div>
        </FormEditor>
        <div>
          <Editor
            content={post?.content}
            value={value}
            setValue={setValue}
          />
          <ButtonsEditor
            action={() => handleActionEdit()}
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
        <Editor
          setValue={setValue}
          value={value}
        />
      </div>
      <ButtonsEditor
        action={() => handleActionEdit()}
      />
    </div>
  )
}

export default PagePost
