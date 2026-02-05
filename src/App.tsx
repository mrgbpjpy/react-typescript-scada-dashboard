import { useState, useEffect } from 'react'
import { type Sensor } from './models/Sensor'
import { type Alarm } from './models/Alarm'
import { SensorGrid } from './components/SensorGrid'
import { AlarmList } from './components/AlarmList'
import './App.css'
import { updateTelemetry } from './services/telemetryService'

export default function App() {
  const [sensors , setSensors] = useState<Sensor[]>([
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

const alarms: Alarm[] = sensors
  .filter(
    (s): s is Sensor & {status: 'WARNING' | 'CRITICAL'} =>
      s.status !== 'OK'
  )
  .map(s => ({
    id: s.id,
    severity: s.status,
    message: `${s.id} is ${s.status}`
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setSensors( prev => updateTelemetry(prev));
    }, 2000)

    return () => clearInterval(interval);
  },[])
  

  return (
    <div style={{ padding: 20 }}>
      <h2>SCADA Dashboard</h2>
      <SensorGrid sensors={sensors}/>
      <AlarmList alarms={alarms} />
    </div>
  )
}


