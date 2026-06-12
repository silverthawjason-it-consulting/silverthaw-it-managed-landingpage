"use client";

import { useEffect } from "react";

/**
 * Reemplaza el <script> de IntersectionObserver del index.html original.
 * Observa todos los elementos con la clase `.reveal` y les añade `.in`
 * cuando entran en viewport — mismos threshold/rootMargin que el original.
 */
export default function Reveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
