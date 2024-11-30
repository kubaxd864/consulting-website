import '../main.css';
import familyThreapy from '../assets/family-therapy.jpg';
import psychologicalTherapy from '../assets/psychological-therapy.jpg';
import psychologicalSupport from '../assets/psychological-support.jpg';
import psychologicalConsultation from '../assets/psychological-consultation.jpg';

const imageMap = {
    familyThreapy,
    psychologicalTherapy,
    psychologicalSupport,
    psychologicalConsultation
};

function InfoBox(props) {
    return(
        <>
            <div className="border-[0.5px] border-solid border-gray-200 m-4 p-5 text-center rounded-3xl flex flex-col justify-between h-full">
                <div className="p-3">
                    <img src={imageMap[props.img]} alt="icon" className="w-full mx-auto rounded-xl"/>
                    <h3 className="text-2xl m-7 font-semibold">{props.title}</h3>
                    <p className="p-2">{props.text}</p>
                </div>
                <a href={'/#/offer'} className="mt-auto">
                    <button className="bg-sky-500 hover:bg-sky-400 text-white rounded-xl px-4 py-3 mt-3">Dowiedz się Więcej</button>
                </a>
            </div>
        </>
    )
}

export default InfoBox;