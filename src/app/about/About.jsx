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
                    <span className="text-white font-extrabold ml-1">
                        <Typewriter
                            words={["동료와 함께 성장하는"]}
                            loop={1}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                    웹 개발자입니다.
                </div>
                <div
                    className={`about description ${
                        isDescriptionShow ? "on" : ""
                    } text-center bg-light-blue rounded-md mt-3 p-3 text-darkest lg:min-w-[900px]`}
                >
                    <div>

                        <p>
                            2022년부터 <b>프론트엔드와 백 양단을 개발</b>하며 10여 개의 다양한 웹
                            애플리케이션 프로젝트를 진행해 왔습니다.
                        </p>
                        <p>
                            풀스택 경험을 살려 서비스의 전체적인 흐름을 이해하고, 작은 요소 하나에도
                            의도를 명확히 담기 위해 고민합니다.
                        </p>
                        <p>
                            현업과 부트캠프에서 <b>애자일, 코드 리뷰와 DevOps 프로세스</b>를 경험하며{" "}
                            <b>팀 중심 개발 문화</b>에 익숙합니다.
                        </p>
                        <p>
                            좋은 기술과 더 나은 방법을 함께 탐색하고, <b>협업과 리뷰, 지속적인 개선</b>의
                            즐거움을 전파하는 동료가 되고 싶습니다.
                        </p>
                    </div>
                </div>
            </InView>
        </div>
    );
}
