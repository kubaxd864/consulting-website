import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPhone, faEnvelope, faUser, faClock } from '@fortawesome/free-solid-svg-icons'
import '../main.css';

export default function ContactInfo() {

    const contactInfo = [
        {icon : faBuilding, text : "ul. Leyka 7 10-900 Olsztyn"},
        {icon : faUser, text : "mgr Aneta Krzywicka"},
        {icon : faPhone, text : "727 273 799"},
        {icon : faEnvelope, text : "psycholog.krzywicka@wp.pl"},
        {icon : faClock, text : "Otwarte w pon. i pt. w godzinach 8.00 - 20.00"}
    ]

    return(
        <div className="flex flex-col gap-4 justify-center text-xl mt-8">
            <h3 className="text-3xl  font-bold mb-3">Kontakt do Mnie</h3>
            <p className="w-7/12 lg:w-11/12 mb-4">Masz pytania, sugestie lub potrzebujesz pomocy? Jestem tutaj, aby Ci pomóc! Skorzystaj z formularza kontaktowego poniżej lub zadzwoń do mnie – odpowiem najszybciej, jak to możliwe.</p>
            {contactInfo.map((item, index) => {
                return(
                    <p key={index} className="flex items-center gap-3"><FontAwesomeIcon icon={item.icon} /> {item.text}</p>
                )
            })}
        </div>
    )
}