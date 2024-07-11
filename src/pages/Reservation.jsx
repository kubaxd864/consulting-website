import React, {useState} from 'react'
import ReservationForm from '../components/Reservation-Form'
import '../main.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function Reservation() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [reservationDate, setReservationDate] = useState()

    const handleDateChange = (date) => {
        setSelectedDate(date)
        var reservationdate = new Date(date) 
        reservationdate.setHours(reservationdate.getHours() + 2)
        setReservationDate(reservationdate.toISOString());
    }

  return (
    <main className='mt-22'>
        <div className='w-full flex flex-col p-4 pt-10 justify-around gap-5'>
                <h3 className='text-3xl font-bold mb-3 text-center'>Umawianie Wizyty</h3>
            <div className='flex flex-row lg:flex-col justify-around'>
                <ReservationForm reservationDate={reservationDate}/>
                <div className='p-5'>
                <label className='block mb-2 font-medium'>Wybierz datę i godzinę wizyty:</label>
                {/* <DatePicker 
                    inline
                    selected={selectedDate}
                    onChange={handleDateChange}
                    showTimeSelect 
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    minTime={new Date(2024, 6, 11, 8)}
                    maxTime={new Date(2024, 6, 11, 16)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    shouldCloseOnSelect={false}
                    filterTime={(time) => {
                        // Sprawdź, czy wybrana data to 11 lipca 2023
                        const isTargetDate = selectedDate.getDate() === 11 && selectedDate.getMonth() === 6 && selectedDate.getFullYear() === 2024;
                        // Jeśli tak, wyłącz godzinę 8:00
                        if (isTargetDate) {
                        const hour = time.getHours();
                        return hour !== 8; // Zwróć false dla godziny 8:00, aby ją wyłączyć
                        }
                        return true; // Dla innych dat zezwól na wszystkie godziny
                    }}
                    /> */}
                </div> 
            </div>
        </div>  
    </main>
    )
}