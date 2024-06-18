import React from "react"
import InfoBox from "../components/Offer-Info-Box"
import '../main.css'

export default function Offer() {
    return (
        <main className="mt-22">
            <h1 className="text-5xl font-semibold text-center p-10">Nasza Oferta</h1>
            <section id="offer" className="h-fit flex flex-col justify-center items-center py-20 gap-32">
                <InfoBox title="Konsultacja Psychologiczna" text="Konsultacja psychologiczna to doraźna forma pomocy i wsparcia.  
                        Rozmowa, podczas której osoba zgłaszająca się konsultuje różnego rodzaju trudne dla niej sytuacje życiowe, 
                        zachowania lub stany emocjonalne, które zaburzają funkcjonowanie psychiczne, 
                        są dla niej niezrozumiałe lub, z którymi sobie nie radzi.
                        Konsultacja może dotyczyć zarówno osoby zgłaszającej się, jak i innej bliskiej jej osoby.
                        Podczas takiej rozmowy psychoterapeuta ma możliwość rozpoznania zgłaszanego problemu i zaproponowania najlepszej formy pomocy.  
                        Nierzadko konsultacja opiera się na psychoedukacji, czyli wyjaśnieniu mechanizmów psychologicznych leżących u podstaw danego sposobu 
                        myślenia czy funkcjonowania oraz na wprowadzeniu pożądanych zmian.
                        Trwa ona ok. 50 minut i obejmuje zazwyczaj od 1 do 3 spotkań.
                        Zdarza się, że jest początkiem dłuższej terapii." 
                        price="140" />
                <InfoBox title="Terapia indywidualna dla dorosłych" text="Terapia indywidualna dla dorosłych jest skierowana do osób, 
                        które odczuwają brak satysfakcji ze swojego życia, znajdują się w sytuacji kryzysowej lub przeżyły sytuację traumatyczną, 
                        nie potrafią zaakceptować choroby bądź niepełnosprawności oraz czują się z tego powodu wykluczone z życia społecznego. 
                        Doświadczających przykrych objawów takich jak: niepokój, obniżenie nastroju, cierpienie z powodu anhedonii, 
                        zaburzeń odżywiania, a także mających trudności z koncentracją czy cierpiących z powodu bezsenności. 
                        Przeznaczona jest również dla osób, które odczuwają wewnętrzną pustkę, nie radzą sobie ze stresem i nadmiernym obciążeniem 
                        odpowiedzialnością oraz u których zdiagnozowano wcześniej zaburzenia osobowości, zaburzenia depresyjne lub nerwicę. 
                        Terapia indywidualna może pomóc osobom osamotnionym, niezadowolonym z relacji z otoczeniem i niemogących zbudować 
                        szczęśliwego związku z niezrozumiałych dla siebie przyczyn." price="150" />
                <InfoBox title="Terapia dla dzieci i młodzieży" text="Terapia dzieci i młodzieży jest formą terapii rodzinnej i jest skierowana do osób, 
                        które nie ukończyły osiemnastego roku życia. Jest to proces regularnych spotkań z dzieckiem/nastolatkiem, 
                        które odbywają się we współpracy z rodzicami lub opiekunami. 
                        Stanowisko większości specjalistów pracujących w terapii dzieci i młodzieży jest jednoznaczne – 
                        najlepsze efekty przynosi terapia dziecka ze wspólnym zaangażowaniem obojga rodziców. 
                        Życie pisze jednak różne scenariusze i w przypadku gdy niemożliwa jest współpraca z obojgiem rodziców 
                        zapraszany jest do współpracy rodzic mieszkający z dzieckiem lub opiekun wychowujący dziecko.  
                        Czas trwania terapii jest ustalany w zależności od rodzaju i stopnia nasilenia zgłaszanych trudności. 
                        Zazwyczaj wystarczy kilka wizyt, ale w niektórych przypadkach wskazana jest dłuższa terapia." price="150" />
                <InfoBox title="Terapia rodzinna" text="Rodzina to słowo, które u wielu osób wywołuje ciepłe odczucia. 
                        To właśnie wśród najbliższych każdy człowiek powinien przychodzić na świat i dorastać. 
                        Większość ludzi, idąc za przykładem społecznym, decyduje się na założenie własnej rodziny, 
                        chcąc dzięki temu przede wszystkim zyskać poczucie bezpieczeństwa, móc rozwijać swoje pasje, 
                        w pełni uczyć się miłości, wzajemnego szacunku, zrozumienia i zaufania. 
                        Niestety życie najczęściej nie przypomina pięknej baśni i dość często zdarza się, 
                        że do domu rodzinnego wkraczają problemy, które zaburzają relacje międzyludzkie. 
                        W takich sytuacjach dom przestaje być azylem. Właśnie w momentach kryzysu terapia małżeńska i 
                        rodzinna przychodzi z pomocą. Dzięki wsparciu terapeutycznemu można pokonać codzienne problemy 
                        i na nowo nauczyć się komunikacji oraz zrozumieć postępowanie innych członków rodziny." price="250" />
            </section>
        </main>
    )
}