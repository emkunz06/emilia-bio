import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Pause,
  Play,
  Shirt,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const workItems = [
  { title: 'Editorial 01', tag: 'Motion / Editorial', image: 'https://cdn.corenexis.com/f/cFolkgS8U4m.jpg' },
  { title: 'by Geezusmusic', tag: 'Commercial / Lifestyle', image: 'https://i.ibb.co/LXPy8rc1/AR504387.jpg' },
  { title: 'Portrait 03', tag: 'Clean / Minimal', image: 'https://cdn.corenexis.com/f/uv7V37A6AMP.jpg' },
  { title: 'Commercial 04', tag: 'Fashion / Beauty', image: 'https://cdn.corenexis.com/f/6skVuclYn1e.jpg' },
  { title: 'Runway 05', tag: 'Movement / Fashion', image: 'https://cdn.corenexis.com/f/fgbP9A5LKTo.jpeg' },
  { title: 'Studio 06', tag: 'Portrait / Studio', image: 'https://cdn.corenexis.com/f/PyBpYQOv4IS.jpg' },
];

const artworkItems = [
  { title: 'Editorial 01', tag: 'Artwork', image: 'https://cdn.corenexis.com/f/cFolkgS8U4m.jpg' },
  { title: 'by Geezusmusic', tag: 'Artwork', image: 'https://i.ibb.co/LXPy8rc1/AR504387.jpg' },
  { title: 'Portrait 03', tag: 'Artwork', image: 'https://cdn.corenexis.com/f/uv7V37A6AMP.jpg' },
  { title: 'Commercial 04', tag: 'Artwork', image: 'https://cdn.corenexis.com/f/6skVuclYn1e.jpg' },
];

const orbitLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/km6emma/', icon: Instagram, top: '12%', left: '50%' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, top: '24%', left: '78%' },
  { label: 'Email', href: 'mailto:emma.inquiry.me@gmail.com', icon: Mail, top: '50%', left: '86%' },
  { label: 'Orlando, Florida', href: 'https://emilia.zo.space/', icon: MapPin, top: '76%', left: '74%' },
  { label: 'Select bookings', href: 'https://emilia.zo.space/', icon: ArrowUpRight, top: '88%', left: '50%' },
  { label: 'Editorial', href: 'https://emilia.zo.space/', icon: Sparkles, top: '76%', left: '26%' },
  { label: 'Commercial', href: 'https://emilia.zo.space/', icon: Camera, top: '50%', left: '14%' },
  { label: 'Fashion', href: 'https://emilia.zo.space/', icon: Shirt, top: '24%', left: '22%' },
];

const compCards = [
  {
    title: 'profile 01',
    label: '01 / 05',
    image: 'https://i.ibb.co/TxgGTDqN/IMG-1651.jpg',
    details: [
      { label: 'Height', value: '5’2"' },
      { label: 'Bust', value: '29"' },
      { label: 'Waist', value: '20"' },
      { label: 'Hips', value: '32"' },
      { label: 'Shoes', value: '5' },
    ],
  },
  {
    title: 'fullbody 02',
    label: '02 / 05',
    image: 'https://i.ibb.co/JR5Sy9Bn/IMG-1649.jpg',
    details: [
      { label: 'Height', value: '5’2"' },
      { label: 'Bust', value: '29"' },
      { label: 'Waist', value: '20"' },
      { label: 'Hips', value: '32"' },
      { label: 'Shoes', value: '5' },
    ],
  },
  {
    title: 'halfbody 03',
    label: '03 / 05',
    image: 'https://i.ibb.co/23hKHw5B/IMG-1650.jpg',
    details: [
      { label: 'Height', value: '5’2"' },
      { label: 'Bust', value: '29"' },
      { label: 'Waist', value: '20"' },
      { label: 'Hips', value: '32"' },
      { label: 'Shoes', value: '5' },
    ],
  },
  {
    title: 'halfturn 04',
    label: '04 / 05',
    image: 'https://i.ibb.co/gFVWnMpC/IMG-1647.jpg',
    details: [
      { label: 'Height', value: '5’2"' },
      { label: 'Bust', value: '29"' },
      { label: 'Waist', value: '20"' },
      { label: 'Hips', value: '32"' },
      { label: 'Shoes', value: '5' },
    ],
  },
  {
    title: '3/4 05',
    label: '05 / 05',
    image: 'https://i.ibb.co/zWjhwM6N/IMG-1648.jpg',
    details: [
      { label: 'Height', value: '5’2"' },
      { label: 'Bust', value: '29"' },
      { label: 'Waist', value: '20"' },
      { label: 'Hips', value: '32"' },
      { label: 'Shoes', value: '5' },
    ],
  },
];

