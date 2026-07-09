import Image from 'next/image';
import { Bath, BedDouble, CalendarDays, Car, Mail, MapPin, Plane, Snowflake, Star, Users, Utensils, Waves, Wifi } from 'lucide-react';
import LightboxGallery, { GalleryImage } from '@/components/LightboxGallery';

const whatsapp = 'https://wa.me/34672249724?text=Hi%20Marbella%20Hideaway%2C%20I%27d%20like%20to%20enquire%20about%20staying%20at%20the%20villa.';

const rooms = [
  {
    id: 'master',
    eyebrow: 'Ground Floor • Pool View • En-suite',
    name: 'Master Suite',
    intro: 'The villa’s finest bedroom, with a Super King bed, spacious en-suite and private terrace overlooking the lagoon-style pool and tropical gardens.',
    features: ['Super King Bed', 'Luxury En-suite', 'Private Terrace', 'Pool Views', 'Air Conditioning', 'Wi‑Fi'],
    images: ['master-01.webp','master-02.webp','master-03.webp','master-04.webp','master-05.webp','master-06.webp','master-07.webp'],
  },
  {
    id: 'bedroom-two',
    eyebrow: 'Ground Floor • Garden View • En-suite',
    name: 'Bedroom Two',
    intro: 'A beautiful double bedroom with generous proportions, warm styling and easy access to the villa’s lush rear gardens.',
    features: ['Super King Bed', 'En-suite Bathroom', 'Garden Views', 'Air Conditioning', 'Wi‑Fi'],
    images: ['bedroom-two-01.webp','bedroom-two-02.webp','bedroom-two-03.webp','bedroom-two-04.webp','bedroom-two-05.webp','bedroom-two-06.webp','bedroom-two-07.webp','bedroom-two-08.webp'],
  },
  {
    id: 'bedroom-three',
    eyebrow: 'Ground Floor • Spacious Suite • En-suite',
    name: 'Bedroom Three',
    intro: 'A large and calming bedroom with a Super King bed, en-suite bathroom and plenty of space to relax after a day in the Marbella sunshine.',
    features: ['Super King Bed', 'En-suite Bathroom', 'Spacious Layout', 'Air Conditioning', 'Wi‑Fi'],
    images: ['bedroom-three-01.webp','bedroom-three-02.webp','bedroom-three-03.webp','bedroom-three-04.webp','bedroom-three-05.webp','bedroom-three-06.webp','bedroom-three-07.webp','bedroom-three-08.webp'],
  },
  {
    id: 'bedroom-four',
    eyebrow: 'First Floor • Balcony • En-suite',
    name: 'Bedroom Four',
    intro: 'A bright double bedroom with a private balcony, garden views and its own en-suite bathroom.',
    features: ['Double Bed', 'En-suite Bathroom', 'Private Balcony', 'Garden Views', 'Air Conditioning', 'Wi‑Fi'],
    images: ['bedroom-four-01.webp','bedroom-four-02.webp','bedroom-four-03.webp','bedroom-four-04.webp','bedroom-four-05.webp','bedroom-four-06.webp','bedroom-four-07.webp'],
  },
  {
    id: 'bedroom-five',
    eyebrow: 'First Floor • Twin Room • Balcony',
    name: 'Bedroom Five',
    intro: 'A bright and spacious twin bedroom with two comfortable single beds and French doors opening onto a private first-floor balcony.',
    features: ['Two Single Beds', 'Private Balcony', 'Garden Views', 'Air Conditioning', 'Wi‑Fi'],
    images: ['bedroom-five-01.webp','bedroom-five-02.webp','bedroom-five-03.webp','bedroom-five-04.webp'],
  },
  {
    id: 'garden-room',
    eyebrow: 'Garden Level • Twin Suite • En-suite',
    name: 'Garden Room',
    intro: 'A peaceful twin room located on the garden level with its own en-suite shower room. A private, flexible space for friends, teenagers or guests who enjoy a quieter setting.',
    features: ['Two Single Beds', 'En-suite Shower Room', 'Garden Level', 'Air Conditioning', 'Wi‑Fi'],
    images: ['garden-room-01.webp','garden-room-02.webp','garden-room-03.webp','garden-room-04.webp','garden-room-05.webp','garden-room-06.webp'],
  },
];

