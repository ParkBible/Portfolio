"use client"
import React from "react";
import Image from "next/image";
import Menu from "./menu/Menu";
import About from "./about/About";
import Tech from "./tech/Tech";
import Project from "./project/Project";
import Experience from "./experience/Experience";
import Blog from "./blog/Blog";

export default function Home() {
  return (
    <>
      <Menu/>
      <div className="rounded-lg bg-white min-[1675px]:w-[65%] max-xl:w-full w-4/5 m-auto sm:mt-[140px] sm:mb-20 pt-[60px] pb-10 sm:px-20 px-5">
        <About/>
        <Tech/>
        <Project/>
        <Experience/>
        <Blog/>
      </div>
    </>
  );
}
