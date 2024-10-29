"use client"

import { motion } from 'framer-motion'

import Image from "next/image"
import logo from '@/assets/logoCafe.png'


const Hero = () => {
  return (
    <div className="w-screen h-screen relative phone:w-full phone:mb-[200px]">
        <div className="w-full h-[100px] pt-10 flex justify-center items-center">
            <Image src={logo} alt="logo" className="w-[250px]  h-auto"/>
        </div>
        <div className="w-[50%] phone:w-full h-full flex flex-col gap-3 justify-center items-center phone:relative absolute top-[-10px] phone:top-[10px] phone:text-center">
            <h1 className="font-Cormorant text-7xl font-light phone:text-4xl">Um toque de elegância <br />
            <span className="font-bold text-8xl phone:text-5xl">em cada evento.</span></h1>
            <p className="font-raleway w-[90%] font-normal text-3xl phone:text-2xl">Imagine seus momentos especiais sendo enriquecidos com o sabor inconfundível do <span className="font-bold">melhor café</span>.
            Na Cafeteria Express, trazemos uma <span className="font-bold">experiência sensorial</span> única para seu evento, com bebidas de qualidade superior e uma apresentação impecável.</p>
            <motion.button 
            whileHover={{scale:1.1}}
            className="bg-fontColours text-[#EBDED1] px-3 py-3 text-3xl phone:text-sm font-raleway rounded-xl mt-10 phone:w-[70%]">SOLICITE SEU ORÇAMENTO AGORA</motion.button>  
        </div>
    </div>
  )
}

export default Hero