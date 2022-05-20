
import { getCountries, numberWithCommas, filterCountriesByRegion } from "../countries.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
        
        console.log(getCountries())
         let findCountries = getCountries()
         this.countryNInfo = ""
        for(let i = 0; i < findCountries.length; i++){
            const country = findCountries[i];
            const countryHtml = `
                <div class="flagninfo">
                    <a href="/countries/${country.cca3}">
                    <img class="flags" src="${country.flags.png}" alt="tr" />
                    <div class="info">
                        <h1 class="info-h1">${country.name.common}</h1>
                        <div class="country-info">
                        <h4>Population :</h4>
                        <p class="country-info-p">${numberWithCommas(country.population
                            )}<p>
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
            this.countryNInfo += countryHtml;
            // country += country.name.common
        }
        this.bindFilterEvents();
    }

    bindFilterEvents() {        
        window.addEventListener('DOMContentLoaded', (event) => {
            const filterEl = document.querySelector('#filter');
            const searchEl = document.querySelector('#searchbar');
            const countriesEl = document.querySelector(".country-infos");
            filterEl.addEventListener('change', (event) => {
                const countries = filterCountriesByRegion(event.target.value);
                const resultHtml = countries.map(c => `
                    <div class="flagninfo">
                        <a href="/countries/${c.cca3}">
                            <img class="flags" src="${c.flags.png}" alt="${c.name.common}" />
                            <div class="info">
                                <h1 class="info-h1">${c.name.common}</h1>
                                <div class="country-info">
                                    <h4>Population :</h4>
                                    <p class="country-info-p">
                                        ${numberWithCommas(c.population)}
                                    <p>
                                </div>
                                <div class="country-info">
                                    <h4>Region :</h4>
                                    <p class="country-info-p">${c.region}<p>
                                </div>
                                <div class="country-info">
                                    <h4>Capital :</h4>
                                    <p class="country-info-p">${c.capital}<p>
                                </div>
                            </div>
                        </a>    
                    </div>
                `).join('');
                countriesEl.innerHTML = resultHtml;
                searchEl.value = '';
            });
        });
    }

    async getHTML() {
        return `
        <div class="searchbarnfilter">
            <input class="searchbar" type="search" id="searchbar" name="searchbar" placeholder="Explore the World">
            <select class="filter" name="filter" id="filter">
                <option value="">Select a region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>    
        </div>    
        
         <div class="country-infos">
            ${this.countryNInfo}
        </div>
        `;
    } 
}

