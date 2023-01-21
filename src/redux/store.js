import { configureStore } from '@reduxjs/toolkit'
import carListReducer from './carSlice'

export default configureStore({
  reducer: {
    cars:carListReducer
  }
})