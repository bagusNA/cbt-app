export default defineEventHandler((event) => {
  const cookieName = useRuntimeConfig().tokenCookieName
  const token = getCookie(event, cookieName)

  if (!token)
    return createError({
      statusCode: 401,
      message: 'Invalid token!'
    })

  deleteCookie(event, cookieName)

  return {
    status: 'OK',
    message: 'Logout successful!',
  }
})