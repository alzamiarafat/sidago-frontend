"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getServiceMenuContext } from "@/src/utils/serviceUtils";
import {
  getIndustryMenuContext,
  getIndustryMenuGroups,
} from "@/src/utils/navigationTabUtils";

function getItemId(prefix, value, suffix) {
  return `${prefix}-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${suffix}`;
}

function getServiceIntroContent(groupTitle = "") {
  const introByGroup = {
    "Development & IT": {
      introTitle: "Digital products built for scale and speed",
      introDescription:
        "From engineering delivery to technical execution, we support modern teams with dependable development services tailored to product growth, performance, and long-term scalability.",
    },
    "Administrative Support": {
      introTitle: "Operational support that keeps work moving",
      introDescription:
        "We help teams stay focused by streamlining daily operations through reliable administrative support, structured workflows, and efficient task execution across business functions.",
    },
    "Advertising & Marketing": {
      introTitle: "Growth-focused marketing support for modern brands",
      introDescription:
        "From audience reach to campaign execution, our marketing services help businesses improve visibility, generate demand, and build stronger customer engagement across channels.",
    },
    "Design & Multimedia": {
      introTitle: "Creative services that elevate every brand touchpoint",
      introDescription:
        "We deliver design and multimedia solutions that strengthen visual identity, improve communication, and create polished digital experiences across platforms and campaigns.",
    },
    "Business Services": {
      introTitle: "Business support designed for efficient execution",
      introDescription:
        "Our business services help organizations operate with more clarity and consistency through structured support across planning, analysis, customer operations, and back-office delivery.",
    },
  };

  return (
    introByGroup[groupTitle] ?? {
      introTitle: "Specialized services designed for execution",
      introDescription:
        "We provide practical service support across business-critical functions, helping teams improve delivery quality, operational consistency, and day-to-day execution.",
    }
  );
}

