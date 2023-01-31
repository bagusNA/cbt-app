export default defineNuxtPlugin(async () => {
  const { refreshAuth } = useAuth()

  await refreshAuth()
})