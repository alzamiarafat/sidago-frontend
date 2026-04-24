export const strategyMenuItems = [
  {
    key: "capabilities",
    title: "Capabilities",
    href: "/strategy/capabilities",
    description: "Expertise and skills",
    iconKey: "capabilities",
    children: [
      {
        key: "b2b-solutions",
        title: "B2B Solutions",
        href: "/strategy/b2b-solutions",
        description:
          "Business solutions shaped around capability, delivery, and measurable outcomes.",
      },
      {
        key: "entire-plan",
        title: "Entire Plan",
        href: "/strategy/entire-plan",
        description:
          "A complete view of the strategy from assessment through execution.",
      },
      {
        key: "rapid-scaling",
        title: "Rapid Scaling",
        href: "/strategy/rapid-scaling",
        description:
          "Flexible support designed to help teams scale capacity quickly.",
      },
      {
        key: "reduced-employee-overhead",
        title: "Reduced Employee Overhead",
        href: "/strategy/reduced-employee-overhead",
        description:
          "Lower operating overhead through focused staffing and process support.",
      },
      {
        key: "time-savings",
        title: "Time Savings",
        href: "/strategy/time-savings",
        description:
          "Time saved by moving repeatable work into a clear delivery model.",
      },
    ],
  },
  {
    key: "employee-advantage",
    title: "Employee Advantage",
    href: "/strategy/employee-quality",
    description: "Benefits for employees",
    iconKey: "employeeAdvantage",
    children: [
      {
        key: "employee-quality",
        title: "Employee Quality",
        href: "/strategy/employee-quality",
        description:
          "A focus on matching skilled people with the right process and support.",
      },
      // {
      //   key: "established-management",
      //   title: "Established Management",
      //   href: "/strategy/established-management",
      //   description:
      //     "Experienced management practices that keep teams aligned and accountable.",
      // },
      {
        key: "hiring-model",
        title: "Hiring Model",
        href: "/strategy/hiring-model",
        description:
          "A structured hiring model for finding and retaining the right talent.",
      },
      {
        key: "operational-philosophy",
        title: "Operational Philosophy",
        href: "/strategy/operational-philosophy",
        description:
          "Our approach to managing and optimizing business operations.",
      },
      {
        key: "outsourceing-philosophy",
        title: "Outsourcing Philosophy",
        href: "/strategy/outsourceing-philosophy",
        description:
          "Our approach to managing and optimizing business operations.",
      },
    ],
  },
  {
    key: "our-benefits",
    title: "Our Benefits",
    href: "/strategy/our-benefits",
    description: "Perks and value",
    iconKey: "benefits",
    children: [
      {
        key: "benefit-savings",
        title: "Benefit Savings",
        href: "/strategy/benefit-savings",
        description:
          "Savings opportunities created through better planning and execution.",
      },
      {
        key: "employee-reassignment",
        title: "Employee Reassignment",
        href: "/strategy/employee-reassignment",
        description:
          "Reassigning talent where it can create stronger business value.",
      },
      {
        key: "management-savings",
        title: "Management Savings",
        href: "/strategy/management-savings",
        description:
          "Operational savings from clear management structure and repeatable processes.",
      },
    ],
  },
  {
    key: "our-process",
    title: "Our Proccess",
    href: "/strategy/the-process",
    description: "Structured step approach",
    iconKey: "process",
    children: [
      {
        key: "initial-consultation",
        title: "Initial Consultation",
        href: "/strategy/initial-consultation",
        description:
          "The first conversation to understand the business need and success criteria.",
      },
      {
        key: "general-business-review",
        title: "General Business Review",
        href: "/strategy/general-business-review",
        description:
          "A review of current operations, constraints, and improvement opportunities.",
      },
      {
        key: "propose-action-plan",
        title: "Propose Action Plan",
        href: "/strategy/propose-action-plan",
        description:
          "A clear action plan for priorities, ownership, and next steps.",
      },
    ],
  },
];

export function normalizeStrategyPath(pathname) {
  if (!pathname) {
    return "";
  }

  return pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
}

export function getActiveStrategyItem(pathname) {
  const currentPath = normalizeStrategyPath(pathname);

  return (
    strategyMenuItems.find((item) => {
      if (normalizeStrategyPath(item.href) === currentPath) {
        return true;
      }

      return item.children?.some(
        (child) => normalizeStrategyPath(child.href) === currentPath,
      );
    }) ?? null
  );
}

export function getStrategyChildMenuItems() {
  return strategyMenuItems.flatMap((item) => item.children ?? []);
}

export function getStrategySlugs() {
  return strategyMenuItems.flatMap((item) => [
    item.href.split("/").filter(Boolean).at(-1),
    ...(item.children ?? []).map((child) =>
      child.href.split("/").filter(Boolean).at(-1),
    ),
  ]);
}