function getServiceDetailContent(href = "") {
  const contentMap = {
    "/services/application-interface-design/": {
      eyebrow: "Development & IT",
      title: "Application Interface Design",
      summary:
        "Interfaces that feel intuitive from the first interaction and stay consistent as products grow.",
      paragraphs: [
        "A strong interface design strategy keeps attention on customer satisfaction, usability, and long-term trust instead of relying only on feature volume. The clearer the interface, the easier it is for users to adopt the product and continue using it with confidence.",
        "For software products, business systems, and commercial applications, interface design directly shapes how people experience the product. Clean structure, visual clarity, and thoughtful interaction patterns reduce friction and help users complete tasks without wasting time on a steep learning curve.",
        "Application interface design is closely connected to software development, so it should never be treated as decoration after the fact. It influences product quality, customer perception, and overall adoption just as much as technical capability.",
        "Our approach focuses on interfaces that are adaptable, maintainable, and aligned with business requirements. That means future changes can be introduced without breaking design consistency or forcing costly redesign work later.",
      ],
    },
    "/services/desktop-applications/": {
      eyebrow: "Development & IT",
      title: "Desktop Applications",
      summary:
        "Desktop software built for security, deeper functionality, and dependable day-to-day business use.",
      paragraphs: [
        "While internet-based software is now common across most organizations, many businesses still rely on stand-alone desktop applications because they can support more advanced features and reduce exposure to risks that come with fully internet-dependent systems.",
        "For teams handling sensitive operational data, desktop applications remain a practical choice. Limiting unnecessary internet exposure helps reduce security concerns, while secure storage and synchronization options still allow desktop tools to integrate smoothly with broader online workflows.",
        "A well-designed desktop application can improve productivity by giving teams a focused environment built around the way they actually work. In many cases, that means stronger performance, more control over functionality, and fewer limitations than purely browser-based software.",
        "Our desktop application solutions are shaped around business-specific requirements. We support secure architecture, maintainability, collaboration features, client-server workflows, and user-friendly design so the final product feels reliable, efficient, and easy to use over time.",
      ],
    },
    "/services/e-commerce/": {
      eyebrow: "Development & IT",
      title: "E-Commerce",
      summary:
        "Commerce platforms designed for secure transactions, better customer experience, and long-term digital growth.",
      paragraphs: [
        "Online business continues to create major opportunities for companies of every size. As e-commerce grows and technology becomes more accessible, businesses can build modern storefronts with significantly lower overhead than traditional retail operations.",
        "Once a domain and brand foundation are in place, the next priority is creating the right e-commerce environment. That includes a secure payment system, a dependable storefront, and a user experience that makes shopping simple, fast, and trustworthy for customers.",
        "Security is one of the most important parts of any e-commerce operation. Customer information, payment flow, and account access all need to be protected through reliable systems and disciplined processes. That is why we focus on secure commerce architecture and stable implementation from the beginning.",
        "Whether the goal is to improve an existing store or launch a fully custom e-commerce platform, we help businesses build digital commerce systems that are scalable, secure, and aligned with real operational needs. The result is a platform that supports both performance and long-term growth.",
      ],
    },
    "/services/game-development/": {
      eyebrow: "Development & IT",
      title: "Game Development",
      summary:
        "Game experiences developed for engagement, platform flexibility, and production quality from concept through release.",
      paragraphs: [
        "Game development has grown rapidly into a large-scale and highly competitive industry, with products designed for a wide range of age groups and player expectations. That growth makes strategy, execution, and audience fit critical from the earliest stages of development.",
        "Successful game development requires more than just visual polish. Content direction, gameplay structure, testing, and market positioning all influence how a game is received. We approach game development as a full lifecycle process, from concept and production through testing and launch preparation.",
        "Our team can build games for multiple platforms or for specific target environments, depending on product requirements. That includes adapting gameplay systems, improving visual quality, refining user experience, and strengthening overall performance to match business and audience goals.",
        "Whether you need support for a full game build or help in a specific stage of development, we can step in with practical development capability. From graphics and animation to usability and platform delivery, we focus on creating polished game experiences that are both technically sound and commercially viable.",
      ],
    },
    "/services/mobile-apps/": {
      eyebrow: "Development & IT",
      title: "Mobile Apps",
      summary:
        "Mobile application solutions designed to expand customer reach, strengthen communication, and support business growth across modern devices.",
      paragraphs: [
        "A successful business depends not only on the services and products it offers, but also on how effectively it connects with its target audience. As smartphone technology continues to evolve, mobile experiences have become one of the most direct and practical ways to build stronger customer interaction.",
        "Mobile applications create a reliable channel for access, engagement, and communication with customers. As smartphone adoption continues to grow, a dedicated mobile app can help a business promote itself more effectively while also opening new opportunities for service delivery and revenue generation.",
        "We approach mobile app development as a business tool, not just a technical product. Depending on your goals, market position, and customer needs, we develop native mobile applications that provide a smooth experience across major operating systems including iOS and Android.",
        "Our focus is on quality, usability, and fit for purpose. With experienced developers and flexible delivery support, we build mobile applications that help businesses stay accessible, modern, and better aligned with how customers interact today.",
      ],
    },
    "/services/plugin-development/": {
      eyebrow: "Development & IT",
      title: "Software Plugins",
      summary:
        "Plugin development that extends existing software capabilities without forcing expensive full-system redesigns.",
      paragraphs: [
        "Business objectives and operational requirements change over time. As organizations grow, systems often need to support new strategies, services, clients, and workflows. That means software environments must stay current as technology evolves across both software and hardware.",
        "In many cases, the right answer is not rebuilding an entire platform. When business requirements shift, a well-designed plugin can add the needed capability quickly, whether that means supporting additional file formats, introducing new integrations, or extending existing workflow functionality.",
        "Because technology changes rapidly, businesses need software that can adapt without creating unnecessary disruption. Plugin development offers a practical way to enhance the tools you already rely on while preserving the value of your existing software investment.",
        "Our approach starts with understanding your business strategy, operational goals, and the specific software environment in use. From there, we identify the most appropriate enhancements and build plugins that strengthen functionality, improve efficiency, and align better with your long-term needs.",
      ],
    },
    "/services/scripts-and-utilities/": {
      eyebrow: "Development & IT",
      title: "Scripts and Utilities",
      summary:
        "Custom scripts and utility software built to reduce repetitive work, improve accuracy, and streamline business operations.",
      paragraphs: [
        "Administrative and operational work often depends on repeated manual tasks, especially in larger businesses handling data entry, bulk transaction processing, and other routine workflows. When too much of that work stays manual, inefficiency, human error, and delivery delays become much more likely.",
        "Scripts and utilities help solve those problems by automating focused tasks with speed and consistency. From simple browser-supported actions to process automation across internal systems, these tools reduce repetitive effort and make execution more dependable.",
        "We build scripts and utility software as part of broader business IT enablement. The goal is to improve administration, reduce operational friction, and strengthen output quality by removing avoidable manual mistakes from common workflows.",
        "Depending on your business requirements and the systems already in use, we create customized scripts and utility solutions that produce the exact output you need. The result is better efficiency, improved reliability, and stronger customer satisfaction through smoother business execution.",
      ],
    },
    "/services/software-developement/": {
      eyebrow: "Development & IT",
      title: "Software Development",
      summary:
        "Custom software development support built to align technology, business operations, and customer experience in one scalable platform.",
      paragraphs: [
        "Running a modern business successfully requires the right use of information technology across websites, order processing, quality assurance, customer interaction, and the broader systems that support daily operations. To manage all of that effectively, businesses need software that is properly aligned with how they actually work.",
        "In many cases, that means software designed specifically around your business model. Even when off-the-shelf tools are available, they often require adaptation before they truly fit operational needs, workflow expectations, and the level of customer interaction a growing business demands.",
        "As a full-service software development partner, we build software solutions that combine modern development methodologies with structured project execution. That approach helps reduce unnecessary complexity and development cost while making the best possible use of available budget, resources, and delivery timelines.",
        "Our team can support you across the full software lifecycle, from feasibility and prototyping to testing, refinement, and operational rollout. The goal is to deliver software that is useful in practice, easier to adopt, and durable enough to support long-term growth.",
        "We also help at specific stages of development when a full build is not required. If an organization is working with ready-made software that needs refinement, training support, or functional improvement, we can step in and improve the system so it becomes more practical for real business use.",
      ],
      sections: [
        {
          title: "Game Development",
          body:
            "Support for interactive software products with platform-specific execution, polished user experience, and production-focused delivery.",
        },
        {
          title: "Mobile Applications",
          body:
            "Native and mobile-first application development that improves customer access, communication, and service delivery across devices.",
        },
        {
          title: "Plug-In Development",
          body:
            "Targeted plugin solutions that extend the functionality of existing software without requiring a full rebuild.",
        },
        {
          title: "Project Management",
          body:
            "Structured delivery oversight that helps software projects stay aligned with scope, timelines, resource constraints, and business priorities.",
        },
        {
          title: "Quality Assurance",
          body:
            "Testing and validation support that helps refine software functionality, reduce risk, and improve readiness before release or scale-up.",
        },
      ],
      closing:
        "Whether you need a new bespoke platform or focused support improving existing software, we provide practical development capability that helps businesses operate with more clarity, efficiency, and confidence.",
    },
    "/services/server-administration/": {
      eyebrow: "Development & IT",
      title: "System Administration",
      summary:
        "Server and systems administration support built for stability, operational efficiency, and scalable business infrastructure.",
      paragraphs: [
        "Technology adoption in the business environment helps automate work, reduce manual overhead, and make day-to-day operations more efficient for both leadership teams and staff. Companies increasingly rely on server and systems infrastructure to manage communication, applications, and internal workflows in a more cost-effective way.",
        "For communication, management, and operational requirements, we provide practical server and systems administration solutions. That includes installation, configuration, ongoing administration, and embedded technical support where needed, so teams can work with more confidence and fewer operational disruptions.",
        "We also help organizations improve internal understanding of their systems through hands-on support and operational guidance. The goal is not only to keep infrastructure running, but to make it easier for your team to work with it reliably over time.",
      ],
      sections: [
        {
          title: "DNS Services",
          body:
            "We provide reliable domain name server solutions designed for redundancy, fast response times, and dependable availability across critical services.",
        },
        {
          title: "Email Servers",
          body:
            "We install, configure, and maintain email server environments for internal communication, client correspondence, and high-volume business messaging needs.",
        },
        {
          title: "Enterprise Solutions",
          body:
            "Our enterprise-grade administration support is tailored to your infrastructure requirements and integrates with core business systems to support long-term operational success.",
        },
        {
          title: "General System Administration",
          body:
            "We keep systems running through troubleshooting, routine maintenance, issue prevention, and structured remediation so recurring failures are reduced over time.",
        },
        {
          title: "Hosting Infrastructure",
          body:
            "We support modern hosting infrastructure for websites, communication systems, and server-based business platforms that require dependable performance.",
        },
        {
          title: "Server Scalability",
          body:
            "We assess your current environment, identify scale limitations, and implement practical improvements so infrastructure can grow with demand while meeting required thresholds.",
        },
        {
          title: "Technical Support",
          body:
            "Our technical teams resolve server and systems issues quickly, helping reduce downtime and ensuring operational problems do not remain unresolved.",
        },
      ],
      closing:
        "Additional support areas include LAMP system administration, Amazon AWS administration, reputation management, and search engine optimization, with solutions adapted to your operating environment.",
    },
  };

  return contentMap[href] ?? null;
}

