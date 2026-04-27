"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getServiceMenuContext } from "@/src/utils/serviceUtils";
import {
  getIndustryMenuContext,
  getIndustryMenuGroups,
} from "@/src/utils/navigationTabUtils";
import {
  getActiveStrategyItem,
  normalizeStrategyPath,
  strategyMenuItems,
} from "@/src/data/strategy-menu";

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
          body: "Support for interactive software products with platform-specific execution, polished user experience, and production-focused delivery.",
        },
        {
          title: "Mobile Applications",
          body: "Native and mobile-first application development that improves customer access, communication, and service delivery across devices.",
        },
        {
          title: "Plug-In Development",
          body: "Targeted plugin solutions that extend the functionality of existing software without requiring a full rebuild.",
        },
        {
          title: "Project Management",
          body: "Structured delivery oversight that helps software projects stay aligned with scope, timelines, resource constraints, and business priorities.",
        },
        {
          title: "Quality Assurance",
          body: "Testing and validation support that helps refine software functionality, reduce risk, and improve readiness before release or scale-up.",
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
          body: "We provide reliable domain name server solutions designed for redundancy, fast response times, and dependable availability across critical services.",
        },
        {
          title: "Email Servers",
          body: "We install, configure, and maintain email server environments for internal communication, client correspondence, and high-volume business messaging needs.",
        },
        {
          title: "Enterprise Solutions",
          body: "Our enterprise-grade administration support is tailored to your infrastructure requirements and integrates with core business systems to support long-term operational success.",
        },
        {
          title: "General System Administration",
          body: "We keep systems running through troubleshooting, routine maintenance, issue prevention, and structured remediation so recurring failures are reduced over time.",
        },
        {
          title: "Hosting Infrastructure",
          body: "We support modern hosting infrastructure for websites, communication systems, and server-based business platforms that require dependable performance.",
        },
        {
          title: "Server Scalability",
          body: "We assess your current environment, identify scale limitations, and implement practical improvements so infrastructure can grow with demand while meeting required thresholds.",
        },
        {
          title: "Technical Support",
          body: "Our technical teams resolve server and systems issues quickly, helping reduce downtime and ensuring operational problems do not remain unresolved.",
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

function getStrategyDetailContent(href = "") {
  if (href === "/strategy/b2b-solutions") {
    return {
      eyebrow: "Our Strategy",
      title: "Case Study",
      summary:
        "Businesses prefer case studies when doing research for their business. Sidago Integrated Solutions carries out case studies for your company and presents the findings to you. We have a team of highly experienced researchers and analysts who collect data and compile it into meaningful information that’s easy to understand. Here’s how it works.",
      paragraphs: [
        "We start out by having an initial consultation with our clients before starting the actual case study. Once the consultation is completed, we carry out the case study using scientific processes. Our case studies have found immense usefulness in addressing various business needs that include employee specialization, efficiency, scalability, and overhead reduction.",
      ],
      sections: [
        {
          title: "The Benefits of Having a Case Study Done",
          bullets: [
            "You get your entire business plan developed with more information while learning about mistakes others have made and how to avoid them.",
            "You also know the best practices for your business and how to adopt them. You can also make changes to your existing plan based on guidance from our case study.",
            "You are able to achieve better employee specialization since you’ll learn about the areas that are critical for your company to target. Our case study will be able to direct your management and human resources personnel to recruit specialists and place them to where they are needed most.",
            "Scalable systems are required for better capacity to handle varying volumes of client requests. You are able to understand which systems and work plans are useful for your particular business from our case studies. A good system is one that can accommodate varying customer demands without getting slowed down or becoming inefficient.",
            "Sidago Integrated Solutions helps you reduce employee overhead. Through our case studies, you will know the areas that generate too much overhead and avoid them. You could also combine roles to reduce the number of employees needed. Another popular solution would be to adopt remote staff depending on the capacity of your organization to work with such a labor model.",
            "The amount of time you save is immense. Your company management will know which tasks are time wasters and possibly assign more labor to them, or hire professionals who are able to accomplish them quickly. Time savings usually translate into better profits for your organization.",
          ],
        },
      ],
      closing:
        "We carry out our case studies at Sidago Integrated Solutions with an objective of helping you understand what has happened or is happening, so that you can be able to plan for the future of your company from an informed point of view.\n\nGet in touch with us today!",
    };
  }

  if (href === "/strategy/entire-plan") {
    return {
      eyebrow: "Our Strategy",
      title: "Entire plan",
      summary:
        "Sidago helps you develop or revise your business processes using the results of case studies that are carried out by our team of highly experienced professionals. You can choose the cases to be studied, or we can research them for you and then carry out the studies. This could be one or several case studies. We can also carry out continuous studies to keep you updated on current trends and strategies within the industry.",
      paragraphs: [
        "The benefits that you get from having a case study done by Sidago Integrated Solutions include, but are not limited to:",
      ],
      sections: [
        {
          title: "Key benefits",
          bullets: [
            "You’re able to develop a sound plan if you don’t have one already.",
            "You’ll be able to make informed changes to your existing plan if you have one.",
            "You get to know the options that are available to you if you ever need to make changes.",
            "You’re kept informed of developments within your industry of operation.",
            "You’re able to make better decisions, and adopt processes of operations that are the most suitable to your business.",
          ],
        },
      ],
      closing:
        "We recommend that we carry out two or more case studies for you so that you are able to compare data from various studies and see what the best practices are that should be adopted by your organization.\n\nContact us today to setup your initial consultation.",
    };
  }

  if (href === "/strategy/rapid-scaling") {
    return {
      eyebrow: "Our Strategy",
      title: "Rapid Scaling",
      summary:
        "Scalability is the ability of a system to cope with increases in demand. The system is expected to cope with or without additional hardware in a seamless, efficient, and effective manner. There is also a form of scalability that is often overlooked, the scalability of operations. Sidago Integrated Solutions has the capacity to carry out case studies that are related to both types of scaling.",
      paragraphs: [
        "In the scaling of systems, we analyze your current system and find out its specifications. We then do a case study of another company or business in your field and find out the systems they use or have used, the advantages and shortcomings of various systems, and how applicable the system can be if integrated within your company. Sidago also carries out studies on the process of implementation and how best to approach the process.",
        "Operations need to be of the right scale for efficiency and cost savings. Having small operations may lead to the inability to satisfy customer demands or spending too much in the process of producing adequate products. Having an operation that is too large may lead to wastefulness of resources and overproduction. Your operations need to be of a scale that allows for a sudden increase in consumer demands without overtaxing the process or failing to meet the demand. We do case studies of operations and supply you with information on the best way to set up your operations so that they are scalable.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
    };
  }

  if (href === "/strategy/reduced-employee-overhead") {
    return {
      eyebrow: "Our Strategy",
      title: "Reduced Employee Overhead",
      summary:
        "Sidago integrated solutions offers both consultation services as well as provides a comprehensive workforce. For your employee management needs, Sidago gives you valuable business solutions that help you reduce the money you spend in employee related expenses such as salaries, hiring, management, and supervision.",
      paragraphs: [
        "One of the solutions that greatly saved our clients on employee costs is the use of automated processes and integration of computer technology into tasks that are done by manual processes. One computer system can replace more than 10 employees that would require more money to effectively work and remain at work over time. The deficiencies that come with labor are eliminated too. Machines will not get tired, become bored, or get sick. They cannot go on industrial strikes and go-slows.",
        "We also help you in outsourcing some of your processes. Outsourcing processes means that you can get you work done faster and more efficiently. You get to save on the salaries and wages you would have paid to in-house employees. You also get better working environments that are not stressful to your employees which in turn reduces output thus bettering your competitiveness.",
        "With reduced staff members, you get to save on unseen costs due to services required by your employees. Amenities and services such as electricity, water, office space, stationery, paid leaves, and training costs reduce due to less demand and utilization when you reduce the number of your employees. When you are looking to reduce your employee overhead, be sure to consult with Sidago Integrated Solutions.",
      ],
    };
  }

  if (href === "/strategy/time-savings") {
    return {
      eyebrow: "Our Strategy",
      title: "Time Savings",
      summary:
        "A good case study can help you save time in your organization. Sidago remains the preferred partner for many large corporations when it comes to identifying problems and developing solutions for them. We’re able to conduct case studies and hold consultations with experts in various fields to find out how you could be wasting time in your organization and explore ways that you can quickly reduce that waste of time before it becomes detrimental for your business.",
      paragraphs: [
        "We have partner companies who assist us by providing us with information on their operations, so that we help you save time on several fronts including; employees, management, production, processes, and general operations. Sidago will carry out the case study and identify problems within your organization, and then we’ll sit down and develop various strategies to help you save time.",
        "Some of the ways we achieve time savings for you includes:",
      ],
      sections: [
        {
          title: "",
          bullets: [
            "Weeding out time-consuming practices.",
            "Introduce efficiency into your operations and production processes.",
            "Overhaul systems that are weak and have bottlenecks.",
            "Replacing systems in their entirety when this option is more cost-efficient than carrying out repairs to the current systems in place.",
            "Helping your employees become specialized so that they’re able to carry out their functions faster. This goes hand in hand with staff diversification so that one person can carry out more than one task.",
            "Less bureaucracy and protocols to involve shorter chains of command",
            "Improve communication between departments and employees.",
          ],
        },
      ],
      closing:
        "Sidago Integrated Solutions has had cases where we had to carry out two or more case studies for our clients in order to give them a clear picture of what they need to do to improve their processes. Once the problems are identified, our consultants will come up with innovative and workable solutions for your organization.",
    };
  }

  for (const group of strategyMenuItems) {
    if (group.href === href) {
      return {
        eyebrow: "Our Strategy",
        title: group.title,
        summary: "",
        paragraphs: [],
        sections: [],
        closing: "",
      };
    }

    for (const child of group.children ?? []) {
      if (child.href === href) {
        return {
          eyebrow: group.title,
          title: child.title,
          summary: "",
          paragraphs: [],
          sections: [],
          closing: "",
        };
      }
    }
  }

  return null;
}

function getStrategyMenuGroups() {
  return strategyMenuItems.map((item) => ({
    title: item.title,
    href: item.href,
    children: (item.children ?? []).map((child) => ({
      title: child.title,
      href: child.href,
    })),
  }));
}

function buildCmsHref(type, page) {
  if (page?.href) {
    return page.href;
  }

  if (!page?.slug) {
    return "";
  }

  if (type === "service") {
    return `/services/${page.slug}`;
  }

  if (type === "industry") {
    return `/industries/${page.slug}`;
  }

  if (type === "strategy") {
    return `/strategy/${page.slug}`;
  }

  return `/${page.slug}`;
}

function buildCmsGroups(pages = [], type = "service") {
  const visiblePages = pages
    .filter((page) => page?.showInNavigation !== false)
    .sort((left, right) => (left.menuOrder ?? 0) - (right.menuOrder ?? 0));

  const roots = visiblePages.filter((page) => !page.parentSlug);

  if (roots.length) {
    return roots.map((root) => ({
      title: root.navLabel || root.title,
      href: buildCmsHref(type, root),
      children: visiblePages
        .filter((page) => page.parentSlug === root.slug)
        .map((child) => ({
          title: child.navLabel || child.title,
          href: buildCmsHref(type, child),
        })),
    }));
  }

  const groupedPages = visiblePages.reduce((accumulator, page) => {
    const key = page.menuGroup || "General";
    accumulator[key] = accumulator[key] ?? [];
    accumulator[key].push(page);
    return accumulator;
  }, {});

  return Object.entries(groupedPages).map(([title, groupPages]) => ({
    title,
    href: buildCmsHref(type, groupPages[0]),
    children: groupPages.map((page) => ({
      title: page.navLabel || page.title,
      href: buildCmsHref(type, page),
    })),
  }));
}

function resolveConfig(type, slug, pages = [], pageData = null) {
  if (pages.length) {
    const groups = buildCmsGroups(pages, type);
    const activeHref =
      buildCmsHref(type, pageData) ||
      buildCmsHref(
        type,
        pages.find((page) => page.slug === slug),
      );

    return {
      menuContext: null,
      groups,
      initialActiveHref:
        activeHref || groups[0]?.children?.[0]?.href || groups[0]?.href || "",
      introTitle:
        pageData?.introTitle ||
        (type === "strategy"
          ? "Our Strategy"
          : type === "industry"
            ? "Specialized solutions for modern industries"
            : "Specialized services designed for execution"),
      introDescription:
        pageData?.introDescription ||
        (type === "strategy"
          ? "Empowering growth-focused teams with clear strategic direction, operational alignment, and dependable execution across every stage of business development."
          : type === "industry"
            ? "Empowering industry-focused teams with adaptable service models, strategic execution, and dependable delivery across every business function."
            : "We provide practical service support across business-critical functions, helping teams improve delivery quality, operational consistency, and day-to-day execution."),
      imageSrc: pageData?.featuredImage?.url || "/images/Secondary-About.svg",
      imageAltPrefix: type === "industry" ? "industries" : type,
      panelClassName: type === "industry" ? "" : "bg-purple-light",
      cmsPages: pages,
    };
  }

  if (type === "strategy") {
    const pathname = `/strategy/${slug}`;
    const activeStrategyItem =
      getActiveStrategyItem(pathname) ?? strategyMenuItems[0];

    return {
      menuContext: {
        group: {
          title: activeStrategyItem.title,
          href: activeStrategyItem.href,
          children: activeStrategyItem.children ?? [],
        },
        currentItem:
          activeStrategyItem.children?.find(
            (child) =>
              normalizeStrategyPath(child.href) ===
              normalizeStrategyPath(pathname),
          ) ??
          activeStrategyItem.children?.[0] ??
          activeStrategyItem,
        tabs: activeStrategyItem.children ?? [],
      },
      groups: getStrategyMenuGroups(),
      initialActiveHref:
        activeStrategyItem.children?.[0]?.href ?? activeStrategyItem.href ?? "",
      introTitle: "Our Strategy",
      introDescription:
        "Empowering growth-focused teams with clear strategic direction, operational alignment, and dependable execution across every stage of business development.",
      imageSrc: "/images/Secondary-About.svg",
      imageAltPrefix: "strategy",
      panelClassName: "bg-purple-light",
    };
  }

  if (type === "industry") {
    return {
      menuContext: getIndustryMenuContext(slug),
      groups: getIndustryMenuGroups(),
      initialActiveHref: "",
      introTitle: "Specialized solutions for modern industries",
      introDescription:
        "Empowering industry-focused teams with adaptable service models, strategic execution, and dependable delivery across every business function.",
      imageSrc: "/images/Secondary-About.svg",
      imageAltPrefix: "industries",
      panelClassName: "",
    };
  }

  const menuContext = getServiceMenuContext(slug);
  const { introTitle, introDescription } = getServiceIntroContent(
    menuContext?.group?.title,
  );

  return {
    menuContext,
    groups: null,
    initialActiveHref: "",
    introTitle,
    introDescription,
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212522/Governance-Pyth.svg",
    imageAltPrefix: "services",
    panelClassName: "bg-purple-light",
  };
}

export default function ContentTab({
  slug = "",
  type = "service",
  pages = [],
  pageData = null,
}) {
  const {
    menuContext,
    groups,
    initialActiveHref,
    introTitle,
    introDescription,
    imageSrc,
    imageAltPrefix,
    panelClassName,
    cmsPages,
  } = resolveConfig(type, slug, pages, pageData);

  const cmsPageMap = useMemo(
    () =>
      new Map(
        (cmsPages ?? []).map((page) => [buildCmsHref(type, page), page]),
      ),
    [cmsPages, type],
  );

  const [expandedGroup, setExpandedGroup] = useState(
    menuContext?.group?.title ?? groups?.[0]?.title ?? "",
  );
  const [activeHref, setActiveHref] = useState(() => {
    if (menuContext?.currentItem?.href) {
      return menuContext.currentItem.href;
    }

    if (groups?.length) {
      return (
        initialActiveHref ||
        groups[0]?.children?.[0]?.href ||
        groups[0]?.href ||
        ""
      );
    }

    return initialActiveHref || menuContext?.tabs?.[0]?.href || "";
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
  const cmsDetailPage = cmsPageMap.get(activeItem?.href);
  const detailContent = cmsDetailPage
    ? {
        eyebrow: cmsDetailPage.menuGroup || group?.title || introTitle,
        title: cmsDetailPage.title,
        summary: cmsDetailPage.summary || "",
        paragraphs: cmsDetailPage.paragraphs || [],
        sections: cmsDetailPage.detailSections || [],
        closing: cmsDetailPage.closing || "",
      }
    : type === "industry"
      ? getIndustryDetailContent(activeItem?.href)
      : type === "strategy"
        ? getStrategyDetailContent(activeItem?.href)
      : getServiceDetailContent(activeItem?.href);
  const isStrategyDetailPanel = type === "strategy" && Boolean(detailContent);
  const isIndustryDetailPanel = type === "industry" && Boolean(detailContent);
  const isStrategyMenu = type === "strategy";
  const isIndustryMenu = type === "industry";
  const sidebarViewportStyle = {
    maxHeight: "calc(100vh - 17rem)",
  };
  const sidebarScrollStyle = {
    maxHeight: "calc(100vh - 18rem)",
    overflowY: "auto",
    overflowX: "hidden",
    WebkitOverflowScrolling: "touch",
    scrollbarGutter: "stable",
  };
  const getTabId = (item) => getItemId(imageAltPrefix, item.title, "tab");
  const getPanelId = (item) => getItemId(imageAltPrefix, item.title, "panel");

  const tabButtonClass = (isActive) =>
    `group relative flex min-h-[3.7rem] w-full cursor-pointer select-none items-center justify-start overflow-hidden bg-transparent px-5 py-3 text-left transition duration-300 ${
      isActive
        ? "text-gray-off-white"
        : "text-gray-off-white/82 hover:text-gray-tradfi-silver"
    }`;

  return (
    <section className="bg-[#1C211E]">
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

        <section className="flex flex-col gap-5 lg:min-h-[33rem] lg:flex-row lg:items-stretch xl:min-h-[37rem]">
          <div
            className={`${isIndustryMenu ? "lg:w-[21rem] xl:w-[22rem]" : "lg:w-[18rem]"} lg:shrink-0`}
          >
            <div
              className={
                isIndustryMenu
                  ? "bg-transparent p-0 shadow-none lg:sticky lg:top-24"
                  : "overflow-x-auto pb-2 lg:h-full lg:overflow-hidden lg:pb-0"
              }
              style={isIndustryMenu ? sidebarViewportStyle : undefined}
            >
              <div
                role="tablist"
                aria-label={`${group?.title} child menu`}
                aria-orientation="vertical"
                className={`flex min-h-0 flex-col gap-2 ${
                  isIndustryMenu
                    ? "pr-1 lg:pr-2 [scrollbar-color:#f05a35_rgba(255,255,255,0.06)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[0.42rem] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/[0.05] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#f05a35] [&::-webkit-scrollbar-thumb:hover]:bg-[#ff6b47]"
                    : "h-full overflow-y-auto overscroll-contain pr-1 lg:max-h-[38rem] lg:pr-2 [scrollbar-color:#e7512f_rgba(255,255,255,0.06)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/[0.05] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[linear-gradient(180deg,#ff7f5f_0%,#e7512f_100%)] [&::-webkit-scrollbar-thumb]:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] [&::-webkit-scrollbar-thumb:hover]:bg-[linear-gradient(180deg,#ff9477_0%,#f16441_100%)]"
                }`}
                style={isIndustryMenu ? sidebarScrollStyle : undefined}
              >
                {groups?.length
                  ? groups.map((menuGroup) => {
                      const hasChildren = (menuGroup.children ?? []).length > 0;
                      const isExpanded = expandedGroup === menuGroup.title;
                      const isGroupActive = activeHref === menuGroup.href;
                      const isChildActive = (menuGroup.children ?? []).some(
                        (item) => item.href === activeHref,
                      );
                      const isGroupHighlighted =
                        isGroupActive || isChildActive || isExpanded;

                      return (
                        <div
                          key={menuGroup.title}
                          className={`overflow-hidden ${
                            isIndustryMenu
                              ? "shrink-0 rounded-[1rem] bg-white/[0.02]"
                              : isStrategyMenu
                                ? "shrink-0 rounded-[1rem] bg-white/[0.04]"
                                : "shrink-0 bg-white/5"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              if (hasChildren) {
                                setExpandedGroup((current) =>
                                  current === menuGroup.title
                                    ? ""
                                    : menuGroup.title,
                                );
                                if (menuGroup.href && !isChildActive) {
                                  setActiveHref(menuGroup.href);
                                }
                                return;
                              }

                              setExpandedGroup(menuGroup.title);
                              setActiveHref(menuGroup.href);
                            }}
                            className={`relative flex min-h-[3.55rem] w-full shrink-0 items-center justify-between overflow-hidden rounded-[0.95rem] px-4 py-3 text-left transition ${
                              isIndustryMenu
                                ? isGroupHighlighted
                                  ? "text-white"
                                  : "text-gray-off-white/88 hover:bg-white/[0.05] hover:text-white"
                                : isStrategyMenu
                                  ? isGroupHighlighted
                                    ? "text-white"
                                    : "text-gray-off-white/88 hover:bg-white/[0.06] hover:text-white"
                                  : isGroupHighlighted
                                    ? "bg-[#e7512f] text-gray-off-white"
                                    : "text-gray-off-white/88 hover:bg-white/5 hover:text-gray-off-white"
                            }`}
                          >
                            {(isIndustryMenu || isStrategyMenu) &&
                            isGroupHighlighted ? (
                              <motion.span
                                layoutId={
                                  isIndustryMenu
                                    ? "industry-group-active-pill"
                                    : "strategy-group-active-pill"
                                }
                                className="absolute inset-0 rounded-[0.95rem] bg-[linear-gradient(90deg,rgba(231,81,47,0.94),rgba(231,81,47,0.72))]"
                                transition={{
                                  type: "spring",
                                  stiffness: 240,
                                  damping: 26,
                                  mass: 0.9,
                                }}
                              />
                            ) : null}
                            <span
                              className={`relative z-10 pr-4 leading-[1.18] ${
                                isIndustryMenu
                                  ? "text-[0.96rem] md:text-[1rem]"
                                  : isStrategyMenu
                                    ? "text-lg md:text-[1.05rem]"
                                    : "text-lg md:text-[1.05rem]"
                              }`}
                            >
                              {menuGroup.title}
                            </span>
                            {hasChildren ? (
                              <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.24, ease: "easeOut" }}
                                className={`shrink-0 text-[0.82rem] ${
                                  isIndustryMenu || isStrategyMenu
                                    ? isGroupHighlighted
                                      ? "text-white"
                                      : "text-gray-off-white/70"
                                    : isGroupHighlighted
                                      ? "text-gray-off-white"
                                      : "text-gray-off-white/70"
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
                                <div
                                  className={`flex shrink-0 flex-col gap-1 px-2 py-1 ${isIndustryMenu || isStrategyMenu ? "pb-2" : ""}`}
                                >
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
                                        className={`relative flex min-h-[2.8rem] w-full shrink-0 items-center gap-3 overflow-hidden rounded-[0.8rem] px-3 py-2 text-left transition ${
                                          isIndustryMenu
                                            ? isActive
                                              ? "text-white"
                                              : "text-gray-off-white/76 hover:bg-white/[0.06] hover:text-white"
                                            : isStrategyMenu
                                              ? isActive
                                                ? "text-white"
                                                : "text-gray-off-white/76 hover:bg-white/[0.06] hover:text-white"
                                              : isActive
                                                ? "bg-[#e7512f] text-gray-off-white"
                                                : "text-gray-off-white/78 hover:bg-white/5 hover:text-gray-off-white"
                                        }`}
                                      >
                                        {(isIndustryMenu || isStrategyMenu) &&
                                        isActive ? (
                                          <motion.span
                                            layoutId={
                                              isIndustryMenu
                                                ? "industry-child-active-pill"
                                                : "strategy-child-active-pill"
                                            }
                                            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]"
                                            transition={{
                                              type: "spring",
                                              stiffness: 240,
                                              damping: 26,
                                              mass: 0.9,
                                            }}
                                          />
                                        ) : null}
                                        <span
                                          className={`relative z-10 shrink-0 transition ${
                                            isIndustryMenu || isStrategyMenu
                                              ? isActive
                                                ? "h-2 w-2 rounded-full bg-white"
                                                : "h-[1px] w-3 bg-white/35 group-hover:bg-white/55"
                                              : isActive
                                                ? "h-[1px] w-3 bg-white/90"
                                                : "h-[1px] w-3 bg-white/35 group-hover:bg-white/55"
                                          }`}
                                        />
                                        <motion.span
                                          className={`relative z-10 leading-[1.2] ${
                                            isIndustryMenu
                                              ? "text-[0.8rem] tracking-[0.08em]"
                                              : "text-[0.82rem] uppercase tracking-[0.14em]"
                                          }`}
                                          animate={{
                                            x: isActive ? 4 : 0,
                                            opacity: isActive ? 1 : 0.84,
                                          }}
                                          transition={{
                                            duration: 0.18,
                                            ease: "easeOut",
                                          }}
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
                    className={`flex h-full min-h-0 flex-col lg:max-h-[38rem] ${
                      isStrategyDetailPanel
                        ? "bg-[#3c85dd]"
                        : isIndustryDetailPanel
                          ? "bg-[#EC9B9B]"
                        : "bg-gray-defi-charcoal/95"
                    }`}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <div className="border-b border-white/8 bg-gradient-to-r from-white/6 to-transparent px-4 py-5 md:px-6 md:py-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-blender text-[0.7rem] uppercase tracking-[0.22em] text-green-dark">
                          {detailContent.eyebrow}
                        </span>
                        <span className="h-[1px] w-10 bg-[#e7512f]" />
                      </div>

                      <div className="mt-4 flex flex-col gap-4">
                        <h3 className="max-w-3xl font-blender text-[1.25rem] uppercase leading-[1.08] tracking-[0.01em] text-gray-off-white md:text-[2.05rem]">
                          {detailContent.title}
                        </h3>
                        <div className="relative h-[1px] w-full bg-black/40">
                          <span className="absolute left-0 top-1/2 h-[0.35rem] w-16 -translate-y-1/2 bg-[#e7512f]" />
                        </div>
                        <p className="max-w-[44rem] text-[0.98rem] leading-8 text-gray-off-white/88 md:text-[1.04rem]">
                          {detailContent.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col px-4 py-5 md:px-6 md:py-6">
                      <div className="min-h-0 flex-1 overflow-y-auto pr-1 md:pr-2 [scrollbar-color:#e7512f_rgba(255,255,255,0.06)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/[0.05] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[linear-gradient(180deg,#ff7f5f_0%,#e7512f_100%)] [&::-webkit-scrollbar-thumb]:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] [&::-webkit-scrollbar-thumb:hover]:bg-[linear-gradient(180deg,#ff9477_0%,#f16441_100%)]">
                        <div className="space-y-6 text-[0.98rem] leading-8 tracking-[0.005em] text-gray-off-white/84 md:text-[1.02rem]">
                          {detailContent.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="max-w-[46rem]">
                              {paragraph}
                            </p>
                          ))}

                          {detailContent.sections?.length ? (
                            <div className="space-y-4 pt-3">
                              {detailContent.sections.map((section) => (
                                <div
                                  key={section.title}
                                  className="rounded-[0.95rem] border border-white/8 bg-white/[0.035] px-4 py-4 md:px-5 md:py-5"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="mt-[0.72rem] h-2 w-2 shrink-0 rounded-full bg-[#e7512f]" />
                                    <div className="min-w-0">
                                      {section.title ? (
                                        <h4 className="text-[1rem] font-medium leading-7 tracking-[0.01em] text-gray-off-white md:text-[1.12rem]">
                                          {section.title}
                                        </h4>
                                      ) : null}
                                      {section.body ? (
                                        <p className="mt-2 max-w-[42rem] text-[0.95rem] leading-8 text-gray-off-white/78 md:text-[1rem]">
                                          {section.body}
                                        </p>
                                      ) : null}
                                      {section.bullets?.length ? (
                                        <div className="mt-3 space-y-3.5 text-[0.95rem] leading-8 text-gray-off-white/78 md:text-[1rem]">
                                          {section.bullets.map((bullet) => (
                                            <div
                                              key={bullet}
                                              className="flex items-start gap-3"
                                            >
                                              <span className="mt-[0.72rem] h-2 w-2 shrink-0 rounded-full bg-[#e7512f]" />
                                              <p className="max-w-[42rem]">
                                                {bullet}
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {detailContent.closing ? (
                            <div className="max-w-[46rem] whitespace-pre-line border-t border-white/8 pt-5 text-[0.96rem] leading-8 text-gray-off-white/76 md:text-[1rem]">
                              {detailContent.closing}
                            </div>
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
