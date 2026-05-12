"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getServiceMenuContext } from "@/src/utils/serviceUtils";
import {
  getIndustryMenuContext,
  getIndustryMenuGroups,
  getServicesMenuGroups,
} from "@/src/utils/navigationTabUtils";
import {
  getActiveStrategyItem,
  normalizeStrategyPath,
  strategyMenuItems,
} from "@/src/data/strategy-menu";

function getItemId(prefix, value, suffix) {
  return `${prefix}-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${suffix}`;
}

function findMenuItemByHref(items, href) {
  for (const item of items ?? []) {
    if (item.href === href) {
      return item;
    }

    const nested = findMenuItemByHref(item.children, href);

    if (nested) {
      return nested;
    }
  }

  return null;
}

function menuTreeHasActiveHref(items, href) {
  for (const item of items ?? []) {
    if (item.href === href) {
      return true;
    }

    if (menuTreeHasActiveHref(item.children, href)) {
      return true;
    }
  }

  return false;
}

function findNestedServiceParentHref(children, pathHref) {
  for (const item of children ?? []) {
    const subs = item.children ?? [];

    if (!subs.length) {
      continue;
    }

    if (item.href === pathHref || subs.some((s) => s.href === pathHref)) {
      return item.href;
    }
  }

  return "";
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
    "/services/project-management/": {
      eyebrow: "Development & IT",
      title: "Software Project Management",
      summary:
        "Delivery oversight that keeps software and IT initiatives aligned with scope, resources, and timelines—so leadership can see progress, cost, and risk in one clear picture.",
      paragraphs: [
        "Resource management is central to running a successful business, especially when programs span multiple teams, vendors, and budgets. Without a disciplined view of work in flight against available capacity and spend, organizations can over-commit, duplicate effort, or miss early warning signs that a project is drifting away from plan.",
        "For IT-led organizations, software project management is the practical mechanism to track progress through each phase, compare delivery against the baseline plan, and manage expenses and deadlines with fewer surprises. The focus is on visibility and control: what is done, what is next, what is blocked, and what decisions are required to keep momentum.",
        "Sidago provides outsourcing and business consulting support for teams that need experienced oversight across larger or higher-risk initiatives. We help structure governance, communication, and reporting so stakeholders stay aligned, milestones remain credible, and delivery goals are pursued with realistic expectations.",
        "By tracking project stages, tightening documentation and status rhythms, and supporting transparent commercial practices—including clear, detailed invoicing where appropriate—we aim to improve trust and satisfaction on both sides of the engagement.",
      ],
      closing: "Get in touch with us today.",
      closingHref: "/contact",
    },
    "/services/software-qa/": {
      eyebrow: "Development & IT",
      title: "Software Quality Assurance (QA)",
      summary:
        "Structured testing and quality practices that reduce release risk, catch defects early, and help business software perform reliably as systems grow or change.",
      paragraphs: [
        "Quality assurance is essential before implementation and whenever you make structural changes to business software. Thoughtful QA reduces the chance that issues reach production, protects customer experience, and helps teams validate that performance, security, and workflows behave as intended under real operating conditions.",
        "Testing can—and should—begin before new systems go live or before major upgrades roll out. Finding and correcting errors earlier avoids costly rework, reduces operational disruption, and keeps delivery aligned with business goals instead of firefighting after release.",
        "While many QA approaches stop at checking boxes against a standard checklist, Sidago Integrated Solutions takes a broader view of quality as a business outcome—not only whether something passes a test, but whether the product is fit for purpose, maintainable, and safe to operate at scale.",
        "Our work typically includes producing a detailed analysis of risk areas, making prioritized recommendations, proposing practical remediation paths, and supporting adoption with hands-on guidance—including real-time training where teams need to build confidence with new processes or tools.",
        "Together, these steps form a complete package of professional consultation and practical improvement so quality becomes part of how you deliver—not an afterthought bolted on at the end.",
      ],
      closing: "Contact us today!",
      closingHref: "/contact",
    },
    "/services/administrative-services/": {
      eyebrow: "Administrative Support",
      title: "Administrative Services",
      summary:
        "Outsourced administration that lifts routine operational load—so owners and teams can focus on core strengths while standards, coordination, and day-to-day execution stay dependable.",
      paragraphs: [
        "When a business is established on a small scale, the most common factor behind its establishment is the passion and interest of the business owner in that particular field. This may not be the case with large organizations, but any small-scale business passes through this phase before expanding into a much larger company. However, the digital landscape and the complications of online marketing have made it difficult to run a business without good experience or in-depth knowledge. That is why a small-scale business owner may find it difficult to carry out administrative tasks. In such situations, outsourcing the admin department to another organization can solve the problem easily. Not only can it increase the efficiency of the business, but it can also ease the burden of the owner and allow him or her to focus on core competencies. Outsourcing administrative services can also help a large organization reduce costs and increase efficiency overall.",
        "Keeping in view the concept above, we are here to help you with administration problems regardless of the nature and scale of your business. For many companies, the most common problems causing hindrance to progress are associated with administration. As an outsourcing and business consultation firm, Sidago Integrated Solutions can help you by looking after your administration department. We understand that this department is crucial for maintaining standards and coordinating the rest of the departments well. With years of experience and in-depth knowledge of modern business techniques, we work toward a smoothly running business. We believe in planning for unexpected situations and upcoming events ahead of time. By predicting future changes in market trends and evaluating current problems in your organization's structure, we look forward to meeting future challenges and moving toward improvement. With this administration approach, we are proactive in our services.",
        "Beyond general administrative services, notable areas we cover include email management, transcription, web research, data entry, and personal assistant support. By availing our services, you can be confident that you will achieve high customer satisfaction and a strong reputation. You neither need to spend hours of frustration organizing files and paperwork, nor supervise a large administration department alone. Our experienced and highly qualified team is here to help ensure your business meets its objectives linked with administration. Meanwhile, you can focus on other aspects of your business and work toward the highest place in this competitive business environment.",
      ],
      closing: "Get in touch with us today.",
      closingHref: "/contact",
    },
    "/services/data-entry/": {
      eyebrow: "Administrative Support",
      title: "Data Entry",
      summary:
        "Accurate, confidential clerical data entry and capture—handled by experienced operators with verification discipline, manual-first quality, and the tooling needed for consistent digital formats.",
      paragraphs: [
        "Regardless of the technical changes and advancements we make in terms of business, there are always some tasks that need human operators to make sure that everything is done accurately. Such jobs are usually categorized as clerical jobs. Data entry belongs to the same category. As a clerical job, it does not require advanced technical skills or high qualifications. Good experience, relevant personality traits, and physical stamina are often enough to handle data entry work well. However, because data entry may involve confidential information about the company, it is very important that an experienced human operator looks after it. That helps ensure accuracy while maintaining privacy of data. For privacy reasons—and sometimes cost—many companies prefer to outsource these tasks to third parties.",
        "Sidago Integrated Solutions is determined to help businesses establish and prosper. We therefore offer data entry services as part of our administrative support. With our carefully planned approach, we aim for a high level of accuracy in delivery. We prefer manual data entry where it makes it possible to apply verification techniques with more rigor. Our swift and experienced typists are ready to meet realistic deadlines you assign for projects of many kinds. When data entry involves capturing and transferring information into a digital format for computer use, we maintain the equipment needed to keep formats consistent. Along with accuracy, we also work to keep your data confidential and will not disclose it to anyone without your permission. In short, you can rely on disciplined data entry support at competitive rates.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/email-response-handling/": {
      eyebrow: "Administrative Support",
      title: "Email Response Handling",
      summary:
        "Reliable, secure email handling for growing teams—so responses stay timely, professional, and consistent without letting inboxes become a bottleneck for reputation or customer trust.",
      paragraphs: [
        "As businesses grow, administrative work expands quickly—and email is often one of the first places where delays show up. When responses slow down, messages pile up, or follow-through becomes inconsistent, the impact is not only internal stress. Customers and partners can lose confidence, and even a strong brand can take reputational damage when communication feels unresponsive or disorganized.",
        "Sidago’s email management approach is built to give you a more personalized, secure, and efficient way to handle day-to-day correspondence. We focus on clear ownership of inboxes, disciplined response patterns, and careful handling of sensitive information so your team saves time while maintaining confidentiality and a professional tone in every thread.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/personal-assistant/": {
      eyebrow: "Administrative Support",
      title: "Personal Assistant",
      summary:
        "Flexible executive and administrative support—scheduling, records, travel, and day-to-day coordination—delivered through plans that match how you work, virtually or on-site.",
      paragraphs: [
        "One of the biggest challenges businesspeople face is juggling responsibilities at work with demands in their personal lives. If you are supervising a large team, schedule clashes are common—and they can affect your reputation as a leader. A practical way to reduce friction is hiring a personal assistant to help with administrative and management tasks. These tasks include, but are not limited to, scheduling meetings, keeping financial records, booking accommodations, and making other necessary travel arrangements.",
        "As an outsourcing firm, we understand the common problems many business owners face that can slow progress. With Sidago’s personal assistant service, you can reduce the risk of missed meetings or appointments. We offer fully customized plans and packages so you can choose what fits your project needs and working style.",
        "Those customized packages also make it possible to receive support only during the hours you need, which helps avoid unnecessary charges. We offer both virtual and on-site personal assistants who are dedicated to serving you in different situations. Our assistants bring strong communication skills and relevant experience so they can meet your requirements with professionalism and care.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/transcription/": {
      eyebrow: "Administrative Support",
      title: "Transcription",
      summary:
        "Accurate, confidential transcription for business, legal, and medical-style workflows—turning audio and spoken content into clean text you can search, publish, and archive with confidence.",
      paragraphs: [
        "Transcription remains essential for many businesses that need reliable records of conversations, interviews, meetings, and specialized proceedings. Beyond day-to-day operations, high-quality transcripts can support compliance, training, knowledge retention, and even discoverability when content is repurposed for the web. Fields such as legal proceedings and medical documentation have long depended on disciplined transcription practices to preserve detail and reduce ambiguity.",
        "Sidago Integrated Solutions provides transcription support as part of our administrative services portfolio. We focus on clear turnaround expectations, careful listening, and consistent formatting so you receive transcripts you can trust. Our approach emphasizes accuracy and confidentiality, with pricing structured to stay practical for ongoing business use.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/web-research/": {
      eyebrow: "Administrative Support",
      title: "Web Research",
      summary:
        "Structured online research and marketplace intelligence—so decisions are backed by current, relevant data instead of guesswork or incomplete snapshots.",
      paragraphs: [
        "For business owners and operators, the web is both an opportunity and a noise problem. Useful decisions depend on relevant, well-sourced information: competitor positioning, pricing signals, customer sentiment, regulatory updates, and the many small facts that change week to week. Without disciplined research habits, teams can spend hours online and still walk away with conclusions that are incomplete, outdated, or hard to defend internally.",
        "Sidago Integrated Solutions helps organizations turn vague questions into clearer evidence. We support detailed marketplace scanning, structured note-taking, and practical data-gathering approaches—including survey-style collection where it fits—so you receive organized findings you can act on. The goal is faster clarity, fewer blind spots, and research output that is easier to share with stakeholders.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/what-we-write/": {
      eyebrow: "Administrative Support",
      title: "What We Write",
      summary:
        "Professional writing support—from persuasive copy to long-form creative work and web-ready content—delivered with consistent tone, structure, and editorial quality.",
      paragraphs: [
        "Clear writing is one of the fastest ways to improve how a business is understood. Whether the goal is to convert readers, explain a complex offer, or build trust over time, the words on the page need to match the quality of the product or service behind them.",
        "Under What We Write, Sidago supports copywriting, creative writing, and web content writing as focused service tracks. That structure makes it easier to match the right writer, review cadence, and format to the channel you are publishing in—without forcing a one-size-fits-all approach.",
        "If you are unsure which track fits best, starting from this overview page is a practical way to compare options and decide what to prioritize first.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/copywriting/": {
      eyebrow: "Administrative Support",
      title: "Copywriting",
      summary:
        "Conversion-oriented copy for ads, landing pages, email, and sales collateral—written to clarify the offer, reduce friction, and support measurable marketing outcomes.",
      paragraphs: [
        "Copywriting is not about clever phrases for their own sake. It is about aligning message, audience, and action so readers understand what to do next and why it is worth doing now.",
        "Sidago supports copywriting projects where the goal is to improve clarity, strengthen calls to action, and keep voice consistent across campaigns. We focus on practical drafts that can move quickly through review cycles and ship with confidence.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/creative-writing/": {
      eyebrow: "Administrative Support",
      title: "Creative Writing",
      summary:
        "Long-form and narrative-driven writing for storytelling, brand voice, and editorial projects where depth, tone, and originality matter as much as structure.",
      paragraphs: [
        "Creative writing work often needs room for voice, pacing, and character—whether the output is thought leadership, scripted narrative, or brand-forward editorial content.",
        "Our creative writing support is built for teams that want dependable drafting and revision help without losing the personality that makes the content feel human and memorable.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/web-content-writing/": {
      eyebrow: "Administrative Support",
      title: "Web Content Writing",
      summary:
        "Web-first content that reads well on-page, supports SEO intent, and stays organized for publishing workflows—from service pages to articles and resource libraries.",
      paragraphs: [
        "Web content has to work twice: it should be easy to scan for busy readers, and it should be structured so teams can maintain it over time without breaking consistency.",
        "Sidago helps with web content writing that balances readability, accurate messaging, and practical formatting so pages stay useful after launch—not only on day one.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    },
    "/services/translation-services/": {
      eyebrow: "Administrative Support",
      title: "Translation Services",
      summary:
        "Quality translation helps organizations internationalize with clarity—so ideas, contracts, and customer-facing content read naturally in every market you enter.",
      paragraphs: [
        "In our increasingly interconnected global business climate we are living in today, having quality translation services to convey your thoughts as clearly, concisely, and eloquently as possible to as many different languages as possible is quickly becoming a factor that can make or break a business.",
        "Translation is an activity of converting or transforming words or text from one language into another. It ought to incorporate search, context, language structure, grammatical rules, culture, composition traditions, and sounds or concepts that are difficult to convey.",
      ],
      sections: [
        {
          title: "Why Translation Services are Important for Organizations",
          body: "Translation plays a vital role in globalization because it helps in conveying and communicating ideas, information, and documentation in different languages. Despite the fact that English may be perceived as the official language of business, this is becoming less and less so, as the world becomes less Americanized.\n\nMost of the organizations need translation services because it:",
          bullets: [
            "Helps in achieving internationalization, globalization, and localization",
            "Ensures understanding of transactions related to imports and exports",
            "Acts as a source of information and knowledge about foreign cultures",
            "Provides aid in perceiving international, political, and social issues",
            "Plays an important role in the performance of government and international companies",
            "International dialogues depend on successful translation",
            "Helps in promoting tourism all over the world",
            "Aids in customizing business messages according to a specific region",
            "High-quality translation supports attracting customers internationally",
          ],
        },
        {
          title: "",
          body: "Translation helps in summarizing correspondence, reports, promoting, and site content in different countries.",
        },
        {
          title: "Some Things To Keep In Mind When Considering A Translation Service",
          body: "Considering these things ahead of time will make sure you find the best possible translation service for your needs, as well as making sure your time is spent as efficiently and cost-effectively as possible.\n\nWhen consulting a translation service:",
          bullets: [
            "Approach them with an accurate analysis of what is required by your business. If the task involves one small translation, it might make sense to hire an individual. However, if it is necessary to translate something on a much more extensive level, then it is important to hire the right business that will establish your brand in the right geographical market.",
            "Will you be needing automated or machine translations, or will you be requiring human translation?",
            "What industry do they specialize in?",
            "Are they native speakers of the language in question?",
            "Do they have any references?",
            "How long have they worked in the industry?",
            "What separates them from the competition?",
            "Are they up to date, technologically?",
            "Are they client-oriented?",
            "What do you value?",
          ],
        },
        {
          title: "",
          body: "Knowing what you value will help you find the translation service that is most in line with your vision, and portray your company in the way you want to be seen.",
        },
        {
          title: "Why Should You Choose Sidago Translation Services",
          body: "We provide high-quality translation services to individuals and corporations.\n\nOur highly qualified and experienced translation team helps in:",
          bullets: [
            "Translation",
            "Proofreading",
            "Research",
            "Interpretation",
            "Linguistic problems",
            "Transcription",
            "Multilingual research",
            "Web programming",
          ],
        },
        {
          title: "",
          body: "Our translation services are for all international languages, and we maintain strict confidentiality. Our assistance for translation is available nationwide and worldwide. We provide affordable, trustworthy, and fast translators to our clients and customers according to their requirements.",
        },
      ],
      closing: "Please feel free to contact us for any further inquiries and assistance.",
      closingHref: "/contact",
    },
    "/services/data-mining/": {
      eyebrow: "Administrative Support",
      title: "Data Mining",
      summary:
        "Data mining turns large databases into actionable insight—so teams can reduce risk, sharpen decisions, and move faster than the competition in a data-driven economy.",
      paragraphs: [
        "The internet is a double-edged sword. On one hand, it offers more opportunities and resources for the canny corporate businessperson and the savvy marketer while, on the other, there are more demands, pressures, and things to know for every single member of an organization, from top to bottom. It is more imperative than ever before for a company to take advantage of every opportunity at their disposal, and save time and resources when they can. Data mining offers almost unparalleled insights for companies of all sizes.",
        "In fact, Big Data and data mining is predicted to be a $50 billion industry by 2017. Best learn to take advantage now, before your competition.",
      ],
      sections: [
        {
          title: "Why Organizations Need Data Mining Services",
          body: "Data mining involves extraction of concealed prescient information from extensive databases. It is an intense innovation with the great potential to help organizations concentrate on essential data in their information stockrooms.",
        },
        {
          title: "Some benefits of data mining for businesses include:",
          bullets: [
            "In finance and banking, data mining is used to create accurate risk models for loans and mortgages. It is also very helpful for detecting fraud.",
            "In marketing, data mining techniques are used to increase conversion rates, improve customer satisfaction, and create targeted advertising campaigns. They can also be used for predictive behaviors, such as coming up with ideas for completely new product lines.",
            "Retail stores use customer shopping habits and details to optimize the layout of their stores.",
            "Tax governing bodies use data mining techniques to detect fraudulent transactions and single out suspicious tax returns.",
            "In manufacturing, data mining can be used to improve product safety, usability, and comfort.",
          ],
        },
        {
          title: "",
          body: "No matter what industry you are in, Big Data and data mining can make your operations more streamlined and focused. To find out how our data specialists can help take you and your company to the next plateau, contact us today!",
        },
        {
          title:
            "Data mining is needed in an organization for some of the following reasons:",
          bullets: [
            "Helps in data collection and storage at a rapid speed",
            "Management of raw facts and figures",
            "Derives ways for effective data usage",
            "Helps in agile computerization of data",
            "Ease in fraud detection",
            "Increases customer loyalty",
            "Improves market segmentation",
            "Helps in risk management",
            "Ensures better decision making",
            "Production control is also achieved",
          ],
        },
        {
          title: "Reasons to Choose Sidago Data Mining Services",
          body: "We provide effective data mining services to cut down cost by focusing on the right area. Our high-quality services will help you in the following ways:",
          bullets: [
            "Our data mining approach is viable and proficient to find the imperceptible to obvious information from databases",
            "Information mining apparatuses will foresee future patterns and practices, permitting you to make proactive, learning-driven choices",
            "We help you to control the content of information for different purposes and objectives",
            "Our experienced and qualified team aids in data extraction and scanning, updating and upgrading databases, and extraction of meta-data",
          ],
        },
      ],
      closing:
        "You can get assistance from our expertise for resolving data mining problems. You can also consider us for any outsourcing needs. For any further inquiries and assistance, please feel free to contact us today.",
      closingHref: "/contact",
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
      title: "B2B / Commercial",
      summary:
        "Go-to-market, channel, and revenue execution support for commercial organizations building repeatable growth.",
      paragraphs: [
        "Commercial organizations need more than broad strategy. They need execution systems that connect market opportunity, sales activity, partner alignment, and operational follow-through in a way that can scale.",
        "Our B2B commercial support is built for teams improving how they reach buyers, structure revenue operations, and coordinate commercial execution across internal and external stakeholders.",
        "From planning through implementation, we help commercial teams improve consistency, visibility, and decision-making so growth initiatives are easier to execute and easier to sustain.",
      ],
    },
    "/industries/law-firms": {
      eyebrow: "B2B Commercial",
      title: "Law Firms",
      summary:
        "Sidago is the premier technology partner for law firms.",
      paragraphs: [
        "And this did not come easy for us. It took many late nights for us to be able to become the preferred solution for law firms.",
        "There are many outsourcing firms out there that try to win over law firms, but very few of them go about it in the most innovative manner possible.",
        "We offer law firms the opportunity to outsource services such as:",
      ],
      sections: [
        {
          title: "Branding",
          body: "The legal field is an extremely competitive landscape, and this makes branding for lawyers extremely critical when it comes to unleashing success. Our branding experts can help develop and implement a complete branding solution tailored specifically to the needs of your firm.",
        },
        {
          title: "Comprehensive Online Marketing",
          body: "Remember the days where you'd pick up a phone book, and a majority of the ads were for law firms? You probably still do this, but the truth is that it's not as powerful as it used to be. This is because people are now using the internet to search for legal services. We'll get you seen!",
        },
        {
          title: "Online Presence",
          body: "From ranking in search engines to maintaining a beautiful website, Sidago knows how to make the most out of your online presence. This leads to even more clients and opportunities, which is surely what every law firm wants to have. Simply put, we make the internet work for you.",
        },
        {
          title: "Outsourced Legal Experts",
          body: "We have partnered with many law firms and legal experts to help our clients solve even the most complex cases. Not to mention, the cost of hiring a legal expert from Sidago is known to be a lot less than hiring one on a local basis.",
        },
        {
          title: "Paralegals",
          body: "Having a team of paralegals in-house is expensive, and not all of the time can you find one that's worth keeping. Unfortunately the legal field doesn't slow down, so you need to make sure you have a good solution in place. Sidago offers law firms the opportunity to hire virtual paralegals.",
        },
        {
          title: "Virtual Assistant",
          body: "Need someone to help keep track of your schedule or to handle other tedious day-to-day tasks that you seem to get bombarded with? Just hire an extra set of hands, formally known as a virtual assistant. This not only saves you time, but it will save you a lot of money in the long run.",
        },
      ],
      closing:
        "Are you ready to take your law firm to the next level?\nContact us today for your FREE consultation!",
    },
    "/industries/manufacturing-industrial-products": {
      eyebrow: "B2B Commercial",
      title: "Manufacturing Industrial Products",
      summary:
        "You may or may not have seen the mass of outsourcing firms that claim to have experience with manufacturing/industrial products, but very few can put their skills where their mouth is. Here at Sidago, not only do we have employees that specifically specialize in this industry but so does our upper management.",
      paragraphs: [
        "Here are some of the services that Sidago provides.",
      ],
      sections: [
        {
          title: "B2B Sales",
          body: "When you want to boost your revenues, B2B is a very good way to do it. Especially in the manufacturing/industrial products industry. We have experienced B2B sales professionals on our team that are ready to take your business to new levels of profitability.",
        },
        {
          title: "Data Analytics",
          body: "Being analytical has its advantages. That's why we have offered data analytics solutions to our clients in an effort to help them make the most out of what technology has to offer them. If you don't know how analytics can play a part in your business, just reach out to us directly.",
        },
        {
          title: "Data Entry",
          body: "We all know that this is one industry that involves the collection of a lot of data, but entering this could cost you a lot of money. Especially if you have to hire someone in-house specifically for data entry. Our data entry specialists not only save you time, but they save you money too!",
        },
        {
          title: "Data Visualization",
          body: "Data makes the most sense when it's visualized. Whether you need to do this for a presentation to investors or you need it for a team meeting, we can help interpret your data in the simplest manner possible. You'd be surprised at the doors this simple addition can open.",
        },
        {
          title: "E-Commerce",
          body: "Ecommerce is growing each and every day. This is why we have positioned ourselves as the 'go2' for ecommerce solutions. From advertising to web development, we can help your company make the most from ecommerce.",
        },
        {
          title: "Offshore Manufacturing Consultation",
          body: "Do you want to save money during the manufacturing process? We have developed many relationships with offshore manufacturers to help our clients do exactly this. Don't worry, unlike most offshore manufacturing consultants, we will not sacrifice the quality of the end result.",
        },
        {
          title: "Purchase Ordering/Management",
          body: "Purchase orders can be a time-consuming task, especially when you're trying to put your focus on growing your business. That's why we've taken our knowledge and expertise with POs and purchase order management to provide a complete solution. Let us handle it and just sit back.",
        },
        {
          title: "Virtual Assistants",
          body: "Unfortunately the day only has 24 hours, which makes it challenging to squeeze everything into your schedule. Our virtual assistants provide businesses dealing with manufacturing/industrial products with the opportunity to unload some of the weight to us.",
        },
        {
          title: "Website Development",
          body: "Having your space online is essential in this modern day and age. From maintenance to complete website development, we can help make sure this is something that you can take advantage of. Not to mention, you can use it to streamline your operations.",
        },
      ],
      closing:
        "If you're ready to see how we can make your life (and the lives of your employees) easier, we'd be happy to provide you with a consultation at no cost to you. Simply contact us and we'll get right back with you to set it up.",
    },
    "/industries/accounting-firms": {
      eyebrow: "Financial",
      title: "Accounting Firms",
      summary:
        "You spend all day making sure that your clients are held accountable in the most effective and professional manner possible. You shouldn't have to worry about being overwhelmed by the basic operations of your accounting firm, which is why Sidago is here to be the best partner your accounting firm has ever had.",
      paragraphs: [
        "We offer accountants with services such as:",
      ],
      sections: [
        {
          title: "Advertising/Marketing",
          body: "From building your brand to making the most from tax season, our seasoned advertising & marketing experts know how to open the gates to profitability. No matter if you need a one-time campaign or you'd like us to handle the advertising/marketing for your accounting firm year-round, we've got you covered here at Sidago.",
        },
        {
          title: "Bookkeeping",
          body: "We employ certified and highly-qualified bookkeepers which can act as a support arm for your business. After all, you should be focused on the more intensive accounting tasks and not the basic bookkeeping tasks.",
        },
        {
          title: "Client Acquisition",
          body: "Gaining new clients is what drives the growth for all accounting firms. Neglect taking on new clients and you're seriously limiting the future of your firm. We have helped many leading accounting firms boost their revenues with elite client acquisition services.",
        },
        {
          title: "Online Advertising",
          body: "The world of advertising has changed as we know it, and for the better honestly. In this modern day and age one must innovate in order to stay afloat and maximize their success. We provide complete online advertising management solutions to accounting firms around the world.",
        },
      ],
      closing:
        "If you're ready to partner with Sidago...\nDon't be shy & get in touch with us TODAY!",
    },
    "/industries/banking": {
      eyebrow: "Financial",
      title: "Banking",
      summary:
        "Numbers, numbers, and even more numbers. It's what the day is like in the banking industry, and there's not one outsourcing firm out there that knows it better than the folks here at Sidago. From analyzing data to managing paperwork, we offer the banking industry with a complete outsourcing solution designed to cut costs while embracing efficiency.",
      paragraphs: [
        "The most popular services used by our clients in the banking industry are:",
      ],
      sections: [
        {
          title: "Data Analytics",
          body: "When you want the numbers to speak their story, sometimes you have to get analytical with it. Here at Sidago we offer basic data analytics solutions as well as complete solutions tailored for companies wanting to make the most out of data for the long-term.",
        },
        {
          title: "Data Scientists",
          body: "When it comes to letting data speak for itself, nobody does it better than our beloved data scientists that live and breathe data. The art of competitive intelligence now consists of using data to our advantage in the ever-competitive business landscape.",
        },
        {
          title: "Spreadsheet Management",
          body: "Managing spreadsheets can be a headache, but here at Sidago Integrated Solutions we have it down to a science. We provide complete spreadsheet management solutions for many leaders within the banking industry, see how we can help you get a true handle on your spreadsheets.",
        },
        {
          title: "Virtual Assistants",
          body: "There are only so many hours in a day which makes time management a critical aspect of our everyday life. Get more hours in the day with the help of our highly qualified virtual assistants capable of handling a wide array of tasks.",
        },
      ],
      closing:
        "Today is the day that you make your operations more streamlined...\n\nJust get in touch with the Sidago team to discuss how we can help you manage your operations in the most efficient manner possible. We'll provide you with a free initial consultation to discuss and map out your needs, leading to a custom-tailored solution designed to take you to new heights.",
    },
    "/industries/ad-networks": {
      eyebrow: "Technology",
      title: "Ad Networks",
      summary:
        "Sidago helps ad networks across the globe streamline their operations in the most cost-effective manner possible. In fact, there are many ad networks who rely upon us to provide all of their operations support so that they don't have to worry about managing it in-house.",
      paragraphs: [
        "Some of the services that we offer for ad networks includes:",
      ],
      sections: [
        {
          title: "Affiliate Managers / Relationship Management",
          body: "Whether you want to ensure that your relationships remain intact or you need someone to help manage your affiliates, Sidago has got you covered. We employ only the most experienced affiliate/relationship managers to ensure our clients receive top-notch service.",
        },
        {
          title: "Creative / Graphic Design",
          body: "Our highly talented team of designers know what it takes to create designs that convert. Need a landing page? How about creatives that are sure to unlock profits? Just get in touch with our design team to discuss your needs and the best approach to take.",
        },
        {
          title: "Custom Development",
          body: "Sometimes you just have to get custom with it, and that's why we've taken on some of the best programmers in the world. No matter how complex your custom development needs may be, you can rest assured that we've got you covered here at Sidago.",
        },
        {
          title: "Data Entry",
          body: "We know that you don't necessarily want to enter all of that data yourself, so we found people that don't mind taking care of it. Unleash the power of data, but not the work that's involved with entering it.",
        },
        {
          title: "Fraud Detection / Management",
          body: "Unfortunately the risk of fraud is something that's always going to be present, especially with ad networks as well as others within the industry. That's why we've developed our own ways of detecting/managing fraud and started providing ad networks with an opportunity to win the battle against fraud.",
        },
        {
          title: "Promotional Writing (Blogs, Copywriting, Newsletters)",
          body: "Having the right words can be extremely powerful for your network, but the wrong words could easily stunt its growth. Keeping that in mind, we've looked endlessly for the best writers in the business. We offer all forms of professional writing services ranging from blogs to newsletters, and even sales copy churned out by our creative copywriters.",
        },
        {
          title: "Web Design / Development",
          body: "Whether you need a theme for WordPress (or another CMS for that matter) or you need an extensive site developed, we have the manpower to get it done in the most efficient manner possible. No longer do you have to have designers and programmers in-house.",
        },
      ],
      closing:
        "For more information on how Sidago Integrated Solutions can help you and your company...\nJust get in touch with us by clicking here and schedule your FREE initial consultation with our team.",
    },
    "/industries/affiliate-networks": {
      eyebrow: "Technology",
      title: "Affiliate Networks",
      summary:
        "Running an affiliate network is hard enough on its own, not to mention when you add in all of the positions that you have to fill and supervise. We understand that there are many great affiliate networks out there, but they may lack the resources they need in order to scale it up to the next level.",
      paragraphs: [
        "That's one of the many reasons why Sidago was started. We're here to be your support arm for your affiliate network, and ensure that growth is in sight.",
        "We offer affiliate networks with a wide array of services such as:",
      ],
      sections: [
        {
          title: "Affiliate Managers / Relationship Management",
          body: "Ensuring that you effectively manage your affiliates (and other relationships) is crucial to a network's success. Here at Sidago we employ highly-experienced affiliate managers and relationship managers to ensure that networks can effectively outsource this to us.",
        },
        {
          title: "Creative / Graphic Design",
          body: "No matter what your graphic design needs may be, we have the expertise needed to ensure that your designs fulfill their purpose. From display ads to complete marketing graphic sets, everything will be custom-tailored specifically to your needs.",
        },
        {
          title: "Custom Development",
          body: "While it may seem impossible to get the custom development done for some of your projects, it don't have to be that way. We employ highly experienced developers to ensure that there's no development project that we can't do.",
        },
        {
          title: "Data Entry",
          body: "Data entry may seem like a tedious task but it must be done. Sidago provides complete data entry solutions for affiliate networks around the world. Get in touch with us today to discuss how we can handle your data entry for you.",
        },
        {
          title: "Fraud Detection / Management",
          body: "Fraud has unfortunately taken down a lot of networks and advertisers. However, Sidago has developed a custom solution to ensure that we can provide networks with the opportunity to detect fraud easily and manage fraudulent activities as they arise.",
        },
        {
          title: "Promotional Writing (Blogging, Copywriting, Newsletters)",
          body: "Not everyone was born a wordsmith, and some of the best writers in the industry tend to stay \"in hiding\" which is why we connect networks with some of the best copywriters around. No longer do you have to doubt the power of words, just use them to your advantage.",
        },
        {
          title: "Web Design / Development",
          body: "Visual design is one of the most critical aspects for anything. Hence why we have taken on some great designers and developers to help affiliate networks with their websites, landing pages, and other design/development needs.",
        },
      ],
      closing:
        "Are you ready to unleash the power of Sidago for your affiliate network?",
    },
    "/industries/affiliates": {
      eyebrow: "Technology",
      title: "Affiliate",
      summary:
        "The life of an affiliate can be a profitable one.\nAs long as one has access to the right resources.",
      paragraphs: [
        "One of the biggest setbacks for affiliates is that they don't have the slightest clue how to effectively outsource parts of their operation in an effort to make the most out of their campaigns. We saw this gap in the industry and stepped forward to become what is now known as one of the most prestigious outsourcing firms in the world. It is our goal here at Sidago to present each and every affiliate with the key to success.",
        "Some of the outsourcing services provided by Sidago to affiliates are:",
      ],
      sections: [
        {
          title: "Copywriting",
          body: "When you need words that sell, our highly experienced copywriters know how to intertwine them into a priceless piece. Sure writing may seem like a basic task, but writing to convert is much different than writing a sexy poem for your girlfriend [or boyfriend].",
        },
        {
          title: "Data Entry",
          body: "All of that data, but we know that you really don't want to have to deal with the entry of it if you don't really have to. Our data entry specialists help make that a reality, so start focusing on your profits while our team deals with all of the data that backs it.",
        },
        {
          title: "Forecasting",
          body: "When it comes to forecasting for profitability, our team of highly experienced affiliate marketers and marketing specialists know how to generate reliable forecasts. It's never good to step into the dark without a flashlight, so don't take the risk.",
        },
        {
          title: "Graphic / Creative Design",
          body: "Whether you need a WordPress theme or landing page designed, we employ some of the most creative designers in the industry. Simply put, there's simply no design project that we won't take on as our potential here at Sidago is truly limitless.",
        },
        {
          title: "Optimization",
          body: "You've got your campaign launched, but you know there are much more profits that can be unlocked. Before you start beating your head against the keyboard, get in touch with our optimization experts to reap the biggest payouts possible.",
        },
        {
          title: "Search Engine Marketing",
          body: "We all know that there's tons of traffic that can be bought from Bing, Google, Yahoo, and other popular search engines. However, it can seem to be a daunting task if you let it get the best of you. We've employed expert search engine marketers to help you drive traffic the right way.",
        },
        {
          title: "Search Engine Optimization",
          body: "Nothing is sexier than being on the first page of Google and not having to shell out tons of money doing it. Organic traffic is priceless and we have the means to rank your website on the first page of Google for profitable keywords. Just ask us how we can make it happen.",
        },
        {
          title: "Virtual Assistants",
          body: "Wouldn't it be awesome if you had a clone so that your output can be at the highest peak possible? We may not be scientists that can clone humans, but our VAs can help you get more out of your days.",
        },
      ],
      closing: "Contact Sidago for your FREE consultation!",
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
    "/industries/practices-and-doctors": {
      eyebrow: "Health Care",
      title: "Practices and Doctors",
      summary:
        "The medical industry is booming, and so is the use of technology within it. Sidago is the preferred technology partner for many practices as well as doctors. We are able to do this thanks to our elite team of professionals who live and breathe various areas of tech.",
      paragraphs: [
        "Some of the most popular services that we offer are",
      ],
      sections: [
        {
          title: "CRM Management/Patient Relations",
          body: "Making your patients feel safe and comfortable at the same time can have a great impact on your reputation. In order to help you embrace this opportunity, we offer CRM management and also help you maintain your patient relationships.",
        },
        {
          title: "Insurance Coordination",
          body: "Our insurance coordinators have extensive experience working with practices and doctors to help them receive payment for services. No longer does this have to be a complex task, all you have to do is let Sidago handle it and watch the payments roll in.",
        },
        {
          title: "Insurance Management/Filing",
          body: "Filing insurance claims can be pretty time-consuming, and costly at the same time. Luckily you ended up here at Sidago where we provide you with the opportunity to save time and money by outsourcing one of the most tedious tasks in the business.",
        },
        {
          title: "Online Presence",
          body: "Think of your online presence as your key to success. Having an online presence that shines above the rest can help you not only gain new patients, but also strengthen your reputation at the same time. We can help develop and maintain your online presence to unleash its power.",
        },
        {
          title: "Reputation Management",
          body: "Having a solid reputation is critical, but unfortunately the internet has made it possible for anyone to try to ruin it at the press of a button. We offer full reputation management solutions to help solidify the presence of your practice while ensuring your reputation doesn't take a hit.",
        },
        {
          title: "Web Development",
          body: "Everyone tries to find their answers online, and if you don't have an online presence you're overlooking a great opportunity. Fear no more, Sidago is here! Our offerings range from simple updates all the way to complete website development for practices and doctors.",
        },
      ],
      closing:
        "If you need a service that's not listed, please get in touch with us. The above list is for reference only and consists of our most popular offerings within the medical industry. If you'd like to get the ball rolling, schedule your free consultation today to see how Sidago saves you time and money.",
    },
    "/industries/aerospace-defense": {
      eyebrow: "Industries",
      title: "Aerospace / Defense",
      summary:
        "Sidago is known for providing the Aerospace & Defense industries with an elite staffing solution that allows them to harness the power of technology without having to build out a complete team for it. For many companies, this has helped them reach new levels of success while cutting expenses. No matter what your needs may be, you can rest assured that we can fulfill them in the best manner possible.",
      paragraphs: [
        "We offer services for the Aerospace & Defense industries such as:",
      ],
      sections: [
        {
          title: "Business Development",
          body: "Our business development managers are known for making an impact that wasn't even expected by our clients or their customers. When you need to grow your business, just get in touch with us to find out what opportunities await you.",
        },
        {
          title: "Data Analytics",
          body: "Behind every piece of data lies a story that it wants to share. We specialize in implementing and managing analytical solutions to help make the most out of data for our clients. You'd be surprised how much a little bit of data can help boost your company.",
        },
        {
          title: "Data Entry",
          body: "In the world we live in data comes in large quantities. And unfortunately this isn't always the most pleasurable thing in the world to witness. Instead of being bombarded with tons of data to enter, just have one of our data entry experts provide you with a complete solution.",
        },
        {
          title: "Data Scientists",
          body: "Are you ready to give your business a competitive edge that's sure to boost it to the top of the industry? Our data scientists know how to take data and interpret it in a way that is easy to understand while unlocking opportunities to do things others aren't doing.",
        },
        {
          title: "Data Visualization",
          body: "Sometimes it's better to visualize data, especially when it comes to meetings focused on the data and what kind of intelligence that it provides. We have helped many aerospace & defense companies with data visualization which allows us to provide the most efficient solutions.",
        },
        {
          title: "Sales",
          body: "Every business benefits from an influx in sales, and that's exactly what our sales professionals know how to do for our clients. No longer do you have to worry about having a sales team in-house to help your business grow, Sidago has already built and trained an elite sales team.",
        },
        {
          title: "Virtual Assistants",
          body: "From keeping track of your appointments to helping with general communication, a virtual assistant can simply help you make the most out of each and every day. The power of technology has helped us live a more organized life, and the change is waiting for you.",
        },
      ],
      closing:
        "Unlock the power of Sidago by scheduling your FREE consultation.",
    },
    "/industries/automotive": {
      eyebrow: "Industries",
      title: "Automotive",
      summary:
        "The automotive industry is truly an integral part of our society today, and it will be for many generations to come. That's why Sidago aims to provide the automotive industry with support for their operations that embraces growth and efficiency. No matter what your staffing needs may be, we have the manpower needed to get it done in the highest quality manner possible.",
      paragraphs: [
        "We provide the automotive industry with services such as:",
      ],
      sections: [
        {
          title: "Business Development",
          body: "Do you need a business development manager that can help guide your business to even more levels of profitability while creating everlasting memories? Our business development team has helped many automotive companies unlock the doors to a brighter future.",
        },
        {
          title: "Data Analytics",
          body: "Data has flooded the automotive industry, and in order to make the most of it you have to get into an analytical mindset or hire someone that already is. From setting up analytics programs to managing it in its entirety, we can provide you with the best data analytics around.",
        },
        {
          title: "Data Entry",
          body: "Not craving that moment you have to enter tons of data? Don't worry, you can get out of it by hiring a data entry specialist here at Sidago. We enter the data so you don't have to. Now you can turn your focus onto the more enjoyable aspects of the automotive business.",
        },
        {
          title: "Data Scientists",
          body: "Our data scientists know how to give companies with the competitive edge they need to dominate the industry. With extensive education and experience backing them, nobody can help data tell its story like our data scientists can.",
        },
        {
          title: "Data Visualization",
          body: "All of that data can be mind-boggling if you let it, which is why we have focused on providing the best data visualization solutions around. Whether you need to visualize your data for a presentation or it's solely for internal usage, we can help make the most sense of it.",
        },
        {
          title: "Sales",
          body: "Sales is a critical part of any company, especially one that's in a competitive landscape like the automotive industry. Whether you just need 1 sales executive or a complete sales team, we can ensure that we can help your company reach an entirely new level of profitability.",
        },
        {
          title: "Virtual Assistants",
          body: "While we may not be able to clone you directly, we can help team you up with a virtual assistant who can handle those tedious tasks that you really don't want to deal with. Instead of being overwhelmed during the day, just let one of our virtual assistants streamline it.",
        },
      ],
      closing:
        "Are you ready to see why many leading automotive companies choose Sidago? Schedule your FREE consultation today!",
    },
    "/industries/consumer-product-and-retail": {
      eyebrow: "Industries",
      title: "Consumer Product and Retail",
      summary:
        "Sidago is a premier outsourcing agency dedicated to providing our clients with the highest level of service possible. We love to diversify and innovate which has led us to having a strong foothold within the consumer products and retail industry.",
      paragraphs: [
        "Sidago provides solutions such as:",
      ],
      sections: [
        {
          title: "Advertising / Marketing",
          body: "When you need to get your product(s) to market, there's no doubt that you want to embrace world-class advertising and marketing opportunities. Our team of expert marketers know how to handle all sizes of campaigns meant to drive new business in our clients' direction.",
        },
        {
          title: "Branding",
          body: "Advertising and marketing will help you boost your sales, but you also have to distinguish yourself as a top brand. Doing this will help you gain an edge in your industry while ensuring that the longevity of your brand is protected at all costs.",
        },
        {
          title: "Contact Management / CRM Management",
          body: "When you start to gain customers it can seem overwhelming to protect and manage your relationship with each and every one of them. That's why Sidago Integrated Solutions offers contact management as well as CRM management. This has helped many of our clients streamline their operations while developing rock-solid relationships with their customers.",
        },
        {
          title: "Copywriting",
          body: "Words sell, and online they're the primary factor that contributes to closing a sale. We have employed some of the most creative copywriters in the world to provide complete copywriting solutions. From product descriptions to promotional materials, there's nothing we can't write.",
        },
        {
          title: "Customer Service",
          body: "Providing high-quality customer service is critical in this modern day and age. Zappos has understood this from the beginning and in the process have become one of the largest online retailers in the world. Our customer service solutions can help you better manage this aspect of your business and are available via live chat, email, help desk, and phone.",
        },
        {
          title: "Merchant Account Management",
          body: "Dealing with merchant accounts isn't always the most pleasing experience, and we've learned that many businesses prefer to have someone else handle the management of it so they don't have to do it in-house. We provide complete merchant account management solutions ranging from the initial setup to ongoing management.",
        },
        {
          title: "Technical Assistance",
          body: "We all know that technology drives the world forward, but with this comes times when you need a little help. Whether it's a small issue or something that's on a larger scale, we have a complete tech team ready to provide you with the help you need, when you need it.",
        },
        {
          title: "Web Development",
          body: "From graphic design to complete website development, we provide our clients with the opportunity to make their online presence shine like a diamond. Our designers and developers are ready to make your visual appearance match your company's vision.",
        },
      ],
      closing:
        "For more information or to schedule a free consultation, contact us directly.",
    },
    "/industries/distribution-and-transportation": {
      eyebrow: "Industries",
      title: "Distribution and Transportation",
      summary:
        "Sidago has helped many leading companies in the distribution & transportation industries solve their needs for an extended support arm for their business. We do this by employing only the best employees (who have a wide array of specialization) and allowing companies to outsource some of their most time-consuming tasks.",
      paragraphs: [
        "You can find Sidago offering services such as:",
      ],
      sections: [
        {
          title: "Business Development",
          body: "When it comes to ensuring that your business prospers, our professional business development managers know what it's going to take. Whether you just need consultation or you'd like to hire a business development manager full-time, we can get you taken care of.",
        },
        {
          title: "Data Analytics",
          body: "Our world has evolved into an analytical mindset, at least most of it has with the exception of people that are still stuck using pen and paper. Our data analytics specialists can help you and your company unleash the power of data analytics.",
        },
        {
          title: "Data Entry",
          body: "Entering data is not only time-consuming, but for some it can be a mind-numbing experience. That's why we have a large team of data entry specialists to help eliminate that burden for companies around the globe.",
        },
        {
          title: "Data Scientists",
          body: "Knowing what to do with the data that you collect is critical when it comes to success. Our data scientists know how to make use of the data and use it to propel your company even further to the top. Don't worry, we keep our rates reasonable even for a scientific position.",
        },
        {
          title: "Data Visualization",
          body: "Let data tell its story and you'd be surprised of what it spawns. Visualizing data for meetings or solely for internal use is something that we do daily. No longer do you have to beat your head on the keyboard just to get data to talk to you in a way that's easy to understand.",
        },
        {
          title: "Sales",
          body: "Wouldn't it be nice to have a highly-skilled sales team working to boost the revenue that your company sees coming in? Now you can! Sidago offers complete sales solutions for companies of all sizes, regardless of the complexity of the task at hand.",
        },
        {
          title: "Virtual Assistants",
          body: "Unfortunately we can't grow an extra set of hands, but we can hire someone to help us get a similar outcome. Our virtual assistants work with our clients to handle their tasks that would otherwise run them out of time rather quickly.",
        },
      ],
      closing:
        "If you don't see a service above that you need, please contact us directly for a free consultation. We offer a wide array of solutions considering that we're one of the best outsourcing firms the World Wide Web has ever seen. The question is, are you ready?",
    },
    "/industries/insurance": {
      eyebrow: "Industries",
      title: "Insurance",
      summary:
        "Here at Sidago, we've worked with many brokers and companies within the insurance industry to help provide them with efficient solutions while decreasing the need to handle certain tasks in-house. You can see some of the services that we offer below.",
      paragraphs: [],
      sections: [
        {
          title: "Data Analytics",
          body: "Data tells us a lot, especially within the insurance industry. We can help you and your company embrace the power of data analytics. Simply put, we can help ensure that data has the most impact on your business.",
        },
        {
          title: "Data Entry",
          body: "Entering tons of data isn't always fun, and honestly it can be extremely costly for anyone who doesn't have a system in place. We can take away the headaches associated with data entry and enter all of your data in the timeliest manner possible.",
        },
        {
          title: "Data Science",
          body: "Data has changed the insurance industry as we know it. We have employed many data scientists with extensive industry knowledge to ensure that we can help make the most of data. By doing this, we've unlocked many new opportunities for our clients.",
        },
        {
          title: "Data Visualization",
          body: "Visualizing data is essential, especially for those that find themselves in a data-driven industry. That's why we can help you visualize your data, whether it's for investors or internal use. No matter how complex the project may be, we can nail it right on the head.",
        },
        {
          title: "Forecasting",
          body: "When it comes to forecasting, we like to think that we're pretty good at it. In fact, many of our clients have told us that we are and we continue to provide forecasting services to the insurance agency to help make the most out of your venture.",
        },
        {
          title: "Virtual Assistants",
          body: "The insurance business is hectic enough, and you don't need to make it any more complicated than it has to be. Nor do you need to waste time on tasks that can be handled by someone else. Our virtual assistants are like your twin, and capable of fulfilling many tasks to save you time.",
        },
      ],
      closing:
        "For more information on our services for the insurance industry or to schedule a free consultation, contact us today.",
    },
    "/industries/restaurants": {
      eyebrow: "Industries",
      title: "Restaurants",
      summary:
        "The restaurant business is booming, and there's no better time to unleash this opportunity. We have helped many restaurants develop their presence and use technology to their advantage here at Sidago. Now you have the opportunity to have us do the same for you with services such as:",
      paragraphs: [],
      sections: [
        {
          title: "Branding",
          body: "You want your brand to stick in the head of consumers, so that way they turn to you when they're ready for a lunch meeting or night out on the town. We provide complete branding solutions to help ensure this is exactly what your restaurant reaps the benefits from.",
        },
        {
          title: "Comprehensive Online Marketing",
          body: "The internet is used more now than it has ever been before, and this has many looking online for a restaurant to eat at. Not only do we help boost your online presence, but we're also capable of offering intense online marketing solutions designed to attract patrons.",
        },
        {
          title: "Graphic Design",
          body: "Whether you need graphics for your menus or a complete website design, our talented team of designers and developers can help make this an easy task to tackle. Sidago has an immense amount of experience fulfilling the graphic design needs for restaurants of all sizes.",
        },
        {
          title: "Public Relations",
          body: "Whether you need help cleaning up a PR mess or you need to help boost the authority of your restaurant with PR services, Sidago has you covered. We have a team of dedicated PR specialists trained to help restaurants use the pros to their advantage.",
        },
        {
          title: "Reservation Booking",
          body: "Efficiency is the key to success, and our ability to help restaurants improve their reservation booking processes not only save their customer's time but it saves their business money. We can help you roll out and implement a first-class reservation booking system.",
        },
        {
          title: "Virtual Assistants",
          body: "Instead of having your managers handle tedious tasks (such as data entry and customer communications), just let Sidago do it for a fraction of what it would cost you. Our virtual assistants are right at your side to help you get things done.",
        },
      ],
      closing:
        "Are you ready to take your restaurant to the next level? Schedule your FREE consultation today!",
    },
    "/industries/construction": {
      eyebrow: "Industries",
      title: "Construction",
      summary:
        "Delivering scalable support for every stage of a construction project.",
      paragraphs: [
        "Sidago Integrated Solutions works closely with companies across the construction industry to improve operations, reduce project delays, and support long-term success. Our team provides tailored services that help clients manage projects more effectively, from initial planning through completion. We partner with general contractors, subcontractors, and public sector organizations to meet project goals efficiently. Sidago provides the support needed to handle sourcing, supply chain logistics, estimating, communication, and funding.",
        "Our team provides practical, scalable support across every phase of construction. We act as an extension of your operations team to keep your project running smoothly and aligned with your objectives.",
      ],
      sections: [
        {
          title: "Core Services We Provide",
          bullets: [
            "Construction Supply: Complete material procurement, logistics coordination, and consolidated deliveries",
            "Estimating: Detailed project estimates for budgeting and planning",
            "Take-Offs: Accurate material quantity take-offs based on drawings and scope",
            "CAD Drawings: Technical drafting and visual documentation for engineering and compliance",
            "Financial Raising: Funding support and long-term financing options for construction firms",
            "Sourcing: Supplier selection, negotiation, and quality assurance",
            "Communications: Project communication strategies and coordination tools",
          ],
        },
        {
          title: "Industries and Projects We Support",
          body: "We work with both private and public sector clients in diverse areas of construction. Our services are tailored to meet industry-specific requirements and project challenges. We are equipped to scale and adjust to meet your operational needs.",
          bullets: [
            "Commercial construction and office buildings",
            "Government buildings and infrastructure",
            "Institutional projects including schools and universities",
            "Industrial and manufacturing facility development",
            "Utilities, energy, and sustainable infrastructure projects",
          ],
        },
        {
          title: "Why Choose Sidago for Construction Support?",
          bullets: [
            "Integrated Support: Access a full suite of services through a single provider",
            "Experience with Government Work: Familiarity with regulations and compliance",
            "Scalable Solutions: Our services grow with your project and business",
            "Reliable Outcomes: A proven partner in helping deliver projects on time and within budget",
          ],
        },
        {
          title: "Build Better with Sidago",
          body: "Sidago Integrated Solutions delivers the tools, resources, and insights construction professionals need to succeed. Whether you're launching a new project or scaling operations, we help you build more efficiently and with confidence. Contact us today to learn how we can support your next construction project.",
        },
      ],
      closing: "Visit: https://sidago.com/contact",
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
      closingHref: "/contact",
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

  if (href === "/strategy/employee-quality") {
    return {
      eyebrow: "Our Strategy",
      title: "Employee Quality",
      summary:
        "Sidago Integrated Solutions is a full service company who serves many top brands around the world. This is why we look at our employees as the key to our success. We value and respect the diversity that each employee brings to the company.",
      paragraphs: [
        "Here's how we're able to employ some of the best employees in the world.",
      ],
      sections: [
        {
          title: "",
          bullets: [
            "Our goal is to recruit as well give promotions to employees based on their suitability for available jobs and performance. We do this without discrimination.",
            "We give great priority to the safety and health of all employees; this is inclusive of safety at the work environment.",
            "We work with just and fair policies concerning remuneration.",
            "We're highly committed to creating positive relationships with all employees based on fair treatment and respect for their dignity.",
            "We have the goal to develop an effective communication system to ensure that all employees are able to do their work in the most efficient manner possible. This includes helping and encouraging employees to acquire relevant skills that can assist them when it comes to career growth.",
            "We do not allow any dishonest or fraudulent behavior by any employee, within the company or when dealing with clients.",
            "We encourage employees with conflicts of interest to discuss these issues with their manager.",
          ],
        },
      ],
      closing:
        "Interested in joining the Sidago team! Contact us today, we're hiring!",
    };
  }

  if (href === "/strategy/hiring-model") {
    return {
      eyebrow: "Our Strategy",
      title: "Hiring Model",
      summary:
        "At Sidago Integrated Solutions, we're always on the look out for unique and creative people who possess the potential to assist in building our company, ensure customer satisfaction, as well as thrive within our global and dynamic team. Our selection and hiring process is thorough; as it's designed to get the right candidates and match them to the positions that are right for them with a view to achieving longterm achievement.",
      paragraphs: [
        "At Sidago, we use our hiring process to assess the talents and skills that you have and place you in the right job. The hiring process entails four phases:",
      ],
      sections: [
        {
          title: "1. Initial Hiring Stage",
          body: "At this stage, we take time to answer all questions that you could be having concerning our company as well as gain the information we need about you in order to understand what your needs are and how you could help our company grow to the next level.",
        },
        {
          title: "2. Skill Tests",
          body: "By testing your skills, we can faithfully ensure that our clients get the \"cream of the crop\" when they work with Sidago team members. This will also help us know where you would fit in best.",
        },
        {
          title: "3. Formal Interview",
          body: "After we've done our due diligence and have a general idea of who you are as well as what you're capable of doing, we'll request a formal interview with you. This will help us ensure that if we present you with a job offer, you'll truly be a positive addition to our team. Everyone has their own taste for the type of place that they want to work at, and we want our employees to have the passion needed to help our clients progress rapidly.",
        },
        {
          title: "4. Your Formal Job Offer",
          body: "If you're selected after the Interview, we'll present you with an official job offer. This will include the compensation you can expect and what you'll be doing with us.",
        },
      ],
      closing:
        "If you're ready to be the next sidago employee, contact us today!",
    };
  }

  if (href === "/strategy/operational-philosophy") {
    return {
      eyebrow: "Our Strategy",
      title: "Operational Philosophy",
      summary:
        "We build relationships between stakeholders, employees, and clients. We continuously focus on clients' needs, while keeping our employees encouraged and empowered to deliver the best solutions possible.",
      paragraphs: [
        "Our philosophical perspective of focusing on each customer uniquely benefits our company. We're able to progress quickly while providing long-term opportunities for growth. This ensures that our solutions maximizes and enhances the operations of businesses around the world. In addition, we empower our clients to expand control of their performance and profitability.",
        "We help our clients align their operational processes with our sustainable, yet innovative technological support and business consulting, equipping them with the appropriate solutions to shape their business for results. Our commitment to our clients is built on experience, knowledge, quality, talent, passion, and trust.",
      ],
      sections: [
        {
          title: "Our Mission",
          body: "To deliver qualitative, innovative technological and consulting services while enriching every client's experience and satisfaction.",
        },
        {
          title: "Our Core Values",
          body: "We've developed our business in the most effective way possible, making it more competitive in this modern day and age. We continue a pragmatic approach, flexibility, trust, capability, quality, innovation, and technological applications to improve organizational processes.",
        },
        {
          title: "A Pragmatic Approach",
          body: "We make pragmatic and ethical decisions which create a trust element within the company and among our clients. This approach brings in resilience to the business and to our employees. On the flip side, it facilitates taking the necessary actions in order to improve quality standards. To provide quality service, we focus on our workload and understand the scope and potential resiliency plan. Each work load has a team of specialists to undertake tasks and the team has project managers who supervise each project from start to finish.\n\nIn addition, to improve quality of service we have an automated and simplified workload infrastructure tool which assists work allocation while managing the quality of the workflow.",
        },
        {
          title: "Flexibility",
          body: "We focus on flexibility which has resulted in a health balance of life and work. This approach has resulted in a socioeconomic working conditions that focus on meeting clients expectations.",
        },
        {
          title: "Trust",
          body: "We build trust within the organization and with our clients, which has enabled us to develop long-standing relationships with our clients.",
        },
        {
          title: "Capability",
          body: "We manage workflow by increasing capacity and the level of our capability. We constantly recruit talented professionals from a wide array of backgrounds. Our team has the passion to share their knowledge, and working experiences to help our clients attain success.",
        },
        {
          title: "Quality",
          body: "This is an integral part of our organization. We have enlisted quality control processes to ensure that our clients receive nothing but the best solutions offered within our industry.",
        },
        {
          title: "Innovation",
          body: "Our group of talented and experienced professionals are armed with creative ideas in technology and consulting aspects. They have the ability to take your business to the next level and enable you to compete in a highly competitive marketplace.",
        },
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/outsourceing-philosophy") {
    return {
      eyebrow: "Our Strategy",
      title: "Our Outsourcing Philosophy",
      summary:
        "It's true that the outsourcing industry is currently facing some challenges. Due to this, clients have been asked to simplify their management structures as well as control the customization of their administrative procedures. At Sidago Integrated Solutions we are prepared to deal with such issues. Our solutions are highly customized to suit each client's needs in particular. Our professionalism and sensitivity coupled with sophisticated IT practices makes Sidago the perfect pick for companies who wish to outsource or for the first time, or companies frustrated by their present providers.",
      paragraphs: [
        "Over the tenure of our existence, we've been able to embrace unique experiences as well as build upon our expertise in this particular industry. Our clearly defined, and structured processes are flexible in order to effectively adjust to every client's internal policies. We ensure that all of our processes are carefully controlled at different levels in order to make sure quality isn't something that we overlook.",
        "We understand that it can be difficult to provide our clients with full-service solutions. Therefore, we maintain focus on clients who have complex plans which require sophistication and flexibility. At Sidago Integrated Solutions, we know that the best growth opportunity for us will come from having highly satisfied clients which is why we possess the highest quality control standards in the industry.",
        "As a private entity, we are not in the business of growing at an undefined rate and achieving predefined profit margins. We possess a unique pricing model which usually consists of an all-inclusive price. This allows us to steer away from surprising our clients with hidden fees which have sadly become a \"norm\" in our industry. Even the clients who have been with us for several years don't see any hidden costs.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/quality-assurance") {
    return {
      eyebrow: "Our Strategy",
      title: "Quality Assurance",
      summary:
        "At Sidago Integrated Solutions, we have a concept of quality assurance that ensures the quality of all the services and products that we offer to our clients.",
      paragraphs: [
        "This quality assurance concept includes:",
        "We understand that our international and national customers have very high expectations and requirements; it is for this reason that we strive to provide products and services that are of very high quality.",
        "Besides quality, costs, and time are the tactical factors that ensure the success of a business. This is why we provide our customers with products of high quality levels, established specifications, at competitive prices while ensuring efficient delivery.",
        "At Sidago Integrated Services, we promote and support the awareness of responsibility and quality in our employees. This is through the merging of strategic measures that are geared towards employee motivation and training.",
      ],
      sections: [
        {
          title: "",
          bullets: [
            "Punctual/flexible delivery.",
            "A uniform product quality that conforms to high quality standards.",
            "Outstanding process competence for all our products.",
            "Sales support that's extremely professional.",
            "Excellent counsel and recommendations on various designs and applications.",
          ],
        },
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/sidago-hiring") {
    return {
      eyebrow: "Our Strategy",
      title: "Sidago Hiring",
      summary:
        "The world of digital advertising is ever growing each and every day. This empowers our excellent and wonderful people to work in the World Wide Web in a never ending place for all opportunities, long sought or alike to both out of the box and those that are already known as a general norm.",
      paragraphs: [
        "These unique industry standard jobs and influencers and qualities are often shaped from those rare skills to go in and maintain the roles and endeavors. The answer is basically very simple; lay the job and have the passion to sustain it. In doing so, this sets one able to step right in the world of digital advertising as investors or people who were able to push forward and command trusted their network and connection.",
        "Sidago is a creative advertising agency with employees only the best. Sidago also works for Sidago and is given projects and responsibilities ensures the you are on top of latest individual who deserves to be entrusted with important tasks and solutions.",
        "Whatever the nature of digital advertising that you may currently be on or if you desire. Sidago's requirement of quality is very important because this is where an opportunity knows how to provide solutions to every problem or situation that is being presented. An employer's job is mostly practical as long as the employee possesses strong qualities and values.",
        "Follow the drift of the page to learn more about working at Sidago.",
      ],
      sections: [
        {
          title: "Landing Your First Job with Sidago.",
          body: "Below you'll see how things are done when you're given your first job with Sidago.",
        },
        {
          title: "1. Initial Review",
          body: "Your query is just to which is usually a part of one of our many active projects. Once you're able to complete your application within the process, then of course you will be informed if there are any updates that need to be made, concerns or changes that need to be made.",
        },
        {
          title: "2. Communication",
          body: "Applicants are asked to be able to speak effectively in the English language since this is the primary language within our agency. In an effort to increase efficiency, we ask that our applicants also provide us with their Skype IDs so that we may communicate with movement when passing tasks with rigor.\n\nOnce you are hired, of course you'll be expected to use Skype in a large company, so in order for us to be able to keep things organized this means we'll let you down point of contact with Sidago.",
        },
        {
          title: "3. Quality Standards",
          body: "We have our own quality standard processes, and we'll help ensure that you're in compliance with them throughout your stay with us. These refined processes also help our employees share ideas that we use, providing those with the opportunity to take the next step in their career.",
        },
        {
          title: "4. Payments",
          body: "The world schedule for payments. At the end of each project. So if the project requires a very long time to be completed, our workers may progress in certain parts where milestones progress beyond payment will be given.",
        },
        {
          title: "5. Completed Job Review",
          body: "After the completion of each and every project and submitting it to your manager, your management team will also review the quality of your work.\n\nUpon receiving a commendation and satisfactory review for the project completed, Sidago will then hire you on an oral employee. This is the stage where Sidago will be adding new projects for you to complete.",
        },
        {
          title: "The Trial Period: Quality is the best policy.",
          body: "During the trial period, each and everyone will be expected to do the following:",
        },
        {
          title: "Set Your Cost",
          body: "Our employer's satisfaction is highly valued in Sidago. You're given the freedom to quote your rate for a specific project or task. You're an independent contractor. In this sense, we make sure that you know your value in order to maintain your attitude and confidence possible.",
        },
        {
          title: "Communication Is Key",
          body: "Communication freely and often using Skype or email. Your managers and superiors are always available for your support to ensure that you are encouraged and on time. English is the language being used, so you should be able to speak and write English very well.",
        },
        {
          title: "Be Punctual",
          body: "Whenever deadlines are met and projects are completed, your manager explains exactly how the job is then and then the client. Show that you are serious and proud to work for our clients, because your quality is more a business or final task. If you are unable to meet your deadline, let your managers know ahead of time.",
        },
        {
          title: "We Ensure Our Clients Get High Quality Service",
          body: "All service and projects submitted will undergo a quality assurance process and should pass Sidago's quality standards. This is when your finished project will be inspected and checked thoroughly. Feedback will be provided immediately so you'll know how to correct any errors or mistakes if there are any.\n\nOnce you have successfully completed all the processes and screening that everything goes smoothly, you'll be invited by Sidago to become a full-time employee. Make sure this means! It means that your work, and care is moving longterm work, benefits, and stability.\n\nA company as big as Sidago needs only the best from the people that we hire. As the company's goal is to provide full-time employment to a diverse team around the world, Sidago is concerned on how the company can furthermore help its people grow and feel secured while the company grows.\n\nAt Sidago we're always looking for fantastic, unique, diligent, and out of the box thinkers to be added to our fine team of hard workers to keep ahead in the ever changing pace and trends. Chances and advertising experts push their creativity together so they can provide the latest and concepts for leading brands. This is what Sidago strives for each and every day.\n\nWould you like to work from home while enjoying the benefits that a full-time job has to offer? Want to take your career to the next level? Sidago can help you do exactly that. Together, let's keep Sidago and our minds to the world of advertising, marketing, and web development.",
        },
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/benefit-savings") {
    return {
      eyebrow: "Our Strategy",
      title: "Benefit Savings",
      summary:
        "Employees are supposed to be assistive to the success of your business. Rules and regulations require that you have employee benefits for those working under you. We ensure that you comply with the law but at the same time save on your costs as much as possible. Too much spending on employee benefits could lead to huge losses, and that's the bottom line.",
      paragraphs: [
        "Sidago Integrated Solutions provides you with benefit savings opportunities by helping you hire staff and manage them remotely. When you're working with remote staff that's not classified as a permanent part of your workforce, you'll find that you save a lot of money on employee benefits. Hiring remote staff and getting proper management as well as supervision methods is where Sidago Integrated Solutions comes in.",
        "At Sidago, we'll study your business model closely and evaluate your markets along with your production and management methods. We will then come up with remote worker solutions that will easily fit into your business model with minimal disruption of normal operations while improving the quality of your output.",
        "In most instances, you'll also save money by hiring remote staff when you only need it instead of having personnel that is permanently on your payroll even when there is no work to be done. Working with remote staff has helped our client companies achieve better profitability by realizing benefit savings and we're always learning so that we can keep our clients headed to the next level.",
      ],
      closing:
        "Reach out to one of our highly trained professionals so that we can you get (and keep) the ball rolling.",
    };
  }

  if (href === "/strategy/employee-reassignment") {
    return {
      eyebrow: "Our Strategy",
      title: "Employee Reassignment",
      summary:
        "A growing number of clients recognize the benefits of flexible arrangements (including employee reassignment) when running a successful business. In a world driven by modern tech, you now have the ability to hire from all parts of the world and all walks of life. At Sidago, our approach to hiring and retention links the strengths, conditions, passions, and interests of our employees to our business needs. Employee reassignment provides greater employee satisfaction and productivity which brings in more profit.",
      paragraphs: [
        "We capitalize on the talent that a diverse group brings to our workplace, aiding us in meeting our goals and objectives. We focus on key tasks by using the best specialists' skills.",
        "Note that our distinguished flexible work arrangement strategy offers employees the option of flexible assignment and also the ability work from different locations. This makes it easy to assign tasks to employees with specific competence in those areas to support your business goals and meet the clients' requirements.",
        "Employee reassignment is an effective means to fill gaps in experience and knowledge, ascertaining them to handle the task far more efficiency while bringing in fresh, new, unbiased perspectives. Moving employees laterally or vertically within the organization increases skills and creates a more flexible team while bridging productivity gaps.",
      ],
      sections: [
        {
          title: "Employee reassignment enables businesses to:",
          bullets: [
            "Increase productivity and profitability of their operations.",
            "Increase retention of qualified, experienced, and talented specialists.",
            "Improve return-to-work outcomes after short/long term voluntary breaks.",
            "Embrace a more diversified cultured workforce.",
            "Develop an all-encompassing work environment",
          ],
        },
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/employee-specialization") {
    return {
      eyebrow: "Our Strategy",
      title: "Employee Specialization",
      summary:
        "While many companies would like to achieve employee specialization, few are able to do so in an effective, yet efficient manner. Sidago Integrated Solutions has come up with the solution for this common issue. We carry out case studies of other businesses and companies in your field, or those that have been faced with a similar problem so that you can know how best to go about achieving employee specialization in your company.",
      paragraphs: [
        "Our case studies are designed by professionals who are highly experienced in case studies. We then execute them in a professional and scientific manner. We employ various tools to collect information, analyze it, and come up with the final findings as well as the recommended approach.",
        "You receive recommendations on whether or not there is a need to have specialized employees depending on the size of your business and the complexity of your operations. Your market also determines if it's logical for you to have specialized employees or not. With our case studies, you'll:",
        "Having specialization where it's not necessary can be expensive since specialized employees often get paid more. Being able to know your specialization needs also helps you in planning for the future of your company. This makes it critical to embrace the opportunity to work with Sidago Integrated Solutions for all of your case study needs in determining how, when, and where to apply specialized employees within your company or organization.",
      ],
      sections: [
        {
          title: "",
          bullets: [
            "Get to know where specialization is required.",
            "Prioritize the areas to start with when it comes to getting specialized employees.",
            "Understand the best method to achieve specialization; whether to hire or train your staff within specific specialties.",
          ],
        },
      ],
      closing: "Please feel free to contact us for any further inquiries.",
    };
  }

  if (href === "/strategy/external-team-entirely-managed") {
    return {
      eyebrow: "Our Strategy",
      title: "External Team Entirely Managed",
      summary:
        "Sidago Integrated Solutions has your success in mind. We commit ourselves to coming up with solutions to get your company management firmly on its feet and achieve profitability. Companies that have external work teams need tracking, supervisory, and management solutions that allow them to maintain order and efficiency within their company's operations.",
      paragraphs: [
        "We develop solutions that enable you to hire external personnel and at the same time help you in the management of these new employees. Working with our customized methods and software, you are able to log how each person is working, the time spent working, and what they do. You can also issue instructions to them via the software.",
        "Your external teams are easily managed using our solutions. We also provide consultancy services for hiring of \"virtual employees.\" These could be freelancers or employees from your home office who prefer to work remotely.",
        "For companies that hire external staff from other companies, you need protocols to govern how you'll be operating within the confines of a mutually shared work environment. It is important that the externally sourced personnel do not break the existing protocols or end up causing customer dissatisfaction with inappropriate behavior.",
      ],
      closing:
        "If you're ready to have an entire team at your disposal, schedule your initial consultation today!",
    };
  }

  if (href === "/strategy/major-cost-savings") {
    return {
      eyebrow: "Our Strategy",
      title: "Major Cost Savings",
      summary:
        "At Sidago Integrated Solutions, we save you a lot of expenses that you would incur. Working with us enables you to seal low-cost business deals with our development and management teams. You also get to consult with us and learn \"tricks of your trade\" that will help you reduce the amount of money you spend on processes such as hiring. You'll get high quality returns on your investments when you work with the team here at Sidago.",
      paragraphs: [
        "Automation and embracing technology is another area that will save you costs. Using manual processes and labor is quite inefficient and costly if there's a technological option for the same. Tasks such as email responses and record keeping can be automated by our highly trained professionals using various computer-run systems. This allows such jobs to be done by a single computer instead of a whole group of people who need to be supervised, managed, and paid wages.",
        "We continuously seek more affordable solutions that are of high quality for our client's ventures. This gives them the extra edge that they need to stay ahead of their competitors and retain their market presence at a lower cost. The extra money that's saved can then be used for expansion and product development.",
        "The aim of any company is to remain profitable. This means that input has to be low-cost but the output to be of the highest quality possible while remaining attractive to your customers. Automation and working with Sidago as your business partner allows you to reasonably cut your costs and reduce employee costs while improving your output.",
      ],
    };
  }

  if (href === "/strategy/managed-human-resources") {
    return {
      eyebrow: "Our Strategy",
      title: "Managed Human Resources",
      summary:
        "For those of you with human resource management needs, Sidago Integrated Solutions has the long-awaited solution that's sure to generate the most success from your business. We have then capacity and experience gained from many years of hiring on behalf of our clients and for ourselves. Our hiring process begins with advertising openings in the right places and using the right channels to reach a wide talent pool from where we will hire personnel for you. We ensure that only professionals with experience and who can fit into your busy work environment are hired.We also assist you in getting the best human resource management methods to ensure that your staff is productive and optimized. These are methods that are suited for your company and will work easily under the stewardship of your management teams. We also ensure proper integration of the management procedures in your company. We provide management systems that are both technological and conventional for application in your company.",
      paragraphs: [
        "For remote worker management, Sidago Integrated Systems comes up with protocols and processes that streamlines communication with your remote staff. We'll also help you keep track of your remote staff management systems.",
        "No matter what industry your company finds itself in, Sidago Integrated Solutions has the most advanced management solution for your company. You'll find that we'll remain the best partner you can have when it comes to human resource management. Reach out to one of our HR specialists today and schedule your initial call.",
      ],
      closing: "YOU WON'T BE DISAPPOINTED!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/management-savings") {
    return {
      eyebrow: "Our Strategy",
      title: "Management savings",
      summary:
        "Management can be expensive for companies that don't embrace modern methods of supervision and employee management. Sidago Integrated Solutions has experience in helping our clients save when it comes to their management costs. We have professional teams that will provide consultation services in human resource management and employee hiring processes that get you self-driven employees that don't demand excessive supervision.",
      paragraphs: [
        "We also help you with the development of management protocols and methods that allow for easier flow of information and feedback within the company management circles so that there is an advanced line of communication. Working with Sidago Integrated Solutions will employ you with a competent workforce that's responsive and responsible, without having to be pushed by their managers to carry out their duties.",
        "Apart from development, Sidago Integrated Solutions helps you put the protocols and procedures agreed on in place. Implementation is an important phase in any company's work structures and it can turn disastrous if mismanaged. Improper implementation of agreed solutions can lead to confusion in roles played and overlapping of tasks. To save your company from making wrong management solution implementation steps, Sidago works with your company to put in place management solutions in an efficient manner that will see you realize the intended management savings.",
        "We also help you in your human resource processes such as hiring. We ensure that you get to hire highly qualified personnel who are capable of working with minimum supervisory input. These employees are able to work and produce quality results in enabling environments at the workplace. You should have Sidago as your preferred business partner in your endeavors to save costs in management.",
      ],
      closing:
        "To schedule a free consultation, contact us today.",
    };
  }

  if (href === "/strategy/rapid-scalability-options") {
    return {
      eyebrow: "Our Strategy",
      title: "Rapid Scalability Options",
      summary:
        "For any startup company, the next big dream is to grow up bigger and better. A business needs to increase its customer base, operations, and service areas while kicking sales and profits up to the next level. In an essence, scaling up or expansion is mandatory for a business.",
      paragraphs: [
        "In order to benefit the business owner's(s) as well as the employees, a business needs to scale up. However, scaling up is a complex task. Most businesses expect to achieve a scale-up within a limited time frame - which is known as rapid scaling. Rapid scaling is good, but comes with a lot of risks. For instance, one could get carried away with the excitement on scaling up and end up putting their focus entirely on increasing the numbers, while the quality of his/her products or services starts to see a decline.",
        "This will in turn create customer dissatisfaction. Unhappy customers are not a healthy prospect for the growth of the company. Therefore, rapid scaling should be carefully planned and implemented. Typically, it's recommended to use the service of a professional if a business wants to scale-up or scale-down itself.",
        "Sidago Integrated Solutions is a consultation firm that provides a wide array of consolidated and organized services, including rapid scaling options to cater to different business needs. A business can relieve itself of the scaling operation and leave it up to the experienced professionals here at Sidago. With an affordable price and customized service, Sidago assists its clients to continue smooth operations, while it take cares of scaling up/down of its employees, infrastructure, and operations by undertaking recruitment and training, operation design, handling infrastructure contracts and installation.",
        "Sidago follows a well-defined, transparent process in rapid scaling implementation. The process starts with clear definition of goals and objectives, establishing a timeframe for delivery. Sidago ensures the implementation of scaling is in a way that does not disrupt the routine operations of the business. Its scaling process is followed by a well defined review process, which critically evaluates the performance impacts and make necessary steps to overcome negative impacts.",
      ],
      sections: [
        {
          title: "What aspects of a business can be scaled using rapid scaling?",
          body: "Starting from the workforce, the operations, the processes, and the capacity of a business can be subjected to rapid scaling. Bulk hiring of employees will be required to cater to the growing demand for urgent deliveries. Infrastructure expansion will be needed when the head count increases, and the company undertakes more orders to be completed within a short timeframe. Such scaling consumes a lot of time, effort and money, which could otherwise be spent on actual operations for quality delivery. Hence, rapid scaling needs to be managed with caution in order to maintain the stability and smooth operations in the business.",
        },
      ],
      closing:
        "Sidago ensures 100% customer satisfaction with its rapid scaling services, while ensuring they achieve their growth targets flawlessly. Contact us today!",
    };
  }

  if (href === "/strategy/remain-competitive") {
    return {
      eyebrow: "Our Strategy",
      title: "Remain Competitive",
      summary:
        "Closing shop for any business venture is a painful and loss-inducing event. You have to remain competitive in the modern business environments and operate profitably to prevent yourself from becoming another statistic in this sense. You'll find that this can only happen if you embrace modern methods in hiring, management, marketing, and distribution.",
      paragraphs: [
        "Today, the markets shift quickly and you have to be able to keep up with the changes while remaining at par with your competitors, if not ahead of them. Any company that fails at this will end up incurring losses and most likely having to shut down their operations. Sidago helps you retain your edge against your competitors and become a leader within your industry.",
        "We provide solutions that have been developed and tested thoroughly by professionals so that you retain your competitiveness. Remaining competitive requires that you be keen in reading your market and seek lower production solutions. A high quality is also required of your products in order to ensure that they're self-marketing.",
        "We come up with unique, yet innovative solutions tailored around your individual business needs. These solutions are easy to implement and manage so that you do not incur extra costs to manage. We have solutions in marketing, production, web development, administration, and management that have helped our client companies remain in the market for years and perform exceptionally well.",
        "We integrate our technological solutions into your daily operations and in management so that you are able to work at profitable levels without affecting the quality of your output. Our experienced and well-equipped staff at Sidago Integrated Solutions ensures that remaining competitive is not a problem for you; we ensure that you are at the leading front in your industry.",
      ],
    };
  }

  if (href === "/strategy/workflow-efficiency") {
    return {
      eyebrow: "Our Strategy",
      title: "Workflow Efficiency",
      summary:
        "Workflow management is becoming more popular in today's era. At Sidago Integrated Solutions, we've developed a simplified workflow management tool. This tool will improve operational efficiency and reduce business costs. It's easy to use and offers work tracking assistance, lower risk of errors, delays, skipped tasks, redundancies, or other inconvenient moments common with older methods and tactics. Our workflow results are cost beneficial and provide competitive gains. It makes it easy to see, analyse, and backtrack work, which creates an automated workflow.",
      paragraphs: [
        "Our workflow management tool consists of various streams of action, where each individual part comprises of regular day-to-day activity. It is an easy-to-use tool or software application, which creates real-time process maps, visualisation of the workflow and the work assigned to the specialists. We can view every step in the flow, as well as every specialist, manager, and department involved.",
        "In addition, it helps us understand what actions will take us to the next stage in the flow in an effort to provide our clients with the desired results. This process assists Sidago on a regular basis to streamline the workflow, manage employees efficiently, and eliminate unrequired processes. This helps management re-engineer safeguards into processes improving the operational efficiencies. Our workflow management tool captures actions across the domains of services we provide to the clients forming a platform to visualise the workflow efficiency while maintaining integrity of the flow and ensuring the right sequence of flow is upheld.",
        "In other words, our processes are streamlined and workflow efficiency is constantly measured leading to improved profitability and on-time results. The standardization of processes, a complete business analysis, and a clear communication by key (and knowledgeable) specialists within our organisation, builds the base for our workflow project's success.",
        "We at Sidago want to bring workflow efficiency to all platforms to improve your efficiency in \"day to day\" tasks and increase your returns of investment (ROI). Come work with our talented, experienced, and unique professionals.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/initial-consultation") {
    return {
      eyebrow: "Our Strategy",
      title: "Initial Consultation",
      summary:
        "Any time that there's a need for business processes to be changed or improved, there's a discovery phase. This is where the customer comes and explains that he has a problem in his business process - which he can't pinpoint and asks us to help find the problem and fix it. Sometimes, the people who are closer to the issue can't really understand the real problem although they know there's one. The customer gives us a walkthrough of his/her business, elaborating every nut & bolt in it.",
      paragraphs: [
        "We then ask the client specific questions to understand the problem and how it has surfaced. In this phase, we collect as much information about the business as possible. This includes understanding the existing business structure, historical milestones, objectives, vision, job descriptions, and overall employee satisfaction.",
        "Our initial consultation can happen through presentations, video conferencing, face-to-face discussions, Q&A sessions, or even by going through relevant documents related to the business. During these discussions, we draw flow-charts, process flows, and activity diagrams to understand the existing business. We encourage our clients be as transparent as possible, in order to develop a perfect solution for them.",
      ],
      closing:
        "Are you ready to schedule your FREE initial consultation?",
    };
  }

  if (href === "/strategy/general-business-review") {
    return {
      eyebrow: "Our Strategy",
      title: "General Business Review",
      summary:
        "After gathering the relevant information about your business, we start the business review process. This includes analyzing both the internal and external climate of a business in order to get a better understanding of its capabilities, opportunities, weaknesses, and customers. This is followed by taking measures to address any issues that are discovered.",
      paragraphs: [
        "We introduce the changes to the processes where there are productivity/quality issues, change work schedules, or introduce new jobs. There can also be instances where innovation and creativity could help the business grow. Therefore, we look for opportunities within the business where innovation can take place.",
        "Our suggestions could include integrating or improving technology used within your organization, address a different market segment that's overlook, or increase your overall marketing efforts. At the end of this review, we prepare a comprehensive report - for our reference as well as for your reference. This report will consist of a detailed analysis of the current business state, the reasons for the drop in productivity and profits, existing flaws in the processes, and what needs to be done in order to overcome them. We also do a visual presentation, where clients can ask us questions to clarify their doubts.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/job-and-work-reviews") {
    return {
      eyebrow: "Our Strategy",
      title: "Job & Work Reviews",
      summary:
        "Most of the time, weaknesses lie within the job definition itself. Sometimes there's no adequate job training for employees assigned to the job for them to do it productively. A lot of organizations don't have clear job definitions, so their employees are unclear about their responsibilities and goals. Other times, there can be flaws with the current job process which hinders the employee from giving maximum productivity to the business. Therefore, in order to improve the existing operations, the daily tasks of each and every employee may change to some degree.",
      paragraphs: [
        "A team of people, which includes experts called Subject Matter Experts (SMEs) will be involved in redefining how the work should be done. This is done after a full examination of the current job roles and discussing with the employees the difficulties they face when performing their jobs. We decide what type of jobs and roles need to be established to carry out the work.",
        "We also develop and implement clear job titles, job descriptions, and their career paths. We'll also elaborate on how the productivity and quality of each job contributes to the success of the business. The SME team will also be responsible for introducing these new methodologies and processes. This will also include making plans for the training of the employees, so that employees can easily adjust themselves to the new job roles and responsibilities.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/employee-interviewing") {
    return {
      eyebrow: "Our Strategy",
      title: "Employee Interviewing",
      summary:
        "When defining the new business process to an organization, we may decide to outsource certain parts of the business - such as HR, finance, and maintenance. We may also need to hire freelancers for minor jobs such as writing, data entry, press releases, etc. The type of outsourcing will depend on the nature of the business. Furthermore, we may need to hire new employees to cater to the new jobs that were designed as part of the re-engineering process.",
      paragraphs: [
        "Interviews will be conducted to recruit freelancers or service companies to outsource part of the services as planned. In-house recruitment could also take place. Qualifications and experience requirements will be developed and published in job portals/professional networks in order to find the right employees.",
        "By the time we get to this stage we already have clear job definitions with salary scales, training requirements, and the career path already chosen. We also need to set legal boundaries, especially when outsourcing the internal services, as there is the possibility of intellectual property violations and security breaches on sensitive data. These parameters need to be considered during the vacancy publishing and interviewing process. Conducting interviews can be done by the business itself, or Sidago can take over the interviewing process. We will short list a few candidates according to the requirements and the qualifications.",
      ],
    };
  }

  if (href === "/strategy/estimated-cost-savings") {
    return {
      eyebrow: "Our Strategy",
      title: "Estimated Cost Savings",
      summary:
        "No matter how important change is, it costs both time and money. Businesses need to spend on internal and external resources in order to review, plan, implement, and monitor a change. Therefore, when it comes to business process re-engineering, the cost and the ROI is a key concern for our clients.",
      paragraphs: [
        "Our clients typically have these concerns. Therefore, after evaluating the existing business and identifying where the changes have to be made, we prepare a cost matrix. The cost matrix elaborates what the cost of each phase is going to be and how that cost can be recovered after implementing the new plan.",
        "Our cost savings estimation strategy includes identifying the root cause for cost increase, evaluating the impact of cost cutting on performance, and planning for improvement of the quality of service during the cost-cutting stage. We compare and contrast the current expenses of your business with that of the proposed business plan while carefully giving thought to where the cost can be cut down without compromising the productivity, quality, and efficiency of the business. Overall, the change may involve a considerable cost. However, that cost can be recovered when the productivity and the quality of the business improves.",
      ],
      sections: [
        {
          title: "",
          bullets: [
            "Will a change in process cut down my cost and/or increase my income?",
            "Will the amount I spend on implementing a change give me the expected benefits within a reasonable period of time?",
          ],
        },
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/propose-action-plan") {
    return {
      eyebrow: "Our Strategy",
      title: "Propose Action Plan",
      summary:
        "Action plans help get the business on the right track. An action plan is an internal document that tells the business what actions need to be taken on a daily basis while running the company. After careful evaluation of all parameters, we develop the new plans for the business. We propose which services should be outsourced as well as how to change the HR, financial, and operations aspects of the business to achieve better results.",
      paragraphs: [
        "The action plan also includes cost estimation, financial risk planning, and setting profit expectations. The action plan will consist of a timeline, tasks, and deliverables for each employee. The action plan starts with defining goals so that each member of the business knows what they are trying to achieve. Each step in the plan has a deadline to be achieved, and measures to be taken if the managers realize that a particular task can't be achieved within the deadline.",
        "The business plan we prepare is put under heavy review by 2 independent internal teams before submitting it to the customer. The customer will review the proposal and suggest changes and alternations that they feel are necessary. We're always open to suggestions from our customers in preparing the action plan. However, before incorporating them in to the actual plan, we do a critical evaluation to measure if proposals align with the overall plan and the goals that need to be met.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
    };
  }

  if (href === "/strategy/implementation") {
    return {
      eyebrow: "Our Strategy",
      title: "Implementation",
      summary:
        "Implementation will depend upon the action(s) that need to be taken. Plans will be re-discussed and achievable goals will be set. Tasks will be assigned to the employees, giving clear objectives, and delivery expectations. Employees will also be provided with a clear overview of the changes that were introduced. If required, the employee will undergo training.",
      paragraphs: [
        "Implementation is the most critical part of a new business process, as it involves significant changes to how things have been done in the past. Therefore, there can be some resistance from employees and even a drop of productivity in the initial phase. However, these conditions will gradually improve as your employees become familiar with the new processes and techniques.",
        "It's critical that there's a perfect combination of soft skills and hard skills in order to effectively implement the changes needed within an organization. Soft skills include leadership, communication, and conflict management. Hard skills involve strategic planning and project management.",
        "We also do periodic reviews of performance, cost analysis, and customer service on behalf of the business, in order to ensure that the new business process is on the right track and is delivering the expected results.",
      ],
      closing: "GET IN TOUCH WITH US TODAY!",
      closingHref: "/contact",
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

function resolveConfig(type, slug) {
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
    groups: getServicesMenuGroups(),
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
  hideMenuOnMobile = type === "service",
}) {
  const {
    menuContext,
    groups,
    introTitle,
    introDescription,
    imageSrc,
    imageAltPrefix,
    panelClassName,
  } = resolveConfig(type, slug);

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

  const [nestedServiceAccordionHref, setNestedServiceAccordionHref] =
    useState("");

  useEffect(() => {
    if (type !== "service" || !menuContext?.group) {
      return;
    }
    const nextTitle =
      menuContext.group.title ?? menuContext.group.label ?? "";
    if (nextTitle) {
      setExpandedGroup(nextTitle);
    }
    if (menuContext.currentItem?.href) {
      setActiveHref(menuContext.currentItem.href);
    }
    // menuContext is a new object each render from resolveConfig; sync only from slug-driven primitives.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: avoid unstable menuContext reference
  }, [
    type,
    slug,
    menuContext?.group?.title,
    menuContext?.group?.label,
    menuContext?.currentItem?.href,
  ]);

  useEffect(() => {
    if (type !== "service" || !slug) {
      return;
    }

    const path = `/services/${slug}/`;

    for (const g of getServicesMenuGroups()) {
      const parent = findNestedServiceParentHref(g.children, path);

      if (parent) {
        setNestedServiceAccordionHref(parent);
        return;
      }
    }

    setNestedServiceAccordionHref("");
  }, [type, slug]);

  const activeEntry = useMemo(() => {
    if (groups?.length) {
      for (const group of groups) {
        if (group.href === activeHref) {
          return { group, item: group };
        }

        const child = findMenuItemByHref(group.children, activeHref);

        if (child) {
          return { group, item: child };
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
      : type === "strategy"
        ? getStrategyDetailContent(activeItem?.href)
      : getServiceDetailContent(activeItem?.href);
  const isStrategyDetailPanel = type === "strategy" && Boolean(detailContent);
  const isIndustryDetailPanel = type === "industry" && Boolean(detailContent);
  const isStrategyMenu = type === "strategy";
  const isIndustryMenu = type === "industry";
  const isServiceMenu = type === "service";
  /** Shared sidebar chrome: gradient group row + glass child selection */
  const isPremiumNav = isIndustryMenu || isStrategyMenu || isServiceMenu;
  /** Wider sticky rail + industry scrollbar (service matches Industries) */
  const isWideStickyNav = isIndustryMenu || isServiceMenu;
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
    `group relative flex min-h-[3.7rem] w-full cursor-pointer select-none items-center justify-start overflow-hidden rounded-lg px-5 py-3 text-left transition-[color,transform,opacity] duration-300 ease-out ${
      isActive
        ? "text-gray-off-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
        : "text-gray-off-white/82 hover:bg-white/[0.04] hover:text-gray-tradfi-silver"
    }`;

  return (
    <section className="isolate bg-[#1C211E] antialiased">
      <div className="container pb-block pt-24 sm:pt-28 md:pt-12 lg:pt-14">
        {introTitle ? (
          <div className="mb-3xl flex flex-col gap-xl">
            <div className="flex max-w-4xl flex-col gap-sm md:gap-md">
              <h2
                id="a-decentralized-world-needs-strong-governance"
                className="text-balance font-blender text-xl uppercase leading-snug tracking-wide text-green-dark sm:text-2xl"
              >
                {introTitle}
              </h2>
              <div className="text-pretty leading-relaxed text-gray-off-white/90 md:text-[1.05rem] md:leading-relaxed">
                {introDescription}
              </div>
            </div>
            <hr className="border-0 border-t border-[#AB290E]/80" />
          </div>
        ) : null}

        <section className="flex flex-col gap-6 lg:min-h-[33rem] lg:flex-row lg:items-stretch lg:gap-8 xl:min-h-[37rem] xl:gap-10">
          <div
            className={`${hideMenuOnMobile ? "hidden lg:block" : ""} ${isIndustryMenu ? "lg:w-[21rem] xl:w-[22rem]" : isWideStickyNav ? "lg:w-[21rem] xl:w-[22rem]" : "lg:w-[18rem]"} lg:shrink-0`}
          >
            <div
              className={
                isIndustryMenu || isWideStickyNav
                  ? "bg-transparent p-0 shadow-none lg:sticky lg:top-24"
                  : "overflow-x-auto pb-2 lg:h-full lg:overflow-hidden lg:pb-0"
              }
              style={isIndustryMenu || isWideStickyNav ? sidebarViewportStyle : undefined}
            >
              <div
                role="tablist"
                aria-label={`${group?.title} child menu`}
                aria-orientation="vertical"
                className={`flex min-h-0 flex-col gap-2 ${
                  isIndustryMenu || isWideStickyNav
                    ? "pr-1 lg:pr-2 [scrollbar-color:#f05a35_rgba(255,255,255,0.06)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[0.42rem] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/[0.05] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#f05a35] [&::-webkit-scrollbar-thumb:hover]:bg-[#ff6b47]"
                    : "h-full overflow-y-auto overscroll-contain pr-1 lg:max-h-[38rem] lg:pr-2 [scrollbar-color:#e7512f_rgba(255,255,255,0.06)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/[0.05] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[linear-gradient(180deg,#ff7f5f_0%,#e7512f_100%)] [&::-webkit-scrollbar-thumb]:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] [&::-webkit-scrollbar-thumb:hover]:bg-[linear-gradient(180deg,#ff9477_0%,#f16441_100%)]"
                }`}
                style={isIndustryMenu || isWideStickyNav ? sidebarScrollStyle : undefined}
              >
                {groups?.length
                  ? groups.map((menuGroup) => {
                      const hasChildren = (menuGroup.children ?? []).length > 0;
                      const firstChildHref = menuGroup.children?.[0]?.href ?? "";
                      const isExpanded = expandedGroup === menuGroup.title;
                      const isGroupActive = activeHref === menuGroup.href;
                      const isChildActive = menuTreeHasActiveHref(
                        menuGroup.children,
                        activeHref,
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
                                : isServiceMenu
                                  ? "shrink-0 rounded-[1rem] bg-white/[0.02]"
                                  : "shrink-0 rounded-lg bg-white/5 ring-1 ring-white/[0.04]"
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
                                if (!isChildActive) {
                                  setActiveHref(
                                    isStrategyMenu && firstChildHref
                                      ? firstChildHref
                                      : menuGroup.href,
                                  );
                                }
                                return;
                              }

                              setExpandedGroup(menuGroup.title);
                              setActiveHref(menuGroup.href);
                            }}
                            className={`relative flex min-h-[3.55rem] w-full shrink-0 items-center justify-between overflow-hidden rounded-[0.95rem] px-4 py-3 text-left transition-colors duration-200 ${
                              isIndustryMenu
                                ? isGroupHighlighted
                                  ? "text-white"
                                  : "text-gray-off-white/88 hover:bg-white/[0.05] hover:text-white"
                                : isStrategyMenu
                                  ? isGroupHighlighted
                                    ? "text-white"
                                    : "text-gray-off-white/88 hover:bg-white/[0.06] hover:text-white"
                                  : isServiceMenu
                                    ? isGroupHighlighted
                                      ? "text-white"
                                      : "text-gray-off-white/88 hover:bg-white/[0.05] hover:text-white"
                                    : isGroupHighlighted
                                      ? "bg-[#e7512f] text-gray-off-white"
                                      : "text-gray-off-white/88 hover:bg-white/5 hover:text-gray-off-white"
                            }`}
                          >
                            {(isIndustryMenu || isStrategyMenu || isServiceMenu) &&
                            isGroupHighlighted ? (
                              <motion.span
                                layoutId={
                                  isIndustryMenu
                                    ? "industry-group-active-pill"
                                    : isStrategyMenu
                                      ? "strategy-group-active-pill"
                                      : "service-group-active-pill"
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
                                  isPremiumNav
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
                                  className={`flex shrink-0 flex-col gap-1 px-2 py-1 ${isPremiumNav ? "pb-2" : ""}`}
                                >
                                  {menuGroup.children.map((item) => {
                                    const nestedItems = item.children?.length
                                      ? item.children
                                      : null;

                                    const renderLeafTab = (node, nested) => {
                                      const isActive = node.href === activeHref;

                                      return (
                                        <button
                                          key={node.href}
                                          id={getTabId(node)}
                                          type="button"
                                          role="tab"
                                          aria-selected={isActive}
                                          aria-controls={getPanelId(node)}
                                          tabIndex={isActive ? 0 : -1}
                                          onClick={() =>
                                            setActiveHref(node.href)
                                          }
                                          className={`relative flex min-h-[2.8rem] w-full shrink-0 items-center gap-3 overflow-hidden rounded-[0.8rem] py-2 text-left transition ${
                                            nested ? "pl-5 pr-3" : "px-3"
                                          } ${
                                            isIndustryMenu
                                              ? isActive
                                                ? "text-white"
                                                : "text-gray-off-white/76 hover:bg-white/[0.06] hover:text-white"
                                              : isStrategyMenu || isServiceMenu
                                                ? isActive
                                                  ? "text-white"
                                                  : "text-gray-off-white/76 hover:bg-white/[0.06] hover:text-white"
                                                : isActive
                                                  ? "bg-[#e7512f] text-gray-off-white"
                                                  : "text-gray-off-white/78 hover:bg-white/5 hover:text-gray-off-white"
                                          }`}
                                        >
                                          {(isIndustryMenu ||
                                            isStrategyMenu ||
                                            isServiceMenu) &&
                                          isActive ? (
                                            <motion.span
                                              layoutId={
                                                isIndustryMenu
                                                  ? "industry-child-active-pill"
                                                  : isStrategyMenu
                                                    ? "strategy-child-active-pill"
                                                    : "service-child-active-pill"
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
                                              isIndustryMenu ||
                                              isStrategyMenu ||
                                              isServiceMenu
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
                                            {node.title}
                                          </motion.span>
                                        </button>
                                      );
                                    };

                                    if (nestedItems) {
                                      const nestedOpen =
                                        nestedServiceAccordionHref ===
                                        item.href;
                                      const hasActiveChild = nestedItems.some(
                                        (s) => s.href === activeHref,
                                      );
                                      const isParentActive =
                                        item.href === activeHref;
                                      const parentHighlighted =
                                        isParentActive ||
                                        hasActiveChild ||
                                        nestedOpen;

                                      return (
                                        <div
                                          key={item.href}
                                          className="overflow-hidden rounded-[0.8rem] bg-white/[0.03]"
                                        >
                                          <button
                                            type="button"
                                            aria-expanded={nestedOpen}
                                            onClick={() =>
                                              setNestedServiceAccordionHref(
                                                (prev) =>
                                                  prev === item.href
                                                    ? ""
                                                    : item.href,
                                              )
                                            }
                                            className={`relative flex min-h-[2.8rem] w-full shrink-0 items-center justify-between gap-2 overflow-hidden rounded-[0.8rem] px-3 py-2 text-left transition ${
                                              isIndustryMenu
                                                ? parentHighlighted
                                                  ? "text-white"
                                                  : "text-gray-off-white/76 hover:bg-white/[0.06] hover:text-white"
                                                : isStrategyMenu || isServiceMenu
                                                  ? parentHighlighted
                                                    ? "text-white"
                                                    : "text-gray-off-white/76 hover:bg-white/[0.06] hover:text-white"
                                                  : parentHighlighted
                                                    ? "bg-[#e7512f] text-gray-off-white"
                                                    : "text-gray-off-white/78 hover:bg-white/5 hover:text-gray-off-white"
                                            }`}
                                          >
                                            {(isIndustryMenu ||
                                              isStrategyMenu ||
                                              isServiceMenu) &&
                                            parentHighlighted ? (
                                              <span className="absolute inset-0 rounded-[0.8rem] bg-[linear-gradient(90deg,rgba(231,81,47,0.94),rgba(231,81,47,0.72))]" />
                                            ) : null}
                                            <span
                                              className={`relative z-10 leading-[1.2] ${
                                                isIndustryMenu
                                                  ? "text-[0.8rem] tracking-[0.08em]"
                                                  : "text-[0.82rem] uppercase tracking-[0.14em]"
                                              }`}
                                            >
                                              {item.title}
                                            </span>
                                            <motion.span
                                              animate={{
                                                rotate: nestedOpen ? 180 : 0,
                                              }}
                                              transition={{
                                                duration: 0.22,
                                                ease: "easeOut",
                                              }}
                                              className={`relative z-10 shrink-0 text-[0.72rem] ${
                                                isPremiumNav
                                                  ? parentHighlighted
                                                    ? "text-white"
                                                    : "text-gray-off-white/70"
                                                  : parentHighlighted
                                                    ? "text-gray-off-white"
                                                    : "text-gray-off-white/70"
                                              }`}
                                              aria-hidden
                                            >
                                              ▼
                                            </motion.span>
                                          </button>

                                          <AnimatePresence initial={false}>
                                            {nestedOpen ? (
                                              <motion.div
                                                initial={{
                                                  height: 0,
                                                  opacity: 0,
                                                }}
                                                animate={{
                                                  height: "auto",
                                                  opacity: 1,
                                                }}
                                                exit={{
                                                  height: 0,
                                                  opacity: 0,
                                                }}
                                                transition={{
                                                  duration: 0.26,
                                                  ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="overflow-hidden"
                                              >
                                                <div className="flex flex-col gap-1 px-1 pb-1.5 pt-0.5">
                                                  {nestedItems.map((sub) =>
                                                    renderLeafTab(sub, true),
                                                  )}
                                                </div>
                                              </motion.div>
                                            ) : null}
                                          </AnimatePresence>
                                        </div>
                                      );
                                    }

                                    return renderLeafTab(item, false);
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
              className={`flex flex-col overflow-hidden transition-shadow duration-300 bevel md:h-full ${
                detailContent ? "" : "md:flex-row-reverse"
              } ${panelClassName} shadow-[0_28px_64px_-10px_rgba(0,0,0,0.28)]`}
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
                    className={`flex h-full min-h-0 flex-col overflow-y-auto lg:max-h-[38rem] ${
                      isStrategyDetailPanel
                        ? "bg-[#E7ECE3]"
                        : isIndustryDetailPanel
                          ? "bg-[#EC9B9B]"
                          : "bg-gray-defi-charcoal/95"
                    } [scrollbar-color:#e7512f_rgba(255,255,255,0.06)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/[0.05] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[linear-gradient(180deg,#ff7f5f_0%,#e7512f_100%)] [&::-webkit-scrollbar-thumb]:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] [&::-webkit-scrollbar-thumb:hover]:bg-[linear-gradient(180deg,#ff9477_0%,#f16441_100%)]`}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <div
                      className={`px-5 py-6 md:px-7 md:py-7 ${
                        isStrategyDetailPanel
                          ? "border-b border-black/10 bg-gradient-to-r from-black/[0.03] to-transparent"
                          : "border-b border-white/10 bg-gradient-to-r from-white/[0.07] to-transparent"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-blender text-[0.7rem] uppercase tracking-[0.22em] text-green-dark">
                          {detailContent.eyebrow}
                        </span>
                        <span className="h-px w-11 shrink-0 bg-[#e7512f]/95" />
                      </div>

                      <div className="mt-5 flex flex-col gap-4 md:mt-6">
                        <h3
                          className={`max-w-3xl text-balance font-blender text-[1.25rem] uppercase leading-[1.08] tracking-[0.01em] md:text-[2.05rem] ${
                            isStrategyDetailPanel
                              ? "text-gray-night-green"
                              : "text-gray-off-white"
                          }`}
                        >
                          {detailContent.title}
                        </h3>
                        <div className="relative h-px w-full max-w-2xl bg-black/35">
                          <span className="absolute left-0 top-1/2 h-0.5 w-16 -translate-y-1/2 rounded-full bg-[#e7512f]" />
                        </div>
                        <p
                          className={`max-w-[44rem] text-pretty text-[0.98rem] leading-[1.7] md:text-[1.04rem] md:leading-[1.72] ${
                            isStrategyDetailPanel
                              ? "text-gray-night-green/88"
                              : "text-gray-off-white/88"
                          }`}
                        >
                          {detailContent.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col px-5 py-6 md:px-7 md:py-7">
                      <div className="min-h-0 flex-1 pr-1 md:pr-2">
                        <div
                          className={`space-y-6 text-[0.98rem] leading-[1.7] tracking-[0.01em] md:text-[1.02rem] md:leading-[1.72] ${
                            isStrategyDetailPanel
                              ? "text-gray-night-green/85"
                              : "text-gray-off-white/85"
                          }`}
                        >
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
                                  className={`rounded-[0.95rem] px-4 py-4 transition-shadow duration-200 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)] md:px-5 md:py-5 ${
                                    isStrategyDetailPanel
                                      ? "border border-black/10 bg-black/[0.02] hover:border-black/15"
                                      : "border border-white/10 bg-white/[0.04] hover:border-white/15"
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="mt-[0.72rem] h-2 w-2 shrink-0 rounded-full bg-[#e7512f]" />
                                    <div className="min-w-0">
                                      {section.title ? (
                                        <h4
                                          className={`text-[1rem] font-medium leading-7 tracking-[0.01em] md:text-[1.12rem] ${
                                            isStrategyDetailPanel
                                              ? "text-gray-night-green"
                                              : "text-gray-off-white"
                                          }`}
                                        >
                                          {section.title}
                                        </h4>
                                      ) : null}
                                      {section.body ? (
                                        <p
                                          className={`mt-2 max-w-[42rem] text-[0.95rem] leading-8 md:text-[1rem] ${
                                            isStrategyDetailPanel
                                              ? "text-gray-night-green/78"
                                              : "text-gray-off-white/78"
                                          }`}
                                        >
                                          {section.body}
                                        </p>
                                      ) : null}
                                      {section.bullets?.length ? (
                                        <div
                                          className={`mt-3 space-y-3.5 text-[0.95rem] leading-8 md:text-[1rem] ${
                                            isStrategyDetailPanel
                                              ? "text-gray-night-green/78"
                                              : "text-gray-off-white/78"
                                          }`}
                                        >
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
                            <div
                              className={`max-w-[46rem] pt-6 ${
                                isStrategyDetailPanel
                                  ? "border-t border-black/10"
                                  : "border-t border-white/10"
                              } ${detailContent.closingHref ? "flex justify-center" : ""}`}
                            >
                              {detailContent.closingHref ? (
                                <Link
                                  href={detailContent.closingHref}
                                  className="group/cta inline-flex items-center gap-3 rounded-md bg-[#E7512F] px-6 py-3.5 text-sm font-semibold uppercase italic tracking-wide text-white shadow-[0_10px_28px_rgba(231,81,47,0.35)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#f06543] hover:shadow-[0_14px_34px_rgba(231,81,47,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 motion-reduce:transform-none"
                                >
                                  <span>{detailContent.closing}</span>
                                  <span
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-base leading-none transition group-hover/cta:bg-white/25"
                                    aria-hidden
                                  >
                                    →
                                  </span>
                                </Link>
                              ) : (
                                <div
                                  className={`whitespace-pre-line text-[0.96rem] leading-[1.7] md:text-[1rem] md:leading-relaxed ${
                                    isStrategyDetailPanel
                                      ? "text-gray-night-green/78"
                                      : "text-gray-off-white/78"
                                  }`}
                                >
                                  {detailContent.closing}
                                </div>
                              )}
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
