
const ApiKey="b6804eeabb0bf9ff9063793d5601d918";
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searachBox=document.querySelector(".search input");
const searachBtn=document.querySelector(".search button");
const resetbtn=document.querySelector(".resetbtn");

async function checkweather(city)
{
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`)
   
    let data= await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main=="Clouds")
    {
        document.querySelector(".weather-icon").src="images/clouds.png"  
                                                                                                                            
    }

    else if(data.weather[0].main=="Clear")
        {
            document.querySelector(".weather-icon").src="images/clear.png"
        }
    else if(data.weather[0].main=="Drizzle")
            {
                document.querySelector(".weather-icon").src="images/drizzle.png"
            }
    else if(data.weather[0].main=="Mist")
            {
                document.querySelector(".weather-icon").src="images/mist.png"
            }
    else if(data.weather[0].main=="Rain")
            {
                document.querySelector(".weather-icon").src="images/rain.png"  
   
            } 
    else if(data.weather[0].main=="Snow")
            {
                document.querySelector(".weather-icon").src="images/snow.png"
            }   
    
    document.querySelector(".weather").style.display="Block";
}




searachBtn.addEventListener("click",()=>{
    checkweather(searachBox.value);
    })

// resetbtn.addEventListener("click",()=>{
//     document.querySelector(".weather").style.display="none";
// })    



