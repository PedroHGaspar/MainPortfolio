import React from "react";
import profileme from "../components/assets/FotoEu.jpg";
import { MotionDiv } from "./use.client";

const FinalWords = () => {

    return (
        <>

            <section id="about" className="container mx-auto flex-1 px-1 md:px-4" style={{ maxWidth: "1320px", margin: "0 auto" }}>
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-12 overflow-hidden py-24 px-4 text-left md:px-10"
                >
                    <h2 className="font-cal text-3xl uppercase font-bold tracking-[15px] text-gray-400 md:tracking-[20px] text-center">
                        Final Words
                    </h2>

                    <div className="flex flex-col items-center md:flex-row">
                        <div className="mt-4 md:mt-0 space-y-10 px-0 md:px-10 md:py-0">
                            <p className="font-semibold text-2xl text-white font-sans">
                                Atualmente estou focado em 3 coisas: <br /> <br />
                                • Experiência <br />
                                • Evolução <br />
                                • Felicidade <br /> <br />
                                Agradeço a sua leitura até aqui, espero que possamos nos conhecer um dia e trabalhar juntos em algum projeto! <br />
                                Caso haja interesse em fazer contato, clique no botão "Contact" e me mande um e-mail, ou me mande uma solicitação de contato no Linkedin!
                            </p>
                        </div>
                    </div>
                </MotionDiv>
            </section>
        </>
    )
}

export default FinalWords;