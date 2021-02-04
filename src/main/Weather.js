import React, { useState } from 'react'

const api={
    key:"a6227440aac1d776763b27265c282b30",
    base:"https://api.openweathermap.org/data/2.5/"
}

function Weather (){
    const [query,setQuery]=useState('');
   const [weather,setWeather]=useState({});
   const search= (event)=>{
        if(event.key==='Enter')
        {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res=> res.json())
            .then(result=>{
                setQuery('');
                setWeather(result);
                console.log(result);
            });
        }
    }    

     const dateHandler=(d)=>{
        const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let date=d.getDate();
        let day=days[d.getDay()];
        let month=months[d.getMonth()]
        let year=d.getFullYear();

        return `${date}, ${day}, ${month} ${year}`;
    }
 
        return (
           <React.Fragment>
              <div className={(typeof weather.main!="undefined")?(weather.weather[0].main=="Rain")?"app-rain":(weather.main.temp>16)?"app-warm":"App":"App"}>
            {/* <div className="app-cold-night"> */}
                <main>
                   <div className="search-box">
                       <input type="text" className="search-bar" placeholder="Search..." onChange={e=>setQuery(
                           e.target.value)} value={query} onKeyPress={search}/>
                   </div>
                   {typeof weather.main!="undefined"?(
                <div>
                       <div className="location-box">
                       <div className="location">{weather.name}, {weather.sys.country}</div>
                       <div className="date">{dateHandler(new Date())}</div>
                   </div>
                   <div className="weather-box">
                       <div className="temp">{Math.round(weather.main.temp)}°C</div>
                       <div className="weather">{weather.weather[0].main}</div>
                   </div>                       
                    </div>
                        ):('')};
               </main>

            </div>
        </React.Fragment>
            
        )
    
}

export default Weather