// RichTextEditor.jsx

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        theme="snow" // Specify theme ('snow' or 'bubble')
        value={editorHtml}
        onChange={handleChange}
        className="text-black bg-white"
      />
    </div>
  );
};

export default RichTextEditor; // Ensure you export the component
