import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Brendan Rice</h2>
        <p><a href="mailto:rice.brendan8@gmail.com">rice.brendan8@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Change, Learning, and Innovation professional with over 11 years of consulting experience for clients with Capgemini and Boston Consulting Group. Adept at strategic advisory and applied innovation from design to evaluation of solutions. Passionate about solving complex problems, technology, and enabling change.
          Hi, I&apos;m Michael. I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni,
        and the VP of Engineering at <a href="https://smileidentity.com">Smile Identity</a>. Previously,
        I was the co-founder and CTO of <a href="https://arthena.com">Arthena</a>
        , co-founder of <a href="https://matroid.com">Matroid</a>, and worked at
        {' '}<a href="https://planet.com">Planet</a> and <a href="https://facebook.com">Facebook</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;



