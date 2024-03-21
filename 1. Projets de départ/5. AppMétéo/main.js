/*
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

https://home.openweathermap.org/api_keys
*/

API_KEY = "b3a6ef686c5baadae71e09f61c4f78dc";
API_URL = `https://api.openweathermap.org/data/3.0/onecall`;

pos_arr = [
    {
        name : "Maison Ladislas",
        lat : 49.65129499721574,
        lon : 0.7614121980450664
    },
    {
        name : "Appartement Rouen",
        lat : 49.42319573334582,
        lon : 1.0904022980379828
    },
    {
        name : "Maison Chléo",
        lat : 48.87153607580298,
        lon : 1.3685298556914245
    },
];

params = {
    lat : pos_arr[0].lat,
    lon : pos_arr[0].lon,
//    exclude : "current,minutely,hourly,daily,alerts",
    units : "metric",
    appid : API_KEY,
}

url_with_params = API_URL + "?";
for(param in params) {
    url_with_params += `${param}=${params[param]}&`;
}
url_with_params = url_with_params.slice(0, -1);  // remove the last character

fetch(url_with_params)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
;
