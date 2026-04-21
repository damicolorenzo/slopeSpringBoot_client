<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/home_page/Header.vue'
import HeaderLoggedIn from'@/components/logged_home/HeaderLoggedIn.vue'
import Footer from '@/components/home_page/Footer.vue'

const route = useRoute();

const showLayout = computed(() =>
  !['login', 'registration'].includes(route.name)
);

const loggedInRoutes = ['loggedHome', 'bookings', 'profile'];

const isLoggedIn = computed(() => loggedInRoutes.includes(route.name));
</script>

<template>
  <HeaderLoggedIn v-if="showLayout && isLoggedIn" />
  <Header v-else-if="showLayout"/>
  <main>
    <router-view />
  </main>
  <Footer v-if="showLayout" />
</template>

<style>
/* Move scoped to global since these are base styles */
:root {
  --default-font: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  --heading-font: "Raleway", sans-serif;
  --nav-font: "Poppins", sans-serif;

  --background-color: #ffffff;
  --default-color: #444444;
  --heading-color: #191919;
  --accent-color: #FF7F50;
  --contrast-color: #ffffff;

  --nav-color: #ffffff;
  --nav-hover-color: #FF7F50;
  --nav-dropdown-background-color: #ffffff;
  --nav-dropdown-color: #212529;
  --nav-dropdown-hover-color: #FF7F50;

  scroll-behavior: smooth;
}

body {
  color: var(--default-color);
  background-color: var(--background-color);
  font-family: var(--default-font);
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: color-mix(in srgb, var(--accent-color), transparent 25%);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
}

main {
  padding-top: 20px;
}
</style>