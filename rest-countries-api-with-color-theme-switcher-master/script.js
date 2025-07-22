// select theme-toggle, and add event listener , using toggle function (classlist helps to manage the dom easily)

const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener('click',() => {
    document.body.classList.toggle("dark-mode");
})

//fetch url of rest country from the website
// for filetring the needed countries//

// const myCountries =[ "Germany", "United States Of America","Brazil", "Iceland","Afghanistan","Aland Islands", "Albania","Algeria"];

fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
)
  .then((response) => {
    return response.json();
  })
  .then((countryData) => {
    console.log(countryData);
    countryData.forEach((country) => {
         console.log(country);
      //create DOM element for the country cards.//
      const countryContainer = document.querySelector(".country-container");
      const countrycards = document.createElement("div");
      countrycards.classList.add("country-cards");
      console.log(countrycards);
     
      const cardHTML = ` <img src="${country.flags.svg}" alt="flag" />
        <div class="card-details">
          <h2 class="details-title">${country.name.common}</h2>
          <p><b>Population: </b>${country.population}</p>
          <p><b>Region: </b>${country.region}</p>
          <p><b>Capital: </b>${country.capital}</p>  
          </div> 
          `;
      countrycards.innerHTML = cardHTML;
      countryContainer.append(countrycards);
    });
  });


//create a img inside the card
//Option 1

// const cardsImg= document.createElement('img')
// cardsImg.src ='https://flagcdn.com/de.svg'
// countrycards.append(cardsImg)
// console.log(cardsImg)

