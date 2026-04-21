<script setup>
import AboutSection from '@/components/home_page/AboutSection.vue';
import CallToAction from '@/components/home_page/CallToAction.vue';
import CardSection from '@/components/home_page/CardSection.vue';
import ContactSection from '@/components/home_page/ContactSection.vue';
import HeroSection from '@/components/home_page/HeroSection.vue';
import PricingSection from '@/components/home_page/PricingSection.vue';
import ServicesSection from '@/components/home_page/ServicesSection.vue';
import TeamSection from '@/components/home_page/TeamSection.vue';

</script>

<template>
  <main class="main">
    <HeroSection />
    <AboutSection />
    <CardSection />
    <ServicesSection />
    <CallToAction />
    <PricingSection />
    <TeamSection />
    <ContactSection />
  </main>
</template>