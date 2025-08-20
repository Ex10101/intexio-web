'use client';

import {useTranslations} from 'next-intl';
import {Link, usePathname, useRouter} from '@/i18n/navigation';
import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Globe, Menu, X} from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with id ${href} not found`);
      }
    }, 150);
  };

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, {locale});
    setIsOpen(false);
  };

  const navItems = [
    {href: '#home', label: t('home')},
    {href: '#services', label: t('services')},
    {href: '#projects', label: t('references')},
    {href: '#about', label: t('about')},
    {href: '#contact', label: t('contact')},
  ];

  return (
    <motion.nav
      initial={{y: -100}}
      animate={{y: 0}}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Intexio Logo"
              width={130}
              height={130}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  initial={false}
                />
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Globe size={20} />
                <span>{t('language')}</span>
              </button>
              <div className="absolute overflow-hidden right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="block w-full cursor-pointer text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('ru')}
                  className="block w-full cursor-pointer text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  Русский
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-3 px-2 cursor-pointer touch-manipulation"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400 mb-2">{t('language')}</div>
                <div className="space-y-2">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ru')}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Русский
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
