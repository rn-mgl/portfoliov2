import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <Box
      id="contact"
      className="tw-w-full tw-min-h-screen tw-p-10 tw-cstm-flex-col
                t:tw-p-20 l-s:tw-p-32 tw-gap-10 tw-text-center"
    >
      <p
        className="tw-text-neutral-200 tw-font-extrabold tw-text-2xl
                    m-l:tw-text-3xl
                    t:tw-text-5xl"
      >
        My Inbox Is Open
      </p>

      <p
        className="tw-text-white tw-font-extralight tw-text-sm m-l:tw-text-base
                     t:tw-text-lg t:tw-leading-loose"
      >
        Feel free to reach out to me if you&apos;d like to connect or have any questions.{" "}
        <br className="tw-hidden l-s:tw-block" /> I&apos;m always here and eager to chat!
      </p>

      <a
        href="mailto:reinb2ra@gmail.com"
        className="tw-text-accntColor tw-border-2 tw-rounded-md tw-p-3 m-l:tw-text-base
                    tw-border-accntColor tw-font-medium tw-text-sm
                    hover:tw-shadow-[0.3rem_0.3rem_#04D9B2] tw-transition-all"
      >
        Reach Out
      </a>
    </Box>
  );
}
