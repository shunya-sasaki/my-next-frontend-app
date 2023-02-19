import { useEffect, useState } from "react";
import axios from "axios";

import { DownloadButton } from "./Buttons/DownloadButton";
import { DeleteButton } from "./Buttons/DeleteButton";

export const ServerFileList = () => {
  const [filelist, setFilelist] = useState<Array<string>>([]);
  useEffect(() => {
    console.log("file list has been updated.");
    console.log(filelist);
  }, [filelist]);

  const onClickFilelist = async () => {
    await axios
      .get("http://localhost:8000/filelist/")
      .then((response) => {
        if (response.data.filelist) {
          setFilelist([...response.data.filelist]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  interface TableItemProps {
    filename: string | undefined;
  }
  const TableItem = (props: TableItemProps) => {
    const { filename } = props;
    return (
      <tr className="flex w-full">
        <td className="px-4 py-2 w-1/3 border border-slate-500">{filename}</td>
        <td className="px-4 py-2 w-1/3 border border-slate-500 text-center">
          <DownloadButton filename={filename ? filename : ""} />
        </td>
        <td className="px-4 py-2 w-1/3 border border-slate-500 text-center">
          <DeleteButton filename={filename ? filename : ""} />
        </td>
      </tr>
    );
  };

  const FilelistTable = () => {
    return (
      <table className="w-full px-4 py-2">
        <thead className="w-full">
          <tr className="flex w-full">
            <th className="px-4 py-2 w-1/3">File Name</th>
            <th className="px-4 py-2 w-1/3">Download link</th>
            <th className="px-4 py-2 w-1/3">Delete link</th>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col justify-between overflow-y-scroll h-64">
          {filelist.map((filename, index) => {
            return <TableItem filename={filename} key={index} />;
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="px-4 w-full">
      <div className="flex w-full justify-start">
        <div className="text-3xl font-bold items-center">File List</div>
        <button
          className="ml-4 items-center bg-indigo-100 rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100 px-4 py-2"
          onClick={onClickFilelist}
        >
          Reload
        </button>
      </div>
      <div className="px-4">
        <FilelistTable />
      </div>
    </div>
  );
};
