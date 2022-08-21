/**
 * naviコンポーネント
 */

export const MyNavi = () => {
  return (
    <div className="flex flex-row justify-between content-center bg-indigo-500 mx-auto">
      <div className="p-1.5 text-3xl text-white">My Navi</div>
      <ul className=" w-60 flex flex-row justify-between list-disc items-center text-white">
        <li className="w-32 p-1.5 ">
          <a className="hover:text-red-500" href="https://tailwindcss.com/docs/installation">Tailwindcss</a>
        </li>
        <li className="w-16 p-1.5">test2</li>
      </ul>
    </div>
  );
};
