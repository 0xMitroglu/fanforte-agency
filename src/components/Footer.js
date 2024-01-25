import Image from "next/image";
import React, { useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <section className="footer__section_1">
        <div className="footer__div part_1">
          <h3>Get In Touch With Us</h3>
          <a href="https://www.instagram.com/fanforte_agency/">
            <Image
              src="/images/instagram.png"
              alt="Instagram Logo"
              width={512}
              height={512}
              className="footer__div__instagramLogoImg"
            />
          </a>
          <a href="/contact-form">
            <Image
              src="/images/contact-form_icon.png"
              alt="form image"
              width={512}
              height={512}
              className="footer__div__instagramLogoImg"
            />
          </a>
          <a href="mailto:agency.fanforte@gmail.com">
            <Image
              src="/images/mail_icon.png"
              alt="mail contact icon"
              width={512}
              height={512}
              className="footer__div__instagramLogoImg"
            />
          </a>
          <br />
          <Image
            src="/images/logo-FanForte_for_insta.png"
            alt="Instagram Logo"
            width={1402}
            height={1139}
            className="footer__div__footerLogo"
          />
        </div>
        <div className="footer__div part_2">
          <h3>Who are We?</h3>
          <br />
          <p>
            We are the #1 Onlyfans Agency in Luxembourg, operating worldwide.
            Find out more <a>about us</a>
          </p>
        </div>
        <div className="footer__div part_3">
          <h3>What Are We Working For?</h3>
          <br />
          <p>
            We are dedicated to working tirelessly to ensure your success,
            helping you maximize your earnings and reach your full potential.
          </p>
        </div>
      </section>
      <section className="footer__section_2">
        &copy; Copyright {year} | &nbsp;
        <a href="/privacy-policy"> Privacy Policy </a>&nbsp; | All Rights
        Reserved
      </section>
    </footer>
  );
}
