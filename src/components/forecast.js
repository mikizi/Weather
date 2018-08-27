import React from "react";

const forecast = (props) => {

    const weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    const fahrenheitToCelsius = (f) => {
        return (f - 32) * 5 / 9;
    };

    const kelvinToCelsius = (k) => {
        return Math.round(k - 273.15);
    };

    return <ul>{
        props.data.filter((item) => {
            return item.dt_txt.indexOf('12:00:00') > -1
        }).map((item) => {
            const date = new Date(item.dt_txt);
            return <li>
                <div>
                    <h2>{weekdays[date.getDay()]}</h2>
                    {/*<h3>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</h3>*/}
                    <img className={`icon-${item.weather[0].icon}`} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}/>
                    <hr/>
                    <p>
                        temperature: <span className="temp">{kelvinToCelsius(item.main.temp)}</span>
                        <br/>
                        weather: <span className="desc">{item.weather[0].description}</span>
                    </p>
                </div>
            </li>;
        })
    }
    </ul>
};

export default forecast;