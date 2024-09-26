import styles from './App.module.css'
import { WheaterDetails } from './components/Details/WheaterDetails.tsx'
import { ErrorComponent } from './components/Error/ErrorComponent.tsx'
import { Form } from './components/form/Form.tsx'
import { LoadingComponent } from './components/Loading/Loading.tsx'
import { useCurrentWheater } from './hooks/useCurrentWheater.ts'
function App() {
  const { Wheater, Loading, Error, IsWheaterSeted,fetchWheater } = useCurrentWheater()
  return (
    <main className={styles.container}>
      <div className={styles.formContainer}>
        <Form fetchWheater={fetchWheater} />
      </div>
      <div className={styles.wheaterContainer}>
        {Loading && <LoadingComponent />}
        {Error && <ErrorComponent>{Error}</ErrorComponent>}
        {IsWheaterSeted && <WheaterDetails Wheater={Wheater} />}
      </div>
    </main>
  )
}

export default App
