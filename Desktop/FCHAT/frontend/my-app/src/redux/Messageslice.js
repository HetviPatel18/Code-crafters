import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 imsg:null
}

export const messageslice = createSlice({
  name: 'Messageslice',
  initialState,
  reducers: {
   setmsg(state,action){
    state.imsg=action.payload;

   }
  },
})
export const { setmsg} = messageslice.actions;
export default messageslice.reducer
