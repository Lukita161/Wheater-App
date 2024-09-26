import { FormEvent, useState } from "react"
import { countries } from "../../data/countries"
import styles from './form.module.css'
import { Search } from "../../types"

type FormProps = {
    fetchWheater: ({ city, country }: Search) => Promise<void>
}
export const Form = ({ fetchWheater }:FormProps)=> {

    const [search, setSearch] = useState<Search>({
        city: '',
        country: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> )=> {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if(Object.values(search).includes('')) {
            console.log('Todos los campos son obligatorios')
            return
        }
        fetchWheater(search)
    }
    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <label htmlFor="city">Ciudad:</label>
            <input onChange={handleChange} className={styles.formInput} name="city" type="text" placeholder="Ciudad" id="city" />

            <label htmlFor="country">Pais:</label>
            <select onChange={handleChange} className={styles.formSelect} name="country" id="country">
                <option className={styles.Options} value=""> --- Seleccione una opcion --- </option>
                {countries.map(country => (
                    <option className={styles.Options} value={country.code}>{country.name}</option>
                ))}
            </select>
            <button className={styles.Submit} type="submit">Ver clima</button>
        </form>
    )
}