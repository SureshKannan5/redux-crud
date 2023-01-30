import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name:"toDoList",
    initialState:{
       todoItem:[]
    },
    reducers:{
      addTodoItem:{
        reducer(state,action){
            state.todoItem = action.payload
        }
      }
    }
})
export const {addTodoItem} = toDoSlice.actions
export default toDoSlice.reducer