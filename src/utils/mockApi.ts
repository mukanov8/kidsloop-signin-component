export const userLogin = async (email: string, password: string) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === 'password') {
        resolve()
      } else {
        reject()
      }
    }, 3000)
  })
}
