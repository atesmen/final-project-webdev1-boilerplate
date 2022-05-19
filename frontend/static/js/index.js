import {getCountries} from './countries.js'

const countries = getCountries();

console.log(countries);

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let searchbar = document.getElementById("searchbar")
            searchbar.addEventListener("keydown",  (event) => {
                console.log(event.key)
                if(event.key === "Enter"){
                   let input = searchbar.value
                   let result = []
                   for(let i = 0; i < countries.length; i++){ 
                    if(countries[i].name.common.includes(input) ){
                           result.push(countries[i])


                       }

                   }
                   console.log(result)
                }
                
                

            })
});

