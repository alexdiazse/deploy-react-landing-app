"use client";
import alexLogo from '@/assets/logo-alexbn.png';
import gvelasLogo from '@/assets/logo-grupovelasbn.png';
import selvanovaLogo from '@/assets/logo-selvanovabn.png';
import velatowersLogo from '@/assets/logo-velatowersbn.png';
import playaLogo from '@/assets/logo-playabn.png';
import aldeaLogo from '@/assets/logo-aldeabn.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}>
            <Image src={alexLogo} alt="Alex Díaz logo" className="logo-ticker-image"/>
            <Image src={gvelasLogo} alt="Grupo Velas logo" className="logo-ticker-image"/>
            <Image src={selvanovaLogo} alt="Selvanova Residencial logo" className="logo-ticker-image"/>
            <Image src={playaLogo} alt="Let's Playa logo" className="logo-ticker-image"/>
            <Image src={velatowersLogo} alt="Vela Towers logo" className="logo-ticker-image"/>
            <Image src={aldeaLogo} alt="Aldea Serena logo" className="logo-ticker-image"/>
         
            {/*second set of logos for animation */}
            <Image src={alexLogo} alt="Alex Díaz logo" className="logo-ticker-image"/>
            <Image src={gvelasLogo} alt="Grupo Velas logo" className="logo-ticker-image"/>
            <Image src={selvanovaLogo} alt="Selvanova Residencial logo" className="logo-ticker-image"/>
            <Image src={playaLogo} alt="Let's Playa logo" className="logo-ticker-image"/>
            <Image src={velatowersLogo} alt="Vela Towers logo" className="logo-ticker-image"/>
            <Image src={aldeaLogo} alt="Aldea Serena logo" className="logo-ticker-image"/>

         
          </motion.div>
        </div>
      </div>;
    </div>
  )
};
