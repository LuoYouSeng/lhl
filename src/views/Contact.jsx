import Navbar from "../components/Navbar"
import league_of_legends_honour_league from '../assets/images/league_of_legends_honour_league.svg'
import { Link } from "react-router-dom"

export default function() {
    return (
        <>
            <Navbar></Navbar>
            <div className="w-full min-h-full px-20"
                style={{backgroundImage: `url(${league_of_legends_honour_league})`}}
            >
                <div className="w-full bg-white p-10 opacity-100">
                    <div className="text-6xl">加入我們</div>
                    <p className="text-2xl my-8 gap-4 flex flex-col">
                        <div>如果你也想參加LHL, 那就加入我們的discord伺服器</div>
                        <a className="block w-1/3" href="https://discord.gg/QAKrVW3H" target={'_blank'}>
                            <div className="px-5 py-4 w-full items-center justify-center flex gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 hover:drop-shadow-2xl transition-all">                            
                                <div className="text-3xl font-bold text-white">前往discord</div>
                            </div>
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}