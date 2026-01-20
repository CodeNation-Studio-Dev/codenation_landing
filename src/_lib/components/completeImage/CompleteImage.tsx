import Image from "next/image";

export const CompleteImage = ({ src }: { src: string }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="relative h-[700px] w-[90%] max-w-[1540px] overflow-hidden rounded-lg">
        <Image src={src} fill alt="webpage" className="object-cover" />
      </div>
    </div>
  );
};
