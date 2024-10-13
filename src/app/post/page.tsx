'use client'
import React, { useEffect, useState } from 'react'
import { getPostById } from '@/services/db/posts';
import { Post } from '@/types/post';
import FormEditor from './_components/form-editor';
import { Editor } from './_components/editor';

function PagePost({ params }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const idPost = params.id;

  useEffect(() => {
    async function fetchPost() {
      if (idPost) {
        try {
          const data = await getPostById(idPost);
          if (data) setPost(data);
        } catch (error) {
          console.error("Erro ao carregar o post:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);  // Quando não há ID, não precisa carregar dados
      }
    }
    fetchPost();
  }, [idPost]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="py-2">
      {idPost ? (
        post ? (
          <div>
            <FormEditor 
              title_post_fetched={post.title}
              description_post_fetched={post.description}
              slug_post_fectched={post.slug}
            />
            <div>
              <Editor content={post.content} />
            </div>
          </div>
        ) : (
          <div>Post não encontrado.</div>
        )
      ) : (
        <div>
          <FormEditor />
          <div>
            <Editor />
          </div>
        </div>
      )}
    </div>
  );
}

export default PagePost;
