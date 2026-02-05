import { type Sensor} from "../models/Sensor";
export function evaluateStatus(value:number): Sensor['status']{
    if(value >= 100) return 'CRITICAL';
    if(value >= 85) return 'WARNING';
    return 'OK';
}