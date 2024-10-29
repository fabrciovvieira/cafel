"use client"

import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import Image from "next/image";
import feed1 from '@/assets/feed1.png';
import feed2 from '@/assets/feed2.png';
import caneca from '@/assets/caneca2.png';

export const Footerpage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Variáveis de animação para as imagens
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div 
      ref={ref}
      className="w-full h-screen bg-lastBg bg-cover bg-no-repeat phone:h-full phone:flex-col"
    >
      <div className="phone:h-auto">
        <h1 className="font-Cormorant pt-32 text-6xl italic text-center text-fontColours phone:text-5xl phone:font-bold">
          A EXPERIÊNCIA <br />
          <span className="font-bold">NÃO MENTE...</span>
        </h1>
        
        <div className="w-full m-auto flex justify-center items-center gap-5 phone:gap-0 h-[426px] phone:flex-col phone:h-auto phone:mt-10">
          {/** Animação nas imagens */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.5 }} // Delay para o primeiro feed
          >
            <Image 
              src={feed1} 
              alt="Feedback image 1" 
              className="w-[350px] h-auto" 
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.7 }} // Delay para o segundo feed
          >
            <Image 
              src={feed2} 
              alt="Feedback image 2"
              className="w-[350px] h-auto" 
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.9 }} // Delay para o terceiro feed
          >
            <Image 
              src={feed2} 
              alt="Feedback image 3"
              className="w-[350px] h-auto" 
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Image 
              src={feed2} 
              alt="Feedback image 4"
              className="w-[350px] h-auto" 
            />
          </motion.div>
        </div>

        <h2 className="text-6xl font-Cormorant font-bold italic text-center pt-20 phone:text-5xl ">
          O toque especial <br /> para o seu evento:
        </h2>
        <div className="w-[90%] m-auto flex phone:flex-col justify-center items-center gap-5 pt-32 phone:pt-10">
          <div className="text-center phone:text-left">
            <p className="font-raleway text-3xl phone:text-lg">
              Sabemos que seu evento é único, e o café tem o poder de tornar os momentos ainda mais especiais. 
              Com a <span className="font-bold">Cafeteria Express</span>, oferecemos mais do que uma bebida – 
              oferecemos uma experiência completa de prazer e requinte, pensada para surpreender seus convidados.
            </p>
            <p className="font-raleway text-3xl pt-3 phone:text-lg">
              Entre em contato e descubra como podemos transformar seu evento com o melhor café que você já experimentou:
            </p>
            <motion.button 
              whileHover={{scale:1.1}}
              className="bg-fontColours text-[#EBDED1] px-3 py-3 text-3xl phone:text-sm font-raleway rounded-xl mt-10 phone:w-full"
            >
              SOLICITE SEU ORÇAMENTO AGORA
            </motion.button>
          </div>  
          <Image src={caneca} alt="Caneca do café" className="w-[600px] h-auto phone:w-[250px] phone:mt-5"/>
        </div>
      </div>
    </div>
  );
};
