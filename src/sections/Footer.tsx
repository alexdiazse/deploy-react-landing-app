import logo from "@/assets/logoalex.png"
import Image from "next/image";
import Socialx from "@/assets/social-x.svg";
import Socialinsta from "@/assets/social-insta.svg";
import Sociallinkedin from "@/assets/social-linkedin.svg";
import Socialpin from "@/assets/social-pin.svg";
import Socialyoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
  <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
    <div className="container">
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[#40BA8F] before:absolute">
        <Image src={logo} alt="Logo Alex Díaz" height={40} className="relative "/>      
        </div>
      <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 ">
        <a href="#">Inicio</a>
        <a href="#Productos">Productos</a>
        <a href="#Clientes">Clientes</a>
        <a href="#Precios">Precios</a>
        <a href="#">Ayuda</a>
        <a href="#">Contacto</a>
      </nav>
      <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.facebook.com/alex.realestate.gv"target="_blanck">
            <Socialx />
          </a>
          <a href="https://www.instagram.com/alex.realestate.gv/"target="_blanck">
            <Socialinsta />
          </a>
          <a href="www.linkedin.com/in/alejandro-díaz-9b5809230" target="_blanck">
            <Sociallinkedin />
          </a>
          <a href="https://www.tiktok.com/@alex_diaz_residencial" target="_black">
            <Socialpin />
          </a>         
          <a href="https://www.youtube.com/@AlexD%C3%ADaz_gv" target="_blanck">     
            <Socialyoutube />
          </a>      
      </div>
      <p className="mt-6">&copy; 2025 Alex Díaz Residencial. Todos los derechos reservados.</p>
    </div>
  </footer>
  );
};
