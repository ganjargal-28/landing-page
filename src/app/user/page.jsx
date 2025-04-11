import { CostomersCard } from "../components/costomers/Card";

const userPage = async () => {
  const data = await fetch("https://randomuser.me/api/?results=20");
  const user = await data.json();
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="">
          <p className="flex justify-center text-3xl">User List </p>
        </div>

        <div className="flex   gap-4 flex-wrap ">
          <div className="carousel rounded-box flex flex-col p-9   w-[1200px] h-[900px] flex-wrap  gap-5">
            {user?.results?.map((user) => (
              <div className="carousel-item  ">
                <CostomersCard user={user} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default userPage;
