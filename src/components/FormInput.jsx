import React, { useState } from 'react'
import "./formInput.css"

const FormInput = ( props ) => {
    const {label,errorMessage,onChange , password, id, ...inputProps} = props;
    const [focus,setfocus] = useState("")
    const handleFocus = () => {
      setfocus(true)
    }
    return (
    <div className='formInput'>
        <label >{label}</label>
        <input 
        {...inputProps.name === "confirmPassword" ? {...inputProps, pattern:password} : inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus={() => inputProps.name === "confirmPassword" && setfocus(true)}
        focus={focus.toString()} 
        />
        <span className='errorMessage'>{errorMessage}</span>
    </div>
  )
}

export default FormInput