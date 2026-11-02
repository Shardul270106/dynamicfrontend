import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Fingerprint, Heart, Menu, Plus, ShieldCheck } from 'lucide-react';

const features = [
  { number: '01', title: 'Multimodal Forensics', text: 'Analyze voice, video, email, and document evidence with verifiable file provenance.' },
  { number: '02', title: 'Indian Speech Intelligence', text: 'Evaluate speech across Indian languages and Hinglish, with attention to regional accents.' },
  { number: '03', title: 'Intent & Coercion', text: 'Identify transaction intent, urgency, and pressure tactics in communication.' },
  { number: '04', title: 'Action-Bound Capsules', text: 'Bind approved actions to a target, strict limits, an expiry, and a one-time nonce.' },
  { number: '05', title: 'Dual-Key Authorization', text: 'Require multi-party approval before sensitive financial or administrative actions.' },
  { number: '06', title: 'Verifiable Evidence', text: 'Preserve a tamper-evident audit trail with signed, verifiable receipts.' },
  { number: '07', title: 'Identity ≠ Authority', text: 'Media authenticity, identity, intent, and action authorization remain separate checks.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const portraitRef = useRef(null);

  useEffect(() => {
    const rows = [...document.querySelectorAll('.feature-row')];
    let frame = 0;
    const updateFill = () => {
      const viewportHeight = window.innerHeight;
      rows.forEach((row) => {
        const bounds = row.getBoundingClientRect();
        const center = bounds.top + bounds.height / 2;
        const fill = Math.max(0, Math.min(1, (viewportHeight * 0.92 - center) / (viewportHeight * 0.62)));
        row.style.setProperty('--scroll-fill', `${Math.round(fill * 100)}%`);
        row.classList.toggle('is-active', center > viewportHeight * 0.2 && center < viewportHeight * 0.82);
      });
      frame = 0;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateFill);
    };
    updateFill();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const stage = portraitRef.current;
    if (!stage) return undefined;

    const scan = { x: 50, y: 42, tx: 50, ty: 42, radius: 0, targetRadius: 0, active: false, last: 0 };
    let frame = 0;
    const draw = (time) => {
      const dt = scan.last ? Math.min(40, time - scan.last) : 16;
      scan.last = time;
      const positionEase = 1 - Math.pow(1 - 0.14, dt / 16.67);
      const radiusEase = 1 - Math.pow(1 - 0.12, dt / 16.67);
      scan.x += (scan.tx - scan.x) * positionEase;
      scan.y += (scan.ty - scan.y) * positionEase;
      scan.radius += (scan.targetRadius - scan.radius) * radiusEase;
      stage.style.setProperty('--scan-x', `${scan.x}%`);
      stage.style.setProperty('--scan-y', `${scan.y}%`);
      stage.style.setProperty('--scan-radius', `${scan.radius}px`);
      stage.classList.toggle('scanning', scan.active || scan.radius > 1);
      if (scan.active || scan.radius > 0.5) frame = requestAnimationFrame(draw);
      else scan.last = 0;
    };
    const start = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };
    const move = (event) => {
      const rect = stage.getBoundingClientRect();
      scan.tx = Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100));
      scan.ty = Math.max(0, Math.min(100, (event.clientY - rect.top) / rect.height * 100));
      scan.targetRadius = Math.min(145, rect.width * 0.26);
      scan.active = true;
      start();
    };
    const leave = () => {
      scan.active = false;
      scan.targetRadius = 0;
      start();
    };
    const keydown = (event) => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'ArrowLeft') scan.tx = Math.max(5, scan.tx - 5);
      if (event.key === 'ArrowRight') scan.tx = Math.min(95, scan.tx + 5);
      if (event.key === 'ArrowUp') scan.ty = Math.max(5, scan.ty - 5);
      if (event.key === 'ArrowDown') scan.ty = Math.min(95, scan.ty + 5);
      if (event.key === 'Enter') scan.targetRadius = scan.targetRadius ? 0 : Math.min(145, stage.clientWidth * 0.26);
      scan.active = false;
      start();
    };

    stage.addEventListener('pointermove', move);
    stage.addEventListener('pointerenter', move);
    stage.addEventListener('pointerleave', leave);
    stage.addEventListener('pointercancel', leave);
    stage.addEventListener('keydown', keydown);
    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener('pointermove', move);
      stage.removeEventListener('pointerenter', move);
      stage.removeEventListener('pointerleave', leave);
      stage.removeEventListener('pointercancel', leave);
      stage.removeEventListener('keydown', keydown);
    };
  }, []);

  return <>
    <main id="top">
    <div className="hero-frame">
    <header className="nav">
      <a className="wordmark" href="#top" aria-label="Senitel Trustlock home"><span className="brand-mark"><Fingerprint size={21} strokeWidth={1.5} /></span>senitel<span className="wordmark-dot">.</span></a>
      <button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Menu size={20} /></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#identity" onClick={() => setMenuOpen(false)}>PLATFORM</a><a href="#identity" onClick={() => setMenuOpen(false)}>CAPABILITIES</a><a href="#approach" onClick={() => setMenuOpen(false)}>AUTHORIZATION</a><a href="#contact" onClick={() => setMenuOpen(false)}>EVIDENCE</a><a href="#identity" onClick={() => setMenuOpen(false)}>DOCS</a>
      </nav>
    </header>
      <section className="hero page-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> COMMUNICATION RISK, UNDER CONTROL</div>
          <h1><span className="hero-headline">Authenticity<br />isn’t <em>authority.</em></span></h1>
          <p className="hero-subtitle">Senitel Trustlock analyzes communication, intent, and context before sensitive actions are authorized.</p>
          <a className="primary-button" href="#identity">Explore Trustlock <ArrowRight size={16} /></a>
        </div>
        <div className="hero-wordmark-bg" aria-hidden="true">SENITEL</div>
        <div ref={portraitRef} className="hero-portrait" role="img" aria-label="Move across the human portrait to reveal its robotic identity." tabIndex="0">
          <img className="portrait-layer portrait-human" src="/assets/face-human.webp" alt="" draggable="false" />
          <img className="portrait-layer portrait-robot" src="/assets/face-robot.webp" alt="" draggable="false" />
          <span className="portrait-scan-glow" aria-hidden="true" />
          <span className="portrait-scan-ring" aria-hidden="true" />
        </div>
        <div className="hero-data"><span>TRUSTLOCK / PRINCIPLE</span><b>01</b><i /><span>MEDIA AUTHENTICITY</span><b>≠</b><i /><span>IDENTITY · INTENT · AUTHORITY</span><b>01</b></div>
        <div className="hero-metrics"><div><strong>22</strong><span>SCHEDULED LANGUAGES</span></div><div><strong>5</strong><span>SECURITY LAYERS</span></div><div><strong>1×</strong><span>SINGLE-USE NONCE</span></div></div>
        <a href="#identity" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
      </section>
    </div>
      <section className="identity-section page-wrap" id="identity">
        <div className="section-kicker"><span>01</span><span className="kicker-line" /> THE SIGNAL BENEATH</div>
        <div className="section-heading-row"><h2 className="stamp-heading">TRUST<br />LOCK</h2><p className="section-intro">Media authenticity is not identity authentication, intent, or action authorization. Trustlock evaluates each signal before an action is allowed.</p></div>
        <div className="feature-list">{features.map((feature) => <article className="feature-row" key={feature.number}><span className="feature-number">{feature.number}</span><div className="feature-content"><h3>{feature.title}</h3><p>{feature.text}</p></div><a href="#contact" className="feature-link" aria-label={`Learn more: ${feature.title}`}><ArrowUpRight size={19} /></a></article>)}</div>
      </section>
      <section className="approach-section" id="approach"><div className="page-wrap approach-inner"><div className="section-kicker"><span>02</span><span className="kicker-line" /> ACTION-BOUND AUTHORIZATION</div><div className="approach-grid"><h2>Authenticity is<br />only the <em>start.</em></h2><div className="approach-copy"><p>Even genuine communication can be compromised or coerced. Trustlock binds sensitive actions to explicit limits, independent approval, and verifiable evidence.</p><a href="#identity" className="text-link">Explore the security layers <ArrowRight size={15} /></a></div></div><div className="approach-meta"><span><ShieldCheck size={15} /> MEDIA ≠ IDENTITY ≠ INTENT ≠ AUTHORIZATION</span><span>DESIGNED FOR HIGH-TRUST ACTIONS</span></div></div></section>
      <section className="contact-section page-wrap" id="contact"><div className="section-kicker"><span>03</span><span className="kicker-line" /> SECURE THE NEXT ACTION</div><div className="contact-row"><h2>Make trust<br /><em>verifiable.</em></h2><div className="contact-cta"><p>Communication risk analysis with action-bound authorization.</p><a className="primary-button" href="#top">Back to the beginning <ArrowRight size={16} /></a></div></div></section>
    </main>
    <footer className="footer page-wrap"><div className="footer-brand"><Plus size={17} /><span>Trust every signal.</span><span className="footer-muted">Senitel Trustlock · Action-Bound Authorization</span></div><div className="footer-coordinate"><span>MEDIA ≠ IDENTITY ≠ INTENT ≠ ACTION</span><span className="footer-heart">BUILT FOR TRUST <Heart size={12} /></span></div><div className="footer-bottom"><a className="wordmark footer-wordmark" href="#top"><span className="brand-mark"><Fingerprint size={18} strokeWidth={1.5} /></span>senitel<span className="wordmark-dot">.</span></a><span>© 2026 SENITEL TRUSTLOCK</span><span>SECURE BY DESIGN</span></div></footer>
  </>;
}

export default App;
