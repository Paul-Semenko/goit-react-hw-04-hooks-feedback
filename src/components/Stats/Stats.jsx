import React from "react";
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

export default function Statistics({good, neutral, bad, total, positivePercentage, title}) {
    
        return (
            <>
                <h2>{title}</h2>
                {total ? (<ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total:{total}</li>
                    <li>Positive feedback:{' '}
                        {positivePercentage
                            ? positivePercentage : 0}%
                    </li>
                </ul>) : (<Notification message="No feedback given" />)}
            </>
    
        );
}


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}