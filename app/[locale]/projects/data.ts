export interface ProjectData {
  id: number;
  title: string;
  titleRu: string;
  slug: string;
  date: string;
  dateRu: string;
  duration: string;
  durationRu: string;
  status: string;
  statusRu: string;
  image: string;
  images: string[];
  shortDescription: string;
  shortDescriptionRu: string;
  fullDescription: string;
  fullDescriptionRu: string;
  technologies: string[];
  features: string[];
  featuresRu: string[];
  challenges: string[];
  challengesRu: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projectsData: Record<string, ProjectData> = {
  'aksioma-tver-clinic': {
    id: 1,
    title: "Aksioma Tver Clinic",
    titleRu: "Клиника Аксиома Тверь",
    slug: "aksioma-tver-clinic",
    date: "July 2025",
    dateRu: "Июль 2025",
    duration: "4 months",
    durationRu: "4 месяца",
    status: "Completed",
    statusRu: "Завершен",
    image: "/aksioma-1.png",
    images: [
      "/aksioma-1.png",
      "/aksioma-2.png",
      "/aksioma-3.png",
      "/aksioma-4.png"
    ],
    shortDescription: "A modern and responsive website with complex content management system for a large clinic in Tver, Russia.",
    shortDescriptionRu: "Современный и адаптивный веб-сайт с комплексной системой управления контентом для крупной клиники в Твери, Россия.",
    fullDescription: `Aksioma Tver Clinic represents a comprehensive digital transformation for one of Tver's largest medical facilities. The main task was to transfer the website from Wordpress to Next.js and create a complex content management system for non-technical medical staff. This project involved creating a sophisticated web platform that serves both patients and medical staff with seamless functionality and intuitive design.

The website features a modern, accessible design that prioritizes user experience for all age groups. The platform integrates with existing appointment booking systems and provides comprehensive information about medical services. The content management system allows clinic staff to easily update service information, doctor profiles, and medical articles.

Built with cutting-edge technologies, the platform ensures fast loading times, excellent SEO performance, and robust security for handling sensitive medical information. The authentication system provides secure access for clinic staff to manage content while maintaining strict privacy compliance.`,
    fullDescriptionRu: `Клиника Аксиома Тверь представляет собой комплексную цифровую трансформацию одного из крупнейших медицинских учреждений Твери. Основной задачей было перенести веб-сайт с Wordpress на Next.js и создать комплексную систему управления контентом для нетехнического медицинского персонала. Этот проект включал создание сложной веб-платформы, которая обслуживает как пациентов, так и медицинский персонал с безупречной функциональностью и интуитивным дизайном.

Веб-сайт отличается современным, доступным дизайном, который приоритизирует пользовательский опыт для всех возрастных групп. Платформа интегрируется с существующими системами бронирования приемов и предоставляет исчерпывающую информацию о медицинских услугах. Система управления контентом позволяет персоналу клиники легко обновлять информацию об услугах, профили врачей и медицинские статьи.

Построенная на передовых технологиях, платформа обеспечивает быстрое время загрузки, отличную производительность SEO и надежную безопасность для обработки конфиденциальной медицинской информации. Система аутентификации обеспечивает безопасный доступ для персонала клиники к управлению контентом при соблюдении строгих требований конфиденциальности.`,
    technologies: ["Next.js", "TypeScript", "NextAuth", "MongoDB", "TailwindCSS", "Shadcn/UI", "React", "Mongoose", "SEO"],
    features: [
      "Patient Appointment Booking System Integration",
      "Secure Admin Authentication",
      "Content Management System for Medical Staff",
      "Doctor Profiles & Service Information",
      "Medical Article Publishing System",
      "Responsive Design for All Devices",
      "SEO Optimization",
      "Contact Forms & Communication Tools"
    ],
    featuresRu: [
      "Интеграция системы бронирования приемов пациентов",
      "Безопасная аутентификация администратора",
      "Система управления контентом для медицинского персонала",
      "Профили врачей и информация об услугах",
      "Система публикации медицинских статей",
      "Адаптивный дизайн для всех устройств",
      "SEO оптимизация",
      "Контактные формы и инструменты связи"
    ],
    challenges: [
      "Building a complex content management system for non-technical medical staff",
      "Transfering the website from Wordpress to Next.js without losing any functionality and content",
      "Optimizing the website for SEO",
      "Ensuring easy to use UI/UX for all age groups",
      "Integrating complex medical service and doctors categorization"
    ],
    challengesRu: [
      "Создание сложной системы управления контентом для нетехнического медицинского персонала",
      "Перенос веб-сайта с Wordpress на Next.js без потери функциональности и контента",
      "Оптимизация веб-сайта для SEO",
      "Обеспечение простого в использовании UI/UX для всех возрастных групп",
      "Интеграция сложной категоризации медицинских услуг и врачей"
    ],
    githubUrl: "-",
    liveUrl: "https://aksioma-tver.ru"
  },
  'car-wash-city-group': {
    id: 2,
    title: "Car Wash City Group",
    titleRu: "Car Wash City Group",
    slug: "car-wash-city-group", 
    date: "April 2025",
    dateRu: "Апрель 2025",
    duration: "6 months",
    durationRu: "6 месяцев",
    status: "Completed",
    statusRu: "Завершен",
    image: "/carwash-1.png",
    images: [
      "/carwash-1.png",
      "/carwash-2.png",
      "/carwash-3.png",
      "/carwash-4.png",
      "/carwash-5.png"
    ],
    shortDescription: "A modern and responsive website for a largest hand car wash network in Bratislava, Slovakia. With a complex reservation system and admin panel with business automatization functionalities. Also provided comprehensive SMM services.",
    shortDescriptionRu: "Современный и адаптивный веб-сайт для крупнейшей сети ручной мойки автомобилей в Братиславе, Словакия. С комплексной системой бронирования и административной панелью с функциями автоматизации бизнеса. Также предоставлены комплексные SMM услуги.",
    fullDescription: `Car Wash City Group represents the digital transformation of Slovakia's largest hand car wash network. This comprehensive platform provides customers with seamless online booking experiences while empowering business owners with powerful automation tools.

The task was to modernize the existing website's design, transfer it to Next.js to ensure faster loading times, excellent SEO performance and implement a complex reservation system and admin panel with business automatization functionalities. The platform features an advanced reservation system that allows customers to book services across multiple locations, select specific time slots, and choose from various service packages. The intelligent scheduling system prevents conflicts and optimizes resource allocation across all locations.

The admin panel provides comprehensive business management tools including real-time analytics, automated customer communications, staff scheduling, and revenue tracking. Integration with communication services ensures customers receive timely notifications about their appointments via SMS and email, creating a professional and reliable service experience.

Additionally, we provided comprehensive Social Media Marketing (SMM) services, including strategic content creation, community management, and targeted advertising campaigns across multiple social media platforms to increase brand awareness and drive customer engagement for the car wash network.`,
    fullDescriptionRu: `Car Wash City Group представляет собой цифровую трансформацию крупнейшей сети ручной мойки автомобилей в Словакии. Эта комплексная платформа предоставляет клиентам безупречный опыт онлайн-бронирования, одновременно предоставляя владельцам бизнеса мощные инструменты автоматизации.

Задачей было модернизировать дизайн существующего веб-сайта, перенести его на Next.js для обеспечения более быстрого времени загрузки, отличной производительности SEO и реализовать комплексную систему бронирования и административную панель с функциями автоматизации бизнеса. Платформа оснащена продвинутой системой бронирования, которая позволяет клиентам бронировать услуги в нескольких местах, выбирать конкретные временные слоты и выбирать из различных пакетов услуг. Интеллектуальная система планирования предотвращает конфликты и оптимизирует распределение ресурсов по всем локациям.

Административная панель предоставляет комплексные инструменты управления бизнесом, включая аналитику в реальном времени, автоматизированные коммуникации с клиентами, планирование персонала и отслеживание доходов. Интеграция с сервисами связи обеспечивает своевременные уведомления клиентов об их записях через SMS и электронную почту, создавая профессиональный и надежный сервисный опыт.

Дополнительно мы предоставили комплексные услуги SMM (маркетинг в социальных сетях), включая стратегическое создание контента, управление сообществом и целевые рекламные кампании на нескольких платформах социальных сетей для повышения узнаваемости бренда и увеличения вовлеченности клиентов сети автомоек.`,
    technologies: ["Next.js", "React", "TailwindCSS", "Supabase", "PostgreSQL", "Resend", "Twilio", "React Hook Form", "Zod", "SEO"],
    features: [
      "Multi-location Reservation System",
      "Real-time Availability Checking",
      "Automated SMS & Email Notifications",
      "Workers Management Dashboard",
      "Content Management System",
      "Revenue Analytics & Reporting",
      "Mobile-responsive Booking Interface",
      "SEO Optimization",
      "Social Media Marketing (SMM) Services",
      "Strategic Content Creation",
      "Community Management",
      "Targeted Advertising Campaigns",
      "Multi-platform Social Media Presence"
    ],
    featuresRu: [
      "Система бронирования для нескольких локаций",
      "Проверка доступности в реальном времени",
      "Автоматизированные SMS и Email уведомления",
      "Панель управления работниками",
      "Система управления контентом",
      "Аналитика доходов и отчеты",
      "Мобильный адаптивный интерфейс бронирования",
      "SEO оптимизация",
      "Услуги SMM (маркетинг в социальных сетях)",
      "Стратегическое создание контента",
      "Управление сообществом",
      "Целевые рекламные кампании",
      "Мультиплатформенное присутствие в социальных сетях"
    ],
    challenges: [
      "Building a complex multi-location booking system with real-time availability",
      "Integrating multiple communication channels (SMS, Email) reliably",
      "Creating an intuitive admin interface for non-technical staff",
      "Implementing robust form validation and error handling",
      "Optimizing database queries for real-time availability checks"
    ],
    challengesRu: [
      "Создание сложной системы бронирования для нескольких локаций с проверкой доступности в реальном времени",
      "Надежная интеграция нескольких каналов связи (SMS, Email)",
      "Создание интуитивного административного интерфейса для нетехнического персонала",
      "Реализация надежной валидации форм и обработки ошибок",
      "Оптимизация запросов к базе данных для проверки доступности в реальном времени"
    ],
    githubUrl: "-",
    liveUrl: "https://carwashcitygroup.sk"
  },
  'artroom-design-studio': {
    id: 3,
    title: "Artroom Design Studio",
    titleRu: "Artroom Design Studio",
    slug: "artroom-design-studio",
    date: "September 2023", 
    dateRu: "Сентябрь 2023",
    duration: "2 months",
    durationRu: "2 месяца",
    status: "Completed",
    statusRu: "Завершен",
    image: "/artroom-1.png",
    images: [
      "/artroom-1.png",
      "/artroom-2.png",
      "/artroom-3.png"
    ],
    shortDescription: "A modern and responsive website with content management system for a design studio in Slovakia. Also provided comprehensive SMM services.",
    shortDescriptionRu: "Современный и адаптивный веб-сайт с системой управления контентом для дизайн-студии в Словакии. Также предоставлены комплексные SMM услуги.",
    fullDescription: `Artroom Design Studio represents a creative showcase platform built for a premier design studio in Slovakia. This project focused on creating an elegant, visually stunning website that effectively presents the studio's portfolio while providing robust content management capabilities for easy updates.

The website features a carefully crafted design that reflects the studio's creative aesthetic, with smooth animations, elegant typography, and a responsive layout that works beautifully across all devices. The content management system allows the design team to easily upload new projects, update portfolio pieces, and manage client testimonials.

Built with traditional web technologies enhanced with modern development practices, the platform includes advanced image optimization, SEO features, and fast loading times. The custom CMS provides an intuitive interface for non-technical users while maintaining the flexibility needed for creative content presentation.

Additionally, we provided comprehensive Social Media Marketing (SMM) services, including content creation, community management, and strategic social media campaigns across multiple platforms to enhance the studio's online presence and client engagement.`,
    fullDescriptionRu: `Artroom Design Studio представляет собой креативную выставочную платформу, построенную для премиальной дизайн-студии в Словакии. Этот проект был сосредоточен на создании элегантного, визуально потрясающего веб-сайта, который эффективно представляет портфолио студии, одновременно предоставляя надежные возможности управления контентом для легких обновлений.

Веб-сайт отличается тщательно продуманным дизайном, который отражает креативную эстетику студии, с плавными анимациями, элегантной типографикой и адаптивной компоновкой, которая прекрасно работает на всех устройствах. Система управления контентом позволяет дизайн-команде легко загружать новые проекты, обновлять портфолио и управлять отзывами клиентов.

Построенная на традиционных веб-технологиях, усиленных современными практиками разработки, платформа включает продвинутую оптимизацию изображений, SEO функции и быстрое время загрузки. Пользовательская CMS предоставляет интуитивный интерфейс для нетехнических пользователей, сохраняя при этом гибкость, необходимую для креативной презентации контента.

Дополнительно мы предоставили комплексные услуги SMM (маркетинг в социальных сетях), включая создание контента, управление сообществом и стратегические кампании в социальных сетях на нескольких платформах для улучшения онлайн-присутствия студии и вовлеченности клиентов.`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Multer", "Cloudinary", "SEO"],
    features: [
      "Custom Content Management System",
      "Portfolio Showcase with Image Galleries",
      "Responsive Design & Mobile Optimization",
      "Image Upload & Management with Cloudinary",
      "SEO Optimization for Design Services",
      "Admin Dashboard for Content Updates",
      "Fast Loading & Performance Optimization",
      "Social Media Integration",
      "Multi-language Support (Slovak/English)",
      "Social Media Marketing (SMM) Services",
      "Content Creation & Strategy",
      "Community Management",
      "Multi-platform Social Media Campaigns"
    ],
    featuresRu: [
      "Пользовательская система управления контентом",
      "Портфолио с галереями изображений",
      "Адаптивный дизайн и мобильная оптимизация",
      "Загрузка и управление изображениями с Cloudinary",
      "SEO оптимизация для дизайн-услуг",
      "Административная панель для обновления контента",
      "Быстрая загрузка и оптимизация производительности",
      "Интеграция с социальными сетями",
      "Многоязычная поддержка (Словацкий/Английский)",
      "Услуги SMM (маркетинг в социальных сетях)",
      "Создание контента и стратегия",
      "Управление сообществом",
      "Мультиплатформенные кампании в социальных сетях"
    ],
    challenges: [
      "Creating a custom CMS tailored for creative content management",
      "Implementing efficient image upload and optimization workflows",
      "Building responsive galleries that showcase design work effectively",
      "Balancing visual aesthetics with fast loading performance",
      "Developing an intuitive admin interface for creative professionals",
      "Implement a multi-language support"
    ],
    challengesRu: [
      "Создание пользовательской CMS, адаптированной для управления креативным контентом",
      "Реализация эффективных рабочих процессов загрузки и оптимизации изображений",
      "Создание адаптивных галерей, которые эффективно демонстрируют дизайн-работы",
      "Балансирование визуальной эстетики с быстрой производительностью загрузки",
      "Разработка интуитивного административного интерфейса для креативных профессионалов",
      "Реализация многоязычной поддержки"
    ],
    githubUrl: "https://github.com/ex10101/artroom-sk",
    liveUrl: "https://artroom-design.com"
  }
};

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projectsData);
}
