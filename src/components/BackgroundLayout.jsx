import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Contex'

import Clear from '../assets/images/Clear.jpg'
import Cloudy from '../assets/images/Cloudy.jpg'
import Fog from '../assets/images/fog.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'

const BackgroundLayout = () => {

  const {weather} = useStateContext()
  const [ image , setImage] = useState(Clear)

  useEffect(()=>{
    if(weather.conditions){
      let imageString = weather.conditions
      if(imageString.toLowerCase().includes('clear')){
        setImage(Clear)
      }else if(imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy)
      }else if(imageString.toLowerCase().includes('rain')) {
        setImage(Rainy)
      }else if(imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      }else if(imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      }else if(imageString.toLowerCase().includes('stormy')) {
        setImage(Stormy)
      }else if(imageString.toLowerCase().includes('sunny')) {
        setImage(Sunny)
      }
    }

  },[weather])
  console.log(weather)
  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-o top-0 -z-[10]' />
  )
}

export default BackgroundLayout
