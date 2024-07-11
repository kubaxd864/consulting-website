import '../main.css';

function InfoBox(props) {
    return(
        <>
            <div className="border-[0.5px] border-solid border-gray-200 m-8 p-8 text-center rounded-3xl">
                <div className="p-3">
                    <h3 className="text-2xl mb-4 font-semibold">{props.title}</h3>
                    <p className="p-3">{props.text}</p>
                </div>
                <a href="/offer">
                    <button className="bg-sky-500 hover:bg-sky-400 text-white rounded-xl w-24 h-10 mt-3">Więcej...</button>
                </a>
            </div>
        </>
    )
}

export default InfoBox;