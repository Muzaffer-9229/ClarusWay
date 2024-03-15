
const countryName = document.querySelector("#countryName");
const list = document.querySelector("#list");

const getFlags = async () => {
  const BASE_URL = `https://restcountries.com/v3/`;
  const queryString = `all`;
  const URL = `${BASE_URL}${queryString}`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`res.status`);
    }
    const data = await res.json();
    countryNames(data);
  } catch (error) {
    console.log(error);
    const newsCountrys = document.querySelector("#news");
    newsCountrys.innerHTML = `Not Found 401`;
  }
};

const countryNames = (countries) => {
  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.name.common;
    option.textContent = country.name.common;
    countryName.appendChild(option);
  });

  
  countryName.addEventListener('change', () => {
    const selectedCountryName = countryName.value;
    const selectedCountry = countries.find(country => country.name.common === selectedCountryName);
    countryInfo(selectedCountry);
  });
};

const countryInfo = (country) => {
  list.innerHTML = ''; 

  const newList = document.createElement("li");
  newList.className = "countryInfo";
  newList.innerHTML = `
    <span id="flag"></span>
    <span id="country">Country: ${country.name.common}</span>
    <span id="capital">Capital: ${country.capital ? country.capital[0] : 'Not Found'}</span>
    <span id="population">Population: ${country.population}</span>
    <span id="region">Region: ${country.region}</span>
    <a id="map" href="${country.maps.googleMaps}" target="_blank">See On Google Maps</a>
  `;
  list.appendChild(newList);

  
  const flagSpan = newList.querySelector('#flag');
  const flagUrl = country.flags[1]; // PNG bayrak URL
    flagSpan.innerHTML = `<img src="${flagUrl}" alt="Flag" class="flag">`;
   
};

getFlags();


