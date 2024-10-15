'use client'
import { useEffect } from "react";
import dynamic from 'next/dynamic'
// Ensures that the library will only be loaded in the browser
const EditorText = dynamic(() => import('react-quill'), { ssr: false });


// Importing styles
import "react-quill/dist/quill.snow.css";
import { modules } from "./modules";

type postContent = {
  content?: string
  value?: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function Editor ({content, setValue, value}: postContent) {
    // Editor state

    useEffect(() => {
      if(content && content.length > 1) {
        setValue(content)
      }
    },[content])
  
    return (
      <div className="flex flex-col gap-2 py-2">
        <EditorText
          className="border-[7px] rounded-lg border-neutral-600 text-lg dark:bg-slate-300 text-black"
          theme="snow"
          modules={modules}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    );
  };

export {
  Editor
};

