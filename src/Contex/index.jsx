import { useContext, createContext ,useState, useEffect, Children } from "react";
import axios from "axios";

const StateContext = createContext()
export const StateContextProvider = ({Children}) => {
    const [weather , setWeather ] = useState({})
    const [values , setValues] = useState([])
    const [place , setPlace] = useState('Jaipur')
    const [thisLocation , setLocation] = useState('')

    //fetch api
    const fetchWeather = async() => {
        const options = {
            method : 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location : place,
                contentType : 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key' : import.meta.env.VITE_API_KEY ,
                'X-RapidAPI-Host' : 'visual-crossing-weather.p.rapiapi.com'
            }
        }

        try{
            const responce = await axios.request(options);
            console.log(responce.data);
            const thisData = Object.values(responce.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])

        }catch(e) {
            console.error(e);
            // if the api throws error
            alert('This place does not exit')
        }
    }

    useEffect(() => {
        fetchWeather()

    }, [place])

    useEffect(() => {
        console.log(values)

    },[values])

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation
        }}>
        {Children}
        
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)