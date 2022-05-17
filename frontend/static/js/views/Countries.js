import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        return `
        <div class="searchbarnfilter">
            <input type="search" id="searchbar" name="searchbar">
            <select name="filter" id="filter">
                <option value="Region">Region</option>
            </select>    
        </div>    
        
        <div class="country-infos">
                <div class="flagninfo">
                    <img src="static/css/Turkey.png" alt="tr" />
                    <div class="info">
                        <h3>Turkey</h3>
                        <h4>Population</h4>
                        <h4>Region</h4>
                        <h4>Capital</h4>
                    </div>
                </div>
                <div class="flagninfo">
                    <img src="static/css/Turkey.png" alt="tr" />
                    <div class="info">
                        <h3>Turkey</h3>
                        <h4>Population</h4>
                        <h4>Region</h4>
                        <h4>Capital</h4>
                    </div>
                </div>
                <div class="flagninfo">
                    <img src="static/css/Turkey.png" alt="tr" />
                    <div class="info">
                        <h3>Turkey</h3>
                        <h4>Population</h4>
                        <h4>Region</h4>
                        <h4>Capital</h4>
                    </div>
                </div>
                <div class="flagninfo">
                    <img src="static/css/Turkey.png" alt="tr" />
                    <div class="info">
                        <h3>Turkey</h3>
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