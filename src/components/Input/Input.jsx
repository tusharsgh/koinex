import React,{useCallback,useState} from 'react'
import './Input.css';
import CurrencyInput from 'react-currency-input-field';
function Input({name ,inputhandler}) {

function handler(value){
  inputhandler(value)

}

  return (
    <div className="Container">
      <div className="NameField">{name}</div>
     <CurrencyInput
  
  name="input-name"
  className="InputField"
  defaultValue={1000}
  decimalsLimit={2}
  onValueChange={(value, name) =>inputhandler(value) }
  prefix="$"
/> 

    </div>
  )
}

export default Input
