"use client"

import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const cardVariants = {
    hidden: { opacity: 0, x: -200, scale: 0.2 },
    visible: { opacity: 1, x: 0, scale: 1 }
  };

  const cardData = [
    {
      title: "Sofisticação e Sabor",
      description: "Serviço impecável, com baristas qualificados e cafés de origem selecionada, garantindo uma experiência inesquecível."
    },
    {
      title: "Qualidade Garantida",
      description: "Cada xícara é preparada com atenção aos detalhes, proporcionando uma experiência de café única e memorável."
    },
    {
      title: "Atendimento Personalizado",
      description: "Nosso atendimento é focado em oferecer a melhor experiência para nossos clientes, sempre prontos para atender suas necessidades."
    }
  ];

  return (
    <div 
      ref={ref}
      className="flex phone:flex-col w-screen gap-10 justify-center phone:items-center phone:m-auto my-14 phone:pb-10 phone:bg-background">
      {cardData.map((card, index) => (
        <motion.div 
          key={index}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: index * 0.5 }} 
          className="w-[275px] h-full p-5 flex flex-col gap-3 border border-fontColours rounded-2xl"
        >
          <h2 className="text-4xl font-Cormorant font-bold text-center">{card.title}</h2>
          <p className="text-2xl font-raleway">{card.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Cards;
