"use client";
import CheckIcon from '@/assets/check.svg';
import {twMerge} from "tailwind-merge";
import {motion} from "framer-motion";

const pricingTiers = [
  {
    title: "Sauce Plus",
    monthlyPrice: 4.873,
    buttonText: "Cotiza ahora",
    popular: false,
    inverse: false,
    features: [
      "160 m² de construcción",
	  "Desde 100 m² de terreno",
	  "Dos niveles",
      "Tres recámaras",
	  "Doble terraza",
      "Tres y medio baños",
      "Closets y vestidor",
      "Closet de lavado",
      "Patio",
	  "Estacionamiento techado para dos vehículos",
      "Cisterna",
    ],
  },
  {
    title: "Borneo",
    monthlyPrice: 3.347,
    buttonText: "Cotiza ahora",
    popular: true,
    inverse: true,
    features: [
      "De 100 m² a 122 m² arquitectónicos",
      "Tres recámaras",
      "Dos baños",
      "Closets y vestidor",
      "Closet de lavado",
      "Terraza",
      "Elevador en cada edificio",
    ],
  },
  {
    title: "Encino",
    monthlyPrice: 4.137,
    buttonText: "Cotiza ahora",
    popular: false,
    inverse: false,
    features: [
      "150 m² de construcción",
	  "Desde 100 m² de terreno",
	  "Dos niveles",
      "Tres recámaras",
	  "Terraza",
      "Tres y medio baños",
      "Closets y vestidor",
      "Closet de lavado",
      "Patio",
	  "Estacionamiento techado para dos vehículos",
      "Cisterna",
    ],
  },
];

export const Pricing = () => {
  return <section id='Precios' className="bg-white py-24 ">
    <div className="container">
      <div className="section-heading">
        <h2 className="section-title">Precios</h2>
        <p className="section-description mt-5">Asesoría gratis. Promociones sujetas a disponibilidad, mejores amenidades 
        y acabados de lujo.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-start lg:justify-center">
        {pricingTiers.map(
          ({
            title, 
            monthlyPrice, 
            buttonText, 
            popular, 
            inverse, 
            features,
          },index)=>
            (
              <div key={index} className={twMerge("card",inverse === true && 'border-black bg-black text-white')}>
                <div  className="flex justify-between">
                  <h3  className={twMerge("text-lg font-bold text-black/50", inverse === true && 'text-white/60')}>{title}</h3>
                  {popular === true &&(
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span 
                    animate={{
                      backgroundPositionX: "100%",
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatType: "loop",
                    }}
                    className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    >
                      Más Popular
                    </motion.span>
                  </div>
                  )}                
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span  className="text-4xl font-bold tracking-tighter leading-none">Desde {monthlyPrice}</span>
                  <span className={twMerge("tracking-tight font-bold text-black/50", inverse === true && 'text-white/60')}>MDP</span>
                </div>
                <a href='https://forms.gle/rwwtfSYxwHYmzsYH8'>
                  <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>{buttonText}</button>
                </a>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature,index)=>(
                    <li key={index} className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6"/>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
             </div>    
            )
        )}
        
      </div>
    </div>

  </section>;
};
