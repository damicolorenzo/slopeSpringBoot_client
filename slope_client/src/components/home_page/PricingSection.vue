<script setup>
import { ref, onMounted } from 'vue';

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

    <div class="container selector-wrapper">

      <div class="facility-card">
        <h2>Select a resort and explore prices</h2>

        <div class="form-group">
          <label for="skiFacility">Choose a resort:</label>
          <select v-model="selectedFacility" name="skiFacilities" id="skiFacility">
            <option disabled value="">-- Select a resort --</option>
            <option v-for="facility in skiFacilities" :key="facility.id" :value="facility.id">
              {{ facility.name }} — {{ facility.liftStructures[0]?.name || 'No lift' }}
            </option>
          </select>
        </div>
        <router-link to="/login" class="facility-btn">
          <span>View selection</span>
          <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
    </div>

    <div class="container section-title">
      <h2>Pricing</h2>
      <p>Choose the plan that best fits your skiing days</p>
    </div>

    <div class="container">
      <div class="row g-4 g-lg-0">
        <div class="col-lg-4">
          <div class="pricing-item">
            <h3>Daily</h3>
            <div class="price">
              <sup>€</sup><span class="amount">20</span>
              <small>/ day</small>
            </div>
            <ul>
              <li><i class="bi bi-check-circle-fill"></i>
                <span>Cost calculated on a daily basis.</span></li>
              <li><i class="bi bi-check-circle-fill"></i>
                <span>Ideal for flexible use — pay only for the days you ski.</span></li>
            </ul>
            <div class="text-center">
              <router-link to="/login" class="buy-btn">Buy now</router-link>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 featured">
          <div class="pricing-item">
            <div class="badge">Most Popular</div>
            <h3>Weekly</h3>
            <div class="price">
              <sup>€</sup><span class="amount">100</span>
              <small>/ week</small>
            </div>
            <ul>
              <li><i class="bi bi-check-circle-fill"></i>
                <span>Great value for a full week on the slopes.</span></li>
              <li><i class="bi bi-check-circle-fill"></i>
                <span>Save more compared to the daily rate.</span></li>
            </ul>
            <div class="text-center">
              <router-link to="/login" class="buy-btn">Buy now</router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="pricing-item">
            <h3>Monthly</h3>
            <div class="price">
              <sup>€</sup><span class="amount">300</span>
              <small>/ month</small>
            </div>
            <ul>
              <li><i class="bi bi-check-circle-fill"></i>
                <span>Best option for frequent and extended use.</span></li>
              <li><i class="bi bi-check-circle-fill"></i>
                <span>Maximum savings compared to daily or weekly rates.</span></li>
            </ul>
            <div class="text-center">
              <router-link to="/login" class="buy-btn">Buy now</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.pricing {
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

/* Facility selector */
.selector-wrapper {
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.facility-card {
  background: #ffffff;
  border: 1px solid rgba(42, 82, 152, 0.12);
  border-radius: 16px;
  padding: 36px 40px;
  max-width: 640px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(26, 58, 92, 0.1);
  text-align: center;
}

.facility-card h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a3a5c;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  color: #2a4a6a;
  margin-bottom: 8px;
}

.form-group select {
  width: 100%;
  padding: 10px 14px;
  font-size: 15px;
  border-radius: 8px;
  border: 1.5px solid rgba(42, 82, 152, 0.2);
  color: #1a3a5c;
  background: #f8fbff;
  outline: none;
  transition: border-color 0.2s;
  appearance: auto;
}

.form-group select:focus {
  border-color: #63b3f5;
  box-shadow: 0 0 0 3px rgba(99, 179, 245, 0.15);
}

.facility-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 28px;
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(26, 58, 92, 0.25);
  transition: all 0.3s ease;
}

.facility-btn i {
  transition: transform 0.3s ease;
}

.facility-btn:hover {
  background: linear-gradient(135deg, #2a5298, #63b3f5);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(42, 82, 152, 0.35);
  color: #ffffff;
}

.facility-btn:hover i {
  transform: translateX(4px);
}

/* Pricing cards */
.pricing-item {
  padding: 48px 36px;
  border-radius: 12px;
  border: 1px solid rgba(42, 82, 152, 0.12);
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(26, 58, 92, 0.07);
  height: 100%;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-item:hover {
  box-shadow: 0 12px 40px rgba(26, 58, 92, 0.15);
  transform: translateY(-4px);
}

.pricing-item h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a3a5c;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.pricing-item .price {
  margin-bottom: 24px;
  color: #2a5298;
  line-height: 1;
}

.pricing-item .price sup {
  font-size: 1.4rem;
  font-weight: 700;
  vertical-align: top;
  margin-top: 8px;
  display: inline-block;
}

.pricing-item .price .amount {
  font-size: 3.5rem;
  font-weight: 700;
}

.pricing-item .price small {
  font-size: 0.9rem;
  color: #5a7a9a;
  margin-left: 4px;
}

.pricing-item ul {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  text-align: left;
}

.pricing-item ul li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(42, 82, 152, 0.07);
  color: #4a6a8a;
  font-size: 14px;
  line-height: 1.6;
}

.pricing-item ul li:last-child {
  border-bottom: none;
}

.pricing-item ul i {
  color: #63b3f5;
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Buy button */
.buy-btn {
  display: inline-block;
  padding: 11px 32px;
  border-radius: 25px;
  border: 2px solid #2a5298;
  color: #2a5298;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  background: transparent;
}

.buy-btn:hover {
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(26, 58, 92, 0.3);
  transform: translateY(-2px);
}

/* Featured (middle) card */
.featured .pricing-item {
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  border-color: transparent;
  box-shadow: 0 12px 48px rgba(26, 58, 92, 0.35);
}

@media (min-width: 992px) {
  .featured .pricing-item {
    transform: scale(1.04);
  }

  .featured .pricing-item:hover {
    transform: scale(1.04) translateY(-4px);
  }
}

.badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #63b3f5;
  color: #1a3a5c;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 16px;
  border-radius: 20px;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

.featured .pricing-item h3,
.featured .pricing-item .price,
.featured .pricing-item .price small,
.featured .pricing-item ul li,
.featured .pricing-item ul i {
  color: #ffffff;
}

.featured .pricing-item ul li {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.featured .buy-btn {
  background: rgba(255, 255, 255, 0.15);
  border-color: #ffffff;
  color: #ffffff;
  backdrop-filter: blur(4px);
}

.featured .buy-btn:hover {
  background: #ffffff;
  color: #1a3a5c;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .facility-card {
    padding: 24px 20px;
  }

  .pricing-item {
    padding: 36px 24px;
  }
}
</style>