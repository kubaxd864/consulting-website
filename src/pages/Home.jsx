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
          <div className="w-8/12 bg-white dark:border-night mt-16 p-10 rounded-xl">
              <h1 className="text-center text-5xl md:text-4xl mb-12 font-semibold">Dlaczego my?</h1>
              <div className="flex justify-center">
                  <div className="text-center text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Nunc sagittis vulputate justo, sit amet finibus enim vestibulum vitae. 
                      Mauris porttitor pellentesque quam, in consectetur arcu molestie varius. 
                      Pellentesque aliquet enim non maximus sollicitudin. Duis at sapien a orci facilisis euismod ac sed lectus. 
                      Phasellus interdum augue erat. Phasellus luctus lorem in fermentum tincidunt. 
                      Maecenas ac eleifend metus. Nam pulvinar nisi odio, dapibus porta sapien consequat eget. 
                      Aenean id ante posuere, ornare mi nec, aliquet neque. 
                      Nulla non placerat velit. Morbi nec sodales mauris, eu vulputate nisi.
                  </div>
              </div>
          </div>
        </section>
        <section id="offer" class="mb-20">
        <h1 class="text-center text-5xl my-12 pt-2 font-semibold">Nasza <span class="">Oferta</span></h1>
        <div class="flex justify-center">
            <div class="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-12 w-10/12">
                <InfoBox title='Konsultacja psychologiczna' text='To rozmowa, podczas której osoba zgłaszająca się konsultuje różnego rodzaju trudne dla niej sytuacje życiowe lub stany emocjonalne, z którymi sama nie potrafi sobie poradzić lub których nie rozumie.'/>
                <InfoBox title='Terapia indywidualna dla dorosłych' text='Terapia indywidualna to cykl regularnych spotkań pacjenta z terapeutą i rozmów, które pozwalają na głębsze zrozumienie siebie, swoich przekonań, emocji, zachowań oraz źródła lęków.'/>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-12 w-10/12">
                <InfoBox title='Terapia dzieci i młodzieży' text='Terapia dzieci i młodzieży to cykl regularnych spotkań z terapeutą i rozmów, które pozwalają na głębsze zrozumienie siebie, swoich emocji i zachowań. Jest skierowana do osób, które nie ukończyły osiemnastego roku życia.'/>
                <InfoBox title='Terapia rodzinna' text='Dzięki wsparciu terapeutycznemu można pokonać codzienne problemy i na nowo nauczyć się komunikacji oraz zrozumieć postępowanie innych członków rodziny.'/>
            </div>
        </div>
        </section>
      </main>
  )
}
