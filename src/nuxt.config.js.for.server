require('dotenv').config({path: './app/.env'})

export default {
  ssr:'true',

  head: {
    title: 'GA4_Test_Site_for_Ecommerce',
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

  server:{
    port: 3000,
    host: '0.0.0.0'
  },

  // Loading Bar(default)
  loading: { color: 'blue', height: '3px' },

  // vueアプリケーション置き場
  srcDir: 'app/',

  // サーバアプリケーション置き場
  serverMiddleware: [
    '~/../server',
  ],

  gtm: {
    enabled: true,
    id: process.env.GTM_TRACKING_ID,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/gtm',
    '@nuxtjs/date-fns',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  axios: {
    proxy: true,
  },
  proxy: {
    //'/api/': process.env.BASE_URL_LOCAL
  },

  plugins: [
    '~/plugins/components',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
