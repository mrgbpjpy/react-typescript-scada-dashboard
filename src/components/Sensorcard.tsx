import { type Sensor } from "../models/Sensor";

interface SensorCardProps {
    sensor: Sensor;
}

export const SensorCard = ({sensor}: SensorCardProps) => {
    return(
        <div style={{border: '1px solid #ccc', padding: 12}}>
            <div><strong>ID: </strong>{sensor.id}</div>
            <div><strong>Value: </strong>{sensor.value}</div>
            <div><strong>Status: </strong>{sensor.status}</div>
        
        </div>
    )
}