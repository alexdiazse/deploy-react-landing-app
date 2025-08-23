'use client';
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import test from "node:test";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Me encanta selvanova porque siempre se conserva en muy buen estado y con mantenimiento y si tienes la suerte de tener una buena administración y VECINOS O PROPIETARIOS RESPONSABLES DE PAGAR SU CUOTA DE MANTENIMIENTO. SELVANOVA ES UNA BUENA OPCIÓN PARA TU PATRIMONIO.",
    imageSrc: avatar1.src,
    name: "Marco Cesar",
    username: "@MarcoCesar",
  },
  {
    text: "Nice apartment complex with amenities.",
    imageSrc: avatar2.src,
    name: "Bil Edwards",
    username: "@BillEdwards",
  },
  {
    text: "Muy buen lugar para vivir casas de buen diseño excelente y exclusivo con seguridad las 24 horas.",
    imageSrc: avatar3.src,
    name: "Demetrio Lopez",
    username: "@DemetrioLopez",
  },
  {
    text: "Un lugar muy tranquilo, los departamentos están espectaculares y las instalaciones geniales.",
    imageSrc: avatar4.src,
    name: "Priscila",
    username: "@Priscila",
  },
  {
    text: "Me encanta el fraccionamiento, ojalá así se conserve siempre.",
    imageSrc: avatar5.src,
    name: "Luz María Sierra",
    username: "@LuzMaríaSierra",
  },
  {
    text: "Bonito lugar para vivir.",
    imageSrc: avatar6.src,
    name: "Alfredo",
    username: "@Alfredo",
  },
  {
    text: "Very happy with this 5 star home development in Playa del Carmen. Amazing finishes. Great layouts. Very nice pool and great security.",
    imageSrc: avatar7.src,
    name: "Sebastian acosta",
    username: "@Sebastianacosta",
  },
  {
    text: "Un lugar realmente excepcional para vivir. Con terminados de muy alta calidad y unas increíbles amenidades como una piscina de alto nivel y mucho más.  Muy buena seguridad.",
    imageSrc: avatar8.src,
    name: "Sebastian Acosta Group One Sotheby’s",
    username: "@Sebastianacosta",
  },
  {
    text: "Great place to live or vacay. The pool super clean and big😍. Everything is close by and the beach it’s about 11 min by car.",
    imageSrc: avatar9.src,
    name: "Emiliano & sophie Cervantes",
    username: "@Emiliano&sophie",
  },
];

const firstColumn= testimonials.slice(0,3);
const secondColumn= testimonials.slice(3,6);
const thirdColumn= testimonials.slice(6,9);

const TestimonialsColumn= (props:{className?:string; testimonials: typeof testimonials; duration?:number }) => (
      <div className={props.className}>
        <motion.div 
          animate={{
            translateY: '-50%',
          }}
          transition={{
            duration: props.duration || 10,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        
        className="flex flex-col gap-6 pb-6">
            {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({text, imageSrc, name, username},index) => (
                <div key={index} className="card"> 
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src= {imageSrc} 
                      alt={name} 
                      width={40} 
                      height={40} 
                      className="h-10 w-10 rounded-full" 
                    />
                    <div className="flex flex-col ">
                      <div key={name} className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              ))}

            </React.Fragment>
          ))}
          
        </motion.div>
      </div>
      );

export const Testimonials = () => {
  return <section id="Clientes" className="bg-white py-0">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Testimonios</div>
        </div>
          <h2 className="section-title mt-5">Lo que opinan nuestros clientes</h2>
          <p className="section-description mt-5">Desde residentes locales, retirados, vacacionistas e inversores</p>
      </div>
      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden "> 
         <TestimonialsColumn testimonials={firstColumn} duration={15}/>
         <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19}/>
         <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17}/>
      </div>
    </div>
  </section>;
};
