// import {  SignupFormSchema } from "../lib/definatations";

export  function signup(formData: FormData) {
    console.log(formData,'data');
  

  // Handle successful signup (e.g., database write or API call)
  return {
    success: true,
    message: "Signup successful!",
  };
    
}