import React from "react";
import { useSelector } from "react-redux";
import CarList from "./CarList";
import "./Home.css";

const Home = () => {
  const carList = useSelector(state=>state.cars.carList)
  console.log(carList)  
  return (
    <div>
      <div className="heading">
        <p>Cars for rent</p>
      </div>
      <div className="t-heading">
        <div className="abc">
          <p>Car Details</p>
          <p>RENT PER DAY</p>
        </div>
        <div>
          {
            carList.map(car=><CarList key={car.id} car={car}/>)
          }
          </div>
        </div>
    </div>
  );
};

export default Home;
