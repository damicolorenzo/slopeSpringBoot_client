<template>
  <section id="contact" class="contact section">

    <div class="container section-title" data-aos="fade-up">
      <h2>Contatti</h2>
      <p>Find all our contact details right here</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4 justify-content-center">

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="info-item">
            <div class="info-icon">
              <i class="bi bi-geo-alt"></i>
            </div>
            <h3>Address</h3>
            <p>Via per dove, 10</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="info-item">
            <div class="info-icon">
              <i class="bi bi-telephone"></i>
            </div>
            <h3>Call Us</h3>
            <p>+39 123 456 7890</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="info-item">
            <div class="info-icon">
              <i class="bi bi-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>
              <a href="mailto:slope.website.mail@gmail.com">slope.website.mail@gmail.com</a>
            </p>
          </div>
        </div>

      </div>

      <div class="row mt-4" data-aos="fade-up" data-aos-delay="300">
        <div class="col-12">
          <div class="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23961.936908620435!2d13.399999!3d42.349998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13340f4f5b0b5a89%3A0x7a8a10d94772e0!2sL'Aquila%2C%20Italy!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameborder="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>
<style scoped>
.contact {
  padding: 80px 0;
}

/* Section title */
.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.section-title span {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #63b3f5;
  margin-bottom: 8px;
}

.section-title h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a3a5c;
  margin-bottom: 12px;
}

.section-title p {
  color: #5a7a9a;
  font-size: 15px;
}

/* Info cards */
.info-item {
  background: #ffffff;
  border: 1px solid rgba(42, 82, 152, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(26, 58, 92, 0.08);
  padding: 36px 24px;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(26, 58, 92, 0.15);
}

.info-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px auto;
  box-shadow: 0 4px 16px rgba(26, 58, 92, 0.25);
  transition: transform 0.3s ease;
}

.info-item:hover .info-icon {
  transform: scale(1.1);
}

.info-icon i {
  font-size: 24px;
  color: #ffffff;
}

.info-item h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #1a3a5c;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.info-item p {
  font-size: 14px;
  color: #5a7a9a;
  margin: 0;
  line-height: 1.6;
}

.info-item p a {
  color: #2a5298;
  text-decoration: none;
  transition: color 0.2s;
}

.info-item p a:hover {
  color: #63b3f5;
}

/* Map */
.map-wrapper {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(26, 58, 92, 0.15);
  border: 1px solid rgba(42, 82, 152, 0.1);
  margin-top: 8px;
}

.map-wrapper iframe {
  display: block;
  width: 100%;
  height: 420px;
  border: none;
}

@media (max-width: 768px) {
  .map-wrapper iframe {
    height: 280px;
  }
}
</style>