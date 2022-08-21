import { ChangeEvent, useState } from "react";
import axios from "axios";

export const MyFileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>();

  const onChangeSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    console.log(file);
    return setSelectedFile(file);
  };

  const onClickUploadFile = () => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);
    }
    console.log(formData);
    axios
      .post("http://localhost:8000/uploadfile/", formData, {
        headers: {
          accept: "application/json",
          "Content-type": "multipart/form-data",
        },
      })
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 w-full">
      <div className="text-3xl font-bold pb-4">Upload New File</div>
      <input
        className="block w-full file:px-4 file:py-2 file:rounded-full file:bg-indigo-100 file:text-indigo-500 file:text-sm file:border-none file:font-semibold hover:file:bg-indigo-500 hover:file:text-white text-sm text-gray-500 font-semibold"
        id="file_input"
        type="file"
        onChange={onChangeSelectedFile}
      />
      <button
        className="block w-full bg-indigo-100 rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-2 mt-4 font-semibold"
        onClick={onClickUploadFile}
      >
        Upload File
      </button>
    </div>
  );
};
