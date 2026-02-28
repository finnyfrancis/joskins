function Hero() {
  const scroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__inner">
        <div className="hero__text">
          <span className="hero__badge">Joskins Agro Production — The Spice Maestro</span>
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
            <div className="hero__stat"><strong>20+</strong><span>Countries Served</span></div>
            <div className="hero__stat"><strong>100%</strong><span>Natural & Pure</span></div>
          </div>
        </div>
        <div className="hero__visual">
          <img src="/joskins-packets.png" alt="Joskins Premium Whole Spices — Cardamom, Cloves, Star Anise packets" className="hero__img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
