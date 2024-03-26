import {Link} from "react-scroll";
import { useEffect, useState } from "react";
import Top from "../top/Top";

export default function Menu() {
  const [isVisible, setIsVisible] = useState(true);
  const [isTopBtnVisible, setIsTopBtnVisible] = useState(true);

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
      <nav id="menubar" className={`${!isVisible ? "translate-y-[-75px]" : ""} flex w-full h-[60px] opacity-90 bg-light-blue justify-center items-center fixed z-20`}>
        <header className="flex gap-28 justify-between">
          <ul className="flex gap-10 max-sm:text-sm text-lg">
            {
              items.map((item, index) => (
                <li id="menu" className="cursor-pointer" key={index}>
                  <Link to={item} smooth={true} duration={500}>
                    {item}
                  </Link>
                </li>
              ))
            }
          </ul>
        </header>
      </nav>
      <Top isVisible={isTopBtnVisible}/>
    </>
  );
}
