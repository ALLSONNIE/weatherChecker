app.component('provincia',{
    props: {
        provincia:{
            type: String
        },
        condition:{
            type: String
        },
        temperature:{
            type: Number
        },
        humidity:{
            type: Number
        },
        velocity:{
            type: Number
        },
        image: {
            type: String
        },
        temp:{
            type: Number
        },
        radiation:{
            type: Number
        },
        index:{
            type: Number
        },
        ultraviolet:{
            type: String
        },

    },
    data(){
        return{
            
        }
    },
    mounted(){
        
    },
    computed: {
        tempColors(){
            tempC = Math.round(this.temperature);
            if (tempC >= 10 && tempC <= 15) {
                return "card-blue";
                } else if (tempC >= 16 && tempC <= 20) {
                return "card-yellow";
                } else if (tempC >= 21 && tempC <= 26) {
                return "card-orange";
                } else if (tempC >= 27 && tempC <= 31) {
                return "card-red";
                } else if (tempC >= 32 && tempC <= 37) {
                return "card-dred";
                } else if (tempC >= 38) {
                return "card-wine";
                }
        }
        
    },
    template:
        /*html*/
        `<div class="card-styling p-3 mb-0" v-bind:class="tempColors">
            <div class="card-body p-0">
            
            <img class="position-absolute c-icon" v-bind:src="image" alt="{{ name }}">
                <p class="provincia mt-3 mb-1">{{ provincia }}</p>
                <p class="condicion mb-2">{{ condition }}</p>
                <div class="row">
                    <p class="col-4 temperatura mb-1">{{ temperature }}°C</p>
                    <p class="col-3 humedad mt-2 mb-1"><img src="./images/humidity.png" class="me-2 h-icon" alt="rain">{{ humidity }}%</p>
                    <p class="col-4 velocidad mt-2 mb-1"><img src="./images/wind.png" class="me-2 v-icon" alt="wind">{{ velocity }}</p>
                </div>
                <p class="temp mb-1">Feels like {{ temp }}°C</p>
                <p class="radiacion mb-2">UV Index: {{ ultraviolet }}</p>
            </div>
        </div>`

})