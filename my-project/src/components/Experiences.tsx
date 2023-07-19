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
    period: ["FEB 2022", "NOV 2023"],
    text: [
      "Atualmente estou fazendo o curso técnico de Análise e Desenvolvimento de Sistemas na instituição de ensino SENAI, aprendendo e sendo apresentado pra muitas tecnologias com propósitos industriais, desde programação de baixo nível à programação de alto nível, banco de dados, projetos completos, desafios e gerenciamento de projetos e equipes.",
    ],
  },
  {
    tag: "Work",
    img: "data:image/jpeg;base64,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",
    title: "SOMMA Investimentos",
    subtitle: "Desenvolvedor Front-End",
    stackIcons: [FaDatabase, SiJavascript, SiPostgresql, SiHtml5, SiCss3, SiMysql, SiPhp],
    period: ["JUL 2023", "PRESENT"],
    text: [
      "Atuando como desenvolvedor Front-End na SOMMA Investimentos, a maior asset independente de investimentos do sul do Brasil.",
      "Responsável pelo desenvolvimento Front-End dos projetos internos. Desenvolvimento focado em HTML5, CSS3, PHP(back-end) e javascript."
    ],
  },
  {
    tag: "Work",
    img: "data:image/png;base64,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",
    title: "Avanti E-commerce",
    subtitle: "Desenvolvedor Front-End",
    stackIcons: [SiTypescript, SiReact, SiTailwindcss, SiApollographql, SiCss3, SiVtex],
    period: ["NOV 22", "JUN 23"],
    text: [
      "Responsável por desenvolver e manter as aplicações dos clientes no meu squad.",
      "Desenvolvimento focado em React, Typescript, CSS3, JSON, Apollo Graphql e VTEX.",
      "Lojas em que atuei: Esbelt, Loungerie, O Pescador de Ofertas, SenffNet, Docile e Romitex.",
    ],
  },
  {
    tag: "Work",
    img: "https://media.licdn.com/dms/image/D4D0BAQFhUoa6P9U9vA/company-logo_200_200/0/1684868861633?e=2147483647&v=beta&t=wF8UYJqXJUdXjRzPFqKDOOYOLC9Clke8JPXHCKdJZi8",
    title: "ZaZTech",
    subtitle: "Estagiário Front-End",
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
