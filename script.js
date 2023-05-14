// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'eb47c50f09msh1877c9b85447fbep18eaaejsn198a2f0e960e',
// 		'X-RapidAPI-Key': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb47c50f09msh1877c9b85447fbep18eaaejsn198a2f0e960e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			// cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})


// useEffect(() => {
// 	async function fetchData(){
// 		let delhi=await fetchWeather("delhi")
// 		setDelhi(delhi)

// 	}

// 	fetchData();

// }, []);

// getWeather("Delhi")



// 	cityDelhi.innerHTML=city
// 	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi'+ city, options)


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'eb47c50f09msh1877c9b85447fbep18eaaejsn198a2f0e960e',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		delhi_feels_like.innerHTML = response.feels_like
		delhi_humidity.innerHTML = response.humidity
		delhi_max_temp.innerHTML = response.max_temp
		delhi_min_temp.innerHTML = response.min_temp
		delhi_sunrise.innerHTML = response.sunrise
		delhi_sunset.innerHTML = response.sunset
		delhi_temp.innerHTML = response.temp
		delhi_wind_degrees.innerHTML = response.wind_degrees
		delhi_wind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		mumbai_feels_like.innerHTML = response.feels_like
		mumbai_humidity.innerHTML = response.humidity
		mumbai_max_temp.innerHTML = response.max_temp
		mumbai_min_temp.innerHTML = response.min_temp
		mumbai_sunrise.innerHTML = response.sunrise
		mumbai_sunset.innerHTML = response.sunset
		mumbai_temp.innerHTML = response.temp
		mumbai_wind_degrees.innerHTML = response.wind_degrees
		mumbai_wind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		lucknow_feels_like.innerHTML = response.feels_like
		lucknow_humidity.innerHTML = response.humidity
		lucknow_max_temp.innerHTML = response.max_temp
		lucknow_min_temp.innerHTML = response.min_temp
		lucknow_sunrise.innerHTML = response.sunrise
		lucknow_sunset.innerHTML = response.sunset
		lucknow_temp.innerHTML = response.temp
		lucknow_wind_degrees.innerHTML = response.wind_degrees
		lucknow_wind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		kolkata_feels_like.innerHTML = response.feels_like
		kolkata_humidity.innerHTML = response.humidity
		kolkata_max_temp.innerHTML = response.max_temp
		kolkata_min_temp.innerHTML = response.min_temp
		kolkata_sunrise.innerHTML = response.sunrise
		kolkata_sunset.innerHTML = response.sunset
		kolkata_temp.innerHTML = response.temp
		kolkata_wind_degrees.innerHTML = response.wind_degrees
		kolkata_wind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));








