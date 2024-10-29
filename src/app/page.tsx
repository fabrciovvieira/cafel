"use client";

import { useState, useEffect } from "react";
import Cards from "@/components/Cards";
import FeedBack from "@/components/FeedBack";
import { Footerpage } from "@/components/Footerpage";
import Hero from "@/components/Hero";
import Menus from "@/components/Menus";
import Services from "@/components/Services";

import Image from "next/image";
import logo from '@/assets/logoCafe.png'

import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

type Props = {
  children: ReactNode;
};

function Section({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando o carregamento do background
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos para simular o carregamento

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center bg-bgHero bg-cover bg-no-repeat">
        <div className="text-3xl font-raleway bg-background w-screen h-screen m-auto flex justify-center items-center"><Image src={logo} alt="logo" /></div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-bgHero bg-cover bg-no-repeat">
      <Hero />
      <Section>
        <Cards />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section>
        <Menus />
      </Section>
      <Section>
        <FeedBack />
      </Section>
      <Section>
        <Footerpage />
      </Section>
    </div>
  );
}
