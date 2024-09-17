import Image from "next/image";

export const VpnInfo = () => {
  return (
    <div>
      <div className="container mx-auto justify- flex">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-14 max-w-[600px]">
            <p className="text-5xl">Want anything to be easy with LaslesVPN.</p>
            <p>
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <div>
              <button className="btn w-72 drop-shadow-2xl btn-info">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div>
          <Image src={"/Illustration.png"} width={600} height={500} />
        </div>
      </div>
    </div>
  );
};
