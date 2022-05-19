const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all').then(res=> res.json())
    .then(data => {localStorage.setItem('countries', JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

loadCountries();

export function getCountries() {
    const countries = localStorage.getItem('countries');
    return JSON.parse(countries);
};

export function getCountryByCode(countryCode){
    const countries = getCountries();
    for (let i = 0; i < countries.length; i++){
        const country = countries[i];
        if (country.cca3 === countryCode.toUpperCase()) {
            return country;
        }
    }
}

export function getBorders(borderCountries){
    const borderCode = []
    if(!borderCountries){
        return []
    }
    for (let i = 0; i < borderCountries.length; i++){
        const country = getCountryByCode(borderCountries[i]);
        borderCode.push(`
            <a href="/countries/${country.cca3}">
                <button id="borbtn">${country.name.common}</button>
            </a>
        `)
    }
    return borderCode.join('');
}
