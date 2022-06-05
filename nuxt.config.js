export default {
  loading: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: 'mezinamiridici-ssr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/custom.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/loglevel.client.js',
    '~/plugins/i18n.js',
    '~/plugins/vee-validate.js',
    '~/plugins/api.js',
  ],

  router: {
    prefetchLinks: false
  },

  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  axios: {
    baseURL: process.env.VUE_APP_API_ENDPOINT || "https://www.mezinamiridici.cz/api/v1",
  },


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
   // '@nuxtjs/eslint-module',
   "@nuxtjs/svg",
   '@nuxtjs/moment',
    '@nuxt/postcss8',    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth',
    '@nuxt/image',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n',
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    'vue-social-sharing/nuxt'

  ],


  server: {
    port: 2712
  },

  env: {
    NODE_ENV: process.env.NODE_ENV
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en', file: 'en.json' },
      { code: 'cs', iso: 'cs', file: 'cs.json' },
    ],
    defaultLocale: 'en',
    fallbackLocale: 'en',
    langDir: '~/locales/',
    strategy: 'no_prefix',
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  }
}
