<script setup>
import { ref, onMounted } from 'vue'
import notFoundImg from '@/assets/NotFound.jpg'

const image1 = ref([])

onMounted(async () => {
    const res = await fetch('http://localhost:9194/api/v1/images/image/download/2')
    const data = await res.json()

    image1.value = data
})
</script>

<template>
    <section id="about" class="about section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <span>Conoscici<br></span>
            <h2>Conoscici<br></h2>
            <p>Scopri tutte le informazioni utili per la tua giornata sulla neve</p>
        </div><!-- End Section Title -->

        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
                    <img v-if="image1 && image1.length"
                        :src="`data:${image1[0].getType()};base64,${image1[0].getEncodedData()}`" alt="Hero"
                        class="hero-img w-100 h-100 object-fit-cover" />
                    <img v-else :src="notFoundImg" alt="Hero"
                        class="hero-img w-100 h-100 object-fit-cover" />
                </div>

                <div class="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
                    <h3>Cosa offriamo</h3>
                    <p class="fst-italic">
                        Verifica le condizioni delle piste e monitora le aperture in tempo reale.
                    </p>
                    <ul>
                        <li><i class="bi bi-snow"></i> <span>Hai bisogno dello skipass o dell'attrezzatura?</span></li>
                        <li><i class="bi bi-snow"></i> <span>Vuoi tutelarti ed acquistare un'assicurazione?</span></li>
                        <li><i class="bi bi-snow"></i> <span>Vuoi rimanere al passo con opportunità e promozioni?</span>
                        </li>
                    </ul>
                    <p class="fst-italic">
                        Qui trovi tutto ciò di cui hai bisogno
                    </p>
                    <router-link to="/login" class="read-more">
                        <span>Scopri di più </span>
                        <i class="bi bi-arrow-right"></i>
                    </router-link>
                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>
.about .content h3 {
  font-size: 2rem;
  font-weight: 700;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
}

.about .content ul i {
  font-size: 1.25rem;
  margin-right: 4px;
  color: var(--accent-color);
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .read-more {
  background: var(--accent-color);
  color: var(--contrast-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 12px 30px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.about .content .read-more i {
  font-size: 18px;
  margin-left: 5px;
  line-height: 0;
  transition: 0.3s;
}

.about .content .read-more:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
  padding-right: 25px;
}

.about .content .read-more:hover i {
  margin-left: 10px;
}
</style>