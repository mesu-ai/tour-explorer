import React from 'react';
import { Table } from 'react-bootstrap';
import './WorkHour.css';

const WorkHour = () => {
    return (
        
        // Hospital Out-Door Time Shedule
        <Table  striped  hover variant="" >
            {/*bordered variant="primary" */}
        <thead>
            <tr>
            <th>DAY</th>
            <th>TIME</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>SAT – MON</td>
            <td>8AM – 7PM</td>
            </tr>

            <tr>  
            <td>TUE</td>
            <td>8AM – 5PM</td>
            </tr>

            <tr>
            <td>WED - THU</td>
            <td>8AM – 5PM</td>
            </tr>

            <tr>
            <td>FRI</td>
            <td>Closed</td>
            </tr>
        </tbody>
    </Table>
    );
};

export default WorkHour;