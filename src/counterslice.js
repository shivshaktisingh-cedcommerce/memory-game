import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const arr = [{id:0 , name:"1.png"} , {id:0 , name:"2.jpg"}, {id:0 , name:"3.jpg"} , {id:0 , name:"4.jpeg"} , {id:0 , name:"5.jpeg"} , {id:0 , name:"6.jpg"} , {id:0 , name:"7.jpg"} , {id:0 , name:"8.jpg"} ,{id:0 , name:"1.png"} , {id:0 , name:"2.jpg"}, {id:0 , name:"3.jpg"} , {id:0 , name:"4.jpeg"} , {id:0 , name:"5.jpeg"} , {id:0 , name:"6.jpg"} , {id:0 , name:"7.jpg"} , {id:0 , name:"8.jpg"} ] ;
export const counterSlice = createSlice({
    name:'counter' ,
    initialState:{
       imgarray:arr.sort( () => Math.random() - 0.5) ,
       steps:0 ,

    } ,
    reducers:{
        increment:(state)=>{
            state.value+=1
        } ,
        decrement:(state)=>{
            state.value-=1
        } ,
        changebyvalue:(state , action)=>{
            state.value+=Number(action.payload)
        } ,
        fetchstart:(state)=>{
           state.loading=true

        } ,
        fetchsuccess:(state , action)=>{
            state.loading=false
            state.data=action.payload
            state.error=''
        } ,
        fetchfail:(state , action)=>{
            state.loading=false
            state.data=[]
            state.error=action.payload
        } ,
      
    }


})
export const asynthunk=()=>(dispatch)=>{
     dispatch(fetchstart())
     try{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => dispatch(fetchsuccess(response.data)))
     }
    catch(err){
        dispatch(fetchfail(err))
    }
}
export const {increment,decrement ,changebyvalue ,changebyvalue1 , fetchfail ,fetchsuccess ,fetchstart} = counterSlice.actions
export default counterSlice.reducer