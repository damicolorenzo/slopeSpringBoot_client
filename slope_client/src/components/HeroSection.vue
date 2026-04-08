<script setup>
import { ref, onMounted } from 'vue'
import notFoundImg from '@/assets/NotFound.jpg'

const image1 = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:9194/api/v1/images/image/download/1')
  const data = await res.json()

  image1.value = data
})


</script>

<template>
    <section id="hero" class="hero section">

        <div class="first-img">
            <img
            v-if="image1 && image1.length"
            :src="`data:${image1[0].getType()};base64,${image1[0].getEncodedData()}`"
            alt="Hero"
            class="hero-img w-100 h-100 object-fit-cover"
            />
            <img 
            v-else 
            :src="notFoundImg" 
            alt="Hero" 
            class="hero-img w-100 h-100 object-fit-cover" />
        </div>

    </section>
</template>

<style scoped>
#hero.first-img {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px; /* spazio tra le immagini */
  padding: 16px;
}

#hero.first-img img {
  max-width: 100%;
  
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: transform 0.3s ease;
}

#hero.first-img img:hover {
  transform: scale(1.03);
}

@media (max-width: 600px) {
    #hero {
        padding: 20px 10px;
        min-height: 30vh;
    } 
}

.hero {
  --background-color: #000000;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 160px 0 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero video {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero:before {
  content: "";
  /* background: color-mix(in srgb, var(--background-color), transparent ); */
  background: color-mix(in srgb, var(--background-color));
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero .container {
  position: relative;
  z-index: 3;
  background: rgb(255 255 255 / 40%);
}

.hero h2 {
  margin: 0;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 700;
}

.hero p {
  margin: 10px 0 0 0;
  font-size: 24px;
  color: var(--heading-color);
}

.hero .btn-get-started {
  color: var(--default-color);
  font-weight: 400;
  font-size: 15px;
  display: inline-block;
  padding: 8px 30px;
  margin: 30px 0 0 0;
  transition: 0.5s;
  text-transform: uppercase;
  border: 2px solid color-mix(in srgb, var(--default-color), transparent 20%);
}

.hero .btn-get-started:hover {
  color: var(--contrast-color);
  background: var(--accent-color);
  border-color: var(--accent-color);
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }
}
</style>