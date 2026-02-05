import { type Sensor } from "./Sensor";

export interface Telemetry {
    timestamp: number;
    sensors: Sensor[];
}