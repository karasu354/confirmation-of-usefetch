export async function useAPI() {
  const { data, error, pending } = await useFetch(
    'http://localhost:3000/api',
    {
      server: false,
      lazy: true
    }
  )
  pending.value = false
  return { data, error, pending }
}