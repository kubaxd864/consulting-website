import { React, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { getDay } from 'react-datepicker/dist/date_utils.d';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
import '../main.css';

export default function ContactForm() {
    const { control, register, handleSubmit, formState: {errors, isSubmitSuccessful} } = useForm();
    const [submitSuccesful, issubmitSuccesful] = useState('Zarezerwuj')
    const [errorMessage, setErrorMessage] = useState('');
    const reservedDatesStart = [
        new Date("Mon Jan 17 2025 17:00:00 GMT+0100 (czas środkowoeuropejski standardowy)"),
    ]
    const reservedDatesEnd = [
        new Date("Mon Jan 17 2025 18:00:00 GMT+0100 (czas środkowoeuropejski standardowy)"),
    ]
    const unavailableDates = [
        "Mon Jan 13 2025 08:00:00 GMT+0100 (czas środkowoeuropejski standardowy)",
        "Mon Feb 03 2025 08:00:00 GMT+0100 (czas środkowoeuropejski standardowy)",
        "Mon Mar 03 2025 08:00:00 GMT+0100 (czas środkowoeuropejski standardowy)",
        "Mon Apr 07 2025 08:00:00 GMT+0100 (czas środkowoeuropejski standardowy)",
        "Mon May 05 2025 08:00:00 GMT+0100 (czas środkowoeuropejski standardowy)",
        "Mon Jun 02 2025 08:00:00 GMT+0100 (czas środkowoeuropejski standardowy)",
        "Mon Jul 07 2025 08:00:00 GMT+0100 (czas środkowoeuropejski standardowy)"
    ]

    const isWeekday = (date) => {
        const selectedDate = new Date(date).setHours(0, 0, 0, 0);
        for (let i = 0; i < unavailableDates.length; i++){
            const unavailableDate = new Date(unavailableDates[i]).setHours(0, 0, 0, 0);
            if (selectedDate === unavailableDate) {
                return false; 
            }
        }
        const day = getDay(date);
        return day !== 0 && day !== 2 && day !== 3 && day !== 4 && day !== 6;
    };

    const filterTimes = (time) => {
        const currentDate = new Date()
        const selectedDate = new Date(time)
        const day = selectedDate.getDay();

        if (day === 1) {
            const allowedTimes = [
                new Date(selectedDate).setHours(12, 30, 0, 0),
                new Date(selectedDate).setHours(13, 30, 0, 0),
                new Date(selectedDate).setHours(14, 30, 0, 0),
                new Date(selectedDate).setHours(16, 0, 0, 0),
                new Date(selectedDate).setHours(17, 0, 0, 0)
            ];
            if (!allowedTimes.includes(selectedDate.getTime())) {
                return false;
            }
        } else if (day === 5) {
            const allowedTimes = [
                new Date(selectedDate).setHours(9, 0, 0, 0),
                new Date(selectedDate).setHours(10, 0, 0, 0),
                new Date(selectedDate).setHours(12, 30, 0, 0),
                new Date(selectedDate).setHours(13, 30, 0, 0),
                new Date(selectedDate).setHours(14, 30, 0, 0),
                new Date(selectedDate).setHours(16, 0, 0, 0),
                new Date(selectedDate).setHours(17, 0, 0, 0)
            ];
            if (!allowedTimes.includes(selectedDate.getTime())) {
                return false;
            }
        }

        for (let i = 0; i < reservedDatesStart.length; i++){
            if (selectedDate.getTime() >= reservedDatesStart[i].getTime() && selectedDate.getTime() < reservedDatesEnd[i].getTime()) {
                return false; 
            }
        }
        return currentDate.getTime() < selectedDate.getTime();
    };

    useEffect(() => {
        axios.get('https://consulting-website-server.vercel.app/get_calendar_info')
            .then((response) => {
                for(let i = 0; i < response.data.events.length; i++){
                    if(['Konsultacja Psychologiczna', 'Konsultacja Rodzicielska', 'Wsparcie Psychologiczne', 'Terapia Psychologiczna'].includes(response.data.events[i].summary)){
                        reservedDatesStart.push(new Date(response.data.events[i].start.dateTime)) 
                        reservedDatesEnd.push(new Date(response.data.events[i].end.dateTime)) 
                    }
                }
            })
            .catch((error) => {
                setErrorMessage('Wystąpił błąd podczas pobierania danych Rezerwacji');
            });
    }, []);

    const onSubmit = (data) => {
        axios.post('https://consulting-website-server.vercel.app/reservation', {data})
        .then((response) => {
            issubmitSuccesful(response.data)
        })
    }

    return(
        <main className="p-3">
            {errorMessage && <p className="text-red-500 text-sm text-center mb-5">{errorMessage}</p>}
            <form onSubmit={isSubmitSuccessful ? null  : handleSubmit(onSubmit)} noValidate>
            <div className='flex flex-row justify-center gap-6 lm:flex-col lm:items-center'>
                <div className='lm:w-8/12 md:w-10/12 sm:w-full'>
                <div className="w-full p-2">
                <label className='block mb-2 font-medium'>Wybierz datę i godzinę wizyty:</label>
                <Controller
                control={control}
                name="appointmentDate"
                rules={{ required: 'Data wizyty jest wymagana' }}
                render={({ field }) => (
                    <DatePicker
                        inline
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect 
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        minDate={new Date()}
                        minTime={new Date(2024, 10, 29, 8, 0)}
                        maxTime={new Date(2024, 10, 29, 20, 0)}
                        shouldCloseOnSelect={false}
                        filterDate={isWeekday}
                        filterTime={filterTimes}
                    />
                )}
            />
            {errors.appointmentDate && <p className="text-red-500 text-sm">{errors.appointmentDate.message}</p>}
                </div>   
                <div className='w-full p-2'>
                    <label className='block mb-2 font-medium'>Wybierz rodzaj pomocy:</label>
                    <select defaultValue={""} {...register("therapy_type", {required: "To pole jest wymagane"})} className='border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500'>
                        <option value="" disabled></option>
                        <option value="Konsultacja Psychologiczna">Konsultacja Psychologoczna</option>
                        <option value="Konsultacja Rodzicielska">Konsultacje Rodzicielskie</option>
                        <option value="Wsparcie Psychologiczne">Wsparcie Psychologiczne</option>
                        <option value="Terapia Psychologiczna">Terapia Psychologiczna dla dorosłych, młodzieży i dzieci</option>
                    </select>
                    {errors.therapy_type && <p className="text-red-500 text-sm">{errors.therapy_type.message}</p>}
                </div> 
                <div className="w-full p-2">
                        <fieldset>
                            <legend className="block mb-2 font-medium">Czy umawiasz się po raz pierwszy:</legend>
                            <div className="flex flex-row gap-5 ml-1">
                                <div className="flex gap-2">
                                    <input type="radio" {...register("new_client", {required: "To pole jest wymagane"})} value="Tak" />
                                    <label>Tak</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" {...register("new_client", {required: "To pole jest wymagane"})} value="NIE" />
                                    <label>Nie</label>
                                </div>
                            </div>
                        </fieldset>
                        {errors.new_client && <p className="text-red-500 text-sm">{errors.new_client.message}</p>}
                    </div>
                </div>
                <div className='lm:w-8/12 md:w-10/12 sm:w-full'>
                    <div className="flex flex-row">
                        <div className="w-full p-2">
                            <label className="block mb-2 font-medium">Imię</label>
                            <input 
                            {...register("name", {
                                required: "To pole jest wymagane", 
                                minLength: {
                                    value: 2,
                                    message: "Imię jest za krótkie"
                                },
                            })} 
                            type="text" 
                            className="border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500" />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div className="w-full p-2">
                            <label className="block mb-2 font-medium">Nazwisko</label>
                            <input 
                            {...register("surname", {
                                required: "To pole jest wymagane", 
                                minLength: {
                                    value: 2,
                                    message: "Nazwisko jest za krótkie"
                                },
                            })} 
                            type="text" 
                            className="border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500" />
                            {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
                        </div>
                    </div>
                    <div className="w-full p-2">
                        <label className="block mb-2 font-medium">E-mail</label>
                        <input 
                        {...register("email",{
                            required: "To pole jest wymagane",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: "Niepoprawny adres e-mail"
                            },
                        })} 
                        type="email" 
                        className="border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="w-full p-2">
                        <label className="block mb-2 font-medium">Telefon</label>
                        <input 
                        {...register("phone", {
                            required: "To pole jest wymagane",
                            pattern: {
                                value: /^[+]?[0-9]{3,16}$/,
                                message: "Niepoprawny numer telefonu"
                            },
                        })} 
                        type="number" 
                        className="border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500" />
                        {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
                    </div>
                    <div className="w-full p-2">
                        <label className="block mb-2 font-medium">Dodatkowe Informacje dla Lekarza</label>
                        <textarea {...register("message")}
                        rows="6" 
                        className="border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500" />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-12 p-5">
                <button type="submit" className="py-2 px-8 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-xl">{submitSuccesful}</button> 
            </div>
            </form>
        </main>
    )
}