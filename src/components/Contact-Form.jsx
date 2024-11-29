import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../main.css';
import axios from 'axios';

export default function ContactForm() {
    const { register, handleSubmit, formState: {errors, isSubmitSuccessful} } = useForm();
    const [sendSuccesful, issendSuccesful] = useState('Wyślij')
    const onSubmit = (data) => {
        axios.post('http://localhost:3000/contact', {data}).then((response) => {
            issendSuccesful(response.data)
        })
    }

    return(
        <main className="w-2/6 lg:w-4/6 md:w-full p-5">
            <form onSubmit={isSubmitSuccessful ? null : handleSubmit(onSubmit)} noValidate>
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
                            value: /^[0-9]{3,16}$/,
                            message: "Niepoprawny numer telefonu"
                        },
                    })} 
                    type="number" 
                    className="border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500" />
                    {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
                </div>
                <div className="w-full p-2">
                    <label className="block mb-2 font-medium">Temat Wiadomości</label>
                    <input 
                    {...register("subject", {
                        required: "To pole jest wymagane",
                        minLength: {
                            value: 2,
                            message: "Nie możesz wysłać wiadomości bez tytułu"
                        },
                    })} 
                    type="text" 
                    className="border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500" />
                    {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
                </div>
                <div className="w-full p-2">
                    <label className="block mb-2 font-medium">Wiadomość</label>
                    <textarea {...register("message", {
                        required: "To pole jest wymagane",
                        minLength: {
                            value: 10,
                            message: "Nie możesz wysłać wiadomości bez treści"
                        },
                    })}
                    rows="6" 
                    className="border outline-none rounded-lg w-full p-2 focus:ring-2 focus:ring-inset focus:ring-sky-500" />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                <div className="flex justify-center p-2">
                    <button type="submit" className="py-2 px-8 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-xl">{sendSuccesful}</button> 
                </div>
            </form>
        </main>
    )
}