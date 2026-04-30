export const defaultGlobalSettings = {
  siteName: "Sidago",
  siteContactEmail: "mailto:hello@sidago.com",
  siteLogo: {
    url: "/images/logo1.png",
    alternativeText: "Sidago",
  },
  version: {
    label: "v2",
  },
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/sidago-integrated-solutions",
      icon: "FaLinkedinIn",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/sidagooutsourcing",
      icon: "FaFacebookF",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/sidagobpo",
      icon: "FaTwitter",
    },
  ],
  footer: {
    navLinks: [
      { label: "Contact", href: "/contact", srLabel: "Contact", sortOrder: 1 },
      { label: "Careers", href: "/contact", srLabel: "Careers", sortOrder: 2 },
      { label: "Events", href: "/events", srLabel: "Events", sortOrder: 3 },
    ],
    socialLinks: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/@sidago",
        platform: "youtube",
        sortOrder: 1,
      },
      {
        label: "X",
        href: "https://x.com/sidago",
        platform: "x",
        sortOrder: 2,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/sidago",
        platform: "linkedin",
        sortOrder: 3,
      },
    ],
    legalBlocks: [
      {
        text: "Sidago Trading Ltd., a company registered in England & Wales (Company No. 10882520), is registered with the UK Financial Conduct Authority for its cryptoasset activities under the Money Laundering, Terrorist Financing and Transfer for Funds (Information on the Payer) Regulations 2017 as amended (FRN:928764). Sidago Asia Pte. Ltd. is incorporated in Singapore (Company No. 202108542H), and primarily trades certain derivatives referencing cryptoassets. Each of Sidago Trading Ltd. and Sidago Asia Pte. Ltd. is hereafter referred to as Sidago Entity. Neither Sidago Entity is authorised or regulated by any regulatory authority. Any party trading with either Sidago Entity may not benefit from the protections typically provided when trading with regulated entities, such as any compensation or ombudsman schemes.",
        sortOrder: 1,
      },
      {
        text: "Each Sidago Entity trades for its own account and with assets (including digital assets) that belong to it. Neither Sidago Entity engages in the management, custody or holding of any assets, including cryptoassets or fiat currency, on behalf of investors or customers.",
        sortOrder: 2,
      },
      {
        text: "No communication, whether verbal or written, by either of Sidago Entities or by any persons on behalf of Sidago Entities is intended to, or shall be construed as or deemed to, establish a customer relationship with or a provision of services by either Sidago Entity. Any references to market making, market maker, liquidity provisioning or similar terms on this website or otherwise in connection with our activities do not refer to liquidity provisioning services, market making services or any other regulated activities which may be referred to using the same, or similar name, by any regulatory or self regulatory organizations.",
        sortOrder: 3,
      },
      {
        text: "Neither Sidago Entity provides any warranty, whether express or implied, as to any results, including, but not limited to, in relation to prices and the timing, speed or likelihood of any transactions with Sidago.",
        sortOrder: 4,
      },
      {
        text: "The material provided on this website is provided for information purposes only and does not constitute an offer or solicitation for the purchase of any cryptoassets or any form of financial instruments referencing cryptoassets. The information on this website is not directed at nor intended for distribution to, or use by, any person resident in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
        sortOrder: 5,
      },
    ],
    policyLinks: [
      {
        label: "Privacy Policy",
        href: "#",
        srLabel: "Privacy Policy",
        sortOrder: 1,
      },
      {
        label: "Cookies Policy",
        href: "#",
        srLabel: "Cookies Policy",
        sortOrder: 2,
      },
      {
        label: "Modern Slavery Statement",
        href: "#",
        srLabel: "Modern Slavery Statement",
        sortOrder: 3,
      },
    ],
  },
};

