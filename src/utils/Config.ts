import { type Sensor } from "../models/Sensor";

export const defaultSensor = {
    id: 'temp-1',
    value: 70,
    status: 'OK',
} satisfies Sensor;