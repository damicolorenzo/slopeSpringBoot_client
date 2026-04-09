<script setup>
</script>

<template>
    <section id="services" class="services section">

        <div class="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Our platform lets you monitor multiple ski resorts so you can plan the perfect mountain day</p>
        </div>

        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="service-item  position-relative">
                        <div class="icon">
                            <i class="bi bi-snow"></i>
                        </div>
                        <h3>Resort Monitoring</h3>
                        <p>Check today's conditions across all our ski resorts in real time.</p>
                        <router-link to="/login" class="stretched-link" />
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i class="bi bi-cash-stack"></i>
                        </div>
                        <h3>Price List</h3>
                        <p>Browse current prices, deals, and available packages.</p>
                        <a href="#pricing" class="stretched-link"/>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i class="bi bi-cart"></i>
                        </div>
                        <h3>Trail Maps</h3>
                        <p>Explore interactive maps of all ski resort slopes and lifts.</p>
                        <a
                        href="https://www.opensnowmap.org/#map=12/14.017/41.819&b=snowmap&m=false&h=false"
                        target="_blank"
                        class="stretched-link"
                        />
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<style scoped>
.services {
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
  max-width: 600px;
  margin: 0 auto;
}

/* Service card */
.service-item {
  text-align: center;
  padding: 48px 28px;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(42, 82, 152, 0.12);
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(26, 58, 92, 0.07);
  transition: all 0.3s ease;
}

.service-item:hover {
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  border-color: transparent;
  box-shadow: 0 12px 40px rgba(26, 58, 92, 0.28);
  transform: translateY(-6px);
}

/* Icon */
.service-item .icon {
  margin: 0 auto 24px auto;
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(26, 58, 92, 0.25);
  transform-style: preserve-3d;
  position: relative;
}

.service-item .icon::before {
  content: "";
  position: absolute;
  left: -6px;
  top: -6px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: rgba(99, 179, 245, 0.2);
  transform: translateZ(-1px);
  transition: all 0.3s ease;
}

.service-item .icon i {
  color: #ffffff;
  font-size: 28px;
  transition: all 0.3s ease;
}

.service-item:hover .icon {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.service-item:hover .icon::before {
  background: rgba(255, 255, 255, 0.08);
}

.service-item:hover .icon i {
  color: #63b3f5;
}

/* Text */
.service-item h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a3a5c;
  margin: 0 0 12px 0;
  transition: color 0.3s ease;
  text-decoration: none;
}

.service-item p {
  font-size: 14px;
  line-height: 1.7;
  color: #5a7a9a;
  margin: 0;
  transition: color 0.3s ease;
}

.service-item:hover h3,
.service-item:hover p {
  color: #ffffff;
}

/* Fix stretched-link inside router-link */
.stretched-link {
  text-decoration: none;
}
</style>