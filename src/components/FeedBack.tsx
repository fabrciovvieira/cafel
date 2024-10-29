"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const menus = [
  {
    title: "MENU CLÁSSICO",
    items: [
      { name: "Carioca", description: "(expresso e água)" },
      { name: "Expresso", description: "(expresso puro)" },
      { name: "Macchiato", description: "(expresso com espuma do leite)" },
      { name: "Latte", description: "(expresso com leite)" },
      { name: "Chá variados", description: "" },
      { name: "Cappuccino italiano", description: "(expresso, leite e cacau em pó)" },
    ],
  },
  {
    title: "MENU GOURMET",
    items: [
      { name: "Menu de Café Clássico + Cappuccino Vanilla", description: "(expresso, cacau, leite e essência)" },
      { name: "Expresso romano", description: "(expresso com raspas de limão siciliano)" },
      { name: "Chocolate quente", description: "" },
    ],
  },
  {
    title: "MENU PREMIUM",
    items: [
      { name: "Menu de Café Clássico + petit fours", description: "" },
      { name: "Cappuccino tradicional", description: "(mistura sabor canela)" },
      { name: "Moccaccino", description: "(expresso, espuma do leite e calda de chocolate)" },
      { name: "Expresso com licor 43", description: "" },
      { name: "Expresso com amarula", description: "" },
      { name: "Expresso com baileys", description: "" },
      { name: "Expresso com essências", description: "" },
    ],
  },
  {
    title: "MENU OURO",
    items: [
      { name: "Expresso", description: "" },
      { name: "Macchiato", description: "" },
      { name: "Latte", description: "" },
      { name: "Soda italiana", description: "água com gás, gelo e xarope de maçã verde ou frutas vermelhas" },
      { name: "Mocca gelado", description: "leite, calda de chocolate, gelo e expresso" },
      { name: "Latte caramelo gelado", description: "leite, calda de caramelo e gelo" },
    ],
  },
];

const FeedBack = () => {
  const [currentMenu, setCurrentMenu] = useState(0);

  const handleDragEnd = (event: unknown, info: { offset: { x: number; }; }) => {
    // Verifica a direção do arrasto
    if (info.offset.x < -100) {
      // Arrastou para a esquerda
      nextMenu();
    } else if (info.offset.x > 100) {
      // Arrastou para a direita
      prevMenu();
    }
  };

  const nextMenu = () => {
    setCurrentMenu((prev) => (prev + 1) % menus.length);
  };

  const prevMenu = () => {
    setCurrentMenu((prev) => (prev - 1 + menus.length) % menus.length);
  };

  return (
    <div className="w-screen h-screen bg-feedBackBg bg-cover bg-no-repeat flex flex-col items-center phone:pb-16 phone2:top-[300px]">
      <motion.div
        key={currentMenu}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        drag="x" // Habilita o arrasto no eixo X
        dragConstraints={{ left: 0, right: 0 }} // Restringe o arrasto ao eixo X
        onDragEnd={handleDragEnd} // Chama a função ao terminar o arrasto
        className="flex flex-col justify-center items-center text-center flex-grow"
      >
        <h1 className="text-4xl font-Cormorant text-fontColours font-bold mb-4 italic phone:mt-32 phone2:mt-40">{menus[currentMenu].title}</h1>
        <div className="space-y-2 px-4">
          {menus[currentMenu].items.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center font-raleway">
              <span className="text-xl phone:text-2xl">{item.name}</span>
              <span className="text-sm text-gray-600">{item.description}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex justify-between w-full px-4 pb-10 phone:justify-center phone:h-screen">
        <button onClick={prevMenu} className="text-2xl text-white bg-black rounded-full px-2 hover:bg-gray-700 transition duration-200 phone:hidden">←</button>
        <div className="flex space-x-2 mt-8">
          {menus.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${index === currentMenu ? 'bg-fontColours' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button onClick={nextMenu} className="text-2xl text-white bg-black rounded-full px-2 hover:bg-gray-700 transition duration-200 phone:hidden">→</button>
      </div>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="bg-fontColours text-[#EBDED1] px-3 py-3 text-3xl phone:text-sm font-raleway rounded-xl mt-10 phone:w-[70%] mb-7 phone:mb-16 "
      >
        SOLICITE SEU ORÇAMENTO AGORA
      </motion.button>
    </div>
  );
};

export default FeedBack;
