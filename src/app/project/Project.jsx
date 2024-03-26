import React from "react";
import Title from "../title/Title"
import { ProjectInfos } from "./Project.info";
import Icon from "../icon/Icon"
import { InView } from "react-intersection-observer";
import "./style.css";

export default function Project() {
    const [shownIdxList, setShownIdxList] = React.useState([]);

    function onChangeShownElement(isShown, index) {
        if (isShown) {
            setShownIdxList([...shownIdxList, index]);
        } else {
            shownIdxList.splice(shownIdxList.indexOf(index), 1);
            setShownIdxList([shownIdxList]);
        }
    }

    return (
        <div name="Project" className="mt-[100px] m-auto">
            <Title name="Project"/>
            {
                ProjectInfos.map((info, index) => (
                    <InView onChange={(inView) => onChangeShownElement(inView, index)} key={index}>
                        <div className={`project ${shownIdxList.includes(index) ? "current" : ""}`}>
                            <div className={`flex text-xl bg-dark text-white rounded-lg px-3 items-center`}>
                                {info.title}
                                <span className="text-sm ml-2 text-light-blue">
                                    ({info.date})
                                </span>
                                {   
                                    info.git && (
                                        <a href={info.git}>
                                            <img className="w-[23px] ml-3" src="/images/github.png" alt="github"/>
                                        </a>
                                    )
                                }
                                {
                                    info.web && (
                                        <a href={info.web}>
                                            <img className="w-[27px] ml-3" src="/images/web.png" alt="web"/>
                                        </a>
                                    )
                                }
                            </div>
                            
                            <div className="flex gap-4 bg-light-blue rounded-lg px-3 pt-1 pb-2 mb-3" key={index}>
                                <div className="flex flex-col w-[50%]">
                                    <span className="text-sm text-dark mr-1 p-[2px]">
                                        소개
                                    </span>
                                    {info.description}
                                </div>
                                <div className="flex flex-col w-[20%]">
                                <span className="text-sm text-dark mr-1 p-[2px]">
                                        연계/소속회사
                                    </span>
                                    {info.company}
                                </div>
                                <div className="flex flex-col w-[15%]">
                                <span className="text-sm text-dark mr-1 p-[2px]">
                                        역할
                                    </span>
                                    {info.role}
                                </div>
                                <div className="flex flex-col w-[15%]">
                                    <span className="text-sm text-dark mr-1 p-[2px]">
                                            사용 기술
                                        </span>
                                        <div className="flex gap-1 flex-wrap">
                                            {
                                                info.stacks.map((stack, index) => (
                                                    <Icon name={stack} key={index}/>
                                                ))
                                            }
                                        </div>
                                </div>
                            </div>
                        </div>
                    </InView>
                ))
            }
        </div>
    )
}