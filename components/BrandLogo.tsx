"use client";

import { useState } from "react";

/**
 * Logo con fallback tipográfico — replica el onerror inline del HTML original.
 * Si /Silver-thaw-logo.jpg no carga, renderiza el wordmark "Silverthaw".
 */
export function BrandLogo({
  imgHeight,
  imgClassName,
  fallback,
}: {
  imgHeight: number;
  imgClassName?: string;
  fallback: React.ReactNode;
}) {
  const [err, setErr] = useState(false);
  if (err) return <>{fallback}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/Silver-thaw-logo.jpg"
      alt="Silverthaw Consulting"
      onError={() => setErr(true)}
      className={imgClassName}
      style={{ height: imgHeight, width: "auto" }}
    />
  );
}
