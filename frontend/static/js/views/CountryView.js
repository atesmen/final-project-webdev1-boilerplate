import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");

        console.log(getCountry())
        
    }

    async getHTML() {
        console.log(this.params.id);
        return `
        <div class="bigFlag" id="cFlag"></div>
    <div class="countryTitle">
        <h1 id="cName">canada</h1>
    </div>
    <div class="countryInfo" id="cInfo">
        <div class="countryInfo-Left">
            <div class="countryInfo-nn"><h3>Native Name :</h3> <h3 id="nN"></h3></div>
            <div class="countryInfo-pop"><h3>Population :</h3> <h3 id="pop"></h3></div>
            <div class="countryInfo-reg"><h3>Region :</h3> <h3 id="reg"></h3></div>
            <div class="countryInfo-sreg"><h3>Subregion :</h3> <h3 id="sreg"></h3></div>   
        </div>
        <div class="countryInfo-Right">
            <div class="countryInfo-cap"><h3>Capital :</h3> <h3 id="cap"></h3></div>
            <div class="countryInfo-tld"><h3>Top Level Domain :</h3> <h3 id="tld"></h3></div>
            <div class="countryInfo-cur"><h3>Currencies :</h3> <h3 id="cur"></h3></div>
            <div class="countryInfo-lan"><h3>Languages :</h3> <h3 id="lan"></h3></div>  
        </div>
    </div>
    <div class="bordercountry">
        <h1>Border Countries</h1>
        <div class="bordercountry-container">
            <div class="bordercountry-btn">
                <button id="borbtn"></button> 
            </div>
        </div>
    </div>
    <div class="goback">
        <button>Go Back To Countries</button>
    </div> 
        `;
    }
}