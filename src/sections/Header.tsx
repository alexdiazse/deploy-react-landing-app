import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logoalex.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
        <div className="flex justify-center items-center py-3 bg-[#45b58f] text-white text-sm gap-3">
          <p className="text-white/60 hidden md:block">
            Invierte con intención y vive con experiencia
          </p>
          <div className= "inline-flex gap-1 items-center ">
            <p>Comienza aquí</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div className="py-5-">
        <div className= "container"> 
          <div className= "flex items-center justify-between">
            <Image src={Logo} alt="Alex Díaz Residencial Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden"/>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href='https://www.instagram.com/p/DDucLelB23R/'>Acerca de</a>
              <a href='https://www.instagram.com/p/DFx8X86vwSR/'>Casas</a>
              <a href='https://www.instagram.com/p/DC-ezjwN0c-/'>Departamentos</a>
              <a href='https://drive.google.com/file/d/1wLbVZ_zn0o_u-zmEnK2TLgRU_p7W_xac/view?usp=sharing'>Actualizaciones</a>
              <a href='#'>Ayuda</a>
              <a href="https://api.whatsapp.com/send?phone=529841970079&text=¡Hola,
%20quiero%20agendar%20mi%20asesoría%20para%20conocer%20el%20residencial!" target="_blank">
                <button className="bg-[black] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Quiero agendar mi asesoría</button>
              </a>
              
              
            </nav>
          </div>
        </div>
      </div>
    </header>  
  );
};
