'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Mail, Phone} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Intexio Logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@intexio.sk" className="hover:text-blue-400 transition-colors duration-200">
                  info@intexio.sk
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+421905123456" className="hover:text-blue-400 transition-colors duration-200">
                  +421 905 123 456
                </a>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.1}}
            viewport={{once: true}}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">
              {t('services.title')}
            </h3>
            <ul className="space-y-2">
              {t.raw('services.list').map((service: string, index: number) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">
              {t('links.title')}
            </h3>
            <ul className="space-y-2">
              {t.raw('links.list').map((link: {href: string; label: string}, index: number) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.3}}
          viewport={{once: true}}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Intexio. {t('copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
