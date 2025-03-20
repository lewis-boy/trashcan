"use server"

export async function submitContactForm(previousState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")
  console.log(email, password, confirmPassword)

  return "Error: you didnt include anime"
}
