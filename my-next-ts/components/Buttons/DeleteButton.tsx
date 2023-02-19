/**
 * Defintion of Download button component
 */

import axios from "axios";

interface DeleteButtonProps {
  filename: string;
}

const onClickDeleteButton = (filename: string) => {
  const params = {"filename": filename};
  axios
    .delete("http://localhost:8000/delete/" + filename, {data: params})
    .then((response) => {
      console.log("delete: " + filename);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const DeleteButton = (props: DeleteButtonProps) => {
  const { filename = "" } = props;
  return (
    <button
      className="px-4 py-2 rounded-md bg-red-700 text-sm text-white hover:bg-red-900"
      onClick={() => onClickDeleteButton(filename)}
    >
      Delete
    </button>
  );
};
