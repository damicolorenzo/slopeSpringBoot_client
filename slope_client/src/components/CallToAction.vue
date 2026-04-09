<script setup>
import ctaVideo from '@/assets/4185213-uhd_4096_2160_24fps.mp4'
</script>

<template>
  <section id="call-to-action" class="call-to-action section">

    <video autoplay muted loop playsinline class="cta-video">
      <source :src="ctaVideo" type="video/mp4">
    </video>

    <div class="cta-overlay"></div>

    <div class="container">
      <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
        <div class="col-xl-8 col-lg-10">
          <div class="text-center cta-content">
            <h3>Ready for your next run?</h3>
            <p>Check slope conditions in real time and buy your ski pass in just a few clicks.
              Skip the queues, save time, and enjoy every moment on the snow!</p>
            <router-link to="/login" class="cta-btn">
              <span>Book your Ski Pass</span>
              <i class="bi bi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<style scoped>
.call-to-action {
  position: relative;
  padding: 140px 0;
  overflow: hidden;
  clip-path: inset(0);
}

/* Video background */
.cta-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
  filter: brightness(0.65) saturate(0.8);
}

/* Gradient overlay matching site palette */
.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
      rgba(26, 58, 92, 0.75) 0%,
      rgba(42, 82, 152, 0.55) 100%);
  z-index: 1;
}

/* Content */
.call-to-action .container {
  position: relative;
  z-index: 2;
}

.cta-content h3 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.cta-content p {
  color: rgba(232, 240, 254, 0.9);
  font-size: 16px;
  line-height: 1.8;
  max-width: 560px;
  margin: 0 auto 36px auto;
}

/* CTA button */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  background: linear-gradient(135deg, #63b3f5, #2a5298);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  border-radius: 30px;
  text-decoration: none;
  border: none;
  box-shadow: 0 6px 24px rgba(42, 82, 152, 0.45);
  transition: all 0.3s ease;
}

.cta-btn i {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.cta-btn:hover {
  background: linear-gradient(135deg, #90caf9, #1a3a5c);
  box-shadow: 0 10px 32px rgba(42, 82, 152, 0.55);
  transform: translateY(-3px);
  color: #ffffff;
}

.cta-btn:hover i {
  transform: translateX(5px);
}

/* Accent line at top matching hero */
.call-to-action::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #63b3f5, transparent);
  z-index: 3;
}

@media (max-width: 768px) {
  .call-to-action {
    padding: 80px 0;
  }

  .cta-content h3 {
    font-size: 1.6rem;
  }

  .cta-content p {
    font-size: 14px;
  }
}
</style>