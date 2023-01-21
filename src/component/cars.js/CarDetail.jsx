import React from "react";
import {IoMdColorFilter} from 'react-icons/io'
import {BiRupee} from 'react-icons/bi'
import {MdAirlineSeatReclineNormal} from 'react-icons/md'
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {ImCross} from 'react-icons/im'
import {TiTick} from 'react-icons/ti'
import './CarDetail.css'
import moment from 'moment' 
const CarDetail = () => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const carList = useSelector((state) => state.cars.carList);
  if (id > 0 && id < carList.length) {
    const car = carList[id-1];
    return (
      <div className="carDetail">
        <div className="upperPart">
          <div className="carBigImg">
            <img className="imgbig" src={car.image} alt={car.name} />
          </div>
          <div className="upperlowerpart">
            <div className="carName">{car.name}</div>
            <div className="cardetail">
              <div className="flex">
                <p>
                  <IoMdColorFilter />
                </p>
                <p>{car.color}</p>
              </div>
              <div className="flex">
                <p>
                  <MdAirlineSeatReclineNormal />
                </p>
                <p>{car.noOfSeat} seater</p>
              </div>
            </div>
            <div className="flex"><p>Rent per day:</p><p><BiRupee/>{car.rentPerDay}</p></div>
            <div className="cardetail">
              <div><button disabled={car.curruntBooking} onClick={()=>{navigate(`/booking-form/${car.id}`)}}>Book Now</button></div>
              <div style={{color:car.curruntBooking?'red':'green'}} >{car.curruntBooking?<p>Currently uavailable</p>:<p>Available</p>}</div>
            </div>
          </div>
        </div>
        <div className="mid">
          <div className="h">Car Details</div>
        </div>
        <div className="detailOfCar">
          <div>{car.curruntBooking?<p className="avalability">Currently uavailable<ImCross/></p>:<p className = 'avalability'>Available<TiTick/></p>}</div>
          <div>
            Vehical Number: {car.vehicalNumber}
          </div>
          <div>{car.fuelType} car</div>
          <div>{car.discription}</div>
        </div>
        {
          car.curruntBooking &&
          <div>
            <div className="h">
              Currunt Booking
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>PHONE NUMBER</th>
                    <th>ISSUE DATE</th>
                    <th>RETURN DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{car.curruntBooking.name}</td>
                    <td>{car.curruntBooking.phno}</td>
                    <td>{moment(car.curruntBooking.issueDate,"YYYY-MM-DD").format("Do MMM 'YY")}</td>
                    <td>{moment(car.curruntBooking.returnDate,"YYYY-MM-DD").format("Do MMM 'YY")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    );
  } else {
    return (
      <div>
        <h1>Sorry car not found</h1>
      </div>
    );
  }
};

export default CarDetail;
