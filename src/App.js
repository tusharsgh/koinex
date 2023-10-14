
import './App.css';
import TaxCal from './components/TaxCal/TaxCal';
import {items} from "./text";


function App() {

  console.log(items);
  return (
    <div className="main">
      <div className="grid">
     <div className="column">
     <TaxCal/>  
<div className="FAQ">
<div className="text">
  {items[0].answer}
</div>
  </div>
</div>
      </div>
     


    


    </div>
  );
}

export default App;
