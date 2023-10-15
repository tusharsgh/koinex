import React from 'react'
import "./FAQ.css"
function FAQ(props) {

  return (
    <div className="cn"> 
       
        <li className="ques"> {props.number}. {props.question}</li>
        
        <p className="answer">{props.answer}</p>
       
       {
        props.points.map((point,i)=>{
        return(<ul key={point.id} >
            <li ><i className="sp">{point.sp}-</i>{point.p}</li>
        </ul>)
        })
       }
      
    </div>
  )
}

export default FAQ
