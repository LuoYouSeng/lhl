import Navbar from "../components/Navbar"
import home_video from '../assets/videos/home_video1.mp4'
import mvp_video from '../assets/videos/mvp_video.mp4'
import logo from '../assets/images/logo.svg'
import well_played from '../assets/images/well_played.svg'
import most_valuable_player from '../assets/images/most_valuable_player.svg'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function() {
    return (
        <>
            <Navbar></Navbar>
            <div className="w-full h-full flex">
                <div className="flex flex-col gap-8 p-14 z-10">
                    <div className="text-7xl font-semibold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                        歡迎來到LHL
                    </div>
                    <div className="text-3xl font-semibold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                        LHL全稱爲League of Legends Honour League
                    </div>
                    <div className="text-3xl font-semibold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                        即LOL尊嚴比賽, 是鏡平學校最高級別的非官方賽事
                    </div>
                    <div className="text-3xl font-semibold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                        該賽事是由discord社區開惱發起的
                    </div>
                    <div className="w-1/2">
                        <Link to='about'>
                            <div className="px-5 py-4 w-full items-center justify-center flex gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 hover:drop-shadow-2xl transition-all">
                                <div className="text-3xl font-bold text-white">
                                    瞭解更多
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="h-full flex items-center justify-center flex-grow">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="mb-20 text-8xl font-bold text-center bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                精彩的操作
            </div>
            <div className="w-full border-y-2 mb-20 p-14 bg-fixed"
                style={{backgroundImage: `url(${well_played})`}}
            >
                <video className="w-4/5 mx-auto" autoPlay muted src={home_video} loop></video>
            </div>
            <div className="mb-20 text-8xl font-bold text-center bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                近期MVP
            </div>
            <div
                className="w-full h-full flex p-14 border-y-2"
                style={{backgroundImage: `url(${most_valuable_player})`}}
            >
                <div className="w-3/5 flex items-center">
                    <video src={mvp_video} controls loop></video>
                </div>
                <div className="w-2/5 p-5 flex flex-col justify-between bg-white">
                    <div className="text-8xl font-bold text-center bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">kfcbbb</div>
                    <div className="text-5xl font-bold text-center">定位: 上路</div>
                    <div className="text-5xl font-bold text-center">英雄: 凱南</div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}