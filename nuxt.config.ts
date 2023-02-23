export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover',
        title: process.env.APP_NAME,
        meta: [
          { charset: 'utf-8' },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover' },
          { name: 'description', content: process.env.APP_DESCRIPTION },
          { name: 'keywords', content: process.env.APP_KEYWORDs },
          { property: 'og:site_name', content: process.env.APP_NAME },
          { property: 'og:title', content: process.env.APP_NAME },
          { property: 'og:description', content: process.env.APP_DESCRIPTION },
          { property: 'og:image', content: '/_nuxt/assets/img/favicon.png' }
        ],
        link: [
          { rel: 'shortcut icon', type: 'image/png', href: '/_nuxt/assets/img/favicon.png' },
          { rel: 'icon', type: 'image/png', href: '/_nuxt/assets/img/favicon.png' },
          { rel: 'apple-touch-icon', type: 'image/png', href: '/_nuxt/assets/img/favicon.png' },
        ],
      },
      // global transition
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    modules: [
      '@nuxt/content',
      '@vueuse/nuxt',
      '@pinia/nuxt',
    ],
    // public config
    appConfig: {
      name: 'Nuxt3-starter',
      author: {
        name: 'chiuko',
        link: 'https://github.com/chiukovo',
      },
    },
    // 私有config
    runtimeConfig: {
      apiKey: ''
    },
    // auto import components
    components: true,
    // css
    css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],
    nitro: {
        devProxy: {
            "/api": {
                target: process.env.API_URL + '/api',
                changeOrigin: true,
                rewrite: (path) => path.replace('/^/api/', '/api'),
            }
        }
    },
    content: {
      // https://content.nuxtjs.org/api/configuration
      watch: false
    }
})