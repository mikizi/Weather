
export const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    [
        "ראשון",
        "שני",
        "שלישי",
        "רביעי",
        "חמישי",
        "שישי",
        "שבת",
    ]
];

export const fahrenheitToCelsius = (f) => {
    return (f - 32) * 5 / 9;
};

export const kelvinToCelsius = (k) => {
    return Math.round(k - 273.15);
};

export const translator = (lng,str) => {
  import(`./lng/${lng}.json`);

};

export const  leadingZero = (num) =>{
    const s = "0" + num; //placeholder for digit number
    return s.substr(s.length - 2);
};