<script setup>
</script>

<template>
  <footer id="footer" class="footer position-relative">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-6 col-md-6">
          <div class="footer-about">
            <a href="/" class="logo sitename">Slope</a>
            <div class="footer-contact pt-3">
              <p>Via dalla strada, 1</p>
              <p>L'Aquila AQ 67100</p>
              <p class="mt-3"><strong>Telefono:</strong> <span>+39 123 456 7890</span></p>
              <p><strong>Email:</strong> <span>slope.website.mail@gmail.com</span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href="https://x.com/"><i class="bi bi-twitter-x"></i></a>
              <a href="https://facebook.com/"><i class="bi bi-facebook"></i></a>
              <a href="https://instagram.com/"><i class="bi bi-instagram"></i></a>
              <a href="https://linkedin.com/"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 footer-links">
          <h4>Link utili</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Servizi</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-3 footer-links">
          <h4>I nostri servizi</h4>
          <ul>
            <li><a href="#services">Monitoraggio</a></li>
            <li><a href="#services">Mappe</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Slope</strong> <span>All Rights Reserved</span></p>
    </div>

  </footer>
</template>

<style scoped>
.footer {
  --background-color: #0c0c0c;
  --default-color: #ffffff;
  --heading-color: #f9f9f9;
  color: var(--default-color);
  background-color: var(--background-color);
  font-size: 14px;
  padding-bottom: 50px;
  position: relative;
}

.footer .footer-top {
  padding-top: 50px;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.footer .footer-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: color-mix(in srgb, var(--default-color), transparent 95%);
  border-top: 4px solid var(--accent-color);
  padding: 30px 20px;
}

.footer .footer-about .logo {
  margin-bottom: 5px;
  letter-spacing: 1px;
  font-family: var(--heading-font);
  color: var(--heading-color);
  font-size: 36px;
  padding: 0;
  font-weight: 700;
}

.footer .footer-about p {
  font-size: 14px;
  text-align: center;
  font-family: var(--heading-font);
}

.footer .social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 16px;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  margin-right: 10px;
  transition: 0.3s;
}

.footer .social-links a:hover {
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.footer h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

.footer .footer-links {
  margin-bottom: 30px;
}

.footer .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-links ul i {
  padding-right: 2px;
  font-size: 12px;
  line-height: 0;
}

.footer .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-links ul a {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  display: inline-block;
  line-height: 1;
}

.footer .footer-links ul a:hover {
  color: var(--accent-color);
}

.footer .footer-contact p {
  margin-bottom: 5px;
}

.footer .footer-newsletter .newsletter-form {
  margin-top: 30px;
  padding: 6px 8px;
  position: relative;
  border-radius: 0;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
  display: flex;
  background-color: var(--background-color);
  transition: 0.3s;
}

.footer .footer-newsletter .newsletter-form:focus-within {
  border-color: var(--accent-color);
}

.footer .footer-newsletter .newsletter-form input[type=email] {
  border: 0;
  padding: 4px;
  width: 100%;
  background-color: var(--background-color);
  color: var(--default-color);
}

.footer .footer-newsletter .newsletter-form input[type=email]:focus-visible {
  outline: none;
}

.footer .footer-newsletter .newsletter-form input[type=submit] {
  border: 0;
  font-size: 16px;
  padding: 0 20px;
  margin: -8px -9px -8px 0;
  background: var(--accent-color);
  color: var(--contrast-color);
  transition: 0.3s;
  border-radius: 0;
}

.footer .footer-newsletter .newsletter-form input[type=submit]:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

.footer .footer-newsletter .error-message {
  display: none;
  background: #df1529;
  color: #ffffff;
  text-align: left;
  padding: 15px;
  margin-top: 10px;
  font-weight: 600;
  border-radius: 4px;
}

.footer .footer-newsletter .sent-message {
  display: none;
  color: #ffffff;
  background: #059652;
  text-align: center;
  padding: 15px;
  margin-top: 10px;
  font-weight: 600;
  border-radius: 4px;
}

.footer .footer-newsletter .loading {
  display: none;
  background: var(--background-color);
  text-align: center;
  padding: 15px;
  margin-top: 10px;
}

.footer .footer-newsletter .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid var(--accent-color);
  border-top-color: var(--background-color);
  animation: subscription-loading 1s linear infinite;
}

@keyframes subscription-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.footer .copyright {
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.footer .copyright p {
  margin-bottom: 0;
}
</style>