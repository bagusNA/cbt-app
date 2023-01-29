// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    jwtKey: 'mykey',
    jwtExpiresIn: 7200
  },
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
