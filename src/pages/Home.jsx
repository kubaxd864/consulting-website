import React from 'react'
import bg from '../assets/background.webp'
import InfoBox from '../components/Home-Info-Box'
import '../main.css'

export default function Home() {
    return (
        <main className='mt-22'>
        <section id="baner" className="bg-cover bg-center h-screen content-center" style={{backgroundImage: `url(${bg})`}}>
            <div className="flex ml-28 md:ml-0 items-center h-full text-4xl font-medium md:justify-center md:mx-6">
            <h3 className="w-[25rem] text-center">„Najgorszym wrogiem człowieka jest jego własny negatywny sposób myślenia.” – Dr. Norman Vincent Peale</h3>
            </div>
        </section>
        <section id="about" className="flex justify-center items-center">
            <div className="w-8/12 lg:w-10/12 sm:w-full bg-white dark:border-night mt-10 p-10 rounded-xl">
                <h1 className="text-center text-5xl md:text-4xl mb-16 font-semibold">Dlaczego <span className="text-sky-400">nasz</span> gabinet</h1>
                <div className="flex justify-center">
                    <div className="text-center text-xl">
                        Jestem psychologiem z ponad 20-letnim doświadczeniem, specjalizującym się w terapii uzależnień, 
                        psychotraumatologii oraz systemowej terapii rodzin. 
                        Pracuję z dziećmi, młodzieżą i ich rodzicami, oferując zarówno psychoterapię, jak i warsztaty podnoszenia umiejętności wychowawczych. 
                        Obecnie kształcę się w nurcie psychodynamicznym, co pozwala mi indywidualnie dobierać metody terapeutyczne do potrzeb pacjenta. 
                        Mój gabinet w Olsztynie to miejsce zapewniające komfort, sprzyjające pełnemu zaangażowaniu w terapię, 
                        a jego lokalizacja oferuje łatwy dostęp i udogodnienia dla osób z ograniczoną mobilnością. 
                        Oferuję elastyczne godziny wizyt, dzięki czemu łatwiej dopasować sesje terapeutyczne do własnego planu dnia.
                    </div>
                </div>
            </div>
        </section>
        <section id="offer" className="mb-20">
        <h1 className="text-center text-5xl md:text-4xl my-12 pt-2 font-semibold">Co oferujemy</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] w-11/12">
                    <InfoBox img='familyThreapy' title='Konsultacja Psychologiczna' text='Mająca na celu wstępne ustalenie trudności, problemów, obszarów wymagających wsparcia psychologicznego lub terapii oraz ustalenie oczekiwań osoby zgłaszającej się.'/>
                    <InfoBox img='psychologicalTherapy' title='Konsultacje Rodzicielskie' text='Dla rodziców/opiekunów doświadczających problemów wychowawczych z dzieckiem, trudności w relacji z dzieckiem, mających potrzebę poszerzenia swoich umiejętności rodzicielskich.'/>
                    <InfoBox img='psychologicalSupport' title='Wsparcie Psychologiczne' text='Skierowane do wszystkich chcących wzmocnić swoje mocne strony, rozwinąć umiejętności i kompetencje społeczne, popracować nad obrazem siebie, radzeniem sobie w kryzysie lub ze stresem.'/>
                    <InfoBox img='psychologicalConsultation' title='Terapia Psychologiczna dla dorosłych, młodzieży i dzieci' text='Skierowane jest do dzieci i młodzieży oraz dorosłych doświadczających trudności emocjonalnych i cierpienia psychicznego, mających trudności w relacjach interpersonalnych i wypełnianiu ról społecznych, do osób które doświadczyły traumy.'/>
                </div>
            </div>
        </section>
    </main>
    )
}
