// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image-edge'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  routeRules: {
    '/': { static: true },
    '/proyectos': {static: true },
    '/contacto': { static: true }
  },
  tailwindcss: {
    viewer: false
  },
})
