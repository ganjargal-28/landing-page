import { FreePlan } from "./FreePlan";
import { PreimumPlan } from "./PreimumPlan";
import { StudentPlan } from "./StudentPlan";

export const Plan = () => {
  return (
    <div className="w-full ">
      <div className="container pt-32 mx-auto">
        <div className="flex justify-center">
          <div className="flex justify-center  pb-20 flex-col">
            <p className="flex justify-center text-3xl">Choose Your Plan</p>
            <p className="text-2xl">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-36">
          <FreePlan />
          <StudentPlan />
          <PreimumPlan />
        </div>
      </div>
    </div>
  );
};
