import React,{useState} from 'react'
import  './TaxCal.css';
import Input from '../Input/Input'
function TaxCal() {
  const [isshortTerm,setisshortTerm]=useState("false");
  const[islongterm,setislongterm]=useState("false");
  return (
    <div className="container">
       <div className="heading">Free Crypto Tax Calculator</div>  
       <div className="line"></div>  
       <div className="subContainer">
        <div className="subcontainer1">
         <Input name="Enter purchase price of Crypto"/>
         <Input name="Enter your Expenses"/>
         <Input name="Select Your Annual Income"/>
         <Input name="Capital gains amount"/>

         </div>
<div className="subcontainer2">
<Input name="Enter sale price of Crypto"/>
<div className="investheading"> Investment type</div>
<div className="button">


  <button>

  </button>

</div>
<Input name="Discount for long term gains"/>
</div>
</div>
        </div>
      
       
        
    
  )
}

export default TaxCal
