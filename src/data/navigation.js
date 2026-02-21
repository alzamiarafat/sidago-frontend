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
        id: "dev-it",
        label: "Development & IT",
        href: "/services/e-commerce/",
        children: [
          {
            label: "System Administration",
            href: "/services/amazon-aws-administration/",
            children: [
              {
                label: "DNS Service",
                href: "/dns",
              },
              {
                label: "Email Service",
                href: "/email",
              },
            ],
          },
          { label: "E-Commerce", href: "/services/e-commerce/" },
          {
            label: "More",
            href: "/services/application-interface-design/",
            isMore: true,
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
            label: "Email Response Handling",
            href: "/services/email-response-handling/",
          },
          { label: "Transcription", href: "/services/transcription/" },
          {
            label: "More",
            href: "/services/administrative-service/",
            isMore: true,
          },
        ],
      },
      {
        id: "ad-marketing",
        label: "Advertising & Marketing",
        href: "/services/advertising/",
        children: [
          { label: "Advertising", href: "/services/advertising/" },
          { label: "Email Marketing", href: "/services/email-marketing/" },
          {
            label: "Online Marketing Strategy",
            href: "/services/online-marketing-strategy/",
          },
          { label: "More", href: "/services/advertising/", isMore: true },
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
            label: "Design & Multimedia",
            href: "/services/design-multimedia/",
          },
          { label: "More", href: "/services/3d-modelling/", isMore: true },
        ],
      },
      {
        id: "business-services",
        label: "Business Services",
        href: "/services/business-services/",
        children: [
          { label: "Accounting", href: "/services/accounting/" },
          { label: "Bookkeeping", href: "/services/bookkeeping/" },
          {
            label: "Business Consulting",
            href: "/services/business-consulting/",
          },
          {
            label: "Construction Supply",
            href: "/services/construction-supply",
          },
          {
            label: "More",
            href: "/services/business-services-main-point/",
            isMore: true,
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
