export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
    '@vite-pwa/nuxt',
  ],

  i18n: {
    vueI18n: './i18n.config.ts',
  },

  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],

  colorMode: {
    classSuffix: '',
  },

  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },

  css: ['/assets/css/style.css'],

  build: {
    transpile: ['primevue', 'pinia-orm'],
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
  },

  vue: {
    config: {
      productionTip: true,
      warn: false,
    },
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('ion-'),
    },
  },

  loading: {
    color: 'blue',
    height: '5px',
  },

  pwa: {
    manifest: {
      name: "Kdompy Saing",
      short_name: "Kdompy",
      description: "My personal information, resume, portfolio and projects.",
      start_url: '/',
      background_color: "#ffffff",
      theme_color: "#2563eb", // Tailwind blue-600
      display: "standalone",
      icons: [
        { src: "images/icon48x48.png", sizes: "48x48", type: "image/png" },
        { src: "images/icon72x72.png", sizes: "72x72", type: "image/png" },
        { src: "images/icon96x96.png", sizes: "96x96", type: "image/png" },
        { src: "images/icon144x144.png", sizes: "144x144", type: "image/png" },
        { src: "images/icon192x192.png", sizes: "192x192", type: "image/png" },
        { src: "images/icon512x512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  head() {
    return {
      title: 'Kdompy Saing - Personal Resume & Portfolio',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://www.kdompysaing.com/' }, // 👈 update to your domain
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Personal resume and portfolio of Kdompy Saing. Explore projects, skills, and contact information.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Kdompy Saing, resume, portfolio, projects, software engineer, mobile developer, web developer',
        },
        { name: 'author', content: 'Kdompy Saing' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#2563eb' },

        // Open Graph (Facebook, LinkedIn, etc.)
        { hid: 'og:title', property: 'og:title', content: 'Kdompy Saing - Resume & Portfolio' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.kdompysaing.com/' },
        { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dpa1liyaa/image/upload/v1706770015/Photo%20Resume/New_Project_1_nqtshp.png' },
        { hid: 'og:description', property: 'og:description', content: 'You can find my professional resume, portfolio, and projects here.' },

        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Kdompy Saing - Resume & Portfolio' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Discover Kdompy Saing’s resume, projects, and career journey.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://res.cloudinary.com/dpa1liyaa/image/upload/v1706770015/Photo%20Resume/New_Project_1_nqtshp.png' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kdompy Saing",
            "url": "https://www.kdompysaing.com/",
            "image": "https://res.cloudinary.com/dpa1liyaa/image/upload/v1706770015/Photo%20Resume/New_Project_1_nqtshp.png",
            "jobTitle": "Software Engineer",
            "sameAs": [
              "https://www.linkedin.com/in/kdompy-saing-637580140/",
              "https://github.com/Saingkdompy168",
              "https://x.com/saingkdompy"
            ]
          }),
        },
      ],
    }
  },

  compatibilityDate: '2024-12-07',
})
