import React,{useCallback,useState} from 'react'
import './Input.css';
import CurrencyInput from 'react-currency-input-field';
function Input({name}) {



  return (
    <div className="Container">
      <div className="NameField">{name}</div>
     <CurrencyInput
  
  name="input-name"
  className="InputField"
  defaultValue={1000}
  decimalsLimit={2}
  onValueChange={(value, name) => console.log(value, name)}
  prefix="$"
/> 

    </div>
  )
}

export default Input
