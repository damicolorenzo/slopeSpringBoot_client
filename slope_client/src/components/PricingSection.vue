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
    }
  } catch (err) {
    console.error("Error fetching ski facilities:", err);
  }
});
</script>

<template>
  <section id="pricing" class="pricing section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">

      <div class="choseSkiFacility-section">
        <form action="/Slope/User/home" method="POST" class="choseSkiFacility-form">
          <h2>Seleziona l'impianto e analizza i prezzi</h2>
          <div class="form-row">
            <div class="form-group">
              <label for="skiFacilities">Scegli un impianto:</label>
              <select name="skiFacilities" id="skiFacility" multiple size="5">
                <option v-for="facility in skiFacilities" :key="facility.id" :value="facility.id">
                  {{ facility.name }} - {{ facility.liftStructures[0]?.name || "No lift" }}
                </option>
              </select>
            </div>
            <input type="submit" value="Visualizza selezione">
          </div>
        </form>
      </div>

    </div><!-- End Section Title -->

    <div class="container">

      <div class="row g-4 g-lg-0">
        <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
          <div class="pricing-item">
            <h3>Giornaliero</h3>
            <h4><sup>€</sup>20<span></span></h4>
            <ul>
              <li><i class="bi bi-check"></i> <span>Il costo per l’utilizzo del servizio o prodotto è
                  calcolato su base giornaliera.</span></li>
              <li><i class="bi bi-check"></i> <span>Ideale per chi ha bisogno di flessibilità e vuole
                  pagare solo per i giorni effettivi di utilizzo.</span></li>
            </ul>
            <div class="text-center"><a href="/Slope/User/login" class="buy-btn">Acquista ora</a></div>
          </div>
        </div><!-- End Pricing Item -->

        <div class="col-lg-4 featured" data-aos="zoom-in" data-aos-delay="200">
          <div class="pricing-item">
            <h3>Settimanale</h3>
            <h4><sup>€</sup>100<span></span></h4>
            <ul>
              <li><i class="bi bi-check"></i> <span>Tariffa conveniente per chi utilizza il servizio o
                  prodotto per un’intera settimana.</span></li>
              <li><i class="bi bi-check"></i> <span>Perfetto per chi ha bisogno di un periodo medio di
                  utilizzo, con un risparmio rispetto al prezzo giornaliero.</span></li>
            </ul>
            <div class="text-center"><a href="/Slope/User/login" class="buy-btn">Acquista ora</a></div>
          </div>
        </div><!-- End Pricing Item -->

        <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
          <div class="pricing-item">
            <h3>Mensile</h3>
            <h4><sup>€</sup>300<span></span></h4>
            <ul>
              <li><i class="bi bi-check"></i> <span>Offerta vantaggiosa per chi prevede un utilizzo
                  continuativo e prolungato.</span></li>
              <li><i class="bi bi-check"></i> <span>Il prezzo mensile garantisce il massimo risparmio
                  rispetto alle tariffe giornaliere o settimanali.</span></li>
            </ul>
            <div class="text-center"><a href="/Slope/User/login" class="buy-btn">Acquista ora</a></div>
          </div>
        </div><!-- End Pricing Item -->
      </div>

    </div>

  </section>
</template>

<style scoped>
.pricing .pricing-item {
  padding: 60px 40px;
  box-shadow: 0 3px 20px -2px color-mix(in srgb, var(--default-color), transparent 90%);
  height: 100%;
  position: relative;
}

.pricing h3 {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 20px;
}

.pricing h4 {
  font-size: 48px;
  color: var(--accent-color);
  font-family: var(--heading-font);
  font-weight: 400;
}

.pricing h4 sup {
  font-size: 28px;
}

.pricing h4 span {
  color: color-mix(in srgb, var(--default-color), transparent 60%);
  font-size: 18px;
}

.pricing ul {
  padding: 20px 0;
  list-style: none;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  text-align: left;
  line-height: 20px;
}

.pricing ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.pricing ul i {
  color: #059652;
  font-size: 24px;
  padding-right: 3px;
}

.pricing ul .na {
  color: color-mix(in srgb, var(--default-color), transparent 60%);
}

.pricing ul .na i {
  color: color-mix(in srgb, var(--default-color), transparent 60%);
}

.pricing ul .na span {
  text-decoration: line-through;
}

.pricing .buy-btn {
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  background-color: var(--background-color);
  display: inline-block;
  padding: 8px 35px 10px 35px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 60%);
  transition: none;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--heading-font);
  transition: 0.3s;
}

.pricing .buy-btn:hover {
  background: var(--accent-color);
  border-color: var(--accent-color);
  color: var(--contrast-color);
}

.pricing .featured {
  z-index: 10;
}

.pricing .featured .pricing-item {
  background: var(--accent-color);
}

@media (min-width: 992px) {
  .pricing .featured .pricing-item {
    transform: scale(1.02, 1.1);
  }
}

.pricing .featured h3,
.pricing .featured h4,
.pricing .featured h4 span,
.pricing .featured ul,
.pricing .featured ul .na,
.pricing .featured ul i,
.pricing .featured ul .na i {
  color: var(--contrast-color);
}

.pricing .featured .buy-btn {
  background: var(--accent-color);
  color: var(--contrast-color);
  border-color: var(--contrast-color);
}

.pricing .featured .buy-btn:hover {
  background: color-mix(in srgb, var(--background-color), transparent 92%);
}

#pricing .container.section-title .choseSkiFacility-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* aggiunta per dare respiro su dispositivi piccoli */
  font-family: 'Segoe UI', sans-serif;
}

#pricing .container.section-title .choseSkiFacility-form {
  background: #ffffff;
  padding: 30px 20px;
  border-radius: 16px;
  text-align: center;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* migliora la visibilità */
}

#pricing .container.section-title .choseSkiFacility-form h2 {
  margin-bottom: 20px;
  color: rgb(0, 0, 0);
  font-size: 22px;
}

#pricing .container.section-title .choseSkiFacility-form .form-row {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#pricing .container.section-title .choseSkiFacility-form .form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

#pricing .container.section-title .choseSkiFacility-form .form-group #skiFacility {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

#pricing .container.section-title .choseSkiFacility-form input[type="submit"] {
  padding: 12px;
  font-size: 16px;
  background-color: #FF7F50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#pricing .container.section-title .choseSkiFacility-form input[type="submit"]:hover {
  background-color: #FF7F50;
}



@media (max-width: 600px) {
  #pricing .container.section-title .choseSkiFacility-form {
    padding: 20px 15px;
  }

  #pricing .container.section-title .choseSkiFacility-form h2 {
    font-size: 20px;
  }

  #pricing .container.section-title .choseSkiFacility-form .form-group #skiFacility {
    font-size: 14px;
  }

  #pricing .container.section-title .choseSkiFacility-form input[type="submit"] {
    font-size: 14px;
    padding: 10px;
  }

}
</style>