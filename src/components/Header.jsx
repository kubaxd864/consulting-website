import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../main.css';

export default function Header() {
    const menu = [
        {name : "O Mnie", link : "/about"},
        {name : "Gabinet", link : "/office"},
        {name : "Oferta", link : "/offer"},
        {name : "Kontakt", link : "/contact"}
    ]

    function openMenu() {
        document.querySelector("nav").classList.toggle("sm:-right-full");
    }
    
    return (
    <>
        <header className="bg-white fixed top-0 flex w-full border-b-2 border-solid border-black justify-between items-center z-10">
            <a href="/">
                <img src={logo} alt="Logo Strony" className="h-16 my-3 ml-7" />
            </a>
            <nav className="flex gap-7 font-medium bg-white sm:fixed sm:bottom-0 sm:-right-full sm:flex-col sm:w-full sm:h-custom sm:pt-12 sm:items-center sm:text-2xl sm:gap-16">
                {menu.map((item) => {
                    return (
                        <a className={window.location.pathname == item.link ? "text-blue-500 underline underline-offset-4 decoration-2 decoration-blue-500" : "hover:text-blue-400"} href={item.link}>{item.name}</a>
                    )
                })}
            </nav>
            <div className="my-3 mr-7">
                <button id="menuButton" className="hidden sm:inline-block" onClick={() => openMenu()}><FontAwesomeIcon icon={faBars} /></button>
            </div>
        </header>
    </>
  )
}