import Image from "next/image";

export const Location = () => {
  return (
    <div className="">
      <div className="containe flex gap-9 mx-auto">
        <Image
          className=" rounded-full bg-red-200"
          src={"/location.png"}
          width={50}
          height={20}
        />
        <div>
          <p>30+</p>
          <p>location</p>
        </div>
      </div>
    </div>
  );
};
