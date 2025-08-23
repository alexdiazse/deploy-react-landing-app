'use client';

import ArrowRight from "@/assets/arrow-right.svg";
import estrellamarImage from "@/assets/estrellamar.png";
import jarronImage from "@/assets/jarron.png";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end','end start'],
  })

  const translateY= useTransform(scrollYProgress, [0,1],[150,-150]);

  return (
    <section id="Agenda" ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2  className="section-title">Agenda tu asesoría gratis hoy</h2>
          <p className="section-description mt-5">Celebra el logro de tomar decisiones con intención.</p>
          <motion.img 
          src={estrellamarImage.src} 
          alt="Estrella de mar" 
          width={360} 
          className="hidden md:block absolute -left-[300px] -top-[137px] rotate-[25deg]" 
          style={{
            translateY,
          }}
          />
          <motion.img
          src={jarronImage.src}
          alt="Jarrón"
          width={360}
          className="hiddden md:block absolute -right-[331px] -top-[19px] rotate-[45deg]"
          style={{
            translateY,
          }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a href="https://api.whatsapp.com/send?phone=529841970079&text=¡Hola,
%20quiero%20agendar%20mi%20asesoría%20gratuita%20en%20Selvanova%20residencial!" target="_blank">
            <button className="btn btn-primary">Agendar mi asesoría gratis</button>
          </a>  
          <a href='https://drive.google.com/file/d/1wLbVZ_zn0o_u-zmEnK2TLgRU_p7W_xac/view?usp=sharing'>    
              <button className="btn btn-text gap-1">
                <span>Aprende más</span>
                <ArrowRight className="h-5 w-5" />
              </button>
          </a>              
        </div>
      </div>
    </section>
  );
};
