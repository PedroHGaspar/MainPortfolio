import clsx from "clsx";
import profile1 from "../components/assets/foto1.jpeg";
import profile3 from "../components/assets/foto3.jpeg";
import portfolio3d from "../components/assets/portfolio3d.png";
import portfolio3d2 from "../components/assets/portfolio3d2.png";
import pic1 from "../components/assets/pic1.jpeg";
import pic2 from "../components/assets/pic2.jpg";
import login1 from "../components/assets/login1.png";
import login2 from "../components/assets/login2.png";
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
            "Um hackaton com um problema real: excesso de filas nas cantinas do senai de toda Santa Catarina. Éramos responsáveis por desenvolver uma aplicação e uma apresentação 'pitch' de até 01:30 para vendermos nosso produto para as empresas convidadas para o evento, que eram: Softplan, Globo, Intelbras e Nexxera.",
            "Eu e minha equipe conseguimos finalizar em 3º lugar de todas as 20 equipes, foi um projeto muito legal que nos fez fazer amizades, contatos e melhorar nossa apresentação em público e habilidades de resolver problemas com urgência, já que tivemos apenas 4 horas pra desenvolver um modelo de aplicativo e uma apresentação."
        ],
    },
    {
        tag: "Portfolio",
        img: [
            portfolio3d,
            portfolio3d2
        ],
        title: "Portfolio 3D",
        subtitle: "Meus estudos iniciais em Three.js, Framer Motion, React Fiber, React Drei e Tailwind CSS.",
        text: [
            "Um projeto feito em 3D com Three.js para fins de estudo e para fins de ter meu primeiro portfolio.",
            "Estudo de Tailwind CSS e Framer Motion pra aplicar em projetos subsequentes.",
            "https://pedrohgaspar-portfolio.vercel.app/"
        ],
    },
    {
        tag: "Portfolio",
        img: [
            pic1,
            pic2
        ],
        title: "React Native App",
        subtitle: "Um aplicativo feito em React Native para procura de emprego de Desenvolvedores.",
        text: [
            "Um aplicativo feito para desenvolvedores procurarem vagas de emprego nas proximidades e em outras cidades.",
            "Comunicação com API e renderização de dados das vagas vindos da API.",
            "Mais imagens e detalhes do projeto no link: https://github.com/PedroHGaspar/Project-React-Native"
        ],
    },
    {
        tag: "Project",
        img: [
            login1,
            login2
        ],
        title: "Login/Register com Firebase",
        subtitle: "Uma funcionalidade feita em React Native com Firebase.",
        text: [
            "Um componente custom feito em React.js puro com comunicação e inserção de dados no Firebase com criptografia para LGPD.",
            "Responsividade total para todos os dispositivos.",
            "Projeto em andamento em conjunto com 2 colegas, estamos desenvolvendo a ideia do que virá a seguir."
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
                            style={{ width: "12rem", height: "12rem" }}
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
                <p className="mt-1 text-lg font-bold md:text-2xl text-white" style={{ marginBottom: '1rem' }}>{props.subtitle}</p>

                <ul className="ml-5 list-disc space-y-4 text-white md:text-lg font-sans">
                    {props.text.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}