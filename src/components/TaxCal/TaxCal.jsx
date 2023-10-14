import React,{useState} from 'react'
import  './TaxCal.css';
import Input from '../Input/Input';
import { faSolid, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function TaxCal() {
  const [isshortTerm,setisshortTerm]=useState("false");
  const[islongterm,setislongterm]=useState("false");
  return (
    <div className="container">
       <div className="heading">Free Crypto Tax Calculator</div>  
       <div className="line"></div>  
       <div className="subContainer">
        <div className="subContainer1">
        <Input name="Enter the purchase price of crypto"/>
        <Input name="Enter sale price of crypto"/>
        </div>
        <div className="subContainer2">
        <Input name="Enter your expense"/>
        <div className="intype">
          <div className="header">Investment Type</div>
          <div className="alignbtn">
          <button className="btn"> Short Term </button>
          <button className="btn"> Long Term</button>
          </div>
        </div>
        </div>
        <div className="subContainer1">
        <Input name="Select Your Annual Income"/>
        
        </div>

       

      


</div>
        
      
       
   </div>     
    
  )
}

export default TaxCal
