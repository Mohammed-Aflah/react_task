import { Link } from "react-router-dom"

function Header(){
    // const links=["Profile card","Fetch","Counter","Form"]
    const links=[
        {
            text:"Profile card",
            link:'/'
        },
        {
            text:"Fetch",
            link:'/fetch'
        },
        {
            text:"Counter",
            link:'/counter'
        },
        {
            text:"Form",
            link:'/form'
        }
    ]
    return (
        <header className="h-16 flex items-center justify-center bg-gray-800">
            <ul className="flex gap-9 text-white">
                {links.map((val,key)=>(
                    <li key={key} className="no-underline">
                        <Link to={val.link}>{val.text}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}
export default Header