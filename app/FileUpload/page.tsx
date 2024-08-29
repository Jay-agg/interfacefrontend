"use client";
import React, { ChangeEvent, useState } from "react";
import { Upload } from "lucide-react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
        setFile(null);
      } else {
        alert("File upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file. Please try again.");
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
      <div className="flex items-center">
        <label className="cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 mr-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept=".csv, .xlsx"
          />
          <Upload className="inline-block mr-2" size={20} />
          {file ? file.name : "Choose file"}
        </label>
        <button
          onClick={handleUpload}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          disabled={!file}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
