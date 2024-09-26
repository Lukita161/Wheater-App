import { z } from "zod"
import { Search } from "../types"
import axios from "axios"
import { useMemo, useState } from "react"


const wheaterSchema = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    }),
    
})

export type Wheater = z.infer<typeof wheaterSchema>
const initialState = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0
    },
}
export const useCurrentWheater = ()=> {
    const [Loading, setLoading] = useState(false)
    const [Error, setError] = useState('')
    const [Wheater, setWheater] = useState<Wheater>(initialState)
    
    const fetchWheater = async ({ city, country }: Search)=> {
        const GEOLOCATION_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${import.meta.env.VITE_API_KEY}`
        try {
            setLoading(true)
            setError('')
            setWheater(initialState)
            const {data} = await axios(GEOLOCATION_API_URL)
            if(!data[0]) {
                setError('No se encontro la ciudad, vuelve a buscar')
                return
            }
            const { lat, lon } = data[0]
            
            const WHEATER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
            const {data: WheaterResult} = await axios(WHEATER_API_URL)
            const result = wheaterSchema.safeParse(WheaterResult)
            if (result.success) {
                setError('')
                setWheater(result.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const IsWheaterSeted = useMemo(()=> Wheater.name ,[Wheater])

    return {
        Wheater,
        Loading,
        Error,
        fetchWheater,
        IsWheaterSeted
    }
}