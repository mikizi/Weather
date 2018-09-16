import React from "react";
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {kelvinToCelsius, weekdays} from "../helpers";

const forecast = (props) => {
    const {lng="en"} = props.match.params;
    const style = {
      direction:lng==="en" ? "ltr" : "rtl",
    };
    return <ul id={'forcast'} style={style}>{
        props.data.filter((item) => {
            return item.dt_txt.indexOf('12:00:00') > -1
        }).map((item, index) => {
            const date = new Date(item.dt_txt);
            const dayName = (lng === "en" ? weekdays : weekdays[7])[date.getDay()];
            const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            return <Link to={`/${dateString}`} key={index}>
                <li>
                    <div>
                        <h2>{dayName}</h2>
                        {/*<h3>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</h3>*/}
                        <img className={`icon-${item.weather[0].icon}`}
                             src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}/>
                        <hr/>
                        <p style={style}>
                            temperature: <span className="temp">{kelvinToCelsius(item.main.temp)}</span>
                            <br/>
                            weather: <span className="desc">{item.weather[0].description}</span>
                        </p>
                    </div>
                </li>
            </Link>;
        })
    }
    </ul>
};

export default withRouter(forecast);