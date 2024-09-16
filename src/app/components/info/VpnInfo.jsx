import Image from "next/image";

export const VpnInfo = () => {
  return (
    <div className="w-full ">
      <div className="container ">
        <div className="flex flex-col gap-6">
          <div>
            <p>Want anything to be easy with LaslesVPN.</p>
            <p>
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>

        <div>
          <Image src={"/Illustration.png"} />
        </div>
      </div>
    </div>
  );
};
