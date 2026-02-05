import { type Sensor } from "../models/Sensor";
import { SensorCard } from "./Sensorcard";

interface SensorGridProps {
    sensors: Sensor[];
}

export const SensorGrid = ({sensors}: SensorGridProps) =>{
    return (
    <div style={{display: 'grid', gap: 12}}>
        {sensors.map(sensor => (
            <SensorCard key={sensor.id} sensor={sensor} />
        ))}
    </div>
    )
}