import { type Sensor } from "../models/Sensor";
import { evaluateStatus } from "../utils/evaluateStatus";

export function updateTelemetry( sensors: Sensor[]): Sensor[] {
    return sensors.map(sensor => {
        const delta = Math.random() * 10 - 5;
        const newValue = Math.round(sensor.value + delta);

        return {
            ...sensor,
            value: newValue,
            status: evaluateStatus(newValue),
        };
    });
}