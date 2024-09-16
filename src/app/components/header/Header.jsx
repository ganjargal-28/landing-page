import Image from "next/image";
import { Menu } from "./Menu";
import { SignUp } from "./SignUp";

export const Header = () => {
  return (
    <div className="w-full h-20 ">
      <div className="container mx-auto  justify-center items-center flex">
        <Image src={"/logo.png"} width={300} height={300} />
        <Menu />
        <SignUp />
      </div>
    </div>
  );
};
