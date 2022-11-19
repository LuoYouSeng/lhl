import Navbar from "../components/Navbar"
import home_video from '../assets/videos/home_video1.mp4'
import tumblr_pxzt1uVJFF1vo6vclo4_400 from '../assets/images/tumblr_pxzt1uVJFF1vo6vclo4_400.png'
import mvp from '../assets/images/mvp.png'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function() {
    return (
        <>
            <Navbar></Navbar>
            <div className="w-full h-full flex justify-center">
                <div
                    className="absolute text-8xl text-white font-bold"
                    style={{bottom: '5%'}}
                >
                    面子與尊嚴
                </div>
                <video className="object-fill" autoPlay muted loop src={home_video}></video>
            </div>
            <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-sky-400 p-14 flex my-5">
                <div className="flex flex-col gap-8">
                    <div className="text-7xl font-semibold text-white">
                        歡迎來到LHL
                    </div>
                    <div className="text-3xl font-semibold text-white">
                        LHL全稱爲{'(League of Legends Honour League)'}
                    </div>
                    <div className="text-3xl font-semibold text-white">
                        即LOL尊嚴比賽, 是KP最高級別的非官方賽事
                    </div>
                    <div className="text-3xl font-semibold text-white">
                        該賽事是由discord社區開惱發起的
                    </div>
                    <Link to='about'>
                        <div>
                            <div className="px-5 py-4 max-w-xs items-center justify-center flex gap-2 rounded-full bg-white hover:drop-shadow-2xl transition-all">
                                <div
                                    className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent"
                                >
                                    瞭解更多
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="h-full flex items-center justify-center flex-grow">
                    <img src={tumblr_pxzt1uVJFF1vo6vclo4_400} alt="" />
                </div>
            </div>
            <div className="w-full h-full bg-gradient-to-r to-emerald-400 from-sky-400 p-14 flex my-5">
                <div className="h-full w-1/2 flex items-center justify-center">
                    <img src={mvp} alt="" />
                </div>
                <div className="flex flex-col gap-8 flex-grow items-center py-10">
                    <div className="text-4xl font-semibold text-white">
                        近期最有價值玩家(MVP)
                    </div>
                    <div className="text-6xl font-semibold text-white italic">
                        TINGOD
                    </div>
                    <div className="text-4xl font-semibold text-white">
                        定位: 打野
                    </div>
                    <div className="text-4xl font-semibold text-white">
                        英雄: 維爾戈
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}