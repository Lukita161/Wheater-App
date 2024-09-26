export const transformKelvinToCelsius = (temperature: number)=> {
    return parseInt((temperature - 273.15).toString())
}