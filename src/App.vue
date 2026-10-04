<script setup lang="ts">
import { useHead } from '@unhead/vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

useHead({
  title: 'Shri Chamunda Solutions Inc. | Expert Carpentry & Handyman Services',
  meta: [
    { name: 'description', content: 'Shri Chamunda Solutions Inc. offers expert carpentry, handyman, and custom woodwork services. Door installation, kitchen cabinets, fence installation, custom furniture & more.' },
    { name: 'keywords', content: 'carpentry, handyman, woodwork, door installation, kitchen cabinets, fence installation, custom furniture, furniture assembly, shelving' },
    { name: 'robots', content: 'index, follow' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Shri Chamunda Solutions Inc. | Expert Carpentry & Handyman Services' },
    { property: 'og:description', content: 'Expert carpentry, handyman, and custom woodwork services. Quality work, reliable, and affordable.' },
    { property: 'og:image', content: 'https://shrichamundasolutions.ca/logo.png' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Shri Chamunda Solutions Inc.' },
    { name: 'twitter:description', content: 'Expert carpentry, handyman, and custom woodwork services.' },
    { name: 'twitter:image', content: 'https://shrichamundasolutions.ca/logo.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://shrichamundasolutions.ca' }
  ]
})
</script>

<template>
  <NavBar />
  <HeroSection />
  <AboutSection />
  <ServicesSection />
  <ContactSection />
  <FooterSection />
</template>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Open Sans', sans-serif; }
</style>
