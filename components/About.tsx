'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Users, Code, TrendingUp} from 'lucide-react';

export default function About() {
  const t = useTranslations('About');

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

  const teamMembers = [
    {
      name: 'Sergey Davidovich',
      role: t('sergey.role'),
      description: t('sergey.description'),
      image: '/sergey.jpg',
      icon: Code,
    },
    {
      name: 'Konstantin Shevtsov',
      role: t('konstantin.role'),
      description: t('konstantin.description'),
      image: '/konstantin.jpg',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="py-16 relative">
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
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            {t('subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-2 text-blue-400">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">{t('since')}</span>
          </div>
        </motion.div>

        {/* Company Description */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-12 text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            {t('team.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{y: -5}}
                  className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    {/* Member Info */}
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-blue-400 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
