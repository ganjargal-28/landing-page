import { Comments } from "./Comments";

export const CostomersCard = ({ user }) => {
  const { name, location, picture } = user;
  const star = Math.floor(Math.random() * 6);
  return (
    <div className=" card bg-base-100 w-96 h-[230px] hover:shadow-xl hover:border-red-500 rounded-xl shadow-xl">
      <div className=" ">
        <div>
          <div className="flex justify-between gap-5">
            <img src={picture?.thumbnail} alt="" className="rounded-full" />
            <div>
              <p className="card-title">
                {name?.first} {name?.last}
              </p>
              <p>
                {location?.city},{location?.country}
              </p>
            </div>

            <div>{star} ⭐️</div>
          </div>
        </div>

        <p className="mt-3 font-medium line-clamp-4">
          {Comments[Math.floor(Math.random() * Comments.length)]}
        </p>
      </div>
    </div>
  );
};
