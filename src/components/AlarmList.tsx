import {type Alarm} from '../models/Alarm'

interface AlarmListProps {
    alarms: Alarm[];
}

export const AlarmList = ({alarms }: AlarmListProps) => {
    if (alarms.length === 0) return <div>No Active alarms</div>;

    return(
        <div>
            <h3>Alarms</h3>
            <ul>
                {alarms.map(alarm => (
                    <li key={alarm.id}>
                        [{alarm.severity}] {alarm.message}
                    </li>
                ))}
            </ul>
        </div>
    )
}