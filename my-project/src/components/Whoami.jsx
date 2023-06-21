import React from "react";
import profileme from "../components/assets/FotoEu.jpg";
import { MotionDiv } from "./use.client";

const Whoami = () => {

    return (
        <>

            <section id="about" className="container mx-auto flex-1 px-1 md:px-4">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-12 overflow-hidden py-24 px-4 text-left md:px-10"
                >
                    <h2 className="font-cal text-3xl uppercase font-bold tracking-[15px] text-gray-400 md:tracking-[20px]">
                        About me
                    </h2>

                    <div className="flex flex-col items-center md:flex-row">
                        <MotionDiv
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className="md:md-0 relative -mb-20 h-56 w-56 flex-shrink-0 md:h-72 md:w-72 xl:h-[500px] xl:w-[500px]"
                        >
                            <img
                                src={profileme}
                                fill
                                alt="Me on Parkinglot"
                                className="rounded-full object-cover md:rounded-lg"
                            />
                        </MotionDiv>

                        <div className="mt-20 md:mt-0 space-y-10 px-0 py-24 md:px-10 md:py-0">
                            <p className="font-semibold text-2xl text-white font-sans">
                                Eu sou um Desenvolvedor de Software apaixonado em criar e aprimorar.
                                Estou ansioso para aprender coisas novas e nunca terei medo de explorar novas tecnologias.
                                Atualmente tenho certa especialidade em Front End, e estou começando a estudar e aprimorar meu Back End.
                            </p>
                        </div>
                    </div>
                </MotionDiv>
            </section>
        </>
    )
}

export default Whoami;