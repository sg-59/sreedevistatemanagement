import React, { useReducer, useState } from 'react'

const Reducer = () => {

    var initialValue={
        value:0,
        color:"blue",
        Bgcolor:"blue"

    }

    

    function display(state,action){
        console.log("action valu",action);

        switch(action.type){
            case "increment":
                return {value:state.value+1,color:state.color="green",Bgcolor:state.Bgcolor="skyblue"}


                case "decrement":
                    return {value:state.value>0 ? state.value-1 :0,color:state.color="red",Bgcolor:state.Bgcolor="pink"}

                    case "reset":
                        return {value:0,color:state.color="yellow"}
        }

    }


  

    const [state,dispatch]=useReducer(display,initialValue)

  return (
    <div>
        <h1 style={{color:state.color}}>{state.value}</h1>
    <button style={{backgroundColor:state.Bgcolor}} onClick={()=>dispatch({type:"increment"})}>Increment</button>
    <button style={{backgroundColor:state.Bgcolor}} onClick={()=>dispatch({type:"decrement"})}>De-crement</button>
    <button onClick={()=>dispatch({type:"reset"})}>Re-set</button>
    </div>
  )
}

export default Reducer
