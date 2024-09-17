import Image from "next/image";

export const Members = () => {
  return (
    <div className="">
      <div className="containe flex gap-9 mx-auto">
        <Image
          className=" rounded-full bg-red-200"
          src={"/account.png"}
          width={50}
          height={20}
        />
        <div>
          <p>90+</p>
          <p>users</p>
        </div>
      </div>
    </div>
  );
};
