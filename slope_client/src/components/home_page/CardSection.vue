<script setup>
import { ref, onMounted } from 'vue'
import notFoundImg from '@/assets/NotFound.jpg'

const skiFacilities = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:9194/api/v1/skifacilities/all');
    const data = await response.json();
    if (data.message === 'Success') {
      skiFacilities.value = data.data;
    }
  } catch (err) {
    console.error('Error fetching ski facilities:', err);
  }
});

const onImgError = (e) => {
  e.target.src = notFoundImg;
}
</script>

<template>
    <section id="cards" class="cards section">

        <div class="container section-title">
            <h2>Whero to Ski</h2>
            <p>Choose your slope among Abruzzo's ski resorts</p>
        </div>

        <div class="container">
            <div class="cards">
                <div class="row no-gutters">

                    <div v-for="facility in skiFacilities" :key="facility.id"
                        class="col-lg-4 col-md-6 card img-overlay-box">

                        <div class="ski-card">
                          <img
                            :src="facility.images?.length ? `http://localhost:9194${facility.images[0].downloadUrl}` : notFoundImg"
                            :alt="facility.name"
              class="ski-card__img"
              @error="onImgError" />
                        </div>
                                                
                        <div class="ski-card__dark-overlay"></div>
                        <div class="ski-card__content">
                            <h4 class="ski-card__title">{{ facility.name }}</h4>
                            <router-link to="/login" class="ski-card__btn">
                                <span>Discover more</span>
                                <i class="bi bi-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.cards-section {
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

/* Card */
.ski-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 300px;
  box-shadow: 0 8px 32px rgba(26, 58, 92, 0.2);
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.ski-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(26, 58, 92, 0.32);
}

/* Image */
.ski-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  transition: transform 0.6s ease;
}

.ski-card:hover .ski-card__img {
  transform: scale(1.06);
}

/* Dark gradient overlay */
.ski-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 58, 92, 0.85) 0%,
    rgba(26, 58, 92, 0.3) 50%,
    transparent 100%
  );
  z-index: 1;
  transition: background 0.35s ease;
}

.ski-card:hover .ski-card__overlay {
  background: linear-gradient(
    to top,
    rgba(26, 58, 92, 0.92) 0%,
    rgba(26, 58, 92, 0.5) 60%,
    transparent 100%
  );
}

/* Content */
.ski-card__content {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 24px;
}

.ski-card__title {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

/* Button */
.ski-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(99, 179, 245, 0.15);
  border: 1.5px solid #63b3f5;
  color: #63b3f5;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  text-decoration: none;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(6px);
}

.ski-card:hover .ski-card__btn {
  opacity: 1;
  transform: translateY(0);
}

.ski-card__btn i {
  transition: transform 0.3s ease;
}

.ski-card__btn:hover {
  background: #63b3f5;
  color: #1a3a5c;
}

.ski-card__btn:hover i {
  transform: translateX(4px);
}
</style>