import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import One from "../../assets/Hero/2.png";
import Second from "../../assets/Hero/6.png";
import Third from "../../assets/Hero/7.png";
import Four from '../../assets/Hero/8.png';
import Fifth from "../../assets/Hero/9.png";
import Six from '../../assets/Hero/10.png';
import e1 from '../../assets/Hero/e2.png';
import e2 from '../../assets/Hero/e3.png';
import e3 from '../../assets/Hero/e5.png';
import e4 from '../../assets/Hero/e9.png';

const Hero = () => {
  const slides = [One, Second, Third, Four, Fifth, Six];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[80vh] md:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 bg-gradient-to-br from-[#40908420] to-[#54748434] overflow-hidden">

      
      <img 
        src={e1} 
        className="absolute top-10 left-10 w-14 h-14 opacity-30 z-0 animate-pulse pointer-events-none" 
        alt="emoji" 
      />
      <img 
       src={e2} 
        className="absolute bottom-16 right-12 w-14 h-14 opacity-30 z-0  pointer-events-none" 
        alt="emoji" 
      />
      <img 
        src={e3} 
        className="absolute top-1/2 left-[20%] w-14 h-14 opacity-20 z-0 animate-bounce pointer-events-none" 
        alt="emoji" 
      />
      <img 
       src={e4} 
        className="absolute top-[30%] right-[15%] w-16 h-16 opacity-20 z-0 rotate-12 pointer-events-none" 
        alt="emoji" 
      />

  
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="text-center lg:text-left max-w-2xl z-10 py-8 lg:py-0"
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#409084]">
          Publish your passions,
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-0 md:mb-8 text-[#547484]">
          Create a unique and beautiful blog easily, Create a beautiful blog that fits your style.
        </p>
      </motion.div>

    
      <div className="relative mt-[-30px] w-full lg:w-[60%] h-[60vh] md:h-[60vh] lg:h-[70vh] z-10">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentIndex && (
              <motion.img
                key={index}
                src={slide}
                className="absolute inset-0 w-full h-full object-contain rounded-xl "
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  scale: { type: "spring", damping: 12, stiffness: 100 }
                }}
              />
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
