'use client';

import { useTranslations } from 'next-intl';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ProjectData, getAllProjectSlugs, projectsData } from '../data';

interface ProjectCaseStudyProps {
  project: ProjectData;
  locale: string;
}

export default function ProjectCaseStudy({ project, locale }: ProjectCaseStudyProps) {
  const t = useTranslations('CaseStudy');
  
  const isRussian = locale === 'ru';
  const title = isRussian ? project.titleRu : project.title;
  const date = isRussian ? project.dateRu : project.date;
  const duration = isRussian ? project.durationRu : project.duration;
  const status = isRussian ? project.statusRu : project.status;
  const description = isRussian ? project.fullDescriptionRu : project.fullDescription;
  const features = isRussian ? project.featuresRu : project.features;

  // Get navigation between projects
  const allSlugs = getAllProjectSlugs();
  const currentIndex = allSlugs.indexOf(project.slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : allSlugs[allSlugs.length - 1];
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : allSlugs[0];

  // Prepare images for the gallery
  const galleryImages = project.images.map((image) => ({
    original: image,
    thumbnail: image,
    originalAlt: title,
    thumbnailAlt: title,
  }));

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Beautiful gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/10 via-transparent to-cyan-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {isRussian ? 'Назад на главную' : 'Back to Home'}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl">
            {isRussian ? project.shortDescriptionRu : project.shortDescription}
          </p>
          
          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{t('duration')}: {duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>{t('status')}: {status}</span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {t('gallery')}
          </h2>
          <div className="bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-slate-600/50 transition-all duration-300">
            <ImageGallery
              items={galleryImages}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
              slideInterval={3000}
              slideOnThumbnailOver={true}
              additionalClass="custom-gallery"
              useBrowserFullscreen={false}
              disableSwipe={false}
              lazyLoad={true}
            />
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 mb-8 hover:border-slate-600/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {isRussian ? 'Описание проекта' : 'Project Overview'}
              </h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {description}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 mb-8 hover:border-slate-600/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('features')}
              </h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>


          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                {isRussian ? 'Ссылки' : 'Links'}
              </h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t('viewLive')}</span>
                </a>
                {project.githubUrl !== "-" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('sourceCode')}</span>
                  </a>
                )}
                {project.githubUrl === "-" && (
                  <span className="flex items-center gap-2 text-gray-500">
                    <Github className="w-4 h-4" />
                    <span>{t('notAvailable')}</span>
                  </span>
                )}
              </div>
            </div>
                     </div>
         </div>

         {/* Project Navigation */}
         <div className="mt-16 pt-8 border-t border-gray-700">
           <div className="flex justify-between items-center">
             <Link
               href={`/${locale}/projects/${prevSlug}`}
               className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
             >
               <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
               <div className="text-right">
                 <div className="text-sm text-gray-400">
                   {isRussian ? 'Предыдущий проект' : 'Previous Project'}
                 </div>
                 <div className="font-medium">
                   {isRussian ? projectsData[prevSlug].titleRu : projectsData[prevSlug].title}
                 </div>
               </div>
             </Link>

             <Link
               href={`/${locale}/projects/${nextSlug}`}
               className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
             >
               <div className="text-left">
                 <div className="text-sm text-gray-400">
                   {isRussian ? 'Следующий проект' : 'Next Project'}
                 </div>
                 <div className="font-medium">
                   {isRussian ? projectsData[nextSlug].titleRu : projectsData[nextSlug].title}
                 </div>
               </div>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
         </div>
       </div>

              <style jsx global>{`
         .custom-gallery .image-gallery-slide .image-gallery-image {
           border-radius: 8px;
           max-height: 70vh;
           object-fit: contain;
         }
         .custom-gallery .image-gallery-thumbnail .image-gallery-thumbnail-image {
           border-radius: 4px;
         }
         .custom-gallery .image-gallery-thumbnail.active .image-gallery-thumbnail-image {
           border: 2px solid #3b82f6;
         }
         .custom-gallery .image-gallery-icon {
           filter: invert(1);
         }
         .custom-gallery .image-gallery-icon:hover {
           color: #3b82f6;
         }
         
         /* Mobile-specific styles */
         @media (max-width: 768px) {
           .custom-gallery .image-gallery-slide .image-gallery-image {
             max-height: 50vh;
             width: 100%;
             object-fit: contain;
           }
           .custom-gallery .image-gallery-thumbnails-wrapper {
             max-height: 80px;
           }
           .custom-gallery .image-gallery-thumbnail {
             width: 60px;
             height: 60px;
           }
           .custom-gallery .image-gallery-thumbnail-image {
             width: 100%;
             height: 100%;
             object-fit: cover;
           }
         }
         
         /* Prevent fullscreen issues on mobile */
         .custom-gallery .image-gallery-fullscreen-button {
           display: none !important;
         }
         
         /* Ensure gallery stays within viewport */
         .custom-gallery {
           max-width: 100%;
           overflow: hidden;
         }
       `}</style>
    </main>
  );
}
