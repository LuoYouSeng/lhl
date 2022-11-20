import Navbar from "../components/Navbar"
import background from '../assets/images/background.png'

export default function() {
    return (
        <>
            <Navbar></Navbar>
            <div className="w-full min-h-full px-20"
                style={{backgroundImage: `url(${background})`}}
            >
                <div className="w-full bg-white p-10 opacity-95">
                    <div className="text-6xl">簡介</div>
                    <p className="text-2xl my-8 gap-4 flex flex-col">
                        <div>LHL全稱爲League of Legends Honour League</div>
                        <div>即LOL尊嚴比賽, 是鏡平學校最高級別的非官方賽事</div>
                        <div>該賽事是由discord社區開惱發起的</div>
                        <div>比賽允許其他學校或集團的人員參與</div>
                    </p>
                    <div className="text-6xl">賽制</div>
                    <p className="text-2xl my-8 gap-4 flex flex-col">
                        <div>LHL分爲兩個部分, 分常規賽和總決賽</div>
                        <div>常規賽為積分制</div>
                        <div></div>
                    </p>
                </div>
            </div>
        </>
    )
}