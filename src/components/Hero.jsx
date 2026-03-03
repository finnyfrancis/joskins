import { useState, useEffect } from 'react';

const slides = [
  { src: '/hero-slide-1.png', alt: 'Joskins Spice Packets — Cassia Cinnamon, Fennel Saunf, Jeera Cumin, Javtri Mace, Nutmeg' },
  { src: '/hero-slide-2.png', alt: 'Joskins Spice Packets — Premium Black Pepper, Star Anise, Methi Fenugreek, Ajwain, Green Cardamom' },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const scroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length);
        setFading(false);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__inner">
        <div className="hero__text">
          <span className="hero__badge">Joskins Foods and Spices</span>
          <h1 className="hero__title">
            Premium <span className="hero__accent">Whole Spices</span><br />
            Straight from India's Heartland
          </h1>
          <p className="hero__sub">
            We bring the world's finest whole spices — handpicked, sun-dried,
            and graded to perfection — under the trusted <strong>Joskins</strong> brand.
            From farm to your doorstep, purity guaranteed.
          </p>
          <div className="hero__actions">
            <a href="#products" className="btn btn--primary" onClick={(e) => scroll(e, 'products')}>
              Explore Our Spices
            </a>
            <a href="#contact" className="btn btn--outline-dark" onClick={(e) => scroll(e, 'contact')}>
              Request a Sample
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat"><strong>50+</strong><span>Spice Varieties</span></div>
            <div className="hero__stat"><strong>100%</strong><span>Authentic</span></div>
            <div className="hero__stat"><strong>100%</strong><span>Natural & Pure</span></div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__carousel">
            <img
              key={current}
              src={slides[current].src}
              alt={slides[current].alt}
              className={`hero__img hero__img--slide ${fading ? 'hero__img--fade-out' : 'hero__img--fade-in'}`}
            />
            <div className="hero__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                  onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
