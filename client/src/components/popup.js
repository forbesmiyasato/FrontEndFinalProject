import React from 'react';
import LineChart from './lineChart';
import '../popup.css';

const popup = (props) => {
    console.log(props.chartType);
    console.log(props.county);
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <button onClick={props.togglePopup} className="btn-exit"> <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"/>
                        </button>
                    <h2 className="popup-header">{props.county}, {props.state} new {props.chartType} per day</h2>             
                    <LineChart data={props.timelineData} type={props.chartType}/>
                </div>
            </div>
        );
}

export default popup;