import { useState } from 'react'
import { type Sensor } from './models/Sensor'
import {SensorCard} from './components/Sensorcard'
import './App.css'

function App() {
  const [sensors] = useState<Sensor[]>([
  {
    id: 'temp-1',
    value: 72,
    status: 'OK',
  },
  {
    id: 'pressure-1',
    value: 88,
    status: 'WARNING',
  },
  {
    id: 'voltage-1',
    value: 101,
    status: 'CRITICAL',
  },
])

  return (
    <>
      <div style={{padding: '20'}}>
        {sensors.map(sensor => (
        <SensorCard sensor={sensor} />
        ))}    
      </div>
    </>
  )
}

export default App
