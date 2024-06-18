import React from 'react'
import OfficeImage1 from '../assets/gabinet_1.jpg'
import OfficeImage2 from '../assets/gabinet_2.jpg'
import OfficeImage3 from '../assets/gabinet_3.jpg'
import '../main.css'

export default function Office() {

    return (
        <main className="mt-22 h-fit flex justify-center items-center py-20">
                <div className="w-3/4 xl:w-10/12 p-10 lg:p-3">
                    <div className="flex flex-row lg:flex-col gap-40 items-center">
                        <div className="w-1/2 lg:w-7/12 md:w-8/12 sm:w-10/12 h-fit grid grid-cols-2 gap-2 justify-center">
                            <img fetchpriority="high" src={OfficeImage1} className="h-fit rounded-tl-xl" />
                            <img fetchpriority="high" src={OfficeImage2} className="h-fit rounded-tr-xl" />
                            <img fetchpriority="high" src={OfficeImage3} className="h-fit rounded-b-xl col-span-2" />
                        </div>
                        <div className="w-1/2 md:w-7/12 sm:w-10/12 text-center flex flex-col justify-center gap-9">
                            <h1 className="text-center text-5xl md:text-4xl font-semibold">Gabinet Psychoterapii</h1>
                            <p> 
                                Gabinet terapeutyczny to miejsce, w którym ważne jest profesjonalne i uważne podejście do problemów pacjenta.
                                Przy wykorzystaniu aktualnych metod diagnozy i terapii odbywa się w nim psychoterapia oraz konsultacje psychologiczne. 
                                Za skuteczność terapii odpowiada nie tylko psychoterapeuta, ale również atmosfera gabinetu psychoterapii, 
                                która powinna sprzyjać skupieniu na myślach, przeżyciach i rozmowie. 
                                Pamiętając o tym, gabinety w pracowni psychoterapii zostały urządzone komfortowo, 
                                na parterze budynku mieszkalnego przy ul. Minakowskiego 12 lok 35 w Olsztynie. 
                                Budynek w niedalekiej odległości od centrum handlowego ,,Auchan’’, 
                                bez barier architektonicznych oraz z udogodnieniami dla osób o ograniczonej sprawności ruchowej. 
                                Do budynku przynależy parking.
                            </p>
                        </div>
                    </div>
                </div>
        </main>
    )
}