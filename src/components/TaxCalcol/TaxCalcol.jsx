import React,{useEffect, useState} from 'react'
import  './TaxCalcol.css';
import Input from '../Input/Input';
import { faSolid, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { taxbracket ,Country,Financialyear} from '../../taxbracket';
import Dropdown from '../Dropdown/Dropdown';
import AnnualIncome from "../AnualIncome/AnnualIncome";
import { Tab } from '@mui/base';

function TaxCalcol() {
  const [age, setAge] = React.useState('');

  const[Income,setIncome] = React.useState();

  const [Tax,setTax] = useState({text:"$5,092 + 32,5% of excess over $45,000",
                                  Id:3,
                                  })
  const [checkId,setCheckId] = useState();
  const [isShort,setIsShort] = useState(false);
  const [CapitalsHandler,setCapitalsHandler] = React.useState(false);
  

const [change,useChange] = useState({
  PurChase:1000,
  Sale:1000,
  Expense:1000,
   CapitalGains:5000,
   LongCapitalDiscount:5000,
   netCapital:2500,
   TaxYouNeedToPay:2500,
   
});
function TaxHandler(){
    console.log(Tax.Id);
  useChange(
    {
      ...change,

   TaxYouNeedToPay:taxbracket[Tax.Id-1].Tax*(change.netCapital)
    }
  )
}
useEffect(()=>{
  TaxHandler()
},[Tax])
  
  function PurchaseHandler(value){
useChange({
  ...change,PurChase:value,
  CapitalGains:change.Sale-value-change.Expense,
  LongCapitalDiscount:0.5*(change.Sale-value-change.Expense),
  netCapital:isShort?(change.Sale-value-change.Expense):(change.Sale-value-change.Expense)-0.5*(change.Sale-value-change.Expense),
  TaxYouNeedToPay:isShort?taxbracket[Tax.Id-1].Tax*(change.Sale-value-change.Expense):taxbracket[Tax.Id-1].Tax*((change.Sale-value-change.Expense)-0.5*(change.Sale-value-change.Expense))
});
  console.log(Tax)
  console.log(change);

  }
  
  function ExpenseHandler(value){
   
    useChange({
      ...change,
      Expense:value,
      CapitalGains:change.Sale-change.PurChase-value,
      LongCapitalDiscount:0.5*(change.Sale-change.PurChase-value),
      netCapital:isShort?(change.Sale-change.PurChase-value):(change.Sale-change.PurChase-value)-0.5*(change.Sale-change.PurChase-value),
      TaxYouNeedToPay:isShort?taxbracket[Tax.Id-1].Tax*(change.Sale-change.PurChase-value):taxbracket[Tax.Id-1].Tax*((change.Sale-change.PurChase-value)-0.5*(change.Sale-change.PurChase-value)),
    });

    
  }
  
  function SaleHandler(value){
    useChange({
      ...change,
      Sale:value,
      CapitalGains:value-change.PurChase-change.Expense,
      LongCapitalDiscount:0.5*(value-change.PurChase-change.Expense),
      netCapital:isShort?(value-change.PurChase-change.Expense):(value-change.PurChase-change.Expense)-0.5*(value-change.PurChase-change.Expense),
      TaxYouNeedToPay:isShort?taxbracket[Tax.Id-1].Tax*(value-change.PurChase-change.Expense):taxbracket[Tax.Id-1].Tax*((value-change.PurChase-change.Expense)-0.5*(value-change.PurChase-change.Expense))
    });  
  }
 
 
  const handleChange = (event) => {
    setAge(event.target.value);
  }
  
  function textselector(text,id){
      setTax({...Tax,text:text,
        id:id,
      
      
      });

      
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

       <div className="col-header">Free Crypto Tax Calculator Australia</div>
       <div className={` ${isShort?"line":"line2"}`}></div>       
    <div className="col-mainContainer">



        <div className="col-subContainer1">
        
         <Dropdown
       names={Financialyear}
       header={"Financial Year"}
        />
        <Input 
        name="Enter the purchase price of crypto"
       inputhandler={PurchaseHandler}
       placeholder={30000}
        />
        <Input name="Enter your expense"
        inputhandler={ExpenseHandler}
        placeholder={5000}
        />
       

      <AnnualIncome
      taxhandler={textselector}
      setTax={setTax}


     
      />
 {isShort?
 null:
  <div className="output-wrapper">
<div className="output-header">Capital gains amount</div>
<div className="out-field" >$ {change.CapitalGains}</div>
</div>}

      <div className="ansamount">
          <div className="net">
            Net Capital gain tax amount
          </div>
          <div className="amount">
          $ {change.netCapital}
          </div>
        </div>
      
        </div>
        <div className="col-subContainer2">
        <Dropdown
        names={Country}
        header={"Country"}
        /> 
        <Input name="Enter sale price of Crypto"
         inputhandler={SaleHandler}
         placeholder={20000}
        />

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
        {Tax.text}
      </div>
         
       </div>
       {isShort?
 null:
  <div className="output-wrapper">
<div className="output-header" >Discount for long term gains</div>
<div className="out-field">$ {change.LongCapitalDiscount}</div>
</div>}

       <div className="ansamount2">
          <div className="net">
           The Tax you need to pay
          </div>
          <div className="amount2">
            $ {change.TaxYouNeedToPay}
          </div>
        </div>
        </div>
        
        </div>
   </div>     
    
  )
}

export default TaxCalcol
