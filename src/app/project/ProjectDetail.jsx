import Icon from "../icon/Icon";

export default function ProjectDetail(props) {
    return (
        <>
            <div className={`flex text-xl bg-dark text-white rounded-lg px-3 items-center`}>
                {props.info.title}
                <span className="text-sm ml-2 text-light-blue">({props.info.date})</span>
                {props.info.git && (
                    <a href={props.info.git}>
                        <img className="w-[23px] ml-3" src="/images/github.png" alt="github" />
                    </a>
                )}
                {props.info.web && (
                    <a href={props.info.web}>
                        <img className="w-[27px] ml-3" src="/images/web.png" alt="web" />
                    </a>
                )}
            </div>

            <div className="flex gap-4 bg-light-blue rounded-lg px-3 pt-1 pb-2 mb-3">
                <div className="flex flex-col w-[40%]">
                    <span className="text-sm text-dark mr-1 p-[2px]">소개</span>
                    {props.info.description}
                </div>
                <div className="flex flex-col w-[20%]">
                    <span className="text-sm text-dark mr-1 p-[2px]">연계/소속회사</span>
                    {props.info.company}
                </div>
                <div className="flex flex-col w-[25%]">
                    <span className="text-sm text-dark mr-1 p-[2px]">역할</span>
                    {props.info.role}
                </div>
                <div className="flex flex-col w-[15%]">
                    <span className="text-sm text-dark mr-1 p-[2px]">사용 기술</span>
                    <div className="flex gap-1 flex-wrap">
                        {props.info.stacks.map((stack, index) => (
                            <Icon name={stack} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
