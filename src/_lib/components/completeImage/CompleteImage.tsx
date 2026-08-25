import Image from "next/image";

export const CompleteImage = ({
  src,
  altImg,
}: {
  src: string;
  altImg: string;
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="relative h-[700px] w-[90%] max-w-[1540px] overflow-hidden rounded-lg">
        <Image src={src} fill alt={altImg} className="object-cover" />
      </div>
    </div>
  );
};
