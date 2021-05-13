
class TreeFrog extends Animal {



    constructor(name, colour, news, pohlavie) {
        super(name, colour, news);
        this.pohlavie = pohlavie;
        this.weather = this.#createWeatherForecast();
    }

    

   

    #createWeatherForecast() {
        let weatherParagraph = document.getElementById("weather")
        if (!weatherParagraph) {
            weatherParagraph = document.createElement("p")
            weatherParagraph.id = "weather"
            document.body.appendChild(weatherParagraph)
            return weatherParagraph
        }
        return document.getElementById("weather")
    }


    // opencagedata to find lat a lng ;)
    
    makeForecast2() {
        if (this._dead) {
            this.informWorld('nič nebude predpovedať ...');
        } else {

            //OPEN CAGE DATA
            const KEY = '3ae079c2e87e4daaba3ea2f582ac3ab7';
            const mestoKrajina = 'Kosice,SK'  // sobrance
           // fetch('https://api.openweathermap.org/data/2.5/weather?q=' + mestoKrajina + '&appid=' + apiKey + '&units=metric')
           //fetch('https://pro.openweathermap.org/data/2.5/forecast/climate?q=' + mestoKrajina + '&appid=' + apiKey + '&units=metric&lang=sk')
           //https://api.opencagedata.com/geocode/v1/json?key=3ae079c2e87e4daaba3ea2f582ac3ab7&language=SK&q=Kosice+Slovakia&pretty=1
           // starý pokus:  'https://api.opencagedata.com/geocode/v1/json?q='+ nameOfCity + '&key=' + KEY
           //'https://api.opencagedata.com/geocode/v1/json?q='+nameOfCity+nameOfCountry+'&key='+KEY+'&pretty=1'
           //48.7164° N, 21.2611° E //košice
           const query = '48.7164, 21.2611';
           const nameOfCity = 'Kosice';
           //const nameOfCountry = 'Slovakia';
           fetch('https://api.opencagedata.com/geocode/v1/json?q='+ nameOfCity + '&key=' + KEY + '&pretty=1')
            
                .then(resp => {
                    if (!resp.ok) {
                        return (resp.statusText + " " + resp.status)
                    } else {
                        return resp.json()
                    }
                })
                .then(json => {
                     this.weather.innerHTML += ("<br>" + this.constructor.name + " " + this.name + " info o meste: "
                      + json.results[1].geometry.lat +' '+ json.results[1].geometry.lng +"<br>")
            
                })
                .catch(error => {
                    console.log(error)
                });
                
        }

        // window.open('http://www.shmu.sk/');

    }




    makeForecast() {
        const forecast = "bude pekne"

        var aa = document.getElementById('cityname').value;
        console.log(aa);

        


        if (this._dead) {
            this.informWorld('nič nebude predpovedať ...');
        } else {


            /*
            *  HOMEWORK
            */
            // pekne kartičky
            // spraviť na počasie.. pozri v priečinku maš obrazok :D
            // vytiahnuť mesto z formulara :D
            

            //const apiKey = '62408dbdc65aa2a6323f887d7732d8b2';  //šetrite klikmi
            const novyKEY = '1c7e97c2c8cc8ee9587b0136a6bee009';
            const mestoKrajina = 'Kosice,SK'  // sobrance
           // fetch('https://api.openweathermap.org/data/2.5/weather?q=' + mestoKrajina + '&appid=' + apiKey + '&units=metric')
           //fetch('https://pro.openweathermap.org/data/2.5/forecast/climate?q=' + mestoKrajina + '&appid=' + apiKey + '&units=metric&lang=sk')
           //48.7164° N, 21.2611° E

           

           const query = '48.7164, 21.2611';
           fetch('http://api.weatherstack.com/forecast?access_key=' + novyKEY+ '&query=' + query)
            
                .then(resp => {
                    if (!resp.ok) {
                        return (resp.statusText + " " + resp.status)
                    } else {
                        return resp.json()
                    }
                })
                .then(json => {
                     let ikonka = json.current.weather_icons[0];
                    var img = document.createElement('img');
                    img.src = ikonka;
                    img.style.padding = 30;
                    document.getElementById('ikona').appendChild(img); 
                    
                    this.weather.innerHTML += (  this.constructor.name + " " + this.name + " zajtra bude také počasie: "
                      +json.current.weather_descriptions[0] )

                      
                    
                })
                .catch(error => {
                    console.log(error)
                });

                
               
                
                
        }

        // window.open('http://www.shmu.sk/');

    }

    informWorld(message) {
        super.informWorld(message);
        if (!this._dead) {
            this.news.innerHTML += (' kvak');
        }
    }

    makeSound() {
        if (this._dead) {
            this.informWorld('...+...');
        } else {
            this.informWorld(' kvaaaak');
        }

    }


}