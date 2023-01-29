import jwt from 'jsonwebtoken'
import { usePrisma } from "~~/composables/usePrisma"
import { verify } from "../utils/password"

interface RequestBody {
  username: string
  password: string
}

export default defineEventHandler(async (event) => {
  const {
    username,
    password,
  } = await readBody<RequestBody>(event)

  if (!username || !password) {
    return createError({
      statusCode: 400,
      message: 'Email address and password are required!'
    })
  }

  const prisma = usePrisma()
  const user = await prisma.user.findFirst({
    where: {
      username,
    }
  })

  if (!user) {
    return createError({
      statusCode: 401,
      message: 'Username not found!'
    })
  }

  const verified = await verify(password, user.password)

  if (!verified) {
    return createError({
      statusCode: 401,
      message: 'Invalid credentials!'
    })
  }

  const config = useRuntimeConfig()
  const token = jwt.sign({ id: user.id, username: user.username }, config.jwtKey, {
    expiresIn: config.jwtExpiresIn,
  })

  setCookie(event, 'token', token, {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  })

  return {
    user: user,
    message: 'Hello'
  }
})