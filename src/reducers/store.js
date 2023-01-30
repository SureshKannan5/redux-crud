import { configureStore } from '@reduxjs/toolkit'
import toDoSlice from '../feature/api/toDoSlice'
export  const store = configureStore({
  reducer: {
    toDoSlice:toDoSlice
  }
})