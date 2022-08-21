/**
 * Defintion of Download button component
 */
import axios from "axios";
import {saveAs} from "file-saver"

interface DownloadButtonProps {
  filename: string;
}

const onClickDownloadButton = (filename: string) => {
  axios
    .get("http://localhost:8000/download/" + filename)
    .then((response) => {
      console.log(response);
      const blob = new Blob([response.data], {
        type: response.data.type,
      });
      saveAs(blob, filename)
      
    })
    .catch((error) => {
      console.log(error);
    });
};

export const DownloadButton = (props: DownloadButtonProps) => {
  const { filename = "" } = props;
  return (
    <button
      className="px-4 py-2 rounded-md bg-green-700 text-sm text-white hover:bg-green-900"
      onClick={() => onClickDownloadButton(filename)}
    >
      Download
    </button>
  );
};
