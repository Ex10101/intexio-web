'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Mail, Phone, MapPin, MessageCircle} from 'lucide-react';

export default function Contact() {
  const t = useTranslations('Contact');

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('email.title'),
      value: 'intexio-dev@gmail.com',
      link: 'mailto:intexio-dev@gmail.com',
    },
    {
      icon: Phone,
      title: t('phone.title'),
      value: '+421 951 490 709',
      link: 'tel:+421951490709',
    },
    {
      icon: MessageCircle,
      title: t('whatsapp.title'),
      value: '+421 951 490 709',
      link: 'https://wa.me/421951490709',
    },
    {
      icon: MapPin,
      title: t('location.title'),
      value: t('location.value'),
    },
  ];

  return (
    <section id="contact" className="py-16 relative">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-blue-900/10 to-blue-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Contact Details */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('getInTouch')}
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-lg">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('form.title')}
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t('form.description')}
            </p>
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{t('form.emailDirect')}</p>
                      <p className="text-gray-400 text-sm">{t('form.responseTime')}</p>
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:intexio-dev@gmail.com"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {t('form.cta')}
                </a>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  {t('form.alternative')}
                </p>
                <a
                  href="tel:+421951490709"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  +421 951 490 709
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
