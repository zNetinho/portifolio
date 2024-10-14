'use client'
import { useEffect, useState } from "react";
import QuillEditor from "react-quill";
// Importing styles
import "react-quill/dist/quill.snow.css";
import ButtonsEditor from "./buttons-editor";
import { modules } from "./modules";
import { FormEditor, LabelForms } from "../form-editor";

type postContent = {
  content?: string
  value?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

const Editor = ({content}: postContent) => {
    // Editor state
    const [value, setValue] = useState("");

    useEffect(() => {
      if(content && content.length > 1) {
        setValue(content)
      }
    },[content])
  
    return (
      <div className="flex flex-col gap-2 py-2">
        <QuillEditor
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