const gallery: GalleryImage[] = ['general-01.webp','general-02.webp','general-03.webp','general-04.webp','general-05.webp','general-06.webp','general-07.webp','general-08.webp','general-09.webp','general-10.webp','general-11.webp','general-12.webp','general-13.webp'].map((name, i) => ({ src: `/assets/${name}`, alt: `Marbella Hideaway villa photo ${i + 1}` }));

function FeatureIcon({ text }: { text: string }) {
  const lower = text.toLowerCase();
  const Icon = lower.includes('bed') || lower.includes('king') || lower.includes('single') ? BedDouble : lower.includes('suite') || lower.includes('bath') || lower.includes('shower') ? Bath : lower.includes('air') ? Snowflake : lower.includes('wi') ? Wifi : lower.includes('terrace') || lower.includes('balcony') || lower.includes('view') || lower.includes('garden') ? Waves : Star;
  return <span className="feature"><Icon size={17} /> {text}</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="brand">Marbella Hideaway</a>
        <div>
          <a href="#villa">The Villa</a>
          <a href="#bedrooms">Bedrooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#availability">Availability</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <video className="hero-video" autoPlay loop muted playsInline poster="/assets/general-04.webp">
          <source src="/assets/hero.mov" type="video/quicktime" />
        </video>
        <Image className="hero-fallback" src="/assets/general-04.webp" alt="Lagoon pool at Marbella Hideaway" fill priority />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Welcome to Marbella Hideaway – Marbella&apos;s most talked-about holiday villa in its class.</h1>
          <p>A fabulous six-bedroom villa on Marbella&apos;s Golden Mile, featuring a stunning lagoon-style swimming pool set within mature, private tropical gardens.</p>
          <div className="hero-actions"><a className="btn primary" href="#availability">Check Availability</a><a className="btn ghost" href={whatsapp}>WhatsApp Us</a></div>
        </div>
      </section>

      <section id="villa" className="intro section grid-two">
        <div>
          <p className="eyebrow">Marbella Hideaway</p>
          <h2>A secret hideaway in the heart of glamorous Marbella.</h2>
        </div>
        <div className="copy">
          <p>This secret hideaway is set in the heart of glamorous Marbella, just 30 minutes from Málaga Airport, a 10-minute walk to the beach and only five minutes from Puerto Banús Marina. This impressive villa offers guests the highest standards of accommodation, exclusive relaxation and maximum enjoyment, all within its own private tropical grounds.</p>
          <p>Striking continental marble floors, sweeping terracotta terraces and a fabulous lagoon-style swimming pool blend with sumptuous bohemian open-plan interiors to create a chilled, contemporary retreat that oozes serenity and sophistication.</p>
          <p>From a garlic press to crystal decanters, every detail has been considered. The kitchen is fully equipped with modern appliances and every conceivable utensil, while the villa is furnished throughout to an exceptional standard. Mature tropical gardens provide complete privacy, and the lagoon-style pool, with its gently trickling waterfall and mature yuccas, offers the perfect place to relax. Extensive terraces provide abundant space for alfresco dining, entertaining and long evenings under the Marbella sky.</p>
        </div>
      </section>

      <section className="stats section">
        <div><strong>15</strong><span>Guests</span></div>
        <div><strong>6</strong><span>Bedrooms</span></div>
        <div><strong>30</strong><span>mins to Málaga Airport</span></div>
        <div><strong>10</strong><span>mins walk to the beach</span></div>
        <div><strong>5</strong><span>mins to Puerto Banús</span></div>
      </section>

      <section id="bedrooms" className="section bedrooms">
        <div className="section-head">
          <p className="eyebrow">Bedrooms</p>
          <h2>Six beautiful bedrooms sleeping up to 15 guests.</h2>
          <p>Every bedroom at Marbella Hideaway has been thoughtfully designed to combine comfort, space and style, with air conditioning, luxury linens and calm interiors throughout.</p>
        </div>
        {rooms.map((room, idx) => (
          <article className={`room ${idx % 2 ? 'flip' : ''}`} key={room.id} id={room.id}>
            <div className="room-main">
              <Image src={`/assets/${room.images[0]}`} alt={`${room.name} at Marbella Hideaway`} fill sizes="(max-width: 900px) 100vw, 55vw" />
            </div>
            <div className="room-content">
              <p className="eyebrow">{room.eyebrow}</p>
              <h3>{room.name}</h3>
              <p>{room.intro}</p>
              <div className="features">{room.features.map((f) => <FeatureIcon key={f} text={f} />)}</div>
            </div>
            <div className="room-gallery-wrap">
              <LightboxGallery title={room.name} images={room.images.map((img, i) => ({ src: `/assets/${img}`, alt: `${room.name} photo ${i + 1}` }))} />
            </div>
          </article>
        ))}

        <div className="sleeping-card">
          <h3>Sleeping Arrangements</h3>
          <div className="table">
            <div><b>Master Suite</b><span>Super King · Sleeps 2</span></div>
            <div><b>Bedroom Two</b><span>Super King · Sleeps 2</span></div>
            <div><b>Bedroom Three</b><span>Super King · Sleeps 2</span></div>
            <div><b>Bedroom Four</b><span>Double · Sleeps 2</span></div>
            <div><b>Bedroom Five</b><span>Twin · Sleeps 2</span></div>
            <div><b>Garden Room</b><span>Twin · Sleeps 2</span></div>
            <div><b>Additional beds</b><span>Available on request · Up to 3</span></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-head">
          <p className="eyebrow">Gallery</p>
          <h2>Pool, gardens and living spaces.</h2>
          <p>Explore the lagoon-style pool, tropical gardens, open-plan interiors and terraces designed for alfresco dining and long Marbella evenings.</p>
        </div>
        <LightboxGallery title="Marbella Hideaway" images={gallery} />
      </section>

      <section className="section experiences">
        <div className="section-head">
          <p className="eyebrow">Plan Your Stay</p>
          <h2>More than a villa. A complete Marbella weekend.</h2>
        </div>
        <div className="experience-grid">
          <div><Utensils /><h3>Private Chefs</h3><p>Restaurant-quality dining at the villa.</p></div>
          <div><Waves /><h3>Yacht Charters</h3><p>Spend the day on the Mediterranean.</p></div>
          <div><Car /><h3>Airport Transfers</h3><p>Seamless arrivals and departures.</p></div>
          <div><Star /><h3>Celebrations</h3><p>Decorations, balloons, DJs and more.</p></div>
        </div>
      </section>

      <section id="availability" className="section availability">
        <div>
          <p className="eyebrow">Availability</p>
          <h2>Ready to stay?</h2>
          <p>Availability changes quickly during the season. Message us with your preferred dates and guest numbers and we’ll come back to you as quickly as possible.</p>
        </div>
        <div className="enquiry-card">
          <a className="btn primary" href={whatsapp}><CalendarDays size={18} /> Check dates on WhatsApp</a>
          <a className="btn dark" href="mailto:simon@marbellahideaway.com?subject=Marbella%20Hideaway%20Enquiry"><Mail size={18} /> Email Simon</a>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <h2>Marbella Hideaway</h2>
          <p>Urban. La Carolina, Calle Margarita 48, Marbella, 29602</p>
          <p><b>Tourist Licence / Licencia de Turismo:</b> VFT/MA/19495</p>
        </div>
        <div className="socials">
          <a href={whatsapp}>WhatsApp</a>
          <a href="mailto:simon@marbellahideaway.com">Email</a>
          <a href="https://www.instagram.com/marbellahideaway">Instagram</a>
          <a href="https://www.facebook.com/marbellahideaway">Facebook</a>
          <a href="https://www.tiktok.com/@marbellahideaway">TikTok</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Urban.%20La%20Carolina%2C%20Calle%20Margarita%2048%2C%2029602%20Marbella">Map</a>
        </div>
      </footer>
    </main>
  );
}
