import { Link } from 'react-router-dom'
import LHL from '../assets/images/logo.png'

const barList = [
    {text: '關於LHL', link: '/about'},
    {text: '歷届賽事', link: '/match'},
    {text: '聯係我們', link: '/contact'},
]

export default function() {
    return (
        <div className="w-full pb-1 bg-gradient-to-tr from-emerald-400 to-sky-400 block">
            <div className='w-full px-8 py-4 flex items-center gap-12 bg-white'>
                <div>
                    <Link to='/'><img className="w-24" src={LHL}/></Link>
                </div>
                {barList.map((item)=>{
                    return (
                        <div className='navbar-item'>
                            <Link to={item.link}>{item.text}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}