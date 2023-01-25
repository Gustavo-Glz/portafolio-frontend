// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image-edge'],
  routeRules: {
    '/': { static: true },
    '/proyectos': { ssr: false},
    '/contacto': { static: true }
  },
  tailwindcss: {
    viewer: false
  },
  
})
