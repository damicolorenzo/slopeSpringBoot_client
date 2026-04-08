<script setup>
import { ref, onMounted } from 'vue'
import notFoundImg from '@/assets/NotFound.jpg'

const image = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:9194/api/v1/images/image/download/2')
  const data = await res.json()

  image.value = data
})
</script>

<template>
  <section id="team" class="team section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span>Team</span>
      <h2>Team</h2>
      <p>Trasformiamo idee in codice e codice in esperienze digitali.</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row">

        <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
          <div class="member">
            <img v-if="image1 && image1.length"
              :src="`data:${image1[0].getType()};base64,${image1[0].getEncodedData()}`" class="img-fluid" />
            <img v-else :src="notFoundImg" class="img-fluid" />

            <div class="member-content">
              <h4>Andrea Esposito</h4>
              <span>Istruttore di sci</span>
              <p>
                Che tu sia alla tua prima discesa o voglia perfezionare la tecnica, ti accompagnerò con passione e
                divertimento.
              </p>
              <div class="social">
                <a href="https://x.com/"><i class="bi bi-twitter-x"></i></a>
                <a href="https://facebook.com/"><i class="bi bi-facebook"></i></a>
                <a href="https://instagram.com/"><i class="bi bi-instagram"></i></a>
                <a href="https://linkedin.com/"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div><!-- End Team Member -->

        <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
          <div class="member">
            <img v-if="image2 && image2.length"
              :src="`data:${image2[0].getType()};base64,${image2[0].getEncodedData()}`" class="img-fluid" />
            <img v-else :src="notFoundImg" class="img-fluid" />
            <div class="member-content">
              <h4>Giordana Di Fabio</h4>
              <span>Istruttrice di snowboard</span>
              <p>
                Vivi lo snowboard al massimo! Con passione, energia e tanta esperienza, ti aiuto a trovare il tuo stile
                sulla tavola
              </p>
              <div class="social">
                <a href="https://x.com/"><i class="bi bi-twitter-x"></i></a>
                <a href="https://facebook.com/"><i class="bi bi-facebook"></i></a>
                <a href="https://instagram.com/"><i class="bi bi-instagram"></i></a>
                <a href="https://linkedin.com/"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div><!-- End Team Member -->

        <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
          <div class="member">

            <img v-if="image3 && image3.length"
              :src="`data:${image3[0].getType()};base64,${image3[0].getEncodedData()}`" class="img-fluid" />
            <img v-else :src="notFoundImg" class="img-fluid" />
            <div class="member-content">
              <h4>Lorenzo D'Amico</h4>
              <span>Istruttore di sci alpinistico</span>
              <p>
                Appassionato di neve e silenzi d’alta quota, ti accompagno alla scoperta dello sci alpinismo con
                attenzione, pazienza e grande amore per la montagna
              </p>
              <div class="social">
                <a href="https://x.com/"><i class="bi bi-twitter-x"></i></a>
                <a href="https://facebook.com/"><i class="bi bi-facebook"></i></a>
                <a href="https://instagram.com/"><i class="bi bi-instagram"></i></a>
                <a href="https://linkedin.com/"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div><!-- End Team Member -->

      </div>

    </div>

  </section>
</template>
<style scoped>
.team .member {
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
  text-align: center;
  margin-bottom: 20px;
}

.team .member img {
  border-radius: 50%;
  max-width: 60%;
  margin: 30px 0;
}

.team .member .member-content {
  padding: 0 20px 30px 20px;
}

.team .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
}

.team .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
  color: color-mix(in srgb, var(--default-color), transparent 20%);
}

.team .member p {
  padding-top: 10px;
  font-size: 14px;
  font-style: italic;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
}

.team .member .social {
  margin-top: 15px;
}

.team .member .social a {
  color: color-mix(in srgb, var(--default-color), transparent 60%);
  transition: 0.3s;
}

.team .member .social a:hover {
  color: var(--accent-color);
}

.team .member .social i {
  font-size: 18px;
  margin: 0 2px;
}
</style>