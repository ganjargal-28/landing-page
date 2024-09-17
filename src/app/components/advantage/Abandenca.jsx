import Image from "next/image";

export const Abandence = () => {
  return (
    <div>
      <div className="container mx-auto justify-between flex">
        <div>
          <Image src={"/illution.png"} width={500} height={500} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-14 max-w-[600px]">
            <p className="text-5xl">Want anything to be easy with LaslesVPN.</p>
            <p>
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex  items-center ">
                <img src="/checkbox.png" alt="" />
                <p>Powerfull online protection.</p>
              </div>
              <div className="flex  items-center ">
                <img src="/checkbox.png" alt="" />
                <p>Internet without borders.</p>
              </div>
              <div className="flex  items-center ">
                <img src="/checkbox.png" alt="" />
                <p>Supercharged VPN</p>
              </div>
              <div className="flex  items-center ">
                <img src="/checkbox.png" alt="" />
                <p>No specific time limits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
