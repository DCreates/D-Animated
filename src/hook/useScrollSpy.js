import { useEffect, useState } from "react";

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}