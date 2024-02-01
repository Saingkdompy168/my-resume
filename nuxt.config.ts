
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
    '@vite-pwa/nuxt',
  ],
  
  
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }
  ],
  colorMode: {
    classSuffix: '',
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },
  css: [
    // 'primevue/resources/themes/bootstrap4-dark-blue/theme.css',
    // 'primevue/resources/primevue.css',
    // 'primeicons/primeicons.css',
    '/assets/css/style.css',
  ],
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
      description: "My personal information",
      start_url: '/',
      icons: [
        {
          src: "images/icon48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "images/icon72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "images/icon96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "images/icon144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "images/icon192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "images/icon512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
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
      title: 'Kdompy Saing',
      meta: [
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
            'https://res.cloudinary.com/dpa1liyaa/image/upload/v1706770015/Photo%20Resume/New_Project_1_nqtshp.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'You could find me on my wesite resume',
        },
      ],
    }
  },

})
