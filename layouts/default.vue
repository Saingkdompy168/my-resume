<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

useHead({
  htmlAttrs: {
    lang: locale,
  },
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Kdompy Saing ` : 'Kdompy Saing'
  },
  meta: [
      { charset: 'utf-8' },
      // { name: 'description', content: 'Personal site about Kdompy Saing' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'og:image', content: '../images/icon512x512.png' },
      {
          hid: 'og:title',
          name: 'og:title',
          content: 'My personal information',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://res.cloudinary.com/dpa1liyaa/image/upload/v1706747782/Photo%20Resume/photograph_jki91p.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'You could find me on my wesite resume',
        },
        
    ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '../images/icon.png',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      crossorigin: '',
    },
  ],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
    },
  ],
})
</script>

<template>
  <main class="relative">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
    <CookieBar />
  </main>
</template>
