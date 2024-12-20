"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/global/logo.png";

import {
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { Box } from "@mui/material";

export default function Nav() {
  const [showNav, setShowNav] = React.useState(true);
  const [resetNav, setResetNav] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);

  React.useEffect(() => {
    const show = () => {
      const currScrollPos = window.scrollY;
      const shouldShow = currScrollPos < prevScrollPos || currScrollPos < 50;

      setPrevScrollPos(currScrollPos);
      setShowNav(shouldShow);
      setResetNav(currScrollPos < 50);
    };

    window.addEventListener("scroll", show);

    return () => {
      window.removeEventListener("scroll", show);
    };
  }, [prevScrollPos]);

  return (
    <Box
      className={`tw-w-full tw-p-5 tw-fixed tw-top-0 tw-left-0
                  tw-cstm-flex-row tw-gap-5 tw-text-xs tw-text-white tw-font-light t:tw-p-7 t:tw-text-sm
                  t:tw-gap-20 tw-z-20 tw-transition-all tw-backdrop-blur-md tw-shadow-md  
                  ${showNav ? "tw-translate-y-0" : "-tw-translate-y-full"} 
                  ${
                    resetNav
                      ? "tw-backdrop-blur-none tw-shadow-none"
                      : "tw-backdrop-blur-md tw-shadow-md"
                  }`}
    >
      <Link href="#main" className="tw-cstm-flex-row tw-gap-1 tw-mr-auto">
        <Image src={logo} alt="logo" className="tw-w-6 t:tw-w-8" />
      </Link>

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
