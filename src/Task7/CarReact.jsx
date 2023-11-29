import React, {useState} from 'react'
import './Task7.css'
import CarUiReact  from './CarUiReact';
import carData from './CarData';

const allCarValues = [...new Set (carData.map((curElem) => {return curElem.company;})), "All"];
const allCarModels = [...new Set (carData.map((curElem) => {return curElem.model;}))];
const allCarColors = [...new Set (carData.map((curElem) => {return curElem.color;}))];

const btnColor = {clr:['#22D3EF','#ff0000','#000000']}   

const CarReact = () => {
    const [cars, setCars] = useState(carData);
    const [comCar, setComCar] = useState(allCarValues)
    const [modelCar, setModelCar] = useState(allCarModels)
    const [carCol, setCarCol] = useState(allCarColors)

    const [clrs, setClrs] = useState('')

    const filterColor = (color) =>{
      const updateCars = carData.filter((curElem)=>{
        return curElem.color === color;
      });
      setCars(updateCars);
    }

    const filterModel = (model) =>{
      const updateCars = carData.filter((curElem)=>{
        return curElem.model === model;
      });
      setCars(updateCars);
    }
 
    const filterCar = (company) =>{
      if (company === 'All'){
        setCars(carData);
        return;
      }
      const updateCars = carData.filter((curElem)=>{
        return curElem.company === company;
      });
      setCars(updateCars);
    }

  return (
    <>
        <CarUiReact filterCar={filterCar} comCar={comCar} cars={cars}
        modelCar={modelCar} filterModel={filterModel}
        carCol={carCol} filterColor={filterColor}
        />
    </>
  )
}

export default CarReact