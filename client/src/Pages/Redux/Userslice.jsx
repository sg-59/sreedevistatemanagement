import {createSlice} from '@reduxjs/toolkit'

const UserData=createSlice({
    name:"info",
    initialState:{
        user:[]
    },

    reducers:{
        addtoData:(state,action)=>{
            console.log("redux action value",action.payload);
            state.user.push(action.payload)

        }
    }
})

export const {addtoData}=UserData.actions
export default UserData.reducer