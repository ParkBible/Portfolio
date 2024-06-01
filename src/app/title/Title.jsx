import React from "react";
import "./style.css";
import { InView } from "react-intersection-observer";

export default function Title(props) {
    const [isShow, setIsShow] = React.useState(false);

    return (
        <div id="title" className="flex mb-2">
            <span className="text-5xl text-darker">
                <p className="relative z-10 font-extrabold">
                    {props.name}
                </p>
                <InView onChange={setIsShow}>
                    <div className={`line ${isShow ? "on" : ""} relative bg-light h-4 bottom-4`}/>
                </InView>
            </span>
        </div>
    )
}