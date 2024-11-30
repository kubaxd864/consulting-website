import React from "react"
import InfoBox from "../components/Offer-Info-Box"
import '../main.css'

export default function Offer() {
    return (
        <main className="mt-22">
            <h1 className="text-4xl font-semibold text-center p-10">Nasza Oferta</h1>
            <section id="offer" className="h-fit flex flex-col justify-center items-center py-20 gap-32">
                <InfoBox nr="1" img="psychologicalConsultation" title="Konsultacja Psychologiczna" text="Konsultacja psychologiczna to doraźna forma pomocy i wsparcia.  
                        Rozmowa, podczas której osoba zgłaszająca się konsultuje różnego rodzaju trudne dla niej sytuacje życiowe, 
                        zachowania lub stany emocjonalne, które zaburzają funkcjonowanie psychiczne, 
                        są dla niej niezrozumiałe lub, z którymi sobie nie radzi. Konsultacja może dotyczyć zarówno osoby zgłaszającej się, jak i innej bliskiej jej osoby.
                        Podczas takiej rozmowy psychoterapeuta ma możliwość rozpoznania zgłaszanego problemu i zaproponowania najlepszej formy pomocy.  
                        Nierzadko konsultacja opiera się na psychoedukacji, czyli wyjaśnieniu mechanizmów psychologicznych leżących u podstaw danego sposobu 
                        myślenia czy funkcjonowania oraz na wprowadzeniu pożądanych zmian.
                        Zdarza się, że jest początkiem dłuższej terapii." price="170" time='50'/>
                <InfoBox nr="2" img="familyThreapy" title="Konsultacje Rodzicielskie" text="Konsultacje rodzicielskie to dedykowana przestrzeń dla rodziców i opiekunów, którzy mierzą się z wyzwaniami w wychowywaniu dzieci. 
                        Jeśli doświadczasz trudności w relacji z dzieckiem, borykasz się z problemami wychowawczymi lub chcesz lepiej zrozumieć potrzeby swojego dziecka, jesteśmy tu, aby pomóc. 
                        Spotkania te są doskonałą okazją do rozwijania umiejętności rodzicielskich, które wspierają budowanie silnej, opartej na zaufaniu więzi z dzieckiem. 
                        Dzięki indywidualnemu podejściu możesz zyskać praktyczne wskazówki dostosowane do Waszej sytuacji. 
                        Podczas konsultacji pracujemy nad rozwiązywaniem konkretnych problemów, takich jak trudne emocje, zachowania dziecka czy codzienne konflikty. 
                        Naszym celem jest wsparcie rodziców w stworzeniu atmosfery sprzyjającej rozwojowi dziecka i wzajemnemu porozumieniu. " price="180" time='60'/>
                <InfoBox nr="3" img="psychologicalSupport" title="Wsparcie Psychologiczne" text="Wsparcie psychologiczne to oferta skierowana do każdego, kto pragnie lepiej zrozumieć siebie i wzmocnić swoje mocne strony. 
                        To przestrzeń, w której możesz rozwijać umiejętności i kompetencje społeczne, które są kluczowe w budowaniu satysfakcjonujących relacji z innymi. 
                        Spotkania pomagają również w pracy nad obrazem siebie, budowaniu pewności siebie i samoakceptacji. 
                        Jeśli zmagasz się z kryzysem, trudnymi emocjami czy stresem, wsparcie psychologiczne może pomóc Ci znaleźć skuteczne strategie radzenia sobie w trudnych sytuacjach. 
                        Dzięki indywidualnemu podejściu dostosowanemu do Twoich potrzeb, wspólnie poszukamy rozwiązań, które najlepiej odpowiedzą na Twoje wyzwania. 
                        To także okazja, by lepiej zrozumieć swoje potrzeby i cele oraz wypracować sposoby na ich realizację." price="" time=''/>
                <InfoBox nr="4" img="psychologicalTherapy" title="Terapia Psychologiczna dla dorosłych, młodzieży i dzieci" text="Terapia psychologiczna to profesjonalna pomoc dla osób w każdym wieku, 
                        które doświadczają trudności emocjonalnych lub cierpienia psychicznego. 
                        Jest skierowana zarówno do dzieci i młodzieży, jak i dorosłych, którzy zmagają się z wyzwaniami w relacjach interpersonalnych czy wypełnianiu codziennych ról społecznych.
                        Spotkania terapeutyczne oferują wsparcie w radzeniu sobie z trudnymi emocjami, stresem, a także w pracy nad poprawą relacji z innymi. 
                        Terapia pomaga również osobom, które doświadczyły traumatycznych wydarzeń, zrozumieć swoje przeżycia i stopniowo odzyskać wewnętrzny spokój. 
                        W atmosferze bezpieczeństwa i akceptacji uczestnicy mogą otwarcie dzielić się swoimi trudnościami oraz pracować nad budowaniem siły psychicznej. 
                        Proces terapeutyczny jest dostosowany do indywidualnych potrzeb, co pozwala skutecznie wspierać rozwój osobisty i emocjonalny." price="180" time='50'/>
            </section>
        </main>
    )
}