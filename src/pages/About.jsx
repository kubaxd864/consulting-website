import React from "react"
import ProfImg from '../assets/zdjęcie3.png'
import '../main.css'

export default function About() {
    return (
        <main className="mt-22">
            <section id="about" className="h-fit flex justify-center items-center mt-22 py-20">
                <div className="w-7/12 md:w-10/12 sm:w-11/12 bg-whitesmoke border-platinum border-solid border-2 p-10 rounded-2xl">
                    <div className="flex justify-center">
                        <img src={ProfImg} className="rounded-full" />
                    </div>
                    <div className="">
                        <h1 className="text-center text-5xl font-semibold mt-10 mb-1 mx-auto">Psycholog Anna Kowalska</h1>
                        <div className="flex flex-col justify-center items-center text-lg">
                            <p className="w-10/12 mt-12 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc sagittis vulputate justo, sit amet finibus enim vestibulum vitae. 
                                Mauris porttitor pellentesque quam, in consectetur arcu molestie varius. 
                                Pellentesque aliquet enim non maximus sollicitudin. Duis at sapien a orci facilisis euismod ac sed lectus. 
                                Phasellus interdum augue erat. Phasellus luctus lorem in fermentum tincidunt. Maecenas ac eleifend metus. 
                                Nam pulvinar nisi odio, dapibus porta sapien consequat eget. Aenean id ante posuere, ornare mi nec, aliquet neque. 
                                Nulla non placerat velit. Morbi nec sodales mauris, eu vulputate nisi.
                            </p>
                            <p className="w-10/12 mt-8 mb-3 text-center">
                                Sed auctor, libero nec tincidunt tincidunt, nunc nunc tincidunt libero,
                                nec tincidunt libero libero nec libero. Sed auctor, libero nec tincidunt tincidunt, nunc nunc tincidunt libero,
                                nec tincidunt libero libero nec libero. Sed auctor, libero nec tincidunt tincidunt, nunc nunc tincidunt libero,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc sagittis vulputate justo, sit amet finibus enim vestibulum vitae. 
                                Mauris porttitor pellentesque quam, in consectetur arcu molestie varius.     
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
