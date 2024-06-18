import React from "react"
import Form from "../components/Contact-Form"
import ContactInfo from "../components/Contact-Info"
import '../main.css'

export default function Contact() {
    return (
        <main className="mt-22 h-fit flex flex-col justify-center items-center">
        <div className="w-full flex flex-row lg:flex-col p-4 pt-24 justify-around lg:items-center gap-5 lg:gap-20">
            <div className="w-1/2 lg:w-4/6 lg:p-6 md:w-full">
                <ContactInfo />
            </div>
            <Form />
        </div>
        <div className="w-10/12 md:w-11/12 px-10 mb-20 mt-4">
            <h1 className="font-bold text-center text-3xl p-10 sm:p-4 sm:py-10">Nasza Lokalizacja</h1>
            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.7335975137726!2d20.496813029352417!3d53.79422888318728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27eb15b8a783f%3A0x5b8f19f7560fc7b3!2zT2xzenR5xYRza2EgU3prb8WCYSBXecW8c3ph!5e0!3m2!1spl!2spl!4v1709886006516!5m2!1spl!2spl" width="100" height="350" loading="fast"></iframe>
        </div>
        </main>
    )
}