import React, { useState } from "react";

import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/pricing/Pricing";
import Resume from "@/components/resume/Resume";
import Services from "@/components/services/Services";
import Sidebar from "@/components/sidebar/Sidebar";
import Testimonials from "@/components/testimonials/Testimonials";
import Head from "next/head";
import { Welcome } from "@/components/welcome/Welcome";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  setTimeout(() => {
    setShowWelcome(false);
  }, 10000);

  if (showWelcome) {
    return (
      <>
        {/* head */}
        <Head>
          <title>Tomi Rodeghiero</title>

          {/* Simple Line Icons */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
          />
        </Head>

        {/* body */}
        <Welcome />
      </>
    );
  }

  return (
    <>
      {/* head */}
      <Head>
        <title>Tomi Rodeghiero</title>

        {/* Simple Line Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
        />
      </Head>

      {/* body */}
      <Sidebar />
      <main className="main">
        <Header />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
