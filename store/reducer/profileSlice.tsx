import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name:'Sata Lesmana',
    email:'lesmanasata@gmail.com',
    phone:'',
    address:''
  },
  reducers: {
    setName: (state, action) => {
        state.name = action.payload
    },
    setEmail: (state, action) => {
        state.email = action.payload
    },
    setPhone: (state, action) => {
        state.phone = action.payload
    },
    setAddres: (state, action) => {
        state.address = action.payload
    }
  }
})
export const { 
    setName, 
    setEmail, 
    setPhone, 
    setAddres
} = profileSlice.actions
export default profileSlice.reducer