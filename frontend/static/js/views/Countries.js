import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
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
                <div class="flagninfo">
                    <img src="static/css/Turkey.png" alt="tr" />
                    <div class="info">
                        <h1>Turkey</h1>
                        <h4>Population</h4>
                        <h4>Region</h4>
                        <h4>Capital</h4>
                    </div>
                </div>
                <div class="flagninfo">
                    <img src="static/css/Turkey.png" alt="tr" />
                    <div class="info">
                        <h1>Turkey</h1>
                        <h4>Population</h4>
                        <h4>Region</h4>
                        <h4>Capital</h4>
                    </div>
                </div>
                <div class="flagninfo">
                    <img src="static/css/Turkey.png" alt="tr" />
                    <div class="info">
                        <h1>Turkey</h1>
                        <h4>Population</h4>
                        <h4>Region</h4>
                        <h4>Capital</h4>
                    </div>
                </div>
                <div class="flagninfo">
                    <img src="static/css/Turkey.png" alt="tr" />
                    <div class="info">
                        <h1>Turkey</h1>
                        <h4>Population</h4>
                        <h4>Region</h4>
                        <h4>Capital</h4>
                    </div>
                </div>
            

        </div>
        <div class="country-infos">
        <div class="flagninfo">
            <img class="flags"src="static/css/Turkey.png" alt="tr" />
            <div class="info">
                <h1>Turkey</h1>
                <h4>Population</h4>
                <h4>Region</h4>
                <h4>Capital</h4>
            </div>
        </div>
        <div class="flagninfo">
            <img class="flags" src="static/css/Turkey.png" alt="tr" />
            <div class="info">
                <h1>Turkey</h1>
                <h4>Population</h4>
                <h4>Region</h4>
                <h4>Capital</h4>
            </div>
        </div>
        <div class="flagninfo">
            <img class="flags" src="static/css/Turkey.png" alt="tr" />
            <div class="info">
                <h1>Turkey</h1>
                <h4>Population</h4>
                <h4>Region</h4>
                <h4>Capital</h4>
            </div>
        </div>
        <div class="flagninfo">
            <img class="flags" src="static/css/Turkey.png" alt="tr" />
            <div class="info">
                <h1>Turkey</h1>
                <h4>Population</h4>
                <h4>Region</h4>
                <h4>Capital</h4>
            </div>
        </div>
    

    </div>
    <div class="country-infos">
    <div class="flagninfo">
        <img class="flags" src="static/css/Turkey.png" alt="tr" />
        <div class="info">
            <h1>Turkey</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
        </div>
    </div>
    <div class="flagninfo">
        <img class="flags" src="static/css/Turkey.png" alt="tr" />
        <div class="info">
            <h1>Turkey</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
        </div>
    </div>
    <div class="flagninfo">
        <img class="flags" src="static/css/Turkey.png" alt="tr" />
        <div class="info">
            <h1>Turkey</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
        </div>
    </div>
    <div class="flagninfo">
        <img class="flags" src="static/css/Turkey.png" alt="tr" />
        <div class="info">
            <h1>Turkey</h1>
            <h4>Population</h4>
            <h4>Region</h4>
            <h4>Capital</h4>
        </div>
    </div>


    </div>
        `
            
        

        ;
    }
}