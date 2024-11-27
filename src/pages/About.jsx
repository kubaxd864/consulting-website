import React from "react"
import ProfImg from '../assets/prof_picture.jpg'
import '../main.css'

export default function About() {
    return (
        <main className="mt-22">
            <section id="about" className="h-fit flex justify-center items-center mt-22 py-16">
                <div className="w-7/12 md:w-10/12 sm:w-11/12 border-gray-200 border-solid border-[0.5px] p-10 rounded-2xl">
                    <div className="flex justify-center">
                        <img src={ProfImg} className="rounded-full w-56" />
                    </div>
                    <div className="min-h-96">
                        <h1 className="text-center text-5xl font-semibold mt-10 mb-3 mx-auto">Psycholog Aneta Krzywicka</h1>
                        <div className="flex flex-col justify-center items-center text-lg">
                            <p className="w-9/12 mt-12 text-center">
                                Jestem psychologiem z ponad 20-letnim doświadczeniem, ukończyłam szkolenia z zakresu psychoterapii uzależnienia i współuzależnienia, 
                                psychotraumatologii i systemowej terapii rodzin. Od ponad 8 lat pracuję z dziećmi, młodzieżą i ich rodzicami, 
                                prowadzę konsultacje rodzicielskie i warsztaty podnoszenia umiejętności wychowawczych. Obecnie jestem w trakcie szkolenia psychoterapeutycznego w nurcie psychodynamicznym.
                                W pracy z klientami/pacjentami najważniejsze jest dla mnie indywidualne podejście do osoby, dobór metod pracy terapeutycznej do aktualnych potrzeb i oczekiwań pacjenta.  
                                Istotą psychoterapii jest dla mnie pomoc osobie w coraz lepszym rozumieniu siebie, swojego życia i problemów.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
