import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/sections/Hero";
import { useRef } from "react";
import Navbar from "../components/blocks/Navbar";
import NavbarFiller from "../components/blocks/NavbarFiller";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: false,
        },
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div
          style={{
            backgroundColor: "#f9f9f9",
          }}
        >
          <NavbarFiller className="nav-filler" />
          <Hero />
          <Navbar />
        </div>
        <div style={{ height: "100vh", background: "#f1f1f1" }}></div>
      </main>
    </LocomotiveScrollProvider>
  );
};

export default Home;
