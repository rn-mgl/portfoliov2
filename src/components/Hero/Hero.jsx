import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Hero() {
  return (
    <Box
      id="main"
      className="tw-w-full tw-h-screen tw-p-10 tw-cstm-flex-col t:tw-p-20 l-s:tw-p-32 tw-justify-start "
    >
      <Box className="tw-w-full tw-cstm-flex-col tw-gap-5 tw-items-start tw-my-auto">
        <Box className="tw-flex tw-flex-col tw-gap-2 tw-w-full t:tw-gap-5 ">
          <p className="tw-text-accntColor tw-text-sm tw-font-extralight t:tw-text-lg">
            Hello, I&apos;m
          </p>
          <p
            className="tw-font-extrabold tw-text-3xl tw-text-neutral-200
                    m-l:tw-text-4xl
                    t:tw-text-6xl"
          >
            Rein Miguel Buenaventura;
          </p>
          <p
            className="tw-font-bold tw-text-2xl tw-text-scndColor-light tw-text-neutral-400
                    m-l:tw-text-3xl
                    t:tw-text-5xl"
          >
            web developer
          </p>
        </Box>

        <Box className="tw-cstm-flex-col tw-gap-5 tw-items-start tw-justify-start">
          <p
            className="tw-text-white tw-text-sm tw-font-extralight tw-leading-relaxed tw-w-full
                    m-l:tw-text-base
                    t:tw-leading-loose t:tw-w-8/12 t:tw-text-lg"
          >
            I&apos;m currently a junior web developer deeply passionate about
            web development with proficient skills in{" "}
            <span className="tw-font-semibold tw-text-accntColor">
              front-end
            </span>{" "}
            and{" "}
            <span className="tw-font-semibold tw-text-accntColor">
              back-end
            </span>{" "}
            technologies, including
            <span className="tw-font-semibold tw-text-accntColor">
              {" "}
              React JS, Next JS, Express JS,
            </span>{" "}
            and{" "}
            <span className="tw-font-semibold tw-text-accntColor">MySQL.</span>
          </p>
          <Link
            className="tw-text-neutral-200 tw-text-2xl"
            href="https://github.com/rn-mgl"
            target="_blank"
          >
            <AiFillGithub />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
