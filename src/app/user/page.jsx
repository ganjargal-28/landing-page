import { CostomersCard } from "../components/costomers/Card";

const userPage = async () => {
  const data = await fetch("https://randomuser.me/api/?results=20");
  const user = await data.json();
  return (
    <div className="flex gap-4 flex-wrap mt-[50px]">
      <div className="carousel rounded-box gap-5">
        {user?.results?.map((user) => (
          <div className="carousel-item">
            <CostomersCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default userPage;
