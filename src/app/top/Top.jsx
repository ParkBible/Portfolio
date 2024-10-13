import { animateScroll as scroll } from "react-scroll";

export default function Top(props) {
    function handleClick() {
        scroll.scrollTo(0);
    }

    return (
        <div id="top" onClick={() => handleClick()} className={`${!props.isVisible ? "opacity-0" : "opacity-70"} align-center md:fixed md:flex hidden w-[70px] h-[70px] rounded-full bg-light lg:right-[200px] right-[calc(50%-70px)] bottom-[50px] cursor-pointer z-50`}>
            <img className="w-[20px] h-[30px] rotate-[270deg] m-auto" src="/images/arrow.svg" alt="arrow"/>
        </div>
    )
}