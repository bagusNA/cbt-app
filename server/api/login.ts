import { usePrisma } from "~~/composables/usePrisma"

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()

  // await prisma.user.create({
  //   data: {
  //     name: 'Budi',
  //     password: 'supersecret',
  //     role: "Admin",
  //     username: 'budigeming'
  //   }
  // })

  const user = await prisma.user.findMany({})

  return {
    user: user,
    message: 'Hello'
  }
})