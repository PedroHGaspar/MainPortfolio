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

export interface Experience {
  tag?: string;
  img: string;
  title: string;
  subtitle: string;
  stackIcons?: IconType[];
  period: [string, string];
  text: string[];
}

export const experiences: Experience[] = [
  {
    tag: "Education",
    img: "data:image/png;base64,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",
    title: "SENAI",
    subtitle: "Técnico em Análise e Desenvolvimento de Sistemas",
    stackIcons: [SiCplusplus, SiTypescript, GiProcessor, FaDatabase, SiJavascript, SiReact, SiPostgresql, SiHtml5, SiCss3, SiExpo, SiMysql],
    period: ["2022", "present"],
    text: [
      "Atualmente estou fazendo o curso técnico de Análise e Desenvolvimento de Sistemas na instituição SENAI, aprendendo e sendo apresentado pra muitas tecnologias com propósitos industriais, desde programação de baixo nível à programação de alto nível, banco de dados, projetos completos, desafios e gerenciamento de projetos e equipes.",
    ],
  },
  {
    tag: "Work",
    img: "data:image/png;base64,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",
    title: "Avanti E-commerce",
    subtitle: "Desenvolvedor Front End",
    stackIcons: [SiTypescript, SiReact, SiTailwindcss, SiApollographql, SiCss3, SiVtex],
    period: ["NOV 22", "JUN 23"],
    text: [
      "Responsável por desenvolver e manter as aplicações dos clientes no meu squad.",
      "Desenvolvimento focado em React, CSS3, JSON, Apollo Graphql e VTEX.",
      "Lojas em que atuei: Esbelt, Loungerie, O Pescador de Ofertas, SenffNet, Docile e Romitex.",
    ],
  },
  {
    tag: "Work",
    img: "https://media.licdn.com/dms/image/D4D0BAQFhUoa6P9U9vA/company-logo_200_200/0/1684868861633?e=2147483647&v=beta&t=wF8UYJqXJUdXjRzPFqKDOOYOLC9Clke8JPXHCKdJZi8",
    title: "ZaZTech",
    subtitle: "Estagiário",
    stackIcons: [SiPhp, SiJavascript, SiHtml5, SiCss3, SiMysql],
    period: ["MAI 22", "AUG 22"],
    text: [
      "Estagiário de desenvolvimento Front End responsável por criar CRUDs e manter as aplicações dos clientes.",
      "Aplicações desenvolvidas com HTML5, CSS3, Javascript e PHP.",
    ],
  },
];

export function ExperienceCard(props: Experience) {
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
            props.tag === "Education" && "bg-sky-800",
            props.tag === "Work" && "bg-red-900",
          )}
        >
          {props.tag}
        </div>
      )}

      <div className="px-0 md:px-10" style={{ maxWidth: "-webkit-fill-available" }}>
        <h4 className="text-2xl font-medium md:text-4xl text-white">{props.title}</h4>
        <p className="mt-1 text-lg font-bold md:text-2xl text-white">{props.subtitle}</p>
        <div className="my-2 flex space-x-2">
          {props.stackIcons?.map((Icon, index) => (
            <Icon key={index} className="h-10 w-10 mt-3 text-blue-400" />
          ))}
        </div>

        <p className="py-5 text-sm font-semibold uppercase text-gray-300 md:text-white">
          Start: {props.period[0]} | End: {props.period[1]}
        </p>

        <ul className="ml-5 list-disc space-y-4 text-white md:text-lg font-sans">
          {props.text.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
