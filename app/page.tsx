// app/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
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
      router.push("/Dashboard");

      // if (response.ok) {
      //   alert("File uploaded successfully!");
      //   setFile(null);
      //   router.push("/Dashboard");
      // } else {
      //   alert("File upload failed. Please try again.");
      // }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white w-screen">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">File Upload Example</h1>
        <div className="mb-4">
          <input type="file" onChange={handleFileChange} className="mb-2" />
          {file && <p>Selected file: {file.name}</p>}
        </div>
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={!file}
        >
          Upload
        </button>
      </div>
    </main>
  );
}
