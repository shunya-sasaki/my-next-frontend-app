import Image from "next/image";

export const MainImage = () => {
  return (
    <div className="text-center p-10">
      <Image
        className="rounded-full"
        priority
        src="/images/kotetsu.png"
        height={256}
        width={256}
      />
    </div>
  );
};
