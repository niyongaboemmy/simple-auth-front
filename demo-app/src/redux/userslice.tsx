import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface CounterState {
  token: string | null
}

// Define the initial state using that type
const initialState: CounterState = {
  token: null,
}

export const counterSlice = createSlice({
  name: 'logger',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state,action: PayloadAction<string>) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.token = null
    },
  },
})

export const { login, logout } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user

export default counterSlice.reducer