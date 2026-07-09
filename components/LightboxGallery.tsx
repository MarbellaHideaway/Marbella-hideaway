'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type GalleryImage = { src: string; alt: string };

export default function LightboxGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (active === null) return;
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowLeft') setActive((active + images.length - 1) % images.length);
      if (e.key === 'ArrowRight') setActive((active + 1) % images.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, images.length]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <button className="gallery-card" key={img.src} onClick={() => setActive(index)} aria-label={`Open ${title} photo ${index + 1}`}>
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close gallery"><X /></button>
          <button className="lightbox-nav left" onClick={() => setActive((active + images.length - 1) % images.length)} aria-label="Previous image"><ChevronLeft /></button>
          <Image className="lightbox-img" src={images[active].src} alt={images[active].alt} width={1600} height={1000} />
          <button className="lightbox-nav right" onClick={() => setActive((active + 1) % images.length)} aria-label="Next image"><ChevronRight /></button>
          <div className="lightbox-caption">{title} · {active + 1} / {images.length}</div>
        </div>
      )}
    </>
  );
}
