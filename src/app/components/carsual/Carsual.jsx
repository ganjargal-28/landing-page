"use client";
import React, { useState } from "react";

export default function Carsual() {
  const data = [
    {
      id: 1,
      title: "Viezh Robert",
      location: "Warsaw, Poland",
      content:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      star: "4.5",
      url: "/human.png",
    },
    {
      id: 2,
      title: "Yessica Christy",
      location: "Shanxi, China",
      content:
        "“I like it because I like to travel far and still can connect with high speed.”",
      star: "4.5",
      url: "/human.png",
    },
    {
      id: 3,
      title: "Kim Young Jou",
      location: "Seoul, South Korea",
      content:
        "“This is very unusual for my business that currently requires a virtual private network that has high security.”",
      star: "4.5",
      url: "/human.png",
    },
    {
      id: 4,
      title: "John Doe",
      location: "New York, USA",
      content: "“Great experience using this service. I highly recommend it.”",
      star: "4.7",
      url: "/human.png",
    },
    {
      id: 5,
      title: "Jane Smith",
      location: "London, UK",
      content: "“It was so easy to use and worked perfectly. Will use again!”",
      star: "4.6",
      url: "/human.png",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-5">
        Trusted by Thousands of Happy Customers
      </h2>
      <p className="text-center mb-10">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>

      {/* Container to hold the scrollable content */}
      <div className="container w-[1300px] mx-auto overflow-x-auto no-scrollbar">
        <div className="flex gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="min-w-[350px] flex-shrink-0 h-[250px] border rounded-lg p-5 shadow-lg"
            >
              <div className="flex gap-4 mb-4">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
              <p className="text-gray-700">{item.content}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-yellow-500">{item.star} ★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
