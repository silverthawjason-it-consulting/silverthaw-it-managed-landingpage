import Image from "next/image";
import { searchPhoto } from "@/lib/unsplash";

type Props = {
  /** Término de búsqueda en Unsplash. Ej: "toronto office technology" */
  query: string;
  alt?: string;
  /** Si true, usa layout fill (el padre debe tener position relative y dimensiones). */
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  /** Muestra el crédito del fotógrafo (requerido por los términos de Unsplash). */
  showAttribution?: boolean;
  priority?: boolean;
  orientation?: "landscape" | "portrait" | "squarish";
};

/**
 * Componente servidor asíncrono — fetcha una foto de Unsplash en el servidor
 * (nunca expone la API key al cliente). Si la API falla, retorna null silenciosamente.
 *
 * USO:
 *   <UnsplashImage query="toronto office technology" fill className="object-cover" />
 *   <UnsplashImage query="cybersecurity" width={800} height={500} showAttribution />
 */
export default async function UnsplashImage({
  query,
  alt,
  fill = false,
  width,
  height,
  className = "",
  showAttribution = false,
  priority = false,
  orientation = "landscape",
}: Props) {
  const photo = await searchPhoto(query, orientation);

  // Si la API falla o no hay resultados — no rompe la página.
  if (!photo) return null;

  const imgAlt = alt ?? photo.altDescription;

  return (
    <figure className={fill ? "absolute inset-0" : "relative"}>
      <Image
        src={photo.regularUrl}
        alt={imgAlt}
        fill={fill}
        width={!fill ? (width ?? photo.width) : undefined}
        height={!fill ? (height ?? photo.height) : undefined}
        className={`${fill ? "object-cover" : ""} ${className}`}
        priority={priority}
        sizes={
          fill
            ? "(max-width: 768px) 100vw, 50vw"
            : `${width ?? photo.width}px`
        }
      />

      {/* Crédito — requerido por los términos de uso de Unsplash */}
      {showAttribution && (
        <figcaption className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white/70 backdrop-blur-sm">
          <a
            href={photo.photographerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Photo by {photo.photographerName} on Unsplash
          </a>
        </figcaption>
      )}
    </figure>
  );
}
