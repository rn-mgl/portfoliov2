import { Box } from "@mui/material";
import React from "react";
import photo from "@/public/about/Temp About.jpg";
import Image from "next/image";
import { FaSquare } from "react-icons/fa";

const frontEnd = ["React JS", "Next JS", "Tailwind CSS"];
const backEnd = ["Express JS", "MySQL", "Github"];

const mappedTechFront = frontEnd.map((t) => {
  return (
    <Box key={t} className="tw-cstm-flex-row tw-gap-2">
      <FaSquare className="tw-text-accntColor tw-text-[0.4rem] tw-rotate-45" />
      <p>{t}</p>
    </Box>
  );
});

const mappedTechBack = backEnd.map((t) => {
  return (
    <Box key={t} className="tw-cstm-flex-row tw-gap-2">
      <FaSquare className="tw-text-accntColor tw-text-[0.4rem] tw-rotate-45" />
      <p>{t}</p>
    </Box>
  );
});

export default function About() {
  return (
    <Box
      className="tw-w-full tw-min-h-screen tw-p-10 tw-cstm-flex-col tw-items-start 
                    t:tw-p-20 l-s:tw-p-32 tw-gap-10"
    >
      <p
        className="tw-text-neutral-200 tw-font-extrabold tw-text-2xl
                    m-l:tw-text-3xl
                    t:tw-text-5xl"
      >
        About
      </p>

      <Box className="tw-cstm-flex-col tw-gap-10 tw-items-start l-s:tw-cstm-flex-row l-s:tw-gap-20">
        <Box
          className="tw-cstm-flex-col tw-text-sm tw-font-extralight tw-w-full  
                    tw-items-start tw-gap-3 tw-text-white tw-leading-relaxed
                    m-l:tw-text-base
                    t:tw-text-lg t:tw-leading-loose"
        >
          <p>
            My journey into the world of web development began during my{" "}
            <span className="tw-font-semibold tw-text-accntColor">freshman year of 2020.</span>{" "}
            Since then, I&apos;ve been immersed in a variety of personal projects that have equipped
            me with proficiency in{" "}
            <span className="tw-font-semibold tw-text-accntColor">front-end</span> and{" "}
            <span className="tw-font-semibold tw-text-accntColor">back-end</span> technologies,
            including
            <span className="tw-font-semibold tw-text-accntColor">
              {" "}
              React JS, Next JS, Express JS,
            </span>{" "}
            and <span className="tw-font-semibold tw-text-accntColor">MySQL.</span> Building web
            applications has not only been a skill-building endeavor but a fulfilling creative
            outlet as well.
          </p>

          <p>
            One of my proudest accomplishments to date is{" "}
            <span className="tw-font-semibold tw-text-accntColor">
              leading our capstone project.
            </span>{" "}
            This project challenged me to apply my knowledge in a real-world scenario, where I have
            made a{" "}
            <span className="tw-font-semibold tw-text-accntColor">
              gamified learning platform for elementary students
            </span>{" "}
            to help and encourage them improve their{" "}
            <span className="tw-font-semibold tw-text-accntColor">
              reading comprehension skills in the English language.
            </span>
          </p>

          <p>
            My current focus revolves around{" "}
            <span className="tw-font-semibold tw-text-accntColor">
              allowing me to merge my technical skills with my passion for problem-solving.
            </span>{" "}
            As I continue on this journey, I&apos;m excited to explore innovative technologies and
            methodologies that push the boundaries of what&apos;s possible on the web.
          </p>

          <p>
            Beyond coding,{" "}
            <span className="tw-font-semibold tw-text-accntColor">
              I&apos;m always critiquing any website I visit both as a user and developer,
            </span>{" "}
            which provides me with a well-rounded perspective that I bring to my development work.
          </p>
        </Box>

        <Box className="tw-group tw-relative tw-cstm-flex-col l-s:tw-mb-auto">
          <Image
            src={photo}
            alt="self"
            priority
            width={500}
            className="tw-w-full tw-h-full tw-relative tw-z-10 tw-opacity-60 tw-rounded-md 
                    group-hover:tw-opacity-100 tw-transition-all t:tw-w-96 l-s:tw-w-96"
          />
          <Box className="tw-absolute tw-w-full tw-h-full tw-bg-accntColor tw-top-0 tw-left-0 tw-rounded-md " />
          <Box
            className="tw-absolute tw-w-full tw-h-full tw-border-2 tw-rounded-md 
                      tw-border-accntColor tw-top-0 tw-left-0
                      tw-translate-y-3 tw-translate-x-3 tw-transition-all
                      group-hover:tw-translate-y-0 group-hover:tw-translate-x-0"
          />
        </Box>
      </Box>

      <Box
        className="tw-cstm-flex-col tw-w-full tw-gap-5 l-s:tw-w-6/12 l-s:tw-mr-auto tw-text-sm 
                      m-l:tw-text-base
                      l-s:tw-items-start l-l:tw-w-4/12 t:tw-text-lg "
      >
        <p className="tw-font-semibold tw-text-accntColor">Technologies I currently use</p>

        <Box
          className="tw-cstm-flex-row tw-w-full tw-text-white 
                      tw-font-extralight "
        >
          <Box className="tw-mr-auto tw-cstm-flex-col tw-items-start tw-gap-2">
            {mappedTechFront}
          </Box>

          <Box className="tw-cstm-flex-col tw-items-start tw-gap-2">{mappedTechBack}</Box>
        </Box>
      </Box>
    </Box>
  );
}
