<script setup>
import AboutSection from './components/AboutSection.vue';
import CallToAction from './components/CallToAction.vue';
import CardSection from './components/CardSection.vue';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import Footer from './components/Footer.vue';
import PricingSection from './components/PricingSection.vue';
import TeamSection from './components/TeamSection.vue';
import ContactSection from './components/ContactSection.vue';

</script>

<template>
  <Header></Header>
  <main class="main">
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <CardSection></CardSection>
    <ServicesSection></ServicesSection>
    <CallToAction></CallToAction>
    <PricingSection></PricingSection>
    <TeamSection></TeamSection>
    <ContactSection></ContactSection>
  </main>
  <Footer></Footer>
</template>

<style scoped>
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
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
}

:root {
  --default-font: "Open Sans",  system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Raleway",  sans-serif;
  --nav-font: "Poppins",  sans-serif;
}

/* Global Colors - The following color variables are used throughout the website. Updating them here will change the color scheme of the entire website */
:root { 
  --background-color: #ffffff; /* Background color for the entire website, including individual sections */
  --default-color: #444444; /* Default color used for the majority of the text content across the entire website */
  --heading-color: #191919; /* Color for headings, subheadings and title throughout the website */
  --accent-color: #FF7F50; /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */
  --contrast-color: #ffffff; /* The contrast color is used for elements when the background color is one of the heading, accent, or default colors. Its purpose is to ensure proper contrast and readability when placed over these more dominant colors */
}

/* Nav Menu Colors - The following color variables are used specifically for the navigation menu. They are separate from the global colors to allow for more customization options */
:root {
  --nav-color: #ffffff;  /* The default color of the main navmenu links */
  --nav-hover-color: #FF7F50; /* Applied to main navmenu links when they are hovered over or active */
  --nav-dropdown-background-color: #ffffff; /* Used as the background color for dropdown items that appear when hovering over primary navigation items */
  --nav-dropdown-color: #212529; /* Used for navigation links of the dropdown items in the navigation menu. */
  --nav-dropdown-hover-color: #FF7F50; /* Similar to --nav-hover-color, this color is applied to dropdown navigation links when they are hovered over. */
}

/* Smooth scroll */
:root {
  scroll-behavior: smooth;
}
</style>
