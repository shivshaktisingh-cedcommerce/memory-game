
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment , decrement , changebyvalue, asynthunk} from "./counterslice"


const Component1 = () => {
  const mystate = useSelector((state)=>state)
  const[turn , setTurn]=useState(0)
  const[ind , setInd]=useState([])
  const ref = useRef()
  const[flag , setFlag]=useState(0)
  const[temp, setTemp]=useState(["dummy.jpg", "dummy.jpg", "dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg" , "dummy.jpg", "dummy.jpg", "dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg"])
 
  
    const handler=(i)=>{
        setInd([...ind , i])
        let x = temp;
        x[i]=mystate.counter.imgarray[i].name
        setTemp([...x])
        setFlag(flag + 1)
        let index = flag;
        if(index===2){
          setTemp(["dummy.jpg", "dummy.jpg", "dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg" , "dummy.jpg", "dummy.jpg", "dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg"])
          clearTimeout(ref.current)
          let selected = temp.filter(check);
          if(selected.length===2){
           if(selected[0]===selected[1]){
               let x = temp;
               x[ind[0]]="white.jpg"
               x[ind[1]]="white.jpg"
               setTemp([...x])
           }
          
         }
          setTurn(turn + 1)
          setInd([])
          setFlag(0)
        }
   
    }
    const handler2=()=>{
     setTemp(["dummy.jpg", "dummy.jpg", "dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg" , "dummy.jpg", "dummy.jpg", "dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg","dummy.jpg", "dummy.jpg"])
     clearTimeout(ref.current)
     setTurn(turn + 1)
     let selected = temp.filter(check);
      if(selected.length===2){
       if(selected[0]===selected[1]){
           let x = temp; 
           x[ind[0]]="white.jpg"
           x[ind[1]]="white.jpg"
           setTemp([...x])
       }
      
     }
     setFlag(0)    
     setInd([])
    }
    

    useEffect(()=>{
          if(flag===2){
          ref.current = setTimeout(()=>{
             handler2(); 
          },2000)
          }
    },[flag])

    const check= (x)=>{
      if(x!=="dummy.jpg"){
        return x;
      }
    }

  return (
    <div className="main_div_component_class">
      <h1>Memory Game</h1>
      <div className="inner_div_class">
      <div className="main_image_div">
      {mystate.counter.imgarray.map((d , i)=>{
        return <div className="repetitive_div_class" key={i}>
                  <img src={temp[i]} alt="" className="img_class" onClick={()=>handler(i)}/>
                  </div>
      })}
      </div>
      <div>
        <p>Turn : {turn}</p>
      </div>
      </div>
      
   

    </div>
  )
}

export default Component1