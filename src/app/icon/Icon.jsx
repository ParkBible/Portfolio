import { Tooltip } from "react-tooltip"

export default function Icon(props) {
    return (
        <>
            <div id={props.name.replace(".", "")} className="bg-white rounded-lg overflow-hidden w-[30px] h-[30px] cursor-pointer">
                <img className="w-[30px] h-[30px]" src={`/images/tech/${props.name.toLowerCase()}.png`} alt={props.name}/>
            </div>
            <Tooltip anchorSelect={`#${props.name.replace(".", "")}`}>
                {props.name.replace(/_/g, " ")}
            </Tooltip>
        </>
    )
}