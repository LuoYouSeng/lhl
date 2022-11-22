import Navbar from "../components/Navbar";
import matches from '../assets/data/matches.json'

export default function() {
    return (
        <>
            <Navbar></Navbar>
            <div className="w-full p-10">
                <div className="text-6xl text-center my-5">{matches[0].name}</div>
                <div className="text-3xl text-center my-5">
                    常規賽
                </div>
                <table className="w-2/3 mx-auto border">
                    <tr className="border-y">
                        <th className="w-1/4 text-center text-2xl py-2">排名</th>
                        <th className="w-1/4 text-center text-2xl py-2">玩家</th>
                        <th className="w-1/4 text-center text-2xl py-2">贏場</th>
                        <th className="w-1/4 text-center text-2xl py-2">輸場</th>
                    </tr>
                    {matches[0].rs.rank.sort().map((item, index)=>{
                        return (
                            <tr className="w-full border-b">
                                <td className="w-1/4 text-center text-2xl py-2">{index + 1}</td>
                                <td className="w-1/4 text-center text-2xl">{item.name}</td>
                                <td className="w-1/4 text-center text-2xl">{item.win}</td>
                                <td className="w-1/4 text-center text-2xl">{item.lose}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}