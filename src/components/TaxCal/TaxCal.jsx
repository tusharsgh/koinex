import React,{useState} from 'react'
import  './TaxCal.css';
import Input from '../Input/Input';
import { faSolid, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { taxbracket } from '../../taxbracket';
import Dropdown from '../Dropdown/Dropdown';
function TaxCal() {

  return (
    <div className="container">

       <div className="heading">Free Crypto Tax Calculator</div>
    
        <div className="subContainer2">
          
        <Dropdown
        names={["Tushar","singh"]}
        placeholder={"Tushar"}
        />
 <Dropdown
        names={["Tushar","singh"]}
        placeholder={"Tushar"}
        />

        
        </div>  
       <div className="line"></div>  
       <div className="subContainer">
        <div className="subContainer1">
        <Input name="Enter the purchase price of crypto"/>
        <Input name="Enter sale price of crypto"/>
        </div>
        <div className="subContainer1">
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
        <div className="subContainer1">
        <Input name="Capital gains amount"/>
        <Input name="Discount for long terms gains"/>
        </div>
        <div className="subContainer1">
        <div className="ansamount">
          <div className="net">
            Net Capital gain tax amount
          </div>
          <div className="amount">
            $2500
          </div>
        </div>
        <div className="ansamount2">
          <div className="net">
            Net Capital gain tax amount
          </div>
          <div className="amount2">
            $2500
          </div>
        </div>
        </div>
        

</div>      
   </div>     
    
  )
}

export default TaxCal
