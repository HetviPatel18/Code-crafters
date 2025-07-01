import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  setauth:null,
  getuserr:null
}

export const userslice = createSlice({
  name: 'userslice',
  initialState,
  reducers: {
   setauthuser(state,action){
state.setauth=action.payload
   },
   getuser(state,action){
state.getuserr=action.payload
   }
  },
})

// Action creators are generated for each case reducer function
export const { setauthuser, getuser} = userslice.actions;

export default userslice.reducer