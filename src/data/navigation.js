export const mainMenu = [
  {
    id: "home",
    label: "Home",
    href: "/",
    isCurrent: true,
  },
  {
    id: "services",
    label: "Services",
    href: "#",
    isMega: true,
    megaColumns: [
      {
        id: "development-it",
        label: "Development & IT",
        href: "/services/development-it/",
        children: [
          {
            label: "System Administration",
            href: "/services/server-administration/",
          },
          {
            label: "Application Interface Design",
            href: "/services/application-interface-design/",
          },
          {
            label: "Desktop Applications",
            href: "/services/desktop-applications/",
          },
          { label: "E-Commerce", href: "/services/e-commerce/" },
          {
            label: "Game Development",
            href: "/services/game-development/",
          },
          {
            label: "Mobile Apps",
            href: "/services/mobile-apps/",
          },
          {
            label: "Plugin Development",
            href: "/services/plugin-development/",
          },
          {
            label: "Scripts and Utilities",
            href: "/services/scripts-and-utilities/",
          },
          {
            label: "Software Development",
            href: "/services/software-developement/",
          },
          {
            label: "Software Project Management",
            href: "/services/project-management/",
          },
          {
            label: "Software QA",
            href: "/services/software-qa/",
          },
        ],
      },
      {
        id: "admin-support",
        label: "Administrative Support",
        href: "/services/administrative-service/",
        children: [
          {
            label: "Administrative Services",
            href: "/services/administrative-services/",
          },
          {
            label: "Data Entry",
            href: "/services/data-entry/",
          },
          {
            label: "Email Response Handling",
            href: "/services/email-response-handling/",
          },
          {
            label: "Personal Assistant",
            href: "/services/personal-assistant/",
          },
          { label: "Transcription", href: "/services/transcription/" },
          {
            label: "Web Research",
            href: "/services/web-research/",
          },
          {
            label: "What We Write",
            href: "/services/what-we-write/",
            children: [
              {
                label: "Copywriting",
                href: "/services/copywriting/",
              },
              {
                label: "Creative Writing",
                href: "/services/creative-writing/",
              },
              {
                label: "Web Content Writing",
                href: "/services/web-content-writing/",
              },
            ],
          },
          {
            label: "Data Mining",
            href: "/services/data-mining/",
          },
          {
            label: "Translation Services",
            href: "/services/translation-services/",
          },
        ],
      },
      {
        id: "ad-marketing",
        label: "Advertising & Marketing",
        href: "/services/advertising/",
        children: [
          { label: "Advertising", href: "/services/advertising/" },
          {
            label: "Customer Acquisition & Sales",
            href: "/services/customer-acquisition-sales/",
          },
          { label: "Email Marketing", href: "/services/email-marketing/" },
          { label: "Lead Generation", href: "/services/lead-generation/" },
          { label: "Market Research", href: "/services/market-research/" },
          {
            label: "Negotiation Management",
            href: "/services/negotiation-management/",
          },
          {
            label: "Online Marketing Strategy",
            href: "/services/online-marketing-strategy/",
          },
          {
            label: "Public Relations",
            href: "/services/public-relations/",
          },
          {
            label: "Social Media Marketing",
            href: "/services/social-media-marketing/",
          },
          {
            label: "Telemarketing & Telesales",
            href: "/services/telemarketing-telesales/",
          },
          { label: "Branding", href: "/services/branding/" },
          {
            label: "Display Marketing",
            href: "/services/display-marketing/",
          },
          { label: "Viral Marketing", href: "/services/viral-marketing/" },
        ],
      },
      {
        id: "design-multimedia",
        label: "Design & Multimedia",
        href: "/services/design-multimedia",
        children: [
          { label: "3D Modelling", href: "/services/3d-modelling/" },
          { label: "Animation", href: "/services/animation/" },
          {
            label: "Audio Production",
            href: "/services/audio-production/",
          },
          {
            label: "Design & Multimedia",
            href: "/services/design-multimedia/",
          },
          {
            label: "Engineering & Technical Design",
            href: "/services/engineering-technical-design/",
          },
          {
            label: "Graphics Design",
            href: "/services/graphics-design/",
          },
          {
            label: "Illustration",
            href: "/services/illustration/",
          },
          {
            label: "Logo Design",
            href: "/services/logo-design/",
          },
          {
            label: "Presentations",
            href: "/services/presentations/",
          },
          {
            label: "Print Design",
            href: "/services/print-design/",
          },
          {
            label: "UI Design",
            href: "/services/ui-design/",
          },
          {
            label: "Video Production",
            href: "/services/video-production/",
          },
          {
            label: "Voice Talent",
            href: "/services/voice-talent/",
          },
          {
            label: "Web Design",
            href: "/services/web-design/",
          },
        ],
      },
      {
        id: "business-services",
        label: "Business Services",
        href: "/services/business-services/",
        children: [
          {
            label: "Business Services",
            href: "/services/business-services/",
          },
          { label: "Accounting", href: "/services/accounting/" },
          { label: "Bookkeeping", href: "/services/bookkeeping/" },
          {
            label: "Back Office Solutions",
            href: "/services/back-office-solutions/",
          },
          {
            label: "Business Consulting",
            href: "/services/business-consulting/",
          },
          {
            label: "Financial Services & Planning",
            href: "/services/financial-services-planning/",
          },
          {
            label: "Legal Assistance",
            href: "/services/legal-assistance/",
          },
          {
            label: "Recruiting",
            href: "/services/recruiting/",
          },
          {
            label: "Statistical Analysis",
            href: "/services/statistical-analysis/",
          },
          {
            label: "Translation",
            href: "/services/translation/",
          },
          {
            label: "Customer Service",
            href: "/services/customer-service/",
          },
          {
            label: "Data Science And Analysis",
            href: "/services/data-science-analysis/",
          },
          {
            label: "Paralegal Services",
            href: "/services/paralegal-services/",
          },
          {
            label: "Technical Writing",
            href: "/services/technical-writing/",
          },
        ],
      },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    href: "/industries/",
    children: [
      {
        label: "B2B Commercial",
        href: "#",
        children: [
          { label: "Law Firms", href: "/law-firms/" },
          {
            label: "Manufacturing Industrial Products",
            href: "/manufacturing-industrial-products/",
          },
        ],
      },
      {
        label: "Financial",
        href: "#",
        children: [
          { label: "Accounting Firms", href: "/accounting-firms/" },
          { label: "Banking", href: "/banking/" },
        ],
      },
      {
        label: "Technology",
        href: "/technology/",
        children: [
          { label: "Ad Networks", href: "/ad-networks/" },
          { label: "Affiliate Networks", href: "/affiliate-networks/" },
          { label: "Affiliates", href: "/affiliates/" },
        ],
      },
      { label: "Health Care", href: "/healthcare/" },
      { label: "Aerospace / Defense", href: "/aerospace-defense/" },
      { label: "Automotive", href: "/automotive/" },
      {
        label: "Consumer Product and Retail",
        href: "/consumer-product-and-retail/",
      },
      {
        label: "Distribution and Transportation",
        href: "/distribution-and-transportation/",
      },
      { label: "Insurance", href: "/insurance/" },
      { label: "Restaurants", href: "/restaurants/" },
      { label: "Construction", href: "/construction/" },
    ],
  },
  {
    id: "strategy",
    label: "Our Strategy",
    href: "/our-strategy/",
    isMega: true,
    megaColumns: [
      {
        id: "capabilities",
        label: "Capabilities",
        href: "/capabilities",
        fullWidth: true,
        children: [
          { label: "Case study", href: "/case-study-main-point/" },
          { label: "B2B Solutions", href: "/b2b-solutions/" },
          { label: "Entire plan", href: "/entire-plan/" },
        ],
      },
      {
        id: "employee-advantage",
        label: "Employee Advantage",
        href: "/employee-quality",
        fullWidth: true,
        children: [
          { label: "Employee Quality", href: "/employee-quality/" },
          { label: "Established Management", href: "/established-management/" },
          {
            label: "Hiring Model",
            href: "/our-strategy/employee-advantage/hiring-model/",
          },
        ],
      },
      {
        id: "benefits",
        label: "Our Benefits",
        href: "/our-benefits/",
        fullWidth: true,
        children: [
          { label: "Benefit Savings", href: "/benefit-savings/" },
          { label: "Employee Reassignment", href: "/employee-reassignment/" },
        ],
      },
      {
        id: "process",
        label: "The Process",
        href: "#",
        fullWidth: true,
        children: [],
      },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    href: "/sales/",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact/",
  },
];
