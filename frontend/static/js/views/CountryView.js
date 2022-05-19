import { getBorders, getCountryByCode } from "../countries.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
        
    }
    
    async getHTML() {
        const country = getCountryByCode(this.params.id);
        return `
        <div class="bigFlag" id="cFlag"> <img src="${country.flags.svg}" alt=""> </div>
    <div class="countryTitle">
        <h1 id="cName">${country.name.common}</h1>
    </div>
    <div class="countryInfo" id="cInfo">
        <div class="countryInfo-Left">
            <div class="countryInfo-nn"><h3>Native Name :</h3> <h3 id="nN">${Object.entries(country.name.nativeName)[0][1].official}
            </h3></div>
            <div class="countryInfo-pop"><h3>Population :</h3> <h3 id="pop"> ${country.population}</h3></div>
            <div class="countryInfo-reg"><h3>Region :</h3> <h3 id="reg"> ${country.region}</h3></div>
            <div class="countryInfo-sreg"><h3>Subregion :</h3> <h3 id="sreg"> ${country.subregion}</h3></div>   
        </div>
        <div class="countryInfo-Right">
            <div class="countryInfo-cap"><h3>Capital :</h3> <h3 id="cap"> ${country.capital}</h3></div>
            <div class="countryInfo-tld"><h3>Top Level Domain :</h3> <h3 id="tld"> ${country.tld}</h3></div>
            <div class="countryInfo-cur"><h3>Currencies : </h3> <h3 id="cur">
            ${Object.entries(country.currencies)[0][1].name} (${Object.entries(country.currencies)[0][1].symbol})</h3></div>
            <div class="countryInfo-lan"><h3>Languages :</h3> <h3 id="lan">${Object.values(country.languages).join(', ')
        }</h3></div>  
        </div>
    </div>
    <div class="bordercountry">
        <h1>Border Countries</h1>
        <div class="bordercountry-container">
            <div class="bordercountry-btn">
            ${getBorders(country.borders)}
            </div>
        </div>
    </div>
    <div class="goback">
    <a href="/countries"><button>Go Back To Countries</button></a>  
    </div> 
        `;
    }
}