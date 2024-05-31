import React from "react";
import Title from "../title/Title";
import { BlogInfos } from "./Blog.info"
import { InView } from "react-intersection-observer";
import "./style.css";

export default function Blog() {
    const [shownIdxList, setShownIdxList] = React.useState([]);

    function onChangeShownElement(isShown, index) {
        if (isShown) {
            setShownIdxList(prevState => [...prevState, index]);
        } else {
            shownIdxList.splice(shownIdxList.indexOf(index), 1);
            setShownIdxList([shownIdxList]);
        }

        console.log(shownIdxList);
    }

    return (
        <div name="Blog" className="my-[100px] m-auto text-darkest">
            <Title name="Blog"/>
            <div className="sm:flex gap-4 justify-center">
                {
                    BlogInfos.map((item, index) => (
                        <InView onChange={(inView) => onChangeShownElement(inView, index)} key={index}>
                            <div className={`blog ${shownIdxList.includes(index) ? "on" : ""} flex flex-col hover:top-2`}>
                                <div className="flex bg-darker rounded-lg text-light-blue px-2 py-2 relative top-2 max-lg:w-full w-1/3 cursor-pointer" onClick={() => location.href=item.link}>
                                    <div className="w-[30px] rounded-lg overflow-hidden mr-2">
                                        <img className="w-[30px]" src={item.icon} alt={item.type}/>
                                    </div>
                                    <div>
                                        {item.type}
                                    </div>
                                </div>
                                <div className="bg-darker rounded-lg p-2 cursor-pointer" onClick={() => location.href=item.link}>
                                    <div className="flex flex-col gap-3 bg-light-blue rounded-lg p-3">
                                        <img src={item.image} alt={item.type + "_capture"}/>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </InView>
                    ))
                }
            </div>
        </div>
    )
}