import { usePrisma } from "~~/composables/usePrisma"

interface RequestBody {
  name: string
  username: string
  password: string,
  confirmPassword: string
}

export default defineEventHandler(async (event) => {
  const { 
    name,
    username,
    password,
    confirmPassword
  } = await readBody<RequestBody>(event)

  if (!name || !username || !password || !confirmPassword)
    return createError({
      statusCode: 400,
      message: 'Please fill all field!'
    })

  if (password !== confirmPassword)
    return createError({
      statusCode: 401,
      message: 'Password does not match!'
    })

  const prisma = usePrisma()
  const existingUser = await prisma.user.findFirst({
    where: { username }
  })

  if (existingUser)
    return createError({
      statusCode: 401,
      message: 'Username is already taken!'
    })

  const user = await prisma.user.create({
    data: {
      name,
      username,
      password: await hash(password),
      role: "Student",
    }
  })

  return {
    status: 'OK',
    message: 'Registered succesfully!',
    data: {
      user
    }
  }
})