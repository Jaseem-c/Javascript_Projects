const search = async () => {
    console.log(loc.value);
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=658cb1112b27dbb1c69daf1a1e5ea151`)
    data.json().then((place) => {
        console.log(place)
        let desc = place.weather[0].description
        // console.log(desc);
        descptn.innerHTML=desc
        let humi=`${place.main.humidity}%`
        // console.log(humi);
        hum.innerHTML=humi;
        let wsp=place.wind.speed
        // console.log(wsp);
        ws.innerHTML=`${wsp}km/h`;
        let temp = Math.floor((place.main.temp) - 273)
        console.log(temp);
        tem.innerHTML=`${temp}<span>°C</span>`

        switch(place.weather[0].main){
            case "Clear":
                image.src="./images/clear.png"
                break;
            case "Clouds":
                image.src='./images/cloud.png'
                break;
            case "Rain" :
                image.src='./images/rain.png'
                break;
            case "Snow":
                image.src='./images/snow.png'
                break;
            case "Mist":
                image.src='./images/mist.png'
                break;
            case "Haze":
                image.src='./images/mist.png'
                break;
            default:
                break;
        }
    })

}