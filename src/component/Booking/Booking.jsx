import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { bookCar } from '../../redux/carSlice'
import Logo from '../Logo'
import './Booking.css'
import BookingSuccess from './BookingSuccess'

const Booking = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const carId = params.id
    const [formData,setFormData] = useState({
        name:'',
        phno:'',
        issueDate:'',
        returnDate:''
    })
    const [message,setMessage] = useState("")
    const [open,setOpen] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setMessage("")
        }, 3000);
    },[message])
    const handleFillForm = (e)=>{
        const {name,value} = e.target
        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
    }
    const goBack = ()=>{
        navigate(-1)
    }
    const validateNumber=()=>{
        if(formData.phno.slice(0,3) === '+91'){
            if(formData.phno.length===13){
                for(let i = 3;i < 13;i++){
                    if(!(formData.phno[i]<='9' && formData.phno[i]>='0')){
                        setMessage("Enter a valid number")
                        return false
                    }       
                }
            }
            else{
                setMessage("Phone number's length is not adequate")
                return false
            }
        }
        else{
            setMessage("Enter number with country code i.e. +91")
            return false
        }
        return true
    }
    const bookingCar = ()=>{
        if(formData.name && formData.phno && formData.issueDate && formData.returnDate){
            if(validateNumber()){
                dispatch(bookCar({id:carId,data:formData}))
                setOpen(true)
            }
        }
        else{
            setMessage("Please fill all the details")
        }
    }
  return (
    <div className='Booking'>
        {
            message.length > 0 && 
            <div className='message'>{message}</div>
        }
        <div className='img-div'>
            <img className='bookimg' src="/bookingimage.png" alt="bookingImg" />
        </div>
        <div className='booking'>
            <div className='booking-heading'>
                <div className='head'>Booking Details</div>
                <div><Logo/></div>
            </div>
            <div className='booking-form'>
                <div>
                    <p>Name</p>
                    <input autoFocus type="text" value = {formData.name} onChange = {handleFillForm}  placeholder='Jane Doe' name="name"/>
                </div>
                <div>
                    <p>Contact number</p>
                    <input type="tel" value={formData.phno} onChange={handleFillForm} placeholder='+91XXXXXXXXXX' name="phno" />
                </div>
                <div>
                    <p>Issue Date</p>
                    <input type="date" value = {formData.issueDate} onChange = {handleFillForm} max={formData.returnDate} name="issueDate" />
                </div>
                <div>
                    <p>Return Date</p>
                    <input type="date" value = {formData.returnDate} onChange = {handleFillForm} min={formData.issueDate} name="returnDate"/>
                </div>  
            </div>
            <div className='bookingbuttons'>
                <div><button onClick={goBack}>Back</button></div>
                <div><button onClick={bookingCar}>Book Car</button></div>    
            </div>
        </div>
        <BookingSuccess id={carId} open={open} setOpen={setOpen} issueDate={formData.issueDate} returnDate={formData.returnDate}/>
    </div>
  )
}

export default Booking