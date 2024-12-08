import React, {useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Desert from '../assets/404.jpg'
import Logo from '../assets/logo.png'
import '../main.css'

export default function NotFound() {

    useEffect(() => {
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
    },[])

    return (
        <main className="flex flex-row">
            <div className="w-full h-screen flex flex-col place-content-between">
                <div>
                    <img src={Logo} alt="Logo" className="h-16 mt-10 ml-12" />
                </div>
                <div className="h-1/2 ml-12 sm:mr-12 flex flex-col gap-7 place-content-center">
                    <p className="text-2xl sm:text-xl text-sky-500">404</p>
                    <h1 className="text-5xl sm:text-4xl font-bold">Strona nie istnieje</h1>
                    <p className="text-xl sm:text-lg">Przepraszamy, ale strona której szukasz nie istnieje.</p>
                    <a href='/' className="text-l text-sky-500"><FontAwesomeIcon icon={faArrowLeft} /> Wróć na stronę główną</a>
                </div>
                <div className="h-20 bg-gray-100 text-gray-600 place-content-center">
                    <a href='/contact' className="text-xl pl-12">Kontakt</a>
                </div>
            </div>
            <div className="w-3/4 bg-cover bg-center h-screen lg:hidden" style={{backgroundImage: `url(${Desert})`}}></div>
        </main>
    )
}