import { useEffect, useRef, useState } from 'react'
import './App.css'

const RESULTS = {
  2026: [
    { place: '2nd', placeClass: 'silver', name: 'Flying Scot Junior North American Championship', cls: 'Flying Scot · RCYC', url: 'https://rcyc.org/regatta/pNRs608CbH/results' },
    { place: '4th', placeClass: 'bronze', name: 'Sears Cup Area F Qualifier', cls: 'C420 · Chubb US Youth Triplehanded', url: 'https://theclubspot.com/regatta/QwVHpXxuRC/results' },
    { place: '6th', placeClass: 'other', name: 'C420 New England Championship', cls: 'C420 · Erik C. Menyhart Trophy', url: 'https://theclubspot.com/regatta/WnZvcOGgpY/results' },
    { place: '★', placeClass: 'star', name: 'i420 World Championship — Qualified', cls: 'i420 · International · 2026', url: null },
  ],
  2025: [
    { place: '8th', placeClass: 'other', name: 'Miami Sail Week', cls: 'C420 · Biscayne Bay', url: 'https://www.regattanetwork.com/clubmgmt/applet_regatta_results.php?regatta_id=29138' },
    { place: '2nd', placeClass: 'silver', name: 'DinghyFest — Sunfish Worlds Qualifier', cls: 'Sunfish · Worlds Qualifier', url: 'https://theclubspot.com/regatta/Y2tXiOvMmy/results' },
    { place: '2nd', placeClass: 'silver', name: 'TSA Grapevine Grand Prix', cls: 'C420 · Texas Sailing Association', url: 'https://grapevinesailing.org/regatta/VdoBRUWQG7/results' },
    { place: '3rd', placeClass: 'bronze', name: 'TSA C420 Road Runner', cls: 'C420 · Austin Yacht Club', url: 'https://austinyachtclub.theclubspot.com/regatta/J6tEOPYArA/results' },
    { place: '2nd', placeClass: 'silver', name: 'TSA C420 Chocopalooza', cls: 'C420 · Texas Sailing Association', url: 'https://theclubspot.com/regatta/5lEPq6Je1R/results' },
    { place: '10th', placeClass: 'other', name: 'Bluenose Championship', cls: 'C420 · Chester, Nova Scotia', url: 'https://www.chesterbluenosefleet.com/new-page-71' },
    { place: '★', placeClass: 'star', name: 'Qualified for Sunfish Worlds — St. Croix', cls: 'Sunfish · USVI', url: null },
    { place: '42nd', placeClass: 'other', name: 'C420 North American Championship', cls: 'C420 Open', url: 'https://theclubspot.com/regatta/3R7aMJAnlG/results' },
    { place: '30th', placeClass: 'other', name: 'C420 National Championship', cls: 'C420', url: 'https://theclubspot.com/regatta/levWpCzvI0/results' },
    { place: '33rd', placeClass: 'other', name: 'C420 New England Championship', cls: 'C420', url: 'https://theclubspot.com/regatta/znzc9G0rxs/results' },
  ],
  2024: [
    { place: '10th', placeClass: 'other', name: 'CORK Regatta', cls: 'Optimist · Kingston, Ontario', url: null },
    { place: '28th', placeClass: 'other', name: 'Orange Bowl International Regatta', cls: 'Optimist · Coconut Grove', url: null },
    { place: '★', placeClass: 'star', name: 'International Racing — Palamos & Belgium', cls: 'Optimist · Gold Fleet both events', url: null },
    { place: '★', placeClass: 'star', name: 'Qualified: IODAs Asian & South American', cls: 'Optimist · International', url: null },
  ],
}

