import {Link} from "react-scroll";
import { useEffect, useState } from "react";
import Top from "../top/Top";
import "./style.css"

export default function Menu() {
  const [isVisible, setIsVisible] = useState(true);
  const [isTopBtnVisible, setIsTopBtnVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = ["About Me", "Tech Stack", "Project", "Experience", "Blog"];
  let topY = 0;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {capture: true});
    if (window.scrollY <= 500) {
      setIsTopBtnVisible(false);
    }
  }, []);

  function handleScroll() {
    setIsVisible(window.scrollY <= topY);
    setIsTopBtnVisible(window.scrollY > 500);
    topY = window.scrollY;
  }

  return (
    <>
      <nav id="menubar" className={`${!isVisible ? "translate-y-[-75px]" : ""} flex w-full h-[60px] opacity-90 bg-darkest justify-center items-center fixed z-20`}>
        <header className="flex gap-28 justify-between">
          <ul className="flex gap-10 max-sm:text-sm text-2xl">
            {
              items.map((item, index) => (
                <li id="menu" className="cursor-pointer text-white" key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                  <Link to={item} smooth={true} duration={500}>
                    {item}
                  </Link>
                  <div id="menu-bottom-box" className={`${index === hoveredIndex ? "on" : ""} relative bottom-[11px] h-[9px] bg-dark z-[-999]`}></div>
                </li>
              ))
            }
            <img className="w-[25px] h-[25px] relative top-[3px] cursor-pointer" src="/images/github2.png" alt="github" onClick={() => location.href="https://github.com/parkbible"}/>
          </ul>
        </header>
      </nav>
      <Top isVisible={isTopBtnVisible}/>
    </>
  );
}
