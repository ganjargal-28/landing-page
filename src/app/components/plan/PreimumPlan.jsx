import Image from "next/image";

export const PreimumPlan = () => {
  return (
    <div className="">
      <div className="container">
        <div className="min-w-96 min-h-[760px] border flex flex-col rounded-md  items-center gap-10 border-gray-400">
          <Image src={"/Free.png"} width={200} height={200} />
          <p className="text-3xl">free plan </p>
          <div className="flex flex-col gap-8">
            <div className="flex gap-3 items-center">
              <img src="/check.png" alt="" />
              <p>Unlimited Bandwitch</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/check.png" alt="" />
              <p>Encrypted Connection</p>
            </div>
            <div className="flex  gap-3 items-center">
              <img src="/check.png" alt="" />
              <p>No Traffic Logs</p>
            </div>
            <div className="flex  gap-3 items-center">
              <img src="/check.png" alt="" />
              <p>Works on All Devices</p>
            </div>
          </div>
          <p
            className="text-2xl
          "
          >
            $12 / mo
          </p>
          <button className="btn btn-outline btn-secondary">Select</button>
        </div>
      </div>
    </div>
  );
};
