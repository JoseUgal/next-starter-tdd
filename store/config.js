// State Management
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

// Stores
import { counterSlice } from './counter/slice'

const makeStore = () => configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer
  },
  devTools: true
})

export const wrapper = createWrapper(makeStore)
