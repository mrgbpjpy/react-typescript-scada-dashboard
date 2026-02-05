import { useState } from 'react'
import { type Sensor } from './models/Sensor'
import {SensorCard} from './components/Sensorcard'
import './App.css'

function App() {
  const [sensor] = useState<Sensor>({
    id: 'temp-1',
    value: 72,
    status: 'OK'
  })

  return (
    <>
      <div style={{padding: '20'}}>
        <SensorCard sensor={sensor} />
      </div>
    </>
  )
}

export default App
