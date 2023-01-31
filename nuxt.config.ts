// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    jwtKey: 'mykey',
    jwtExpiresIn: 7200,
    tokenCookieName: '__session'
  },
  app: {
    pageTransition: {
      name: 'page-slide', 
      mode: 'out-in' 
    }
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
