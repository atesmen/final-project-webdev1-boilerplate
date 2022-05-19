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
                   let list = result.map((country) => {
                       return `                
                       <div class="flagninfo">
                       <a href="/countries/${country.cca3}">
                            <img class="flags" src="${country.flags.png}" alt="tr" />
                            <div class="info">
                                <h1 class="info-h1">${country.name.common}</h1>
                                <div class="country-info">
                                <h4>Population :</h4>
                                <p class="country-info-p">${country.population}<p>
                                </div>
                                <div class="country-info">
                                <h4>Region :</h4>
                                <p class="country-info-p">${country.region}<p>
                                </div>
                                <div class="country-info">
                                <h4>Capital :</h4>
                                <p class="country-info-p">${country.capital}<p>
                                </div>
                            </div>
                        </a>    
                   </div>`
                       
                       
                  
                   }) 
                   const countryGet = document.querySelector(".country-infos")
                   countryGet.innerHTML = list.join("")
                console.log(countryGet)

                }
                
                

            })
});

