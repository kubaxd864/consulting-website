import React, {useState} from 'react'
import ReservationForm from '../components/Reservation-Form'
import '../main.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function Reservation() {

  return (
    <main className='mt-22'>
        <div className='w-full flex flex-col p-4 pt-10 justify-around gap-5'>
            <h3 className='text-3xl font-bold mb-3 text-center'>Umawianie Wizyty</h3>
            <ReservationForm/>
        </div>  
    </main>
    )
}