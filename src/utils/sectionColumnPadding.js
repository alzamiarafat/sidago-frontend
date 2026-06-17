export function getSectionColumnPadding(
  index,
  total,
  verticalClass = "py-md lg:py-xl",
) {
  if (total <= 1) {
    return verticalClass;
  }

  if (index === 0) {
    return `pr-md ${verticalClass}`;
  }

  if (index === total - 1) {
    return `pl-md ${verticalClass}`;
  }

  return `px-md ${verticalClass}`;
}
