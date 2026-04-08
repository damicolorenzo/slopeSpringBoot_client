<script setup>
import { ref, onMounted } from 'vue'
import notFoundImg from '@/assets/NotFound.jpg'


const skiFacilities = ref([]);
const selectedFacility = ref("");

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:9194/api/v1/skifacilities/all");
    const data = await response.json();

    if (data.message === "Success") {
      skiFacilities.value = data.data;
      console.log(skiFacilities.value);
    }
  } catch (err) {
    console.error("Error fetching ski facilities:", err);
  }
});
</script>

<template>
    <section id="cards" class="cards section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <span>Dove Sciare</span>
            <h2>Dove Sciare</h2>
            <p>Scegli dove sciare tra i siti sciistici d'Abruzzo</p>
        </div><!-- End Section Title -->

        <div class="container">
            <div class="cards">
                <div class="row no-gutters">

                    <div v-for="facility in skiFacilities" :key="facility.id"
                        class="col-lg-4 col-md-6 card img-overlay-box" data-aos="fade-up" data-aos-delay="100">

                        <img v-if="facility.images.length"
                            :src="`http://localhost:9194${facility.images[0].downloadUrl}`"
                            class="bg-img" />

                        <img v-else :src="notFoundImg" alt="Hero"
                            class="hero-img w-100 h-100 object-fit-cover" />

                        <div class="dark-overlay"></div>
                        <div class="content">
                            <h4>{{ facility.name }}</h4>
                            <router-link to="/login" class="read-more">
                                <span>Scopri di più </span>
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
.cards .card { 
  background-color: var(--background-color);
  color: var(--default-color);
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
  padding: 40px;
  margin: -1px;
  border-radius: 0;
}

.cards .card span {
  display: block;
  font-size: 24px;
  font-weight: 400;
  color: var(--accent-color);
}

.cards .card h4 {
  color: color-mix(in srgb, var(--heading-color), transparent 20%);
  font-size: 24px;
  font-weight: 600;
  padding: 0;
  margin: 20px 0;
}

.cards .card p {
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  font-size: 15px;
  margin: 0;
  padding: 0;
}

#cards .cards .card {
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  height: 300px; 
  text-align: center;
}

#cards .cards .card span {
  margin-bottom: 10px;
}

#cards .cards .card h4 {
  color: #f0f0f0;
  margin: 20px 0 10px 0; /* Spaziatura sopra e sotto */
}


#cards .container .cards .row.no-gutters .img-overlay-box {
  position: relative;
  border-radius: 8px;
  min-height: 300px;
  overflow: hidden;
}

/* Immagine di sfondo */
#cards .container .cards .row.no-gutters .img-overlay-box .bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* simula background-size: cover */
  object-position: center; /* simula background-position: center */
  z-index: 0;
}

/* Overlay scuro sopra immagine */
#cards .container .cards .row.no-gutters .img-overlay-box .dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* Contenuto sopra l’overlay */
#cards .container .cards .row.no-gutters .img-overlay-box .content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* per centrare verticalmente */
  padding: 1rem;
}
</style>