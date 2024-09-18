import Link from "next/link";
import { CostomersCard } from "./Card";

export const Carsual = async () => {
  const data = await fetch("https://randomuser.me/api/?results=20");
  const user = await data.json();
  return (
    <div className="w-full  ">
      <div className="container  mx-auto h-[650px] items-center ">
        <div className="flex flex-col items-center gap-5 ">
          <p className="text-4xl">Trusted by Thousands of Happy Customer</p>
          <p>
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="flex gap-4  flex-wrap mt-[50px]">
          <div className="carousel rounded-box gap-5">
            {user?.results?.map((user) => (
              <div className="carousel-item">
                <Link href={"/user"}>
                  <CostomersCard user={user} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
