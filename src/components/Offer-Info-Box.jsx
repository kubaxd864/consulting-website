import React from "react"
import Img1 from '../assets/konsultacja.webp'
import '../main.css'

export default function OfferInfoBox(props) {

    return(
        <main className="w-3/4 lg:w-11/12 b-[0.5px] p-4 rounded-xl bg-whitesmoke border-platinum">
            <div id="consultation" className="grid grid-cols-[repeat(auto-fit,_minmax(24.18rem,_1fr))] tablet:grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))] gap-16">
                <div className="flex justify-center items-center lg:order-2">
                    <img src={Img1} className="h-fit rounded-xl" />
                </div>
                <div className="flex flex-col justify-center laptop:order-1">
                    <h1 className="text-4xl font-semibold">{props.title}</h1>
                    <p className="text-m my-8">{props.text}</p>
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-semibold text-2xl">Cena: {props.price} zł</p>
                        <a href="/contact" className="text-center bg-sky-500 rounded-lg text-white py-2 px-4">Umów się</a>
                    </div>
                </div>
            </div>
        </main>
    )
}