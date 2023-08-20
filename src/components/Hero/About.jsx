import { Box } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box className="tw-w-full tw-min-h-screen tw-p-10 tw-cstm-flex-col t:tw-p-20">
      <Box className="tw-w-full tw-cstm-flex-col tw-gap-10 tw-items-start">
        <p
          className="tw-text-neutral-200 tw-font-extrabold tw-text-2xl
                    m-l:tw-text-3xl
                    t:tw-text-5xl"
        >
          About
        </p>

        <Box
          className="tw-cstm-flex-col tw-text-sm tw-font-extralight tw-w-full  
                    tw-items-start tw-gap-2 tw-text-white tw-leading-relaxed
                    m-l:tw-text-base
                    t:tw-text-lg t:tw-w-8/12 t:tw-leading-loose"
        >
          <p>
            My journey into the world of web development began during my{" "}
            <span className="tw-font-semibold tw-text-accntColor">freshman year of 2019.</span>{" "}
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
      </Box>
    </Box>
  );
}
