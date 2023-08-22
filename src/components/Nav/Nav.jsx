import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { AiOutlineInfoCircle, AiOutlineMail, AiOutlineProject } from "react-icons/ai";

export default function Nav() {
  return (
    <Box
      className="tw-w-full tw-p-5 tw-fixed tw-top-0 tw-left-0 tw-backdrop-blur-md tw-shadow-md
                  tw-cstm-flex-row tw-gap-10 tw-text-xs tw-text-white tw-font-light t:tw-p-7 t:tw-text-sm
                  t:tw-gap-20 tw-z-20"
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
