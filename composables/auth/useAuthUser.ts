import { User } from "@prisma/client"

export const useAuthUser = () => {
  return useState<Omit<User, "password"> | null | undefined>('user', () => null)
}