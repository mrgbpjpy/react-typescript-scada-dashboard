

export interface Alarm {
    id: string;
    message: string;
    severity: 'WARNING' | 'CRITICAL';
};