import Image from "next/image";
import React from "react";
import comms from "@/public/projects/Comms.png";
import sync from "@/public/projects/Synchro.png";
import grasp from "@/public/projects/Grasp.png";
import readefine from "@/public/projects/Readefine.png";
import takomommy from "@/public/projects/Takomommy.png";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Box } from "@mui/material";

const projects = [
  {
    link: "https://readefine.vercel.app",
    github: "https://github.com/rn-mgl/readefine-client.git",
    header: "Readefine",
    subHeader: "Gamified Learning Platform",
    thumb: readefine,
    definition: `A Gamified Learning Platform to help and encourage elementary students 
                improve their reading comprehension skills in the English Language.`,
  },
  {
    link: "https://grasp-rmb.vercel.app",
    github: "https://github.com/rn-mgl/grasp-by-rltn.git",
    header: "Grasp",
    subHeader: "Learning Management System",
    thumb: grasp,
    definition: `A Learning Management System with file uploads, creation of classrooms, submitting of files 
                from student to teacher and vice-versa, posting of announcements, checking of progress, 
                and updating of user profile.`,
  },
  {
    link: "https://takomommy.vercel.app",
    github: "https://github.com/rn-mgl/takomommy_v2_c.git",
    header: "Takomommy",
    subHeader: "E-Commerce",
    thumb: takomommy,
    definition: `An e-commerce store made for selling takoyaki. It can track progress of orders, 
                cancel orders, and message customers.`,
  },
  {
    link: "https://comms-rmb.vercel.app",
    github: "https://github.com/rn-mgl/comms.git",
    header: "Comms",
    subHeader: " Messaging Website",
    thumb: comms,
    definition: `A messaging web-app with real-time updates using web sockets. It can make group chats, send files, 
                block accounts, add friends, accept requests, and notify when a message is received.`,
  },
  {
    link: "https://synchroflow.vercel.app",
    github: "https://github.com/rn-mgl/synchroflow-client",
    header: "Synchroflow",
    subHeader: " Task Management",
    thumb: sync,
    definition: `A task management website real-time updates using web sockets. It can handle task creation, assignation, 
                associate exploration, communication, invitations, and dashboard.`,
  },
];

export default function Projects() {
  const mappedProjects = projects.map((p, i) => {
    return (
      <Box
        key={p.link}
        className="tw-cstm-flex-col tw-relative tw-w-full tw-overflow-hidden 
                    l-s:tw-cstm-flex-row
                    tw-rounded-md t:tw-h-72 l-s:tw-h-80 l-l:tw-h-96"
      >
        <Image
          src={p.thumb}
          alt="thumb"
          className={`tw-w-full tw-scale-[5] tw-absolute tw-opacity-10 tw-z-0
                    tw-blur-[1px] l-s:tw-scale-100 l-s:tw-blur-none l-s:tw-h-full 
                    l-s:tw-w-auto l-s:tw-opacity-40 l-s:tw-saturate-0 l-s:tw-rounded-md
                    hover:tw-saturate-100 tw-transition-all hover:tw-opacity-100 tw-duration-300
                    ${i % 2 ? "l-s:tw-right-0" : "l-s:tw-left-0"}`}
        />

        <Box
          className={`tw-w-full tw-cstm-flex-col tw-gap-5 tw-items-start tw-p-5 tw-relative
                    tw-bg-scndColor tw-h-full tw-z-10 tw-bg-opacity-20 
                    l-s:tw-w-6/12 l-s:tw-bg-opacity-100 l-s:tw-rounded-md
                    l-s:tw-bg-transparent
                    ${
                      i % 2
                        ? "t:tw-mr-auto t:tw-items-start t:tw-text-left"
                        : "t:tw-ml-auto t:tw-items-end t:tw-text-right"
                    }`}
        >
          <Box
            className={`tw-cstm-flex-col tw-z-10 t:tw-mt-auto tw-text-left tw-items-start
                        ${
                          i % 2
                            ? "t:tw-mr-auto t:tw-items-start"
                            : "t:tw-ml-auto t:tw-items-end"
                        }`}
          >
            <p
              className="tw-text-neutral-200 tw-font-bold tw-gap-2
                            l-s:tw-font-extrabold l-s:tw-text-xl"
            >
              {p.header}
            </p>
            <p className="tw-text-xs tw-text-accntColor">{p.subHeader}</p>
          </Box>

          <p
            className="tw-text-sm tw-text-white tw-font-extralight tw-relative tw-z-10 text-sm
                        l-s:tw-bg-[#1b263c] l-s:tw-p-5 l-s:tw-rounded-md l-s:tw-shadow-lg "
          >
            {p.definition}
          </p>

          <Box
            className={`tw-cstm-flex-row tw-gap-5 tw-text-xl tw-text-neutral-200 t:tw-mt-auto
                        ${i % 2 ? "t:tw-mr-auto" : "t:tw-ml-auto "}`}
          >
            <Link
              href={p.link}
              target="_blank"
              className=" tw-font-bold tw-cstm-flex-row tw-gap-2 tw-text-2xl"
            >
              <BiLinkExternal />
            </Link>
            <Link
              href={p.github}
              target="_blank"
              className=" tw-font-bold tw-cstm-flex-row tw-gap-2 tw-text-2xl"
            >
              <AiFillGithub />
            </Link>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <Box
      id="projects"
      className="tw-w-full tw-min-h-screen tw-p-10 tw-cstm-flex-col tw-items-start 
                t:tw-p-20 l-s:tw-p-32 tw-gap-10"
    >
      <p
        className="tw-text-neutral-200 tw-font-extrabold tw-text-2xl
                    m-l:tw-text-3xl
                    t:tw-text-5xl"
      >
        Projects
      </p>

      <Box className="tw-w-full tw-cstm-flex-col tw-gap-5 l-s:tw-gap-20 l-s:tw-mx-auto l-l:tw-w-10/12">
        {mappedProjects}
      </Box>
    </Box>
  );
}
