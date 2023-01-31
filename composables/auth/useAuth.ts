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
    const { data } = await useFetch('/api/auth/login', {
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
    const { data } = await useFetch('/api/auth/register', {
      method: 'POST',
      body: { ...form }
    })

    authUser.value = data.value?.user

    return authUser
  }

  const logout = async () => {
    if (!authUser.value)
      return false;
    
    try {
      await useFetch('/api/auth/logout', {
        method: 'POST',
        headers: useRequestHeaders(['cookie']) as HeadersInit
      })

      const config = useRuntimeConfig()
      const cookie = useCookie(config.tokenCookieName)
      cookie.value = null
      authUser.value = null

      navigateTo({ name: 'login' })
    }
    catch (error) {
      console.error(error)
    }
  }

  const refreshAuth = async () => {
    if (!authUser.value) {
      try {
        const { data } = await useFetch('/api/auth/refresh-auth', {
          headers: useRequestHeaders(['cookie']) as HeadersInit,
        })

        authUser.value = data.value?.user
      }
      catch (error) {
        const config = useRuntimeConfig()
        const cookie = useCookie(config.tokenCookieName)
        cookie.value = null
      }
    }

    return authUser
  }

  return {
    user: authUser,
    login,
    logout,
    register,
    refreshAuth
  }
}