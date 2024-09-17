"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Carsual() {
  const fedthData = async () => {
    const response = await fedthData("");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fedthData();
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="container border border-violet-700 rounded-xl mx-auto"></div>
    </div>
  );
}