function getIndustryDetailContent(href = "") {
  const contentMap = {
    "/industries/b2b-commercial": {
      eyebrow: "Industries",
      title: "B2B Commercial",
      summary:
        "Go-to-market, channel, and revenue execution support for commercial organizations building repeatable growth.",
      paragraphs: [
        "Commercial organizations need more than broad strategy. They need execution systems that connect market opportunity, sales activity, partner alignment, and operational follow-through in a way that can scale.",
        "Our B2B commercial support is built for teams improving how they reach buyers, structure revenue operations, and coordinate commercial execution across internal and external stakeholders.",
        "From planning through implementation, we help commercial teams improve consistency, visibility, and decision-making so growth initiatives are easier to execute and easier to sustain.",
      ],
    },
    "/industries/commercial-gtm": {
      eyebrow: "B2B Commercial",
      title: "Commercial GTM",
      summary:
        "Go-to-market execution support for teams bringing commercial offers to market with more structure and speed.",
      paragraphs: [
        "A strong commercial go-to-market model aligns target audience, offer positioning, sales readiness, and execution planning before demand generation begins.",
        "We help teams sharpen GTM structure so launches, market expansion efforts, and commercial initiatives are supported by clearer process and stronger internal coordination.",
        "The result is a more focused go-to-market engine that improves readiness, reduces execution gaps, and helps teams move with more confidence.",
      ],
    },
    "/industries/sales-operations": {
      eyebrow: "B2B Commercial",
      title: "Sales Operations",
      summary:
        "Operational support that improves sales process clarity, reporting quality, and commercial team efficiency.",
      paragraphs: [
        "Sales performance depends on more than individual effort. It requires clean process design, reliable data handling, structured reporting, and workflows that help commercial teams stay focused on execution.",
        "We support sales operations through process improvement, coordination support, and systems thinking that make revenue activity more measurable and easier to manage.",
        "That creates a stronger operating environment for pipeline visibility, forecasting discipline, and day-to-day sales execution.",
      ],
    },
    "/industries/channel-partnerships": {
      eyebrow: "B2B Commercial",
      title: "Channel Partnerships",
      summary:
        "Partnership support for organizations building stronger indirect growth channels and aligned partner programs.",
      paragraphs: [
        "Channel success depends on partner enablement, communication structure, and clear operational alignment between internal teams and external partners.",
        "We help organizations improve partnership execution through better coordination, process visibility, and practical support around partner-led growth efforts.",
        "That helps teams create channel relationships that are more productive, more measurable, and easier to expand over time.",
      ],
    },
    "/industries/accounting-firms": {
      eyebrow: "Financial",
      title: "Accounting Firms",
      summary:
        "Operational and strategic support for accounting organizations balancing accuracy, client responsiveness, and service delivery.",
      paragraphs: [
        "Accounting firms operate in environments where precision, timeliness, and trust are critical. Internal workflow quality has a direct impact on client satisfaction and delivery consistency.",
        "We support accounting organizations with structured business services, operational execution support, and scalable processes that help teams manage workload without sacrificing quality.",
        "That enables firms to stay focused on client value while improving consistency across internal operations.",
      ],
    },
    "/industries/financial-analytics": {
      eyebrow: "Financial",
      title: "Financial Analytics",
      summary:
        "Analytics support for teams that need stronger insight, better reporting quality, and more actionable financial visibility.",
      paragraphs: [
        "Financial analytics is most valuable when reporting is not only accurate, but also structured in a way that supports better business decisions.",
        "We help teams improve how financial information is organized, interpreted, and communicated so analysis becomes more useful for planning, performance review, and operational decision-making.",
        "The focus is on turning financial data into clearer insight that supports more confident action.",
      ],
    },
    "/industries/payments-modernization": {
      eyebrow: "Financial",
      title: "Payments Modernization",
      summary:
        "Support for organizations improving payment workflows, modernization readiness, and operational reliability.",
      paragraphs: [
        "Payment environments require strong coordination across systems, process design, customer experience, and operational control.",
        "We help organizations modernize payment-related workflows by improving structure, execution support, and the systems alignment needed for more efficient delivery.",
        "That creates a more dependable payment environment with better scalability and stronger operational resilience.",
      ],
    },
    "/industries/ad-networks": {
      eyebrow: "Technology",
      title: "Technology",
      summary:
        "Execution support for technology-focused organizations operating in dynamic product, platform, and delivery environments.",
      paragraphs: [
        "Technology organizations operate in fast-moving environments where product execution, operational coordination, and cross-functional alignment all affect growth.",
        "We support technology businesses with adaptable service models that strengthen process execution, improve delivery consistency, and reduce operational friction.",
        "That makes it easier for teams to stay focused on building, scaling, and supporting high-performance products and services.",
      ],
    },
    "/industries/software-platforms": {
      eyebrow: "Technology",
      title: "Software Platforms",
      summary:
        "Support for platform businesses focused on scalable product operations, structured delivery, and ongoing growth.",
      paragraphs: [
        "Software platforms require more than application development. They require operational discipline, support structure, and systems that can evolve as the platform grows.",
        "We help platform businesses improve execution across product support, process management, and service delivery so the operating model keeps pace with product ambition.",
        "That allows teams to scale more confidently without losing clarity in how work gets delivered.",
      ],
    },
    "/industries/healthcare": {
      eyebrow: "Industries",
      title: "Health Care",
      summary:
        "Operational and service support tailored to healthcare environments where reliability, coordination, and trust matter most.",
      paragraphs: [
        "Healthcare organizations work in high-stakes operating environments where service quality, process reliability, and communication discipline all have direct impact.",
        "We support healthcare teams with structured execution across business functions, helping improve operational consistency without adding unnecessary complexity.",
        "The focus is on dependable support models that respect the demands of sensitive, service-critical environments.",
      ],
    },
    "/industries/aerospace-defense": {
      eyebrow: "Industries",
      title: "Aerospace/Defense",
      summary:
        "Structured support for aerospace and defense organizations operating in complex, precision-driven environments.",
      paragraphs: [
        "Aerospace and defense operations require discipline, consistency, and careful execution across specialized workflows.",
        "We provide practical support models that help teams maintain operational clarity, improve coordination, and strengthen process reliability in demanding environments.",
        "That creates a more dependable foundation for execution where precision and accountability are non-negotiable.",
      ],
    },
    "/industries/automotive": {
      eyebrow: "Industries",
      title: "Automotive",
      summary:
        "Support for automotive businesses looking to improve process execution, operational consistency, and delivery quality.",
      paragraphs: [
        "Automotive organizations depend on coordinated operations, structured workflows, and strong execution across multiple functions.",
        "We help automotive teams improve operational support and process reliability so day-to-day execution stays aligned with business requirements.",
        "The result is a more stable environment for delivery, coordination, and scalable business performance.",
      ],
    },
    "/industries/consumer-product-and-retail": {
      eyebrow: "Industries",
      title: "Consumer Product and Retail",
      summary:
        "Operational support for consumer and retail businesses working to improve execution, responsiveness, and customer-facing performance.",
      paragraphs: [
        "Consumer product and retail businesses operate in markets where responsiveness, brand experience, and operational consistency all shape customer outcomes.",
        "We support these organizations with scalable service models that help streamline execution, improve internal coordination, and strengthen customer-facing operations.",
        "That helps teams stay agile while maintaining the discipline required for dependable growth.",
      ],
    },
  };

  return contentMap[href] ?? null;
}

