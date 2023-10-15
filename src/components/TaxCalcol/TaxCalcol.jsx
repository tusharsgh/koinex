import React,{useState} from 'react'
import  './TaxCalcol.css';
import Input from '../Input/Input';
import { faSolid, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { taxbracket ,Country,Financialyear} from '../../taxbracket';
import Dropdown from '../Dropdown/Dropdown';
import AnnualIncome from "../AnualIncome/AnnualIncome";

function TaxCalcol() {
  const [age, setAge] = React.useState('');
  const [text,setText] = useState("$5,092 + 32,5% of excess over $45,000");
  const [Capital,setCapital] = useState("$5,000")
  const handleChange = (event) => {
    setAge(event.target.value);
  }
  const [isShort,setIsShort] = useState(false);
  function textselector(tax){
      setText(tax);
      console.log(tax);
  }

  function shortTermHandler(){
    console.log("Called short");
    setIsShort(true);
  }
  

  function longTermHandler(){
    console.log("Called long");
    setIsShort(false);
  }



  return (
    <div className="col-wrapper">

       <div className="col-header">Free Crypto Tax Calculator</div>
       <div className={` ${isShort?"line":"line2"}`}></div>       
    <div className="col-mainContainer">



        <div className="col-subContainer1">
        
         <Dropdown
       names={Financialyear}
       header={"Financial Year"}
        />
        <Input name="Enter the purchase price of crypto"/>
        <Input name="Enter your expense"/>
       

      <AnnualIncome
      taxhandler={textselector}
     
      />
 {isShort?
 null:
  <div className="output-wrapper">
<div className="output-header">Capital gains amount</div>
<div className="out-field">{Capital}</div>
</div>}

      <div className="ansamount">
          <div className="net">
            Net Capital gain tax amount
          </div>
          <div className="amount">
            $2500
          </div>
        </div>
      
        </div>
        <div className="col-subContainer2">
        <Dropdown
        names={Country}
        header={"Country"}
        /> 
        <Input name="Enter the purchase price of crypto"/>

        <div className="intype">
          <div className="header">Investment Type</div>
          <div className="alignbtn">
            <div className="btn-align">
          <button className={`btn ${isShort?"selectedButton":""}`} onClick={shortTermHandler}> Short Term 
          </button>
          <div> {">12 Months"}</div>
          </div>
          <div className="btn-align">
          <button className={`btn ${isShort?"":"selectedButton"}`} onClick={longTermHandler}> Long Term</button>
          <div style={{
            color: 'var(--gray-2, #3E424A)',
            fontsize: '10px',
          }}> {"<12 Months" }</div>
          </div>
          </div>
        </div>
       <div className='Tax-wrapper'>
        <div className="Tax-header">
        Tax Rate
        </div>
      <div className="Tax-text">
        {text}
      </div>
         
       </div>
       {isShort?
 null:
  <div className="output-wrapper">
<div className="output-header">Capital gains amount</div>
<div className="out-field">{Capital}</div>
</div>}

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

export default TaxCalcol
