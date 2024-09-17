import { Location } from "./Location";
import { Members } from "./Members";
import { Server } from "./Server";

export const Users = () => {
  return (
    <div className="w-full ">
      <div className="container justify-around flex mx-auto">
        <Members />
        <Location />
        <Server />
      </div>
    </div>
  );
};
