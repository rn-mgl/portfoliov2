"use client";
import React from "react";
import About from "@/src/components/About/About";
import Hero from "@/src/components/Hero/Hero";
import Projects from "@/src/components/Projects/Projects";
import { Box } from "@mui/material";
import Contact from "@/src/components/Contact/Contact";
import Footer from "@/src/components/Footer/Footer";
import Nav from "@/src/components/Nav/Nav";

export default function Home() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const aura = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", aura);

    return () => {
      window.removeEventListener("mousemove", aura);
    };
  }, []);

  return (
    <div className="tw-scroll-smooth tw-bg-prmColor">
      <div
        className="tw-fixed tw-cstm-flex-col tw-pointer-events-none tw-w-full tw-h-full"
        style={{
          background: `radial-gradient(30rem at ${mousePos.x}px ${mousePos.y}px, rgba(3, 166, 136, 0.10), transparent)`,
        }}
      />

      <Nav />

      <Box
        className="tw-max-w-screen-2xl tw-mx-auto tw-h-screen tw-overflow-y-auto tw-font-main 
            tw-scrollbar-thin tw-scroll-smooth tw-scrollbar-thumb-accntColor tw-scrollbar-track-prmColor"
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </div>
  );
}
