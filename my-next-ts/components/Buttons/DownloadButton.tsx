/**
 * Defintion of Download button component
 */
import axios from "axios";

interface DownloadButtonProps {
  filename: string;
}

const onClickDownloadButton = (filename: string) => {
  axios
    .get("http://localhost:8000/download/" + filename)
    .then((response) => {
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
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
