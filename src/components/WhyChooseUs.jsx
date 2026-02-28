const features = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
    title: 'Certified Quality',
    text: 'FSSAI, ISO 22000, and HACCP certified — meeting the strictest international food safety standards.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: 'Global Export',
    text: 'Delivering to 20+ countries with reliable logistics, export documentation, and on-time shipments.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: 'Zero Additives',
    text: '100% natural — no artificial colors, preservatives, or chemical processing. Just pure spices.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-1"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    title: 'Bulk & Custom Packing',
    text: 'From 25 kg bags to full container loads — custom packaging with Joskins branding or private label.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/><circle cx="12" cy="12" r="4"/></svg>,
    title: 'Sun-Dried Process',
    text: 'Traditional sun-drying preserves essential oils, natural color, and the authentic flavor of every spice.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Farmer Network',
    text: 'Direct partnerships with 500+ farming families, ensuring traceability and fair compensation.',
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-center">
          <span className="label">Why Joskins</span>
          <h2 className="heading">The Joskins <span className="accent">Advantage</span></h2>
          <p className="sub">What makes Joskins the preferred spice partner for businesses worldwide.</p>
        </div>
        <div className="why-us__grid">
          {features.map((f, i) => (
            <div key={i} className="feat">
              <div className="feat__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
        <div className="why-us__cta">
          <div>
            <h3>Ready to partner with Joskins?</h3>
            <p>Whether you need a sample shipment or a full container, we deliver with quality and reliability.</p>
          </div>
          <a href="#contact" className="btn btn--accent">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
