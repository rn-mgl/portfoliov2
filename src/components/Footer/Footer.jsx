import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      className="tw-w-full tw-p-5 tw-cstm-flex-col tw-gap-5 tw-transition-all
                tw-text-center tw-opacity-50 hover:tw-opacity-100"
    >
      <Box className="tw-w-6/12 tw-bg-accntColor tw-h-[.5px]" />

      <p className="tw-text-accntColor tw-font-light tw-text-xs ">
        Designed and Developed by Rein Miguel C. Buenaventura
      </p>
    </Box>
  );
}
