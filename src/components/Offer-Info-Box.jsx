import {React, createContext} from "react"
import '../main.css'
import familyThreapy from '../assets/family-therapy.jpg';
import psychologicalTherapy from '../assets/psychological-therapy.jpg';
import psychologicalSupport from '../assets/psychological-support.jpg';
import psychologicalConsultation from '../assets/psychological-consultation.jpg';

const imageMap = {
    familyThreapy,
    psychologicalTherapy,
    psychologicalSupport,
    psychologicalConsultation
};

export default function OfferInfoBox(props) {

    return(
        <main id={props.id} className="w-3/4 2xl:w-10/12 xl:w-11/12 lg:w-3/4 md:w-10/12 sm:w-11/12 m-4 rounded-xl">
            <div className="flex flex-row lg:flex-col gap-16">
            <div className={`flex flex-col justify-center w-3/4 lg:w-fit sm:text-center ${props.nr == 2 || props.nr == 4 ? 'order-2' : ''}`}>
                    <h1 className="text-4xl md:text-3xl font-medium">{props.title}</h1>
                    <p className="text-base my-8">{props.text}</p>
                    <div className="flex flex-row justify-between items-center">
                        <div><p className={`font-3xl ${props.price === '' ? 'hidden' : ''}`}><span className='font-semibold text-2xl'>Cena: {props.price} zł</span> / {props.time} min</p></div>
                        <a href="/reservation" className="text-center bg-sky-500 hover:bg-sky-400 rounded-lg text-white py-2 px-4">Umów się</a>
                    </div>
                </div>
                <div className={`flex justify-center items-center ${props.nr == 2 || props.nr == 4 ? 'order-1' : ''}`}>
                    <img fetchPriority='high' src={imageMap[props.img]} className="h-96 rounded-xl" />
                </div>
            </div>
        </main>
    )
}