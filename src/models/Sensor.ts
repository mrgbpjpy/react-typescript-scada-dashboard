export interface Sensor {
    id: string;
    value: number;
    status: 'OK' | 'WARNING' | 'CRITICAL';
}