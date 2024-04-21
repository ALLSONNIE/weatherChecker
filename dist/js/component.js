const app = Vue.createApp({
    data(){
        return{
            provincias:[ //si hay llaves hay objetos
            
            ],      
        }
    },
    mounted:function() {
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=3f2d0b9f4cbf4dec929151249231205&q=San Jose, Costa Rica&aqi=no'
        })
        .then(
            (response) => {
                console.log(response);
                let items = response.data;
    
                    this.provincias == [];

                    let uv = "";

                    if (items.current.uv >= 1 && items.current.uv <= 2) {
                    uv= "Low";
                    } else if (items.current.uv >= 3 && items.current.uv <= 5) {
                    uv= "Moderate";
                    } else if (items.current.uv >= 6 && items.current.uv <= 7) {
                    uv= "High";
                    } else if (items.current.uv >= 8 && items.current.uv <= 10) {
                    uv= "Very High";
                    } else if (items.current.uv >= 11) {
                    uv= "Extreme";
                    }

                    this.provincias.ultraviolet = uv;
                    console.log(uv);

                
                        this.provincias.push({ 
                             provincia: items.location.name,
                             condition: items.current.condition.text,
                             temperature: items.current.temp_c,
                             humidity: items.current.humidity,
                             velocity: items.current.wind_kph,
                             image: items.current.condition.icon,
                             temp: items.current.feelslike_c,
                             radiation: items.current.uv,
                             ultraviolet: uv})
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=3f2d0b9f4cbf4dec929151249231205&q=Heredia, Costa Rica&aqi=no'
        })
        .then(
            (response) => {
                console.log(response);
                let items = response.data;
    
                    this.provincias == [];

                    let uv = "";
                    
                    if (items.current.uv >= 1 && items.current.uv <= 2) {
                        uv= "Low";
                        } else if (items.current.uv >= 3 && items.current.uv <= 5) {
                        uv= "Moderate";
                        } else if (items.current.uv >= 6 && items.current.uv <= 7) {
                        uv= "High";
                        } else if (items.current.uv >= 8 && items.current.uv <= 10) {
                        uv= "Very High";
                        } else if (items.current.uv >= 11) {
                        uv= "Extreme";
                        }

                    this.provincias.ultraviolet = uv;
                    console.log(uv);
    
                        this.provincias.push({ 
                             provincia: items.location.name,
                             condition: items.current.condition.text,
                             temperature: items.current.temp_c,
                             humidity: items.current.humidity,
                             velocity: items.current.wind_kph,
                             image: items.current.condition.icon,
                             temp: items.current.feelslike_c,
                             radiation: items.current.uv,
                             ultraviolet: uv})
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=3f2d0b9f4cbf4dec929151249231205&q=Alajuela, Costa Rica&aqi=no'
        })
        .then(
            (response) => {
                console.log(response);
                let items = response.data;
    
                    this.provincias == [];

                    let uv = "";
                    
                    if (items.current.uv >= 1 && items.current.uv <= 2) {
                        uv= "Low";
                        } else if (items.current.uv >= 3 && items.current.uv <= 5) {
                        uv= "Moderate";
                        } else if (items.current.uv >= 6 && items.current.uv <= 7) {
                        uv= "High";
                        } else if (items.current.uv >= 8 && items.current.uv <= 10) {
                        uv= "Very High";
                        } else if (items.current.uv >= 11) {
                        uv= "Extreme";
                        }

                    this.provincias.ultraviolet = uv;
                    console.log(uv);
    
                        this.provincias.push({ 
                             provincia: items.location.name,
                             condition: items.current.condition.text,
                             temperature: items.current.temp_c,
                             humidity: items.current.humidity,
                             velocity: items.current.wind_kph,
                             image: items.current.condition.icon,
                             temp: items.current.feelslike_c,
                             radiation: items.current.uv,
                             ultraviolet: uv})
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=3f2d0b9f4cbf4dec929151249231205&q=Cartago, Costa Rica&aqi=no'
        })
        .then(
            (response) => {
                console.log(response);
                let items = response.data;
    
                    this.provincias == [];

                    let uv = "";
                    
                    if (items.current.uv >= 1 && items.current.uv <= 2) {
                    uv= "Low";
                    } else if (items.current.uv >= 3 && items.current.uv <= 5) {
                    uv= "Moderate";
                    } else if (items.current.uv >= 6 && items.current.uv <= 7) {
                    uv= "High";
                    } else if (items.current.uv >= 8 && items.current.uv <= 10) {
                    uv= "Very High";
                    } else if (items.current.uv >= 11) {
                    uv= "Extreme";
                    }

                    this.provincias.ultraviolet = uv;
                    console.log(uv);
    
                        this.provincias.push({ 
                             provincia: items.location.name,
                             condition: items.current.condition.text,
                             temperature: items.current.temp_c,
                             humidity: items.current.humidity,
                             velocity: items.current.wind_kph,
                             image: items.current.condition.icon,
                             temp: items.current.feelslike_c,
                             radiation: items.current.uv,
                             ultraviolet: uv})
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=3f2d0b9f4cbf4dec929151249231205&q=Limon, Costa Rica&aqi=no'
        })
        .then(
            (response) => {
                console.log(response);
                let items = response.data;
    
                    this.provincias == [];

                    let uv = "";
                    
                    if (items.current.uv >= 1 && items.current.uv <= 2) {
                    uv= "Low";
                    } else if (items.current.uv >= 3 && items.current.uv <= 5) {
                    uv= "Moderate";
                    } else if (items.current.uv >= 6 && items.current.uv <= 7) {
                    uv= "High";
                    } else if (items.current.uv >= 8 && items.current.uv <= 10) {
                    uv= "Very High";
                    } else if (items.current.uv >= 11) {
                    uv= "Extreme";
                    }

                    this.provincias.ultraviolet = uv;
                    console.log(uv);
    
                        this.provincias.push({ 
                             provincia: items.location.name,
                             condition: items.current.condition.text,
                             temperature: items.current.temp_c,
                             humidity: items.current.humidity,
                             velocity: items.current.wind_kph,
                             image: items.current.condition.icon,
                             temp: items.current.feelslike_c,
                             radiation: items.current.uv,
                             ultraviolet: uv})
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=3f2d0b9f4cbf4dec929151249231205&q=Guanacaste, Costa Rica&aqi=no'
        })
        .then(
            (response) => {
                console.log(response);
                let items = response.data;
    
                    this.provincias == [];

                    let uv = "";
                    
                    /*if (items.current.uv >= 11) {
                        uv= "Extreme";
                        } else if (items.current.uv <= 10 && items.current.uv >=8 ) {
                        uv= "Moderate";
                        } else if (items.current.uv <= 7 && items.current.uv >= 6) {
                        uv= "High";
                        } else if (items.current.uv <= 5 && items.current.uv >= 3) {
                        uv= "Moderate";
                        } else if (items.current.uv <= 2 && items.current.uv >=1) {
                        uv= "Low";
                        }*/

                        if (items.current.uv >= 1 && items.current.uv <= 2) {
                    uv= "Low";
                    } else if (items.current.uv >= 3 && items.current.uv <= 5) {
                    uv= "Moderate";
                    } else if (items.current.uv >= 6 && items.current.uv <= 7) {
                    uv= "High";
                    } else if (items.current.uv >= 8 && items.current.uv <= 10) {
                    uv= "Very High";
                    } else if (items.current.uv >= 11) {
                    uv= "Extreme";
                    }

                    this.provincias.ultraviolet = uv;
                    console.log(uv);
    
                        this.provincias.push({ 
                             provincia: items.location.name,
                             condition: items.current.condition.text,
                             temperature: items.current.temp_c,
                             humidity: items.current.humidity,
                             velocity: items.current.wind_kph,
                             image: items.current.condition.icon,
                             temp: items.current.feelslike_c,
                             radiation: items.current.uv,
                             ultraviolet: uv})
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=3f2d0b9f4cbf4dec929151249231205&q=Puntarenas, Costa Rica&aqi=no'
        })
        .then(
            (response) => {
                console.log(response);
                let items = response.data;
    
                    this.provincias == [];

                    let uv = "";
                    
                    /*if (items.current.uv >= 11) {
                        uv= "Extreme";
                        } else if (items.current.uv >=8 ) {
                        uv= "Very High";
                        } else if (items.current.uv >= 6) {
                        uv= "High";
                        } else if (items.current.uv >= 3) {
                        uv= "Moderate";
                        } else if (items.current.uv >=1) {
                        uv= "Low";
                        }*/

                        if (items.current.uv >= 1 && items.current.uv <= 2) {
                            uv= "Low";
                            } else if (items.current.uv >= 3 && items.current.uv <= 5) {
                            uv= "Moderate";
                            } else if (items.current.uv >= 6 && items.current.uv <= 7) {
                            uv= "High";
                            } else if (items.current.uv >= 8 && items.current.uv <= 10) {
                            uv= "Very High";
                            } else if (items.current.uv >= 11) {
                            uv= "Extreme";
                            }
                            
                    this.provincias.ultraviolet = uv;
                    console.log(uv);
    
                        this.provincias.push({ 
                             provincia: items.location.name,
                             condition: items.current.condition.text,
                             temperature: items.current.temp_c,
                             humidity: items.current.humidity,
                             velocity: items.current.wind_kph,
                             image: items.current.condition.icon,
                             temp: items.current.feelslike_c,
                             radiation: items.current.uv,
                             ultraviolet: uv})
            }
        )
        .catch(
            error => console.log(error)
        );
    },
})