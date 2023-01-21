import { createSlice } from '@reduxjs/toolkit'
import { carDetails } from '../data'

export const carSlice = createSlice({
    name: 'cars',
    initialState: {
        carList:carDetails
    },
    reducers: {
      bookCar: (state,action) => {
        console.log(action.payload)
        state.carList[action.payload.id-1].curruntBooking=action.payload.data
      },
    }
  })
  export const { bookCar } = carSlice.actions
  
export default carSlice.reducer