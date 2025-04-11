import Image from "next/image";
import { Engage } from "./Engage";
import { Product } from "./Product";

import { Subscribe } from "../subscribe/Subscribe";
import { EarnMoney } from "./EarnMoney";

export const Footer = () => {
  return (
    <div className="w-full  bg-[#F8F8F8] ">
      <div className="container mb-14 position:  pt-80 mx-auto relative">
        <div className="flex justify-between">
          <div className="max-w-[300px] flex flex-col gap-6">
            <Image src={"/logo.png"} width={200} height={200} />
            <p>
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>
            <p>©2020LaslesVPN</p>
          </div>
          <div className=" flex gap-40">
            <div>
              <Product />
            </div>
            <div>
              <Engage />
            </div>
            <div>
              <EarnMoney />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
