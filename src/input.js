const inputs = [
    {
      id : 1,
      name : "username",
      type : "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any speacial character!",
      label: "Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id : 2,
      name : "email",
      type : "email",
      placeholder: "Email",
      errorMessage:"İt should be a valid email address!",
      label: "Email",
      required:true,
    },
    {
      id : 3,
      name : "birthday",
      type : "date",
      placeholder: "Birthday",
      errorMessage:"",
      label: "Birthday"
    },
    {
      id : 4,
      name : "password",
      type : "text",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 speacial character!",
      label: "Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{8,20}$`,
      required:true,
    },
    {
      id : 5,
      name : "confirmPassword",
      type : "password",
      placeholder: "Confirm Password",
      errorMessage:"Passwords don't match!",
      label: "Confirm Password",
      required:true,
    }
  ]
  export default inputs;