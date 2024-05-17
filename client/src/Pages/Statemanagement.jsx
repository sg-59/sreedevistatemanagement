import { createContext, useEffect, useReducer } from "react"
import { json } from "react-router-dom"



const initialvalue={
    user:JSON.parse(localStorage.getItem('Sreedevidata')) || null
}

export const Usercontext=createContext()

const reducerfun =(state,action)=>{

   switch(action.ok){
    case "success":
        return {user:action.datas}

        case "remove":
            return {user:null}
   }

}

export const StatemanageContextReducer=({children})=>{

    const [state,dispatch]=useReducer(reducerfun,initialvalue)

    useEffect(()=>{
localStorage.setItem("Sreedevidata",JSON.stringify(state.user))
    },[state.user])

    console.log("final value ",state.user);

    return(
        <>
<Usercontext.Provider value={{dispatch,user:state.user}}>
{children}
</Usercontext.Provider>

        </>
    )

}