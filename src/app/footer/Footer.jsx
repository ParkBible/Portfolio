export default function Footer() {
    return (
        <div className="bg-light-blue  mt-[150px] pt-5 px-10 pb-[50px] text-center">
            <p className="text-slate-500">
                Copyright © 2024 Park Seong Kyeong
            </p>
            <p className="text-slate-500">
                <b>contact</b> | p8yft8903@gmail.com
            </p>
            <div className="flex justify-center gap-2 mt-3">
                <img className="w-[25px] cursor-pointer" src="/images/github.png" alt="github" onClick={() => location.href="https://github.com/parkbible"}/>
                <img className="w-[23px] h-[23px] cursor-pointer relative top-[2px]" src="/images/tistory2.png" alt="tistory" onClick={() => location.href="https://doringri.tistory.com/category/IT"}/>
            </div>
        </div>
    )
}