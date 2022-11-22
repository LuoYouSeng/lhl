import Navbar from "../components/Navbar"
import league_of_legends_honour_league from '../assets/images/league_of_legends_honour_league.svg'

export default function() {
    return (
        <>
            <Navbar></Navbar>
            <div className="w-full min-h-full px-20"
                style={{backgroundImage: `url(${league_of_legends_honour_league})`}}
            >
                <div className="w-full bg-white p-10 opacity-100">
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
                        <div>多名選手將參加12場比賽, 勝者會增加積分一份</div>
                        <div>積分最高的10名選手, 將分爲兩組, 積分排名的前5人和后5人分別分爲兩隊進行BO5決賽</div>
                        <div>所有比賽將以綫上舉行</div>
                    </p>
                </div>
            </div>
        </>
    )
}