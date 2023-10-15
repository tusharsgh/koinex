
import './App.css';
import TaxCal from './components/TaxCal/TaxCal';
import {items} from "./text";
import FAQ from './components/FAQs/FAQ';
import TaxCalcol from './components/TaxCalcol/TaxCalcol';


function App() {


  return (
    <div className="main">
      <div className="grid">
     <div className="column">
     <TaxCalcol/>  
<div className="FAQ">
  <div className="Header">Frequently Asked Questions</div>
<div className="text">
  {items.map((item) => {
     return(
     
      <FAQ 
      key={item.id} 
      number={item.id}
      question={item.question}
      answer={item.answer}
      points={item.points}
      />
      
     );
     
  })}

</div>
  </div>
</div>
      </div>
     


    


    </div>
  );
}

export default App;
