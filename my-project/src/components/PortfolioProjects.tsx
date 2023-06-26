import clsx from "clsx";
import { FaDatabase } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { type IconType } from "react-icons/lib";
import {
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiVtex,
  SiJavascript,
  SiPostgresql,
  SiApollographql
} from "react-icons/si";
import React from "react";

import { MotionDiv } from "./use.client";

export interface PortfolioProjects {
  tag?: string;
  img: string;
  title: string;
  subtitle: string;
//   stackIcons?: IconType[];
  text: string[];
}

export const portfolio: PortfolioProjects[] = [
  {
    tag: "Project",
    img: "data:image/png;base64,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",
    title: "SENAI Hackaton",
    subtitle: "3º lugar no primeiro hackaton do senai de São José.",
    // stackIcons: [SiCplusplus, SiTypescript, GiProcessor, FaDatabase, SiJavascript, SiReact, SiPostgresql, SiHtml5, SiCss3, SiExpo, SiMysql],
    text: [
      "Um hackaton com um problema real: excesso de filas nas cantinas do senai de toda Santa Catarina. Éramos responsáveis por desenvolver uma aplicação e uma apresentação 'pitch' de até 01:30 para vendermos nosso produto para as empresas convidadas para o evento, que eram: Softplan, Globo, Intelbras e Nexxera. Eu e minha equipe conseguimos finalizar em 3º lugar de todas as 20 equipes, foi um projeto muito legal que nos fez fazer amizades, contatos e melhorar nossa apresentação em público e habilidades de resolver problemas com urgência, já que tivemos apenas 4 horas pra desenvolver um modelo de aplicativo e uma apresentação",
    ],
  },
];

export function PortfolioCard(props: PortfolioProjects) {
  return (
    <article className="relative flex w-full flex-shrink-0 snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <MotionDiv
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative h-32 w-32 xl:h-[200px] xl:w-[200px]"
      >
        <img
          src={props.img}
          fill
          alt=""
          className="rounded-full object-cover object-center"
        />
      </MotionDiv>

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
        {/* <div className="my-2 flex space-x-2">
          {props.stackIcons?.map((Icon, index) => (
            <Icon key={index} className="h-10 w-10 mt-3 text-cyan-700" />
          ))}
        </div> */}

        <ul className="ml-5 list-disc space-y-4 text-white md:text-lg font-sans">
          {props.text.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
