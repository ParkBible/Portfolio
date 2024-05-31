import { animateScroll as scroll } from "react-scroll";

export default function Top(props) {
    function handleClick() {
        scroll.scrollTo(0);
    }

    return (
        <div id="top" onClick={() => handleClick()} className={`${!props.isVisible ? "opacity-0" : "opacity-70"} flex align-center fixed w-[70px] h-[70px] rounded-full bg-light right-[200px] bottom-[50px] cursor-pointer z-50`}>
            <img className="w-[20px] h-[30px] rotate-[270deg] m-auto" src="/images/arrow.svg" alt="arrow"/>
        </div>
    )
}