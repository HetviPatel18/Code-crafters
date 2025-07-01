import { configureStore } from '@reduxjs/toolkit'
import usereducer from './userslice'
import { getuser } from './userslice'
export const store = configureStore({
  reducer: {
    user:usereducer,
    // getuse:getuser
  },
})