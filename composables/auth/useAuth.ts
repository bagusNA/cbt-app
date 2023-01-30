import { useAuthUser } from "./useAuthUser"

export interface RegisterForm {
  name: string
  username: string
  password: string,
  confirmPassword: string
}

export const useAuth = () => {
  const authUser = useAuthUser()

  const login = async (username: string, password: string) => {
    const { data } = await useFetch('/api/login', {
      method: 'POST',
      body: {
        username,
        password
      }
    })

    authUser.value = data.value?.user

    return authUser
  }

  const register = async (form: RegisterForm) => {
    const { data } = await useFetch('/api/register', {
      method: 'POST',
      body: { ...form }
    })

    authUser.value = data.value?.user

    return authUser
  }

  return {
    user: authUser,
    login,
    register,
  }
}