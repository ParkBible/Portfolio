import React from "react";
import Title from "../title/Title";
import { ProjectInfos, SideProjectInfos } from "./Project.info";
import { InView } from "react-intersection-observer";
import "./style.css";
import ProjectDetail from "./ProjectDetail";

export default function Project() {
    const [shownIdxList, setShownIdxList] = React.useState([]);

    const onChangeShownElement = React.useCallback((isShown, index) => {
        setShownIdxList((prev) => {
            if (isShown) {
                return prev.includes(index) ? prev : [...prev, index];
            } else {
                return prev.filter((idx) => idx !== index);
            }
        });
    }, []);

    return (
        <div className="mt-[100px] m-auto flex flex-col items-center gap-[100px]">
            <section>
                <Title name="Project" />
                {ProjectInfos.map((info, index) => (
                    <InView
                        onChange={(inView) => onChangeShownElement(inView, index)}
                        key={index}
                        threshold={0.3}
                    >
                        <div className={`project ${shownIdxList.includes(index) ? "current" : ""}`}>
                            <ProjectDetail info={info} index={index} />
                        </div>
                    </InView>
                ))}
            </section>
            <section>
                <Title name="Side Project" />
                {SideProjectInfos.map((info, index) => (
                    <InView
                        onChange={(inView) =>
                            onChangeShownElement(inView, index + ProjectInfos.length)
                        }
                        key={index + ProjectInfos.length}
                        threshold={0.3}
                        triggerOnce={false}
                    >
                        <div
                            className={`project ${
                                shownIdxList.includes(index + ProjectInfos.length) ? "current" : ""
                            }`}
                        >
                            <ProjectDetail info={info} />
                        </div>
                    </InView>
                ))}
            </section>
        </div>
    );
}
