import React, {useState} from 'react'
import ReservationForm from '../components/Reservation-Form'
import '../main.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function Reservation() {

    return (
        <main className='mt-22'>
            <div className='w-full flex flex-col p-4 pt-10 justify-around gap-5'>
                <h3 className='text-3xl font-bold mb-1 text-center'>Umawianie Wizyty</h3>
                <p className='text-l font-medium mb-4 text-center'>Aby zapisać się na wizytę wypełnij formularz lub skontaktuj się ze mną pod numerem: 727 273 799</p>
                <ReservationForm/>
            </div>  
        </main>
    )
}