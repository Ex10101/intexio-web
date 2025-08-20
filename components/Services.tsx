'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Code, TrendingUp, Zap, Palette, Search, Share2, Check} from 'lucide-react';

export default function Services() {
  const t = useTranslations('Services');
  const services = t.raw('items');

  const iconMap = {
    Code: Code,
    TrendingUp: TrendingUp,
    Zap: Zap,
    Palette: Palette,
    Search: Search,
    Share2: Share2,
  };

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-16 relative">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-blue-900/10 to-blue-900/5"></div>
      
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service: {title: string; description: string; features: string[]; icon: string}, index: number) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{y: -5}}
                className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
