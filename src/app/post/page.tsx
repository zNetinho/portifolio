'use client'
import { Editor } from './_components/editor';
import FormEditor from './_components/form-editor';

function PagePost() {

    return (
    <div className="py-2">
      <div>
        <FormEditor />
      </div>
      <Editor />
    </div>
  );
}

export default PagePost;
