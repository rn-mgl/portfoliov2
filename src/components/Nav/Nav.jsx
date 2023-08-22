"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { AiOutlineInfoCircle, AiOutlineMail, AiOutlineProject } from "react-icons/ai";

export default function Nav() {
  const [showNav, setShowNav] = React.useState(true);
  const [resetNav, setResetNav] = React.useState(true);

  React.useEffect(() => {
    const show = (e) => {
      setResetNav(window.scrollY < 50);
      setShowNav(e.deltaY < 0);
    };

    window.addEventListener("wheel", show);

    return () => {
      window.removeEventListener("wheel", show);
    };
  }, []);

  return (
    <Box
      className={`tw-w-full tw-p-5 tw-fixed tw-top-0 tw-left-0
                  tw-cstm-flex-row tw-gap-10 tw-text-xs tw-text-white tw-font-light t:tw-p-7 t:tw-text-sm
                  t:tw-gap-20 tw-z-20 tw-transition-all tw-backdrop-blur-md tw-shadow-md  
                  ${showNav ? "tw-translate-y-0" : "-tw-translate-y-full"} 
                  ${
                    resetNav
                      ? "tw-backdrop-blur-none tw-shadow-none"
                      : "tw-backdrop-blur-md tw-shadow-md"
                  }`}
    >
      <Link href="#about" className="tw-cstm-flex-row tw-gap-1 t:tw-ml-auto">
        <Box>
          <AiOutlineInfoCircle className="tw-text-accntColor" />
        </Box>
        About
      </Link>

      <Link href="#projects" className="tw-cstm-flex-row tw-gap-1">
        <Box>
          <AiOutlineProject className="tw-text-accntColor" />
        </Box>
        Projects
      </Link>

      <Link href="#contact" className="tw-cstm-flex-row tw-gap-1">
        <Box>
          <AiOutlineMail className="tw-text-accntColor" />
        </Box>
        Contact
      </Link>
    </Box>
  );
}
