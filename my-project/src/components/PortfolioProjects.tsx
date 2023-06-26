import clsx from "clsx";
import profile1 from "../components/assets/foto1.jpeg";
import profile3 from "../components/assets/foto3.jpeg";
import React from "react";

import { MotionDiv } from "./use.client";

export interface PortfolioProjects {
    tag?: string;
    img: string[];
    title: string;
    subtitle: string;
    text: string[];
}

export const portfolio: PortfolioProjects[] = [
    {
        tag: "Project",
        img: [
            profile1,
            profile3,
        ],
        title: "SENAI Hackaton",
        subtitle: "3º lugar no primeiro hackaton do senai de São José.",
        text: [
            "Um hackaton com um problema real: excesso de filas nas cantinas do senai de toda Santa Catarina. Éramos responsáveis por desenvolver uma aplicação e uma apresentação 'pitch' de até 01:30 para vendermos nosso produto para as empresas convidadas para o evento, que eram: Softplan, Globo, Intelbras e Nexxera. Eu e minha equipe conseguimos finalizar em 3º lugar de todas as 20 equipes, foi um projeto muito legal que nos fez fazer amizades, contatos e melhorar nossa apresentação em público e habilidades de resolver problemas com urgência, já que tivemos apenas 4 horas pra desenvolver um modelo de aplicativo e uma apresentação",
        ],
    },
    {
        tag: "Portfolio",
        img: [
            profile1,
            profile3,
        ],
        title: "SENAI Hackaton",
        subtitle: "3º lugar no primeiro hackaton do senai de São José.",
        text: [
            "Um hackaton com um problema real: excesso de filas nas cantinas do senai de toda Santa Catarina. Éramos responsáveis por desenvolver uma aplicação e uma apresentação 'pitch' de até 01:30 para vendermos nosso produto para as empresas convidadas para o evento, que eram: Softplan, Globo, Intelbras e Nexxera. Eu e minha equipe conseguimos finalizar em 3º lugar de todas as 20 equipes, foi um projeto muito legal que nos fez fazer amizades, contatos e melhorar nossa apresentação em público e habilidades de resolver problemas com urgência, já que tivemos apenas 4 horas pra desenvolver um modelo de aplicativo e uma apresentação",
        ],
    },
];

export function PortfolioCard(props: PortfolioProjects) {
    return (
        <article className="relative flex w-full flex-shrink-0 snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
            <div className="flex space-x-4">
                {props.img.map((image, index) => (
                    <MotionDiv
                        key={index}
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative h-32 w-32 xl:h-[200px] xl:w-[200px]"
                    >
                        <img
                            src={image}
                            fill
                            alt=""
                            className="rounded-full object-cover object-center"
                        />
                    </MotionDiv>
                ))}
            </div>

            {props.tag && (
                <div
                    className={clsx(
                        "absolute right-7 top-0 rounded-lg bg-accent-500 p-2 md:p-4 text-white font-semibold tracking-wider",
                        props.tag === "Portfolio" && "bg-amber-500",
                        props.tag === "Project" && "bg-emerald-900",
                    )}
                >
                    {props.tag}
                </div>
            )}

            <div className="px-0 md:px-10" style={{ maxWidth: "-webkit-fill-available" }}>
                <h4 className="text-2xl font-medium md:text-4xl text-white">{props.title}</h4>
                <p className="mt-1 text-lg font-bold md:text-2xl text-white">{props.subtitle}</p>

                <ul className="ml-5 list-disc space-y-4 text-white md:text-lg font-sans">
                    {props.text.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}