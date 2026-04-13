<script setup>
import notFoundImg from '@/assets/NotFound.jpg'
import img1 from '@/assets/foto2.jpg'

</script>

<template>
  <section id="about" class="about section">

    <div class="container section-title">
      <h2>About Us<br></h2>
      <p>Discover all the useful information for your day on the snow</p>
    </div>

    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-6 order-1 order-lg-2">
          <div class="about-img-wrapper">
            <img :src="img1" alt="About" class="about-img" />
          </div>
        </div>

        <div class="col-lg-6 order-2 order-lg-1 content">
          <h3>What we offer</h3>
          <p class="fst-italic">
            Check slope conditions and monitor openings in real time.
          </p>
          <ul>
            <li><i class="bi bi-snow"></i> <span>Need a ski pass or equipment?</span></li>
            <li><i class="bi bi-snow"></i> <span>Want to get insured before hitting the slopes?</span></li>
            <li><i class="bi bi-snow"></i> <span>Want to stay up to date with offers and promotions?</span></li>
          </ul>
          <p class="fst-italic">
            You'll find everything you need right here.
          </p>
          <router-link to="/login" class="read-more">
            <span>Discover more</span>
            <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.about {
  --accent-color: #63b3f5;
  --contrast-color: #ffffff;
  --heading-font: 'Segoe UI', sans-serif;
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
  color: var(--accent-color);
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

/* Image */
.about-img-wrapper {
  width: 100%;
  height: 100%;
  min-height: 360px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(26, 58, 92, 0.18);
  border: 1px solid rgba(42, 82, 152, 0.12);
}

.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.about-img:hover {
  transform: scale(1.03);
}

.about-img--fallback {
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
  opacity: 0.35;
  filter: invert(1);
  margin: auto;
}

/* Content */
.about .content h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a3a5c;
  margin-bottom: 16px;
}

.about .content p {
  color: #4a6a8a;
  line-height: 1.7;
}

.about .content ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.about .content ul li {
  padding: 10px 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #2a4a6a;
  border-bottom: 1px solid rgba(42, 82, 152, 0.08);
}

.about .content ul li:last-child {
  border-bottom: none;
}

.about .content ul i {
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-top: 2px;
  flex-shrink: 0;
}
</style>