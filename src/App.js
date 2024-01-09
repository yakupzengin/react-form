import React, { useState } from 'react'
import FormInput from './components/FormInput'
import "./App.css"
import inputs from "./input"
const App = () => {

  const[values,setvalues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    username:"",
    confirmPassword:""
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = ((e) => {
    setvalues({ ...values, [e.target.name]: e.target.value})
  })

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <div className="form-title">Register</div>
        <div className="form-container">

        {inputs.map((input) => (
          <FormInput 
          key={input.id} 
          value={values[input.name]} {...input}
          password={values.password}
          onChange={onChange} />
          ))}
          </div>

        <button className='submit-btn'>Submit</button>

      </form>
    </div>
  )
}

export default App