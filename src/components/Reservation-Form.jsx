import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../main.css';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default function ContactForm(props) {
    const { control, register, handleSubmit, formState: {errors, isSubmitSuccessful} } = useForm();
    const [value, setValue] = useState()
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [reservationDate, setReservationDate] = useState()

    // const handleDateChange = (date) => {
    //     setSelectedDate(date)
    //     var reservationdate = new Date(date) 
    //     reservationdate.setHours(reservationdate.getHours() + 2)
    //     setReservationDate(reservationdate.toISOString());
    // }

    const onSubmit = (data) => {
        axios.post('http://localhost:3000/reservation', {data})
        .then((response) => {
            console.log(response)
        })
    }

    return(
        <main className="p-3">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='flex flex-row lm:flex-col justify-around lm:items-center'>
                <div className='lm:w-8/12 md:w-10/12 sm:w-full'>
                    <div className="w-full p-2">
                    <label className='block mb-2 font-medium'>Wybierz Specjalistę</label>
                    <select defaultValue={""} {...register("specialist_name", {required: "To pole jest wymagane"})} className='border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500'>
                        <option value="" disabled>Wybierz specjalistę</option>
                        <option value="Dr. Jan Kowalski">Dr. Jan Kowalski</option>
                        <option value="Dr. Anna Nowak">Dr. Anna Nowak</option>
                        <option value="Dr. Piotr Wiśniewski">Dr. Piotr Wiśniewski</option>
                    </select>
                    {errors.specialist_name && <p className="text-red-500 text-sm">{errors.specialist_name.message}</p>}
                </div>
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
                        minTime={new Date(2024, 6, 11, 8)}
                        maxTime={new Date(2024, 6, 11, 16)}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        shouldCloseOnSelect={false}
                        filterTime={(time) => {
                            // Sprawdź, czy wybrana data to 11 lipca 2024
                            const isTargetDate = field.value && field.value.getDate() === 11 && field.value.getMonth() === 6 && field.value.getFullYear() === 2024;
                            // Jeśli tak, wyłącz godzinę 8:00
                            if (isTargetDate) {
                                const hour = time.getHours();
                                return hour !== 8; // Zwróć false dla godziny 8:00, aby ją wyłączyć
                            }
                            return true; // Dla innych dat zezwól na wszystkie godziny
                        }}
                    />
                )}
            />
            {errors.appointmentDate && <p className="text-red-500 text-sm">{errors.appointmentDate.message}</p>}
                </div>   
                <div className='w-full p-2'>
                    <label className='block mb-2 font-medium'>Wybierz rodzaj terapii:</label>
                    <select defaultValue={""} {...register("therapy_type", {required: "To pole jest wymagane"})} className='border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500'>
                        <option value="" disabled>Wybierz rodzaj terapii</option>
                        <option value="Konsultacja Psychologoczna">Konsultacja Psychologoczna</option>
                        <option value="Terapia indywidualna dla dorosłych">Terapia indywidualna dla dorosłych</option>
                        <option value="Terapia dla dzieci i młodzieży">Terapia dla dzieci i młodzieży</option>
                        <option value="Terapia rodzinna">Terapia rodzinna</option>
                    </select>
                    {errors.therapy_type && <p className="text-red-500 text-sm">{errors.therapy_type.message}</p>}
                </div>
                <div className="w-full p-2">
                        <fieldset>
                            <legend className="block mb-2 font-medium">Czy pierwszy umawiasz się do tego specjalisty:</legend>
                            <div className="flex flex-row gap-5 ml-1">
                                <div className="flex gap-2">
                                    <input type="radio" {...register("new_client", {required: "To pole jest wymagane"})} value="yes" />
                                    <label>Tak</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" {...register("new_client", {required: "To pole jest wymagane"})} value="no" />
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
                    <div className="flex justify-center p-2">
                        <button type="submit" className="py-2 px-8 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-xl">{isSubmitSuccessful ? "Zarezerwowano" : "Zarezerwuj"}</button> 
                    </div>
                </div>
            </div>
            </form>
        </main>
    )
}