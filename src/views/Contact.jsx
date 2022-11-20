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
                    <div className="text-6xl">加入我們</div>
                    <p className="text-2xl my-8 gap-4 flex flex-col">
                        <div>如果你也想參加LHL, 那就加入我們的discord伺服器</div>
                        <div></div>
                    </p>
                </div>
            </div>
        </>
    )
}