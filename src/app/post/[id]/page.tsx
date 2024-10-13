'use client'
import React, { useEffect, useState } from 'react'
import { Editor } from '../_components/editor'
import FormEditor from '../_components/form-editor'
import { Post } from '@/types/Post/post';
import { getPostById } from '@/services/db/posts';

function PagePost({...props}) {
  const [post, setPost] = useState<Post>()
  const idPost = props.params.id

  if(idPost) {
    useEffect(() => {
      async function fetchPost() {
        const data = await getPostById(idPost);
        if(data) setPost(data)
        console.log("Erro ao carregar o post:");
      }
    fetchPost();
    },[])

    return (
      <div className='py-2'>
        {idPost}
          <FormEditor 
            title_post_fetched={post?.title}
            description_post_fetched={post?.description}
            slug_post_fectched={post?.slug}
          />
          <div>
              <Editor
                content={post?.content}
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
      </div>
    )
}

export default PagePost
