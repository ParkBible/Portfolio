import React from "react";
import "./style.css";
import { InView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
    const [isAboutShow, setIsAboutShow] = React.useState(false);
    const [isDescriptionShow, setIsDescriptionShow] = React.useState(false);
    const [cardTransform, setCardTransform] = React.useState("");
    const cardRef = React.useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        setCardTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
        );
    };

    const handleMouseLeave = () => {
        setCardTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    };

    return (
        <div name="About Me" className="flex flex-col m-auto items-center mt-[150px]">
            <InView onChange={setIsAboutShow}>
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ transform: cardTransform, transition: "transform 0.1s ease-out" }}
                    className={`about business-card ${
                        isAboutShow ? "on" : ""
                    } w-[370px] flex flex-col bg-darker rounded-md text-white items-center p-[5px]`}
                >
                    <div className="w-[360px] flex flex-col border-solid border-[1px] border-white rounded-md items-center p-2">
                        <p className="text-light">Web Developer</p>
                        <div className="flex name-section">
                            <span className="text-4xl">
                                <p className="relative z-10 font-semibold">박성경</p>
                                <div className="relative bg-dark h-4 bottom-4" />
                            </span>
                        </div>
                        <div className="text-center">
                            <span className="about-label relative z-1 bg-darker top-3 py-1 cursor-pointer">
                                ABOUT
                            </span>
                            <div className="rounded-lg border-solid border-2 border-white pt-4 pb-2 px-3 text-sm">
                                <li className="contact-item flex items-center cursor-pointer">
                                    <img
                                        className="w-[25px] mr-2"
                                        src="/images/gmail.png"
                                        alt="gmail"
                                    />
                                    <span onClick={() => window.open("mailto:p8yft8903@gmail.com")}>
                                        p8yft8903@gmail.com
                                    </span>
                                </li>
                                <li className="contact-item flex items-center cursor-pointer">
                                    <img
                                        className="w-[25px] mr-2"
                                        src="/images/github.png"
                                        alt="github"
                                    />
                                    <a
                                        href="https://github.com/parkbible"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
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
                    기획과 사용자 사이,
                    <span className="text-white font-extrabold ml-1">
                        <Typewriter
                            words={["프론트엔드의 역할을 잘 아는 개발자"]}
                            loop={1}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                    입니다.
                </div>
                <div
                    className={`about description ${
                        isDescriptionShow ? "on" : ""
                    } text-center bg-light-blue rounded-md mt-3 p-3 text-darkest lg:min-w-[900px]`}
                >
                    <div>
                        <p>
                            사용자와 가장 가까운 곳에서{" "}
                            <b>기능뿐 아니라 경험까지 고민하는 프론트엔드 개발자</b>입니다.
                        </p>
                        <p>
                            2022년부터 프론트엔드와 백 양단을 개발하며 10여 개의 다양한 웹
                            애플리케이션 프로젝트를 진행해 왔습니다.
                        </p>
                        <p>
                            기획 의도와 사용자 흐름을 이해하고, 작은 클릭에도 의도가 있는 UI를
                            만들기 위해 고민합니다.
                        </p>
                        <p>
                            현업과 부트캠프에서 각각 팀을 리딩하며 역할 분담과 일정 조율을 경험했고,
                            협업 중심의 개발 문화에 익숙합니다.
                        </p>
                        <p>
                            좋은 기술과 더 나은 방법을 함께 탐색하고, 협업과 리뷰, 지속적인 개선의
                            즐거움을 아는 동료가 되고 싶습니다.
                        </p>
                    </div>
                </div>
            </InView>
        </div>
    );
}
