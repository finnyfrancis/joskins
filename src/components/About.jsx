function About() {
  const values = [
    { icon: '🌱', title: 'Farm Direct', text: 'Sourced straight from trusted farming communities across India\'s richest spice-growing regions.' },
    { icon: '🔬', title: 'Lab Tested', text: 'Every batch is tested for purity, moisture, oil content, and microbiological safety.' },
    { icon: '🌍', title: 'Export Ready', text: 'Serving international markets with proper documentation, certifications, and compliant packaging.' },
    { icon: '🤝', title: 'Farmer First', text: 'Fair pricing, sustainable practices, and long-term partnerships with 500+ farming families.' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <span className="label">About Joskins</span>
            <h2 className="heading">
              Born from the Soil,<br />
              Built on <span className="accent">Trust</span>
            </h2>
            <p>
              Joskins Agro Production is a proudly Indian spice company
              dedicated to delivering the world's finest whole spices under the
              <strong> Joskins</strong> brand. We bridge the gap between
              India's farming heartland and global kitchens.
            </p>
            <p>
              From the pepper vines of Kerala to the chilli fields of Guntur,
              we work directly with farmers to ensure every seed, bark, and
              pod meets the highest international standards.
            </p>
            <div className="about__director">
              <div className="about__director-info">
                <span className="about__director-label">Director</span>
                <strong>Mr. Kelvin Job</strong>
              </div>
            </div>
            <div className="about__url">
              <span className="about__url-line" />
              <a href="https://joskins.com" target="_blank" rel="noopener noreferrer">joskins.com</a>
            </div>
          </div>
          <div className="about__right">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-card__icon">{v.icon}</span>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
