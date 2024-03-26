import React from "react";
import "./style.css";
import Title from "../title/Title";
import { TechInfo } from "./Tech.info";
import Icon from "../icon/Icon"
import { InView } from "react-intersection-observer";
import "./style.css";

export default function Tech() {
    const [isShow, setIsShow] = React.useState(false);

    return (
        <div name="Tech Stack" className="mt-[100px] m-auto">
            <Title name="Tech Stack"/>
            <InView onChange={setIsShow}>
                <div className={`tech ${isShow ? "on" : ""} flex justify-center text-darker`}>
                    <div className="bg-light-blue rounded-lg shadow-lg shadow-slate-400">
                        <table className="text-center">
                            <thead>
                                <tr>
                                    <th className="bg-dark rounded-tl-lg"/>
                                    <th className="bg-dark-md text-light-blue font-semibold py-2">
                                        <b>Strong</b> (프로젝트 경험)
                                    </th>
                                    <th className="bg-dark rounded-tr-lg text-light-blue font-semibold px-[50px] py-2">
                                        <b>Tried</b> (개인 공부)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="font-thin border-solid border-b-[1px] border-dark">
                                {
                                    TechInfo.data.map((tech, index) => (
                                        <tr key={index}>
                                            <td className={`text-light-blue font-semibold ${index % 2 == 1 ? "bg-dark" : "bg-dark-md"} px-7`}>
                                                {tech.type}
                                            </td>
                                            <td className="border-2 min-w-[150px]">
                                                <div className="flex flex-wrap justify-center lg:mx-[50px] my-1 gap-3">
                                                    {
                                                        tech.strong && tech.strong.map((item, index) => (
                                                            <Icon name={item} key={index}/>
                                                        ))
                                                    }
                                                </div>
                                            </td>
                                            <td className="border-2">
                                                <div className="flex flex-wrap justify-center lg:mx-[50px] my-1 gap-3">
                                                    {
                                                        tech.tried && tech.tried.map((item, index) => (
                                                            <Icon name={item} key={index}/>
                                                        ))
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </InView>
        </div>
    )
}