import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    // Action to set the authentication status
    incrementCounter (state, action) {
      state.value += 1
    },
    decrementCounter (state, action) {
      state.value -= 1
    },
    incrementByValue (state, action) {
      state.value += action.payload
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrappe
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.counter
        }
      }
    }

  }
})

export const { incrementCounter, decrementCounter, incrementByValue } = counterSlice.actions

export const selectCounter = state => state.counter.value

export default counterSlice.reducer
