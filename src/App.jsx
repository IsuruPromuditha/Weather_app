import { useState } from 'react'

import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Contex'


function App() {

  const [input ,setInput] = useState('')

  const {weather} = useStateContext()
  console.log(weather)
  

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-white text-3xl'>Weather App</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl flex item-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input onKeyUp={(e) =>{
            if(e.key === 'Enter') {
              // sumit the form
            }
              
          } } type="text" className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={ e => setInput(e.target.value)} />

        </div>

      </nav>
       
        
    </div>
  )
}

export default App
