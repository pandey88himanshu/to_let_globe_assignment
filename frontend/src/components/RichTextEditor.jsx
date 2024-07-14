// RichTextEditor.jsx

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const RichTextEditor = ({ value, onChange }) => {
  return (
    <div>
      <ReactQuill
        theme="snow" // Specify theme ('snow' or 'bubble')
        value={value}
        onChange={onChange}
        className="text-black bg-white"
      />
    </div>
  );
};

export default RichTextEditor;
