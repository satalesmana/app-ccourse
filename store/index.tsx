import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer/counterSlice'
import profileSlice from './reducer/profileSlice'
import kursusSlice from './reducer/kursusSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    profile: profileSlice,
    kursus: kursusSlice
  }
})