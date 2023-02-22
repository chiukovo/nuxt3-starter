export default defineNuxtConfig({
    modules: [
      '@nuxt/content',
      '@pinia/nuxt'
    ],
    // auto import components
    components: true,
    // css
    css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],
    // app config
    app: {
      // global transition
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    nitro: {
        devProxy: {
            "/api": {
                target: process.env.API_URL + 'api',
                changeOrigin: true,
                rewrite: (path) => path.replace('/^/api/', '/api'),
            }
        }
    },
    content: {
      // https://content.nuxtjs.org/api/configuration
    }
})