function resolveConfig(type, slug) {
  if (type === "industry") {
    return {
      menuContext: getIndustryMenuContext(slug),
      groups: getIndustryMenuGroups(),
      introTitle: "Specialized solutions for modern industries",
      introDescription:
        "Empowering industry-focused teams with adaptable service models, strategic execution, and dependable delivery across every business function.",
      imageSrc: "/images/Secondary-About.svg",
      imageAltPrefix: "industries",
      panelClassName: "bg-[#66ff9a]",
    };
  }

  const menuContext = getServiceMenuContext(slug);
  const { introTitle, introDescription } = getServiceIntroContent(
    menuContext?.group?.title,
  );

  return {
    menuContext,
    groups: null,
    introTitle,
    introDescription,
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212522/Governance-Pyth.svg",
    imageAltPrefix: "services",
    panelClassName: "bg-purple-light",
  };
}

export default function ContentTab({ slug = "", type = "service" }) {
  const {
    menuContext,
    groups,
    introTitle,
    introDescription,
    imageSrc,
    imageAltPrefix,
    panelClassName,
  } =
    resolveConfig(type, slug);

  const [expandedGroup, setExpandedGroup] = useState(
    menuContext?.group?.title ?? groups?.[0]?.title ?? "",
  );
  const [activeHref, setActiveHref] = useState(() => {
    if (menuContext?.currentItem?.href) {
      return menuContext.currentItem.href;
    }

    if (groups?.length) {
      return groups[0]?.children?.[0]?.href ?? groups[0]?.href ?? "";
    }

    return menuContext?.tabs?.[0]?.href ?? "";
  });

  const activeEntry = useMemo(() => {
    if (groups?.length) {
      for (const group of groups) {
        if (group.href === activeHref) {
          return { group, item: group };
        }

        for (const child of group.children ?? []) {
          if (child.href === activeHref) {
            return { group, item: child };
          }
        }
      }

      const fallbackGroup = groups[0];
      const fallbackItem = fallbackGroup?.children?.[0] ?? fallbackGroup;

      return fallbackGroup && fallbackItem
        ? { group: fallbackGroup, item: fallbackItem }
        : null;
    }

    if (!menuContext || !menuContext.tabs?.length) {
      return null;
    }

    const activeTab =
      menuContext.tabs.find((item) => item.href === activeHref) ??
      menuContext.tabs[0] ??
      menuContext.currentItem;

    return {
      group: menuContext.group,
      item: activeTab,
    };
  }, [activeHref, groups, menuContext]);

  if (!activeEntry) {
    return null;
  }

  const group = activeEntry.group;
  const activeItem = activeEntry.item;
  const activeTitle = activeItem?.title || group?.title;
  const activeDescription =
    type === "industry" &&
    (activeItem?.href === group?.href || !(group?.children ?? []).length)
      ? `${activeTitle} is one of the industries submenu items in the navbar.`
      : `${activeTitle} is one of the child menu items under ${group?.title} in the navbar submenu.`;
  const detailContent =
    type === "industry"
      ? getIndustryDetailContent(activeItem?.href)
      : getServiceDetailContent(activeItem?.href);
  const getTabId = (item) => getItemId(imageAltPrefix, item.title, "tab");
  const getPanelId = (item) => getItemId(imageAltPrefix, item.title, "panel");

  const tabButtonClass = (isActive) =>
    `group relative flex min-h-[3.7rem] w-full cursor-pointer select-none items-center justify-start overflow-hidden bg-transparent px-5 py-3 text-left transition duration-300 ${
      isActive
        ? "text-gray-off-white"
        : "text-gray-off-white/82 hover:text-gray-tradfi-silver"
    }`;

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container pb-block pt-10 md:pt-12 lg:pt-14">
        {introTitle ? (
          <div className="mb-3xl flex flex-col gap-xl">
            <div className="flex flex-col gap-xs">
              <h2
                id="a-decentralized-world-needs-strong-governance"
                className="font-blender text-xl uppercase text-green-dark"
              >
                {introTitle}
              </h2>
              <div className="text-gray-off-white">{introDescription}</div>
            </div>
            <hr className="!border-[#AB290E]" />
          </div>
        ) : null}

        <section className="flex flex-col gap-5 lg:min-h-[30rem] lg:flex-row lg:items-stretch xl:min-h-[34rem]">
          <div className="lg:w-[18rem] lg:shrink-0">
            <div className="overflow-x-auto pb-2 lg:h-full lg:overflow-hidden lg:pb-0">
              <div
                role="tablist"
                aria-label={`${group?.title} child menu`}
                aria-orientation="vertical"
                className="flex h-full min-h-0 flex-col gap-2 overflow-y-auto overscroll-contain pr-1 lg:max-h-[34rem] lg:pr-2"
              >
                {groups?.length
                  ? groups.map((menuGroup) => {
                    const hasChildren = (menuGroup.children ?? []).length > 0;
                    const isExpanded = expandedGroup === menuGroup.title;
                    const isGroupActive = activeHref === menuGroup.href;
                    const isChildActive = (menuGroup.children ?? []).some(
                      (item) => item.href === activeHref,
                    );
                    const isGroupHighlighted = isGroupActive || isChildActive || isExpanded;

                    return (
                      <div
                        key={menuGroup.title}
                        className="overflow-hidden bg-white/5"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            if (hasChildren) {
                              setExpandedGroup((current) =>
                                current === menuGroup.title ? "" : menuGroup.title,
                              );
                              if (menuGroup.href && !isChildActive) {
                                setActiveHref(menuGroup.href);
                              }
                              return;
                            }

                            setExpandedGroup(menuGroup.title);
                            setActiveHref(menuGroup.href);
                          }}
                          className={`flex min-h-[3.75rem] w-full items-center justify-between px-4 py-3 text-left transition ${
                            isGroupHighlighted
                              ? "bg-[#e7512f] text-gray-off-white"
                              : "text-gray-off-white/88 hover:bg-white/5 hover:text-gray-off-white"
                          }`}
                        >
                          <span className="pr-4 text-lg leading-snug md:text-[1.05rem]">
                            {menuGroup.title}
                          </span>
                          {hasChildren ? (
                            <motion.span
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.24, ease: "easeOut" }}
                              className={`shrink-0 text-[0.82rem] ${
                                isGroupHighlighted ? "text-gray-off-white" : "text-gray-off-white/70"
                              }`}
                            >
                              ▼
                            </motion.span>
                          ) : null}
                        </button>

                        <AnimatePresence initial={false}>
                          {hasChildren && isExpanded ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-1 px-2 py-1">
                                {menuGroup.children.map((item) => {
                                  const isActive = item.href === activeHref;

                                  return (
                                    <button
                                      key={item.href}
                                      id={getTabId(item)}
                                      type="button"
                                      role="tab"
                                      aria-selected={isActive}
                                      aria-controls={getPanelId(item)}
                                      tabIndex={isActive ? 0 : -1}
                                      onClick={() => setActiveHref(item.href)}
                                      className={`flex min-h-[2.8rem] w-full items-center gap-3 px-3 py-2 text-left text-[0.82rem] uppercase tracking-[0.14em] transition ${
                                        isActive
                                          ? "bg-[#e7512f] text-gray-off-white"
                                          : "text-gray-off-white/78 hover:bg-white/5 hover:text-gray-off-white"
                                      }`}
                                    >
                                      <span
                                        className={`h-[1px] w-3 shrink-0 transition ${
                                          isActive
                                            ? "bg-white/90"
                                            : "bg-white/35 group-hover:bg-white/55"
                                        }`}
                                      />
                                      <motion.span
                                        animate={{ x: isActive ? 4 : 0, opacity: isActive ? 1 : 0.84 }}
                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                      >
                                        {item.title}
                                      </motion.span>
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })
                  : menuContext.tabs.map((item) => {
                      const isActive = item.href === activeHref;
                      const tabId = getTabId(item);
                      const panelId = getPanelId(item);

                      return (
                        <button
                          key={item.href}
                          id={tabId}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-controls={panelId}
                          tabIndex={isActive ? 0 : -1}
                          onClick={() => setActiveHref(item.href)}
                          className={tabButtonClass(isActive)}
                        >
                          {isActive ? (
                            <motion.span
                              layoutId="content-tab-active-pill"
                              className="absolute inset-0 bg-[#e7512f]"
                              transition={{
                                type: "spring",
                                stiffness: 240,
                                damping: 26,
                                mass: 0.9,
                              }}
                            />
                          ) : null}
                          <motion.span
                            className="relative z-10"
                            animate={{
                              x: isActive ? 6 : 0,
                              opacity: isActive ? 1 : 0.84,
                            }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                          >
                            {item.title}
                          </motion.span>
                        </button>
                      );
                    })}
              </div>
            </div>
          </div>

          <div className="relative min-w-0 flex-1">
            <motion.div
              id={getPanelId(activeItem)}
              role="tabpanel"
              aria-labelledby={getTabId(activeItem)}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`flex flex-col overflow-hidden transition-all bevel md:h-full ${
                detailContent ? "" : "md:flex-row-reverse"
              } ${panelClassName} shadow-[0_24px_50px_rgba(0,0,0,0.2)]`}
            >
                {!detailContent ? (
                  <div className="h-[16rem] bevel sm:h-[18rem] lg:h-full lg:flex-1">
                    <img
                      alt={activeDescription}
                      width="1152"
                      height="1152"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-cover"
                      style={{ color: "transparent" }}
                      src={imageSrc}
                    />
                  </div>
                ) : null}
                <motion.div
                  className={`flex flex-col ${
                    detailContent
                      ? "h-full min-h-0 p-0"
                      : "justify-end px-4 py-6 sm:px-5 lg:flex-1 lg:px-6"
                  } text-gray-night-green`}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
                    },
                  }}
                >
                  {detailContent ? (
                    <motion.div
                      className="flex h-full min-h-0 flex-col bg-gray-defi-charcoal/95 lg:max-h-[34rem]"
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <div className="border-b border-white/8 bg-gradient-to-r from-white/6 to-transparent px-4 py-4 md:px-6 md:py-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-blender text-[0.7rem] uppercase tracking-[0.22em] text-green-dark">
                            {detailContent.eyebrow}
                          </span>
                          <span className="h-[1px] w-10 bg-[#e7512f]" />
                        </div>

                        <div className="mt-3 flex flex-col gap-3">
                          <h3 className="font-blender text-lg uppercase leading-tight md:text-2xl">
                            {detailContent.title}
                          </h3>
                          <div className="relative h-[1px] w-full bg-black/40">
                            <span className="absolute left-0 top-1/2 h-[0.35rem] w-16 -translate-y-1/2 bg-[#e7512f]" />
                          </div>
                          <p className="max-w-3xl text-sm leading-7 text-gray-off-white/90 md:text-base">
                            {detailContent.summary}
                          </p>
                        </div>
                      </div>

                      <div className="flex min-h-0 flex-1 flex-col px-4 py-4 md:px-6 md:py-5">
                        <div className="min-h-0 flex-1 overflow-y-auto pr-1 md:pr-2 [scrollbar-color:#e7512f_rgba(255,255,255,0.08)] [scrollbar-width:thin]">
                          <div className="space-y-5 text-[0.95rem] leading-8 text-gray-off-white/88 md:text-base">
                            {detailContent.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}

                            {detailContent.sections?.length ? (
                              <div className="space-y-4 pt-2">
                                {detailContent.sections.map((section) => (
                                  <div
                                    key={section.title}
                                    className="rounded-[0.75rem] border border-white/8 bg-white/[0.03] px-4 py-4"
                                  >
                                    <div className="flex items-start gap-3">
                                      <span className="mt-[0.72rem] h-2 w-2 shrink-0 rounded-full bg-[#e7512f]" />
                                      <div className="min-w-0">
                                        <h4 className="text-base font-semibold leading-7 text-gray-off-white md:text-[1.08rem]">
                                          {section.title}
                                        </h4>
                                        <p className="mt-1 text-[0.93rem] leading-7 text-gray-off-white/80 md:text-[0.98rem]">
                                          {section.body}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : null}

                            {detailContent.closing ? (
                              <p className="border-t border-white/8 pt-4 text-[0.93rem] leading-8 text-gray-off-white/82 md:text-[0.98rem]">
                                {detailContent.closing}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <motion.div
                        className="text-sm md:text-xl"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        {activeDescription}
                      </motion.div>
                      <motion.div
                        className="mt-4 text-xs uppercase tracking-[0.18em] opacity-80"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                      >
                        {group?.title}
                      </motion.div>
                    </>
                  )}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
