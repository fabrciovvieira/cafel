import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'bgHero': "url('../assets/bgGeral3.svg')",
      'menuBg': "url('../assets/menubg.png')",
      'feedBackBg': "url('../assets/feebbackBg.png')",
      'logoCafe': "url('../assets/logoCafe.png')",
      'bgFoto1': "url('../assets/foto1.png')",
      'bgFoto2': "url('../assets/foto2.png')",
      'lastBg': "url('../assets/lastBg.png')",
    },
    screens: {
      'phone2': {'max': '380px'},
      'phone': {'max': '900px'},
      'ipad': {'max': '768px'},
      'tablet800': {'max': '830px'},
      'tablet': {'max': '1024px'},
      'laptop': {'max': '1100px'},
      'desktop': {'max': '1280px'},
    },
    extend: {
      colors: {
        background: "#DFCCB6",
        fontColours: "#422218",
      },
      fontFamily: {
        Cormorant: ['Cormorant', 'serif'],
        raleway: ['raleway', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
