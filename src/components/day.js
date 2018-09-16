import React from "react";
import {withRouter} from 'react-router-dom'
import {kelvinToCelsius, leadingZero} from "../helpers";

const day = (props) => {
    const {d, m, y} = props.match.params;
    const {data} = props;

    const day = `${y}-${leadingZero(m)}-${leadingZero(d)}`;
    const list = data.map((item, index) => {
        if (item.dt_txt.indexOf(day) > -1) {
            return <li key={index}>
                <div>
                    <ul>
                        <li>
                            <label> Grand level</label>
                            <span>{item.main.grnd_level}</span>
                        </li>
                        <li>
                            <label> Humidity</label>
                            <span>{item.main.humidity}</span>
                        </li>
                        <li>
                            <label> Pressure</label>
                            <span>{item.main.pressure}</span>
                        </li>
                        <li>
                            <label> Sea level</label>
                            <span>{item.main.sea_level}</span>
                        </li>
                        <li>
                            <label>Temperature</label>
                            <span>{kelvinToCelsius(item.main.temp)}</span>
                        </li>
                        <li>
                            <label> Temperature Max</label>
                            <span>{kelvinToCelsius(item.main.temp)}</span>
                        </li>
                        <li>
                            <label> Temperature Min</label>
                            <span>{kelvinToCelsius(item.main.temp_min)}</span>
                        </li>
                    </ul>
                </div>
            </li>
        }
        return null;
    }, day);
    return (<div id={'day-comp'}>
        <h1>{day}</h1>
        <ul>{list}</ul>
    </div>)
};

export default withRouter(day);