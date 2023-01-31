export default defineEventHandler((event) => {
  const token = getCookie(event, 'token')

  if (!token)
    return createError({
      statusCode: 401,
      message: 'Invalid token!'
    })

  deleteCookie(event, 'token')

  return {
    status: 'OK',
    message: 'Logout successful!',
  }
})