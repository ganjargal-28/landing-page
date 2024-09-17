import { Users } from "../users/Users";
import { VpnInfo } from "./VpnInfo";

export const About = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="container mx-auto">
        <div className="min-w-6">
          <VpnInfo />
        </div>
        <div className="flex pt-28">
          <Users />
        </div>
      </div>
    </div>
  );
};
