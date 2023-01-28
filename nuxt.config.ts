// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    }
  }
})
