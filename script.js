link= " https://api.openweathermap.org/data/2.5/weather?q=noida&appid=f6a242c873563be2a1c66dfc92e41f1e";
 var request =new XMLHttpRequest();
 request.open('GET',link,true);
  request.onload =function(){

    var obj = JSON.parse(this.response);
    console.log(obj);

    document.getElementById('weather').innerHTML= obj.weather[0].description;
    document.getElementById('city-name').innerHTML= obj.name;

    document.getElementById('temperature').innerHTML= Math.round(obj.main.temp-273.15) +"<sup>o</sup>C";
    document.getElementById('real-feel').innerHTML= Math.round(obj.main.feels_like-273.15) +"<sup>o</sup>C";
    
    document.getElementById('temp-min').innerHTML= Math.round(obj.main.temp_min-273.15) +"<sup>o</sup>C";
    document.getElementById('temp-max').innerHTML= Math.round(obj.main.temp_max-273.15) +"<sup>o</sup>C";



    document.getElementById('humidity').innerHTML=obj.main.humidity;
    document.getElementById('speed').innerHTML=obj.wind.speed;

    document.getElementById('pressure').innerHTML=obj.main.pressure;

    document.getElementById('gust').innerHTML=obj.wind.gust;

    document.getElementById('weather-icon').src="https://openweathermap.org/img/w/" + obj.weather[0].icon +".png";



  }

  if(request.status >=200 && request.status<400){
     var temp=obj.main.temp;
    
  }
  else{
    console.log("The city data is not available");
  }

  request.send();



  var d = new Date();
  var n = d.toLocaleTimeString();

  document.getElementById('time').innerHTML=n;

