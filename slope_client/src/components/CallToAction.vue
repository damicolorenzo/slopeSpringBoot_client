<template>
    <section id="call-to-action" class="call-to-action section">

        <video autoplay muted loop playsinline class="background-video">
            <source src="https://localhost/Slope/libs/Smarty/images/4185213-uhd_4096_2160_24fps.mp4" type="video/mp4">
            Il tuo browser non supporta i video HTML5.
        </video>

        <div class="container">
            <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                <div class="col-xl-10">
                    <div class="text-center">
                        <h3>Pronto per la prossima discesa?</h3>
                        <p>Consulta in tempo reale le condizioni delle piste e acquista il tuo skipass in pochi clic.
                            Evita le code, risparmia tempo e goditi ogni momento sulla neve!</p>
                        <router-link to="/login" class="stretched-link">
                            <span>Prenota il tuo Skipass</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<style scoped>
.call-to-action {
  --background-color: #000000;
  --default-color: #ffffff;
  --contrast-color: #ffffff;
  padding: 120px 0;
  position: relative;
  clip-path: inset(0);
}

.call-to-action .background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
  filter: brightness(0.8); /* Puoi regolare per migliorare il contrasto del testo */
}

.call-to-action:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 50%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.call-to-action .container {
  position: relative;
  z-index: 3;
}

.call-to-action h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--default-color);
}

.call-to-action p {
  color: var(--default-color);
}

.call-to-action .cta-btn {
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 40px;
  border-radius: 5px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid var(--contrast-color);
  color: var(--contrast-color);
}

.call-to-action .cta-btn:hover {
  background: var(--accent-color);
  border: 2px solid var(--accent-color);
}
</style>