'use client';
import productImage from '@/assets/product_selvanova_1.png'
import cojinImage from '@/assets/cojin.png';
import flotadorImage from '@/assets/flotador.png';
import jaronImage from '@/assets/jarron.png';
import Image from 'next/image';
import {motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef= useRef(null);
  const {scrollYProgress}= useScroll({
    target:sectionRef,
    offset: ['start end','end start']
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150,-150]);
  return (
  <section id="Productos" ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D5F4DA] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div  className="tag">Escritura Inmediata</div>
        </div>
        <h2  className="section-title mt-5">
          Una manera efectiva para invertir
        </h2>
        <p  className="section-description mt-5">
          Gestion total en el proceso de tu compra, créditos bancarios, entidades financieras y recursos propios. Cotiza tu plan de pagos o mensualidades en minutos.
        </p>
      </div>
      <div className='relative'>
        <Image src={productImage} alt='Modelos disponibles*' className="mt-10"/>
        <motion.img src={cojinImage.src} alt='Cojín' height={262}  width={262} className="hidden md:block absolute rotate-[45deg] mt-10 -right-36 -top-32" 
          style={{translateY,
           }}
        />
        <motion.img src={flotadorImage.src} alt='Flotador' height={248} width={248} className='hidden md:block absolute rotate-[45deg] bottom-24 -left-36'
        style={{translateY,
          }}
        />
      </div>
     </div>
  </section>
  );
};
