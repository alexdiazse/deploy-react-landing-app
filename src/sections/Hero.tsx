"use client";

import ArrowIcon from '@/assets/arrow-right.svg';
import sauceImage from '@/assets/sauce1500.png';
import bugambiliaImage from "@/assets/bugambilia2.png";
import palmaImage from "@/assets/palma.png";
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } =useScroll({
    target: heroRef,
    offset: ["start end","end start"],
  });
  const translateY= useTransform(scrollYProgress, [0,1],[150,-150]);
  
  
  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb:10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#4CA585,#EAEEFE_100%)] overflow-x-clip"> 
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              Coto 12 disponible
              </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#4CA585] text-transparent bg-clip-text mt-6">Más que una inversión</h1>
            <p className="text-xl text-[#013e1d] tracking-tight mt-6">
              Celebra el logro de tomar decisiones con intención.
              Invierte en propiedades que te acercan a lo que realmente importa: tiempo, experiencias y calidad de vida.
            </p>
            <div className="flex gap items-center mt-[30px]">
              <a href='#Agenda'>
                <button className="btn btn-primary">Lo quiero</button>
              </a>
              <a href='#Productos'>
                <button className="btn btn-text gap-1">
                  
                  <span>Aprende más</span>
                  <ArrowIcon className="h-5 w-5 "/>
                  </button>
              </a>    
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img  src={sauceImage.src} alt="Sauce plus individual" className="md:absolute md:h-full md:w-auto md:max-w-none lg:left-0" 
            animate={{
              translateY: [-30,30]
            }}
            transition={ {
              repeat:Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
            />
            <motion.img src={bugambiliaImage.src} 
            width={220} height={220} alt="bugambilia"
            className="hidden md:block -top-8 -left-32 md:absolute"
            style={{
              translateY:translateY,
            }}
            />
            <motion.img src={palmaImage.src}width={220} alt="palma" className="hidden lg:block absolute top-[524px] left-[448px] rotate-[180deg]"
            style={{
              rotate:-180,
              translateY:translateY,
            }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