function SeamlessMarquee() {
  const strip = useMemo(() => [...workItems, ...workItems], []);

  return (
    <div className="marquee">
      <div className="marquee-track">
        {strip.map((item, index) => (
          <article key={`${item.title}-${index}`} className="work-card">
            <div className="card-visual">
              <img src={item.image} alt={item.title} />
              <div className="card-caption">
                <p>{item.tag}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function OrbitContact() {
  return (
    <div className="orbit">
      <div className="orbit-ring" />
      <div className="orbit-ring ring-two" />
      <div className="orbit-ring ring-three" />
      <div className="orbit-ring ring-four" />
      <div className="orbit-center">
        <div>
          <p>Let's Create</p>
          <strong>Emi Marie</strong>
        </div>
      </div>
      {orbitLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.label} href={item.href} className="orbit-link" style={{ top: item.top, left: item.left }}>
            <Icon size={13} />
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [selectedComp, setSelectedComp] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.35;
  }, []);

  const activeComp = compCards[selectedComp];

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <main className="page-shell">
      <section id="top" className="hero">
        <div className="hero-media">
          <img alt="Hero banner" src="https://i.ibb.co/zWdtyhjm/hero-banner.jpg" />
          <div className="hero-overlay" />
        </div>

        <header className="site-header hero-header">
          <a href="#top" className="brand">Emi Marie</a>
          <nav className="nav-links">
            <Link to="/portfolio">Portfolio</Link>
            <a href="#artwork">Artwork</a>
          </nav>
        </header>

        <div className="hero-content">
          <h1 className="hero-title">Hello World</h1>
          <p className="hero-text">
            I&apos;m Emilia (Emma/Emi) Marie, a commercial and editorial model based in Orlando,
            moving between fashion, portrait, and creative work with a clean, expressive presence.
            Available for select bookings, campaigns, editorials, and collaborative projects.
          </p>

          <div className="hero-actions">
            <button type="button" className="hero-audio-button" onClick={toggleAudio}>
              {playing ? <Pause size={16} /> : <Play size={16} />}
              <span>{playing ? 'Pause audio' : 'Play audio'}</span>
            </button>
            <span className="hero-quote">Your Scars Hold My Dreams</span>
          </div>

          <p className="hero-meta">Editorial • Commercial • Fashion • Portfolio</p>
        </div>
      </section>

      <audio ref={audioRef} src="https://videotourl.com/audio/1783145733786-3fbda49e-0730-4c7e-b6a3-5b87aa89e10c.mp3" preload="auto" />

      <section className="section">
        <div className="section-header">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Motion / Editorial / Campaign</h2>
          </div>
          <p className="section-note">Auto scrolling</p>
        </div>
        <SeamlessMarquee />
      </section>

      <section className="section about-section" id="about">
        <div className="about-grid">
          <div className="about-copy">
            <p className="section-label">Meet Emi Marie</p>
            <h2 className="section-title">A freelance model and creative based in Orlando, Florida.</h2>
            <p>
              With a passion for digital art, nature, and visual storytelling, Emi brings a distinctive and emotionally expressive presence to every project. Her background in competitive gymnastics, track, and distance running informs her movement, discipline, and calm control in front of the camera.
            </p>
            <p>
              She is currently building meaningful collaborations across editorial, commercial, fashion, and branded content and is open to select bookings.
            </p>
          </div>

          <div className="about-panel">
            <div className="comp-card">
              <div className="comp-card-visual">
                <img src={activeComp.image} alt={activeComp.title} />
                <div className="comp-card-overlay">
                  <p className="comp-card-label">{activeComp.label}</p>
                  <div className="comp-card-nav">
                    <button type="button" aria-label="Previous comp card" onClick={() => setSelectedComp((value) => (value === 0 ? compCards.length - 1 : value - 1))}>
                      <ChevronLeft size={16} />
                    </button>
                    <button type="button" aria-label="Next comp card" onClick={() => setSelectedComp((value) => (value + 1) % compCards.length)}>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="comp-card-content">
                <div className="comp-card-heading">
                  <p className="comp-card-title">Comp Card</p>
                  <h3>{activeComp.title}</h3>
                </div>
                <div className="comp-details">
                  {activeComp.details.map((item) => (
                    <div key={item.label} className="comp-detail">
                      <span>{item.label}</span>
                      {item.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="orbit-wrap">
          <OrbitContact />
        </div>
      </section>

      <section className="section" id="artwork">
        <div className="section-header">
          <div>
            <p className="section-label">Artwork</p>
            <h2 className="section-title">2D / 3D / Graphic Design / Editing</h2>
          </div>
        </div>

        <div className="artwork-grid">
          {artworkItems.map((item) => (
            <article key={item.title} className="artwork-card">
              <div className="card-visual">
                <img src={item.image} alt={item.title} />
                <div className="card-caption">
                  <p>{item.tag}</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-links">
        <a href="/portfolio">Portfolio</a>
        <a href="#artwork">Artwork</a>
        <a href="mailto:emma.inquiry.me@gmail.com">Email</a>
      </footer>
    </main>
  );
}