const PHOTOS = [
  { src: '/photos/photo1.jpg', alt: 'Club 420 New Englands racing' },
  { src: '/photos/photo2.jpg', alt: 'Club 420 New Englands fleet' },
  { src: '/photos/photo3.jpg', alt: 'Ozzie racing action' },
  { src: '/photos/photo4.jpg', alt: 'C420 close racing' },
  { src: '/photos/photo5.jpg', alt: 'Racing upwind' },
  { src: '/photos/photo6.jpg', alt: 'Bluenose classic' },
  { src: '/photos/photo7.jpg', alt: 'Sailing portrait' },
  { src: '/photos/photo8.jpg', alt: 'Spinnaker run in Miami' },
  { src: '/photos/photo9.jpg', alt: 'Regatta fleet' },
  { src: '/photos/photo10.jpg', alt: 'Bluenose fleet racing' },
  { src: '/photos/photo11.jpg', alt: 'Racing action' },
  { src: '/photos/photo12.jpg', alt: 'On the water' },
]

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__logo">OY</div>
      <ul className="nav__links">
        {['about', 'results', 'gallery', 'contact'].map(id => (
          <li key={id}>
            <button onClick={() => scroll(id)} className="nav__link">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__video-wrap">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/photos/photo1.jpg"
        >
          <source src="/videos/hero.mov" type="video/mp4" />
          <source src="/videos/hero.mov" type="video/quicktime" />
          <img src="/photos/photo1.jpg" alt="Ozzie Young sailing" className="hero__video" />
        </video>
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__eyebrow">Competitive Sailor · Class of 2028</div>
        <h1 className="hero__name">
          Osborn<br />
          <span className="hero__name--accent">"Ozzie"</span><br />
          Young
        </h1>
        <p className="hero__tagline">
          From Optis to i420 Worlds qualifier — racing with precision, racing with heart.
        </p>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { number: '3+', label: 'Years Racing' },
    { number: '20+', label: 'Regattas' },
    { number: 'i420', label: 'Worlds Qualified' },
    { number: '4', label: 'Boat Classes' },
    { number: "'28", label: 'Grad Year' },
  ]
  return (
    <div className="stats-bar reveal">
      {stats.map((s, i) => (
        <div className="stats-bar__item" key={i}>
          <div className="stats-bar__number">{s.number}</div>
          <div className="stats-bar__label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__photo-wrap reveal">
          <img src="/photos/photo2.jpg" alt="Ozzie Young racing" className="about__photo" />
          <div className="about__photo-accent" />
        </div>
        <div className="about__text">
          <div className="section-label reveal">About</div>
          <h2 className="section-title reveal">Built on<br />Water</h2>
          <p className="reveal">
            Ozzie Young is a <strong>high-performance junior sailor</strong> competing at the national
            and international level. Starting in Optimist dinghies and racing internationally in
            Palamos and Belgium, he has steadily built one of the most diverse competitive records
            in his class.
          </p>
          <p className="reveal">
            In 2026, Ozzie earned a <strong>2nd place at the Flying Scot Junior North Americans</strong>,
            placed <strong>4th at the Sears Cup Area F Qualifier</strong>, and most recently{' '}
            <strong>qualified for the i420 World Championship</strong> — a milestone that reflects
            years of disciplined training and consistent performance under pressure.
          </p>
          <p className="reveal">
            Based between Texas and the East Coast sailing circuit, Ozzie trains year-round and
            competes from Miami to Nova Scotia. He is actively seeking collegiate sailing
            opportunities for the class of 2028.
          </p>
          <div className="boats reveal">
            {['C420', 'i420', 'Flying Scot', 'Sunfish', 'Optimist'].map(b => (
              <span key={b} className="boat-chip">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Lightbox({ photos, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', fn)
      document.body.style.overflow = ''
    }
  }, [photos.length, onClose])

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose}>✕</button>
      <button className="lightbox__prev" onClick={e => { e.stopPropagation(); setIndex(i => (i - 1 + photos.length) % photos.length) }}>‹</button>
      <div className="lightbox__img-wrap" onClick={e => e.stopPropagation()}>
        <img src={photos[index].src} alt={photos[index].alt} className="lightbox__img" />
        <div className="lightbox__counter">{index + 1} / {photos.length}</div>
      </div>
      <button className="lightbox__next" onClick={e => { e.stopPropagation(); setIndex(i => (i + 1) % photos.length) }}>›</button>
    </div>
  )
}

function GalleryGrid({ photos, allPhotos, className = '' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const pool = allPhotos || photos

  return (
    <>
      <div className={`gallery-grid ${className}`}>
        {photos.map((p, i) => (
          <div
            key={i}
            className={`gallery-item gallery-item--${i + 1} reveal`}
            style={{ transitionDelay: `${(i % 3) * 0.1}s`, cursor: 'pointer' }}
            onClick={() => setLightboxIndex(pool.indexOf(p))}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
            <div className="gallery-item__overlay">
              <span className="gallery-item__zoom">⤢</span>
            </div>
          </div>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox photos={pool} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  )
}

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-label reveal" style={{ color: 'rgba(255,255,255,0.5)' }}>Gallery</div>
      <h2 className="section-title reveal" style={{ color: '#fff' }}>On the Water</h2>
      <GalleryGrid photos={PHOTOS.slice(0, 9)} allPhotos={PHOTOS} />
    </section>
  )
}

function ResultItem({ result }) {
  const Tag = result.url ? 'a' : 'div'
  const props = result.url
    ? { href: result.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <Tag className={`result-item ${result.url ? 'result-item--link' : ''}`} {...props}>
      <div className={`result-place result-place--${result.placeClass}`}>{result.place}</div>
      <div className="result-info">
        <div className="result-name">{result.name}</div>
        <div className="result-class">{result.cls}</div>
      </div>
      {result.url && <div className="result-arrow">→</div>}
    </Tag>
  )
}

function Results() {
  return (
    <section className="results-section" id="results">
      <div className="results-inner">
        <div className="section-label reveal">Race Log</div>
        <h2 className="section-title reveal">Results</h2>
        {Object.entries(RESULTS)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, items]) => (
            <div key={year} className="year-block">
              <div className="year-ghost reveal">{year}</div>
              <ul className="results-list reveal">
                {items.map((r, i) => (
                  <li key={i}><ResultItem result={r} /></li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  )
}

function VideoShowcase() {
  return (
    <section className="video-showcase">
      <div className="video-showcase__inner">
        <div className="video-showcase__text reveal">
          <div className="section-label">In Action</div>
          <h2 className="section-title" style={{ color: '#fff' }}>Watch<br />Ozzie Sail</h2>
          <p className="video-showcase__desc">
            Racing at the highest junior level demands boat speed, tactical awareness,
            and composure under pressure. Watch Ozzie compete.
          </p>
        </div>
        <div className="video-showcase__video reveal">
          <video
            controls
            playsInline
            poster="/photos/poster-video.jpg"
            className="video-showcase__player"
          >
            <source src="/videos/highlight.mov" type="video/mp4" />
            <source src="/videos/highlight.mov" type="video/quicktime" />
          </video>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-text" aria-hidden="true">OZZIE</div>
      <div className="section-label reveal" style={{ justifyContent: 'center' }}>Get in Touch</div>
      <h2 className="section-title reveal" style={{ color: '#fff', textAlign: 'center' }}>
        Recruiting &<br />Inquiries
      </h2>
      <p className="contact-subtitle reveal">
        Ozzie is actively seeking collegiate sailing opportunities.
        Coaches and programs are welcome to reach out directly.
      </p>
      <div className="contact-links reveal">
        <a href="mailto:OsbornYoung@icloud.com" className="contact-btn contact-btn--primary">
          Email Ozzie
        </a>
        <a href="tel:4695945949" className="contact-btn contact-btn--outline">
          Call · (469) 594-5949
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">Ozzie Young</div>
      <p className="footer__copy">Class of 2028 · Competitive Junior Sailor</p>
      <p className="footer__copy">OsbornYoung@icloud.com</p>
    </footer>
  )
}

export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <About />
      <Gallery />
      <Results />
      <VideoShowcase />
      <section className="gallery-section" style={{ paddingTop: 0 }}>
        <GalleryGrid photos={PHOTOS.slice(9, 12)} allPhotos={PHOTOS} />
      </section>
      <Contact />
      <Footer />
    </>
  )
}
