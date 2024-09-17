import { Border } from "./Border";
import { Location } from "./Location";
import { Members } from "./Members";
import { Server } from "./Server";

export const Users = () => {
  return (
    <div className="w-full ">
      <div className="container shadow-lg h-52 justify-around pt-9 rounded-lg flex mx-auto">
        <Members />
        <Border />
        <Location />
        <Border />
        <Server />
      </div>
    </div>
  );
};
