import {getCountries} from './countries.js'

const countries = getCountries();

window.addEventListener('DOMContentLoaded', (event) => {
    let searchbar = document.getElementById("searchbar");
    if (searchbar) {
        searchbar.addEventListener("keydown",  (event) => {
            if (event.key === "Enter") {
                let input = searchbar.value
                let result = []
                for(let i = 0; i < countries.length; i++){ 
                    if (countries[i].name.common.includes(input)) {
                        result.push(countries[i])
                    }
                }
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
                        </div>
                    `;
                })
    
                const countryGet = document.querySelector(".country-infos")
                countryGet.innerHTML = list.join("")
            }
        })
    }

    const togglerEl = document.querySelector('#menu-toggler');
    const menuEl = document.querySelector('#main-menu');
    togglerEl.addEventListener('click', function(event) {
        menuEl.classList.toggle('expanded');
    });

    document.querySelectorAll('.nav__link').forEach((el) => {
        el.addEventListener('click', () => {
            menuEl.classList.toggle('expanded');
        })
    })
});

