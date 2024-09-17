import { Platform } from "../BigPlatforms/Platform";

export const Country = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container pt-32 mx-auto">
        <div className="flex justify-center">
          <div className="flex justify-center  pb-20 flex-col">
            <p className="flex justify-center text-3xl">
              Huge Global Network of Fast VPN
            </p>
            <p className="text-2xl">
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </p>
          </div>
        </div>
        <div className="flex ">
          <img src="/global.png" alt="" />
        </div>
        <div className="pt-40">
          <Platform />
        </div>
      </div>
    </div>
  );
};
