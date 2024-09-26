import type { Wheater } from "../../hooks/useCurrentWheater"
import styles from './WheaterDetails.module.css'
import { transformKelvinToCelsius } from "../../utils/utils"

type WheaterDetailsProps = {
    Wheater: Wheater
}
export const WheaterDetails = ({ Wheater }: WheaterDetailsProps)=> {
return (
    <div className={styles.WheaterComponent}>
        <h2 className={styles.wheaterName}>Clima de: {Wheater.name}</h2>
        <p className={styles.temp}>{ transformKelvinToCelsius(Wheater.main.temp)}&deg;C</p>
        <div className={styles.minMaxTemp}>
            <p>{transformKelvinToCelsius(Wheater.main.temp_max)}&deg;C</p>
            <p>{transformKelvinToCelsius(Wheater.main.temp_min)}&deg;C</p>
        </div>
    </div>
)
}