'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Lottie from 'lottie-react';
import {useEffect, useState} from 'react';

export default function Hero() {
  const t = useTranslations('Hero');
  const [animationData, setAnimationData] = useState(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typewriterTexts = t.raw('typewriter.suffixes');
  const currentFullText = typewriterTexts[currentTextIndex];

  useEffect(() => {
    fetch('/hero-animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typewriter = () => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      } else {
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }
    };

    const timer = setTimeout(typewriter, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, currentFullText, typewriterTexts.length]);

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">


      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-900/10 to-blue-900/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation - Mobile First */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.3}}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="w-full max-w-md lg:max-w-lg">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-full h-96 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-400 text-lg">Loading...</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              <span className="text-white font-light tracking-wider" style={{fontFamily: 'var(--font-futura)'}}>
                {t('typewriter.prefix')}
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-gray-500 via-gray-500 to-transparent my-4 mx-auto lg:mx-0"></div>
                              <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center lg:justify-start">
                  <div className="relative">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent font-bold" style={{fontFamily: 'var(--font-futura)'}}>
                      {currentText}
                      <span className="text-white animate-pulse ml-1">|</span>
                    </span>
                  </div>
                </div>
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.6}}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
                <a href="#projects" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto px-8 py-4 h-14 cursor-pointer bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#projects');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {t('cta.references')}
                  </motion.button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto px-8 py-4 h-14 cursor-pointer border-2 border-blue-900 text-blue-200 font-semibold rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {t('cta.contact')}
                  </motion.button>
                </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
