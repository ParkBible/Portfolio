"use client"
import React from "react";
import Menu from "./menu/Menu";
import About from "./about/About";
import Tech from "./tech/Tech";
import Project from "./project/Project";
import Experience from "./experience/Experience";
import Blog from "./blog/Blog";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <>
      <Menu/>
      <About/>
      <div className="rounded-lg bg-white min-[1675px]:w-[65%] max-xl:w-full w-4/5 m-auto sm:mt-[100px] sm:mb-20 py-10 sm:px-20 px-5">
        <Tech/>
        <Project/>
        <Experience/>
        <Blog/>
      </div>
      <Footer/>
    </>
  );
}
