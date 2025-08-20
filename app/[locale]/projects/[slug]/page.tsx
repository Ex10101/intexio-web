import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getProjectBySlug, getAllProjectSlugs } from '../data';
import ProjectCaseStudy from './ProjectCaseStudy';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

// Generate metadata for each project page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const title = locale === 'ru' ? project.titleRu : project.title;
  const description = locale === 'ru' ? project.shortDescriptionRu : project.shortDescription;

  return {
    title: `${title} - Intexio`,
    description,
    keywords: [
      ...project.technologies,
      'Web Development',
      'Project Portfolio',
      'Full Stack Development',
      title,
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} locale={locale} />;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  const locales = ['en', 'ru'];
  
  return slugs.flatMap((slug) =>
    locales.map((locale) => ({
      slug,
      locale,
    }))
  );
}
