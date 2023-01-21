import { Dialog } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Booking.css'
import moment from 'moment';
const BookingSuccess = ({open,setOpen,id,issueDate,returnDate}) => {
    const carName = useSelector(state=>state.cars.carList[id-1].name)
    const navigate = useNavigate()
    const handleClose =()=>{
        setOpen(false)
        navigate('/')
    }
    return(
    <Dialog open={open} onClose={handleClose}>
        <div className='booking-confirmed'>
            <div>
                <p className='bold'>Booking Confirmed !</p>
                <p className='info'>you have booked <span className='p'>{carName}</span></p>
                <p className='info'>for the duration <span className='p'>{moment(issueDate,"YYYY-MM-DD").format("DD/MM/YYYY")} - {moment(returnDate,"YYYY-MM-DD").format("DD/MM/YYYY")}</span></p>
            </div>
            <div className='continue'>
                <button onClick={handleClose}>
                    Continue
                </button>
            </div>
        </div>
    </Dialog>
  )
}

export default BookingSuccess