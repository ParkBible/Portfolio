import React from "react";
import { Fragment } from "react";
import { ExperienceInfo } from "./Experience.info";
import Title from "../title/Title"
import { InView } from "react-intersection-observer";
import "./style.css";

export default function Experience() {
    const [shownIdxList, setShownIdxList] = React.useState([]);

    function onChangeShownElement(isShown, index) {
        if (isShown) {
            setShownIdxList(prevState => [...prevState, index]);
        } else {
            shownIdxList.splice(shownIdxList.indexOf(index), 1);
            setShownIdxList([shownIdxList]);
        }
    }

    return (
        <div name="Experience" className="mt-[100px] m-auto">
            <Title name="Experience"/>
            <div className="flex gap-3 text-darkest flex-wrap justify-center">
                {
                    ExperienceInfo.data.map((item, index) => (
                        <InView onChange={(inView) => onChangeShownElement(inView, index)} key={index}>
                            <div className={`experience ${shownIdxList.includes(index) ? "current" : ""} flex bg-dark rounded-lg p-1`}>
                                <div className="flex flex-col border-solid border-[1px] border-white rounded-lg p-2">
                                    <div className="flex">
                                        <img className="w-[30px] mr-1" src={item.contents.icon} alt="awards"/>
                                        <span className="bg-darker rounded-lg text-xl px-2 font-bold text-light-blue">
                                            {item.contents.subject}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2 rounded-lg p-2 bg-light-blue mt-2">
                                    {
                                        item.contents.infos.map((info, infoIndex) => (
                                            <Fragment key={infoIndex}>
                                                <li>
                                                    <b className="text-lg">{info.title}</b> ({info.date})
                                                        <p className="ml-6">
                                                            {
                                                                info.remark && ("- " + info.remark)
                                                            }
                                                        </p>
                                                </li>
                                            </Fragment>
                                        ))
                                    }
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