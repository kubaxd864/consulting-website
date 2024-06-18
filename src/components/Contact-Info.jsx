import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPhone, faEnvelope, faUser, faClock } from '@fortawesome/free-solid-svg-icons'
import '../main.css';

export default function ContactInfo() {

    const contactInfo = [
        {icon : faBuilding, text : "Lorem Ipsum 12 10-900 Olsztyn"},
        {icon : faUser, text : "Anna Kowalska"},
        {icon : faPhone, text : "123 456 789"},
        {icon : faEnvelope, text : "xd69@gmail.com"},
        {icon : faClock, text : "Otwarte w godzinach 8.00-15.00"}
    ]

    return(
        <div className="flex flex-col gap-4 justify-center text-xl mt-8">
            <h3 className="text-3xl  font-bold mb-3">Kontakt do Nas</h3>
            <p className="w-7/12 lg:w-11/12 mb-3">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
            {contactInfo.map(item => {
                return(
                    <p className="flex items-center gap-3"><FontAwesomeIcon icon={item.icon} /> {item.text}</p>
                )
            })}
        </div>
    )
}