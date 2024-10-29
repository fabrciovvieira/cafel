"use client"

import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import Image from "next/image";
import aliança from '@/assets/alianças.png';
import eventos from '@/assets/eventos.png';
import sociais from '@/assets/sociais.png';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 200, scale: 0.2 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <div className="bg-fontColours pb-14 flex flex-col justify-center">
      <div className="mb-14">
        <h1 className="text-background text-8xl text-center font-Cormorant p-6 font-bold phone:text-6xl">Nosso Serviço Completo</h1>
      </div>

      <div ref={ref} className="w-screen flex phone:flex-col gap-32 justify-center items-center m-auto">
        {[
          {
            img: aliança,
            title: "Casamentos & Festas:",
            text: "Transforme o seu grande dia em uma experiência memorável com nossas estações de café e bebidas especiais, tudo servido com elegância e estilo."
          },
          {
            img: eventos,
            title: "Eventos Corporativos:",
            text: "Proporcione um toque de requinte às suas reuniões e conferências com um café de qualidade excepcional, garantindo que cada pausa seja revigorante e saborosa."
          },
          {
            img: sociais,
            title: "Eventos Sociais:",
            text: "Desde aniversários até encontros mais informais, estamos prontos para agregar charme e sabor a qualquer celebração."
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: index * 0.3 }} // Aplica um delay incremental
            className="w-[300px] h-auto text-white text-center flex flex-col gap-4 justify-center items-center"
          >
            <Image src={card.img} alt={card.title} className="w-[100px] h-auto" />
            <h2 className="text-5xl font-bold font-Cormorant">{card.title}</h2>
            <p className="text-3xl font-raleway font-normal leading-6">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="m-auto bg-background text-fontColours px-3 py-3 text-3xl font-raleway rounded-xl mt-16 phone:text-sm phone:w-[70%]"
      >
        SOLICITE SEU ORÇAMENTO AGORA
      </motion.button>
    </div>
  );
};

export default Services;
