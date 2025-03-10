import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
  first_name: string;
  last_name: string;
  email: string;
}

const initialState: LoginState = {
    first_name: '',
    last_name: '',
    email: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signin: (state,action:PayloadAction<LoginState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.first_name = action.payload.first_name;
      state.last_name=action.payload.last_name;
      state.email=action.payload.last_name;
    },
    signout: (state) => {
      state.first_name='';
      state.last_name='';
      state.email=''
    }
  },
})

// Action creators are generated for each case reducer function
export const { signin, signout } = loginSlice.actions

export default loginSlice.reducer