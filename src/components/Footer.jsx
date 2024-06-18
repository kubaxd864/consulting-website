import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../main.css';

export default function Footer() {
    
    return(
        <>
            <footer className="bg-white h-fit">
                <div className="border-t-2 border-solid border-black flex justify-center pt-10">
                    <div className="w-3/4">
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(11.58rem,_1fr))] gap-5">
                            <div className="flex justify-center items-center m-5">
                                <img src={logo} className="h-40" />
                            </div>
                            <div className="text-center flex flex-col justify-center m-5">
                                <h3 className="text-3xl mb-3">Dane Kontaktowe</h3>
                                <p className="">mgr. Anna Kowalska</p>
                                <p className="">Adres: ul. Lorem Ipsum 12 10-900 Olsztyn</p>
                                <p className="">Telefon: 123 456 789</p>
                                <p className="">E-mail: xd69@gmail.com</p>
                            </div>
                            <div className="text-center flex flex-col justify-center m-5">
                                <h3 className="text-3xl text-center">Jestem również na:</h3>
                                <p className="flex justify-center mt-5 text-5xl"><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-between gap-5 p-5 border-solid border-black text-gray-200">
                    <p className="text-center">SVG Background by BGJar</p>
                    <a href="https://github.com/kubaxd864/" className="text-center"><FontAwesomeIcon icon={faGithub} /> Author: kubaxd864</a>
                </div>
            </footer>
        </>
    )
}