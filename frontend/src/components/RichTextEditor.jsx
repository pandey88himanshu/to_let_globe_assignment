import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const RichTextEditor = ({ value, onChange }) => {
  return (
    <div>
      <ReactQuill
        className="bg-white text-black"
        theme="snow"
        value={value}
        onChange={onChange}
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
      />
    </div>
  );
};

// Modules and formats you want to use
RichTextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

RichTextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default RichTextEditor;
