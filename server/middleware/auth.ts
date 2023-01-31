import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const token = getCookie(event, config.tokenCookieName)
  
  if (token) {
    event.context.user = jwt.verify(token, config.jwtKey)
  }
})