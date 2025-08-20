import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
