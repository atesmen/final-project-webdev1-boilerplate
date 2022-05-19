
import { getCountries, numberWithCommas } from "../countries.js";
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
    }

    async getHTML() {
        return `
        <div class="searchbarnfilter">
            <input class="searchbar" type="search" id="searchbar" name="searchbar" placeholder="Explore the World">
            <select class="filter" name="filter" id="filter">
                <option value="Region">Region</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Africa">Africa</option>
                <option value="Antartica">Antartica</option>
                <option value="Oceania">Oceania</option>
            </select>    
        </div>    
        
         <div class="country-infos">
            ${this.countryNInfo}
        </div>
        `;
    } 
}

