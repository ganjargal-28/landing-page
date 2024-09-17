"use,client";
import React, { useState } from "react";
import Link from "next/link"; // Next.js ашиглаж байгаа бол Link ашиглана

export default function Carsual() {
  // Жишээ datas массив
  const datas = [
    {
      id: 1,
      title: "Viezh Robert",
      cover_image: "https://via.placeholder.com/150",
      comment: "Wow... I am very happy to use this VPN.",
    },
    {
      id: 2,
      title: "Yessica Christy",
      cover_image: "https://via.placeholder.com/150",
      comment: "I like it because I like to travel far.",
    },
    {
      id: 3,
      title: "Kim Young Jou",
      cover_image: "https://via.placeholder.com/150",
      comment: "This is very unusual for my business.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return datas.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  const handleRight = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === datas.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <Link href={`${datas[currentIndex].id}`}>
          <div className="flex flex-col items-center">
            <h3 className="text-medium">{datas[currentIndex].title}</h3>
            <img
              src={datas[currentIndex].cover_image}
              style={{ width: "100%", height: "auto", maxWidth: "300px" }}
              alt={datas[currentIndex].title}
            />
            <p>{datas[currentIndex].comment}</p>
          </div>
        </Link>

        <div className="flex gap-4 justify-center mt-4">
          <button onClick={handleLeft} className="p-2 bg-gray-200 rounded-full">
            Left
          </button>
          <button
            onClick={handleRight}
            className="p-2 bg-gray-200 rounded-full"
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
}
