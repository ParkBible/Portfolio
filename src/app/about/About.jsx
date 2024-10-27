import React from "react";
import "./style.css";
import { InView } from "react-intersection-observer";

export default function About() {
    const [isAboutShow, setIsAboutShow] = React.useState(false);
    const [isDescriptionShow, setIsDescriptionShow] = React.useState(false);

    return (
        <div name="About Me" className="flex flex-col m-auto items-center mt-[150px]">
            <InView onChange={setIsAboutShow}>
                <div className={`about ${isAboutShow ? "on" : ""} w-[370px] flex flex-col bg-darker rounded-md text-white items-center p-[5px]`}>
                    <div className="w-[360px] flex flex-col border-solid border-[1px] border-white rounded-md items-center p-2">
                        <p className="text-light">
                            Web Developer
                        </p>
                        <div className="flex">
                            <span className="text-4xl">
                                <p className="relative z-10 font-semibold">
                                    박성경
                                </p>
                                <div className="relative bg-dark h-4 bottom-4"/>
                            </span>
                        </div>
                        <div className="text-center">
                            <span className="relative z-1 bg-darker top-3 py-1">
                                ABOUT
                            </span>
                            <div className="rounded-lg border-solid border-2 border-white pt-4 pb-2 px-3 text-sm">
                                <li className="flex">
                                    <img className="w-[25px] mr-2" src="/images/gmail.png" alt="github"/>
                                    p8yft8903@gmail.com
                                </li>
                                <li className="flex">
                                    <img className="w-[25px] mr-2" src="/images/github.png" alt="github"/>
                                    <a href="https://github.com/parkbible">
                                        https://github.com/parkbible
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </InView>
            <InView onChange={setIsDescriptionShow}>
                <div id="about-title" className="text-3xl mb-3 text-darkest mt-10 ml-5">
                    누구보다 <b className="text-white font-extrabold">책임감 있는 개발자</b>입니다.
                </div>
                <div className={`about description ${isDescriptionShow ? "on" : ""} text-center bg-light-blue rounded-md mt-3 p-3 text-darkest`}>
                    <div>
                        {/* <b className="text-darker">Frontend</b>를 심도 있게 다루지만,&nbsp;  */}
                        <b className="text-darker">Full Stack 개발자</b>로서 경험을 쌓았던 만큼 Frontend, Backend, DB, 서버 인프라에 이르기까지 폭넓은 시야를 가지고 일합니다.<br/>
                        주어지는 업무와 작성한 코드에 끝까지 책임감을 가지며, 사용자에게 <b>즐겁고 편안한 기억을 주는 웹 솔루션</b>을 만드는 데 집중합니다.<br/>
                        좋은 기술과 더 나은 방법을 찾아 함께 협력하고 성장하는 기회를 만들어가고자 합니다.
                    </div>
                </div>
            </InView>
        </div>
    )
}