export const defaultHomepage = {
  hero: {
    useVideo: true,
    videoSrc: "/videos/home2.mp4",
    imageSrc: "",
    subtitle: "Sidago makes digital asset markets liquid and efficient",
    fontWeight: 400,
    lighterTheme: false,
    loop: true,
    lighterBgColor: "bg-[#f0f1f1]",
    videoSectionClass: "",
    videoClass: "",
    titles: [
      {
        title: "We understand",
        color: "",
        className: "text-[#E7512F]",
        sortOrder: 1,
      },
      {
        title: "the online world",
        color: "",
        className: "",
        sortOrder: 2,
      },
    ],
  },
  insightNews: [
    {
      title: "Digital asset OTC market 2026",
      href: "#",
      srText:
        "Insights › Market color › Reports › Digital asset otc markets 2026",
      sortOrder: 1,
    },
    {
      title: "Sidago Trader Assessment Day",
      href: "#",
      srText: "Insights › News › Announcements › Sidago trader assessment day",
      sortOrder: 2,
    },
    {
      title: "Introducing NODE Insights",
      href: "",
      srText: "Insights › News › Announcements › Introducing node insights",
      sortOrder: 3,
    },
  ],
  statistics: [
    {
      stat: "75",
      label: "Saving Costing",
      width: 244,
      activeDotColor: "#E7512F",
      sortOrder: 1,
    },
    {
      stat: "81",
      label: "Token liquidity partners",
      width: 248,
      activeDotColor: "#E7512F",
      sortOrder: 2,
    },
    {
      stat: "87",
      label: "Return on Investment",
      width: 198,
      activeDotColor: "#E7512F",
      sortOrder: 3,
    },
    {
      stat: "92",
      label: "Client Retention",
      width: 192,
      activeDotColor: "#E7512F",
      sortOrder: 4,
    },
    {
      stat: "88",
      label: "Client Retention",
      width: 192,
      activeDotColor: "#E7512F",
      sortOrder: 5,
    },
  ],
  marketTicker: [
    {
      title: "BTC",
      price: "$ 0.097",
      avg: "-6.21%",
      sortOrder: 1,
    },
    {
      title: "ETH",
      price: "$ 0.097",
      avg: "-6.21%",
      sortOrder: 2,
    },
    {
      title: "DGE",
      price: "$ 0.097",
      avg: "-6.21%",
      sortOrder: 3,
    },
    {
      title: "DYX",
      price: "$ 0.097",
      avg: "-6.21%",
      sortOrder: 4,
    },
    {
      title: "OPC",
      price: "$ 0.097",
      avg: "-6.21%",
      sortOrder: 5,
    },
    {
      title: "AVE",
      price: "$ 0.097",
      avg: "-6.21%",
      sortOrder: 6,
    },
    {
      title: "UNI",
      price: "$ 0.097",
      avg: "-6.21%",
      sortOrder: 7,
    },
    {
      title: "SOL",
      price: "$ 0.097",
      avg: "-6.21%",
      sortOrder: 8,
    },
  ],
  capabilities: [
    {
      title: "Spot",
      description:
        "Trade spot or derivatives across the widest range of digital assets, with an OTC desk that sits at the source of liquidity.",
      href: "/spots",
      video:
        "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/19200719/Accordion-OTC.mp4#t=2",
      rotate: "rotate(30deg)",
      sr: "Otc",
      sortOrder: 1,
    },
    {
      title: "Options",
      description:
        "Create liquid and efficient markets for your token globally, with the partner of choice for top-tier protocols.",
      href: "/options",
      video:
        "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/19200829/Accordion-Liquidity.mp4#t=3.15",
      rotate: "rotate(-25deg)",
      sr: "Liquidity",
      sortOrder: 2,
    },
    {
      title: "Forwards",
      description:
        "Partner with a leading builder, liquidity provider, blockchain researcher, and governance contributor in DeFi.",
      href: "forwards",
      video:
        "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/19200844/Accordion-Governance-DeFi.mp4#t=1",
      rotate: "rotate(0deg)",
      sr: "Defi",
      sortOrder: 3,
    },
    {
      title: "Ventures",
      description:
        "Partner with a leading builder, liquidity provider, blockchain researcher, and governance contributor in DeFi.",
      href: "ventures",
      video:
        "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/19200933/Accordion-Ventures.mp4#t=1.65",
      rotate: "rotate(0deg)",
      sr: "Defi",
      sortOrder: 4,
    },
    {
      title: "Tailored products",
      description:
        "Partner with a leading builder, liquidity provider, blockchain researcher, and governance contributor in DeFi.",
      href: "tailored-products",
      video:
        "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212516/Accordion-Prop-trading.mp4#t=4.14",
      rotate: "rotate(0deg)",
      sr: "Defi",
      sortOrder: 5,
    },
  ],
  cardsGrid: [
    {
      cardId: "node",
      href: "/node",
      srLabel: "Node",
      bgClass: "bg-gray-defi-ash",
      textClass: "text-gray-off-white",
      colSpan: "col-span-6",
      title: "Node",
      subtitle: "Decentralized infrastructure at scale",
      decorationType: "node",
      topType: "none",
      sortOrder: 1,
    },
    {
      cardId: "research",
      href: "/insights/discover?category=defi-research&category=governance-digest",
      srLabel: "Insights › Discover",
      bgClass: "bg-purple-light",
      textClass: "text-gray-night-green",
      colSpan: "col-span-6",
      title: "SIDAGO Research",
      subtitle: "Deep dives into DeFi & governance",
      decorationType: "none",
      topType: "research",
      sortOrder: 2,
    },
    {
      cardId: "events",
      href: "/events",
      srLabel: "Events",
      bgClass: "bg-purple-dark",
      textClass: "text-gray-night-green",
      colSpan: "col-span-12 xl:col-span-4",
      title: "SIDAGO Events",
      subtitle: "Conferences, meetups & more",
      decorationType: "events",
      topType: "none",
      sortOrder: 3,
    },
    {
      cardId: "governance",
      href: "/defi/governance",
      srLabel: "DeFi › Governance",
      bgClass: "bg-gray-defi-shadow",
      textClass: "text-gray-off-white",
      colSpan: "col-span-5 xl:col-span-4",
      title: "Governance",
      subtitle: "Protocol governance insights",
      decorationType: "none",
      topType: "none",
      sortOrder: 4,
    },
    {
      cardId: "market",
      href: "/insights/discover?category=reports&category=market-update",
      srLabel: "Insights › Discover",
      bgClass: "bg-gray-defi-slate",
      textClass: "text-gray-off-white",
      colSpan: "col-span-7 xl:col-span-4",
      title: "Market Color",
      subtitle: "Real-time market intelligence",
      decorationType: "market",
      topType: "none",
      sortOrder: 5,
    },
  ],
  cta: [
    {
      title: "Contact",
      description: "To access top crypto liquidity",
      href: "/contact",
      srLabel: "Contact",
      backgroundColor: "#FF5D3C",
      sortOrder: 1,
    },
    {
      title: "Subscribe",
      description: "To get the latest insights",
      href: "/contact",
      srLabel: "Insights",
      backgroundColor: "#FA7248",
      sortOrder: 2,
    },
    {
      title: "Apply",
      description: "To join the SIDAGO team",
      href: "/contact",
      srLabel: "Company › Opportunities",
      backgroundColor: "#FF8C69",
      sortOrder: 3,
    },
  ],
};
