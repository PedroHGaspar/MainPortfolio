import React from 'react'
import { ExperienceCard, experiences } from "./Experiences.tsx";
import { MotionDiv } from "./use.client";

const Experience = () => {
  return (
    <section id="experience">
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-12 overflow-hidden py-24 px-4 text-left md:px-10"
    >
      <h3 className="font-cal text-3xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px] font-bold">
        Experience
      </h3>
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll md:p-10 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-900">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} {...experience} />
        ))}
      </div>
    </MotionDiv>
  </section>
  )
}

export default Experience