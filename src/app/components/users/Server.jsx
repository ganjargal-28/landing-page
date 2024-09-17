import Image from "next/image";

export const Server = () => {
  return (
    <div className="">
      <div className="containe flex gap-9 mx-auto">
        <Image
          className=" rounded-full bg-red-200"
          src={"/serve.png"}
          width={50}
          height={20}
        />
        <div>
          <p>50+</p>
          <p>server</p>
        </div>
      </div>
    </div>
  );
};
