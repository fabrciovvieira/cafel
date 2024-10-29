import Image from "next/image"
import logo from '@/assets/logoCafe.png'

const Menus = () => {
  return (
    <div className="w-full h-screen bg-menuBg relative bg-cover  bg-no-repeat">
        <div className="flex flex-col justify-center items-center absolute top-[450px] phone:top-[600px] phone2:top-[300px] w-full m-auto">
            <Image src={logo} alt="logo"></Image>
            <p className="text-4xl font-raleway text-fontColours phone:text-2xl phone:absolute phone:top-[160px] phone:font-thin phone2:top-[200px] phone2:hidden">Cafeteria completa para eventos</p>
        </div>
    </div>
  )
}

export default Menus