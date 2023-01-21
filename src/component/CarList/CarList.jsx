import React from 'react'
import {IoMdColorFilter} from 'react-icons/io'
import {MdAirlineSeatReclineNormal} from 'react-icons/md'
import {BiRupee} from 'react-icons/bi'
import './CarList.css'
import { useNavigate } from 'react-router-dom'

const CarList = ({car}) => {
    const navigate = useNavigate()
    return (
    <div className='carlist'>
        <div className='carlistimg'>
            <img className='carimg' src={car.image} alt={car.name} />
        </div>
        <div className='detail'>
            <div><p>{car.name}</p>  </div>
            <div className='in'>
                <div><p><IoMdColorFilter/></p><p>{car.color}</p></div>
                <div><p><MdAirlineSeatReclineNormal/></p><p>{car.noOfSeat} seater</p></div>
            </div>
        </div>
        <div className='rent'><p><BiRupee/></p><p>{car.rentPerDay}</p></div>
        <div className='buttoncontainer'>
            <div>
                <button disabled={car.curruntBooking} onClick={()=>{navigate(`/booking-form/${car.id}`)}} >Book Now</button>
                {
                    car.curruntBooking &&
                    <div className='currantly-unavilable'>
                        curruntly unavaliable
                    </div>
                }
            </div>
            <button onClick={()=>navigate(`car/${car.id}`)}>Details</button>
        </div>      
    </div>
  )
}

export default CarList