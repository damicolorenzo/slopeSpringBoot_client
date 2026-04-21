<template>
  <footer id="footer" class="footer">

    <div class="container footer-top">
      <div class="row gy-4">

        <div class="col-lg-5 col-md-6">
          <div class="footer-about">
            <a href="/" class="footer-logo">Slope</a>
            <p>Your mountain companion — monitor slopes, plan your day, and make the most of every run.</p>
            <div class="footer-contact">
              <p><i class="bi bi-geo-alt-fill"></i> Via dalla strada, 1 — L'Aquila AQ 67100</p>
              <p><i class="bi bi-telephone-fill"></i> +39 123 456 7890</p>
              <p><i class="bi bi-envelope-fill"></i>
                <a href="mailto:slope.website.mail@gmail.com">slope.website.mail@gmail.com</a>
              </p>
            </div>
            <div class="social-links">
              <a href="https://x.com/" target="_blank"><i class="bi bi-twitter-x"></i></a>
              <a href="https://facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a>
              <a href="https://instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
              <a href="https://linkedin.com/" target="_blank"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6">
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#cards">Where to Ski</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-3 col-6">
          <div class="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Resort Monitoring</a></li>
              <li><a href="#services">Trail Maps</a></li>
              <li><a href="#pricing">Ski Pass</a></li>
              <li><a href="#pricing">Price List</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div class="container copyright">
      <p>© 2025 <strong>Slope</strong>. All Rights Reserved.</p>
    </div>

  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0f2238 0%, #1a3a5c 100%);
  color: #c8d8ec;
  font-size: 14px;
  position: relative;
}

/* Accent top border */
.footer::before {
  content: "";
  display: block;
  height: 3px;
  background: linear-gradient(90deg, transparent, #63b3f5, transparent);
}

.footer-top {
  padding: 60px 0 40px;
}

/* Brand column */
.footer-about {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-logo:hover {
  color: #63b3f5;
}

.footer-about > p {
  color: #8aa8c8;
  line-height: 1.7;
  max-width: 340px;
  margin: 0;
}

/* Contact info */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-contact p {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #a0bcd8;
  font-size: 13px;
}

.footer-contact i {
  color: #63b3f5;
  font-size: 14px;
  flex-shrink: 0;
}

.footer-contact a {
  color: #a0bcd8;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-contact a:hover {
  color: #63b3f5;
}

/* Social links */
.social-links {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid rgba(99, 179, 245, 0.3);
  color: #8aa8c8;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #63b3f5;
  border-color: #63b3f5;
  color: #1a3a5c;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(99, 179, 245, 0.3);
}

/* Footer links */
.footer-links h4 {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 12px;
}

.footer-links h4::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 32px;
  height: 2px;
  background: #63b3f5;
  border-radius: 2px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links ul a {
  color: #8aa8c8;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.footer-links ul a::before {
  content: "›";
  color: #63b3f5;
  font-size: 16px;
  line-height: 1;
  transition: transform 0.2s ease;
}

.footer-links ul a:hover {
  color: #63b3f5;
}

.footer-links ul a:hover::before {
  transform: translateX(3px);
}

/* Copyright */
.copyright {
  padding: 20px 0;
  border-top: 1px solid rgba(99, 179, 245, 0.12);
  text-align: center;
}

.copyright p {
  margin: 0;
  color: #6a8aaa;
  font-size: 13px;
}

.copyright strong {
  color: #ffffff;
}

@media (max-width: 768px) {
  .footer-top {
    padding: 40px 0 24px;
  }

  .footer-about > p {
    max-width: 100%;
  }
}
</style>