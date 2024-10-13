'use client'
import ButtonComponent from "@/components/button";
import { SaveIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import QuillEditor from "react-quill";
// Importing styles
import "react-quill/dist/quill.snow.css";

type postContent = {
  content?: string
}

const Editor = ({content}: postContent) => {
    // Editor state
    const [value, setValue] = useState("");
    console.log("Conteúdo buscado: ",content);

    useEffect(() => {
      if(content && content.length > 1) {
        setValue(content)
      }
    },[content])

    const modules = {
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          [{ image: "upload" }],
          ["clean"],
        ],
        handlers: {},

      },
    };
  
    return (
      <div className="py-2">
        <div>
            <label>Editor Content</label>
        </div>
        <QuillEditor
          className="border-[7px] rounded-lg border-neutral-600 text-lg dark:bg-slate-300 text-black"
          theme="snow"
          modules={modules}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <div className="flex justify-end gap-2 pt-2">
            <ButtonComponent 
              className="flex gap-1 p-1 border-[1px] rounded-md bg-green-700"

            >
                Salvar <SaveIcon />
            </ButtonComponent>
            <ButtonComponent 
              className="flex gap-1 p-1 border-[1px] rounded-md bg-red-800">
                Cancelar <XIcon />
            </ButtonComponent>
        </div>
      </div>
    );
  };

export {
    Editor
}
