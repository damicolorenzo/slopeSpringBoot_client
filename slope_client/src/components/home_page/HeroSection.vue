<script setup>
import { ref } from 'vue';
import notFoundImg from '@/assets/NotFound.jpg';
import img1 from '@/assets/foto1.jpg';
</script>

<template>
  <section id="hero" class="hero section">
    <div class="hero-overlay"></div>
    <div class="first-img">
      <img
        :src="img1"
        alt="Hero"
        class="hero-img"
        ref="imgRef"
      />
    </div>
  </section>
</template>

<style scoped>
.hero {
  --background-color: #1a3a5c;
  --default-color: #e8f0fe;
  --heading-color: #ffffff;
  --accent-color: #63b3f5;

  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a3a5c 0%, #2a5298 100%);
}

/* Gradient overlay matching header tone */


.first-img {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.hero-img:hover {
  transform: scale(1.03);
}

/* Subtle bottom border matching header */
.hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #63b3f5, transparent);
  z-index: 3;
}

@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
  }
}

@media (max-width: 600px) {
  .hero {
    min-height: 40vh;
  }
}

.hero-img--fallback {
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  opacity: 0.4; /* blends nicely into the blue background */
  filter: invert(1); /* makes the dark icon white to match the theme */
}
</style>