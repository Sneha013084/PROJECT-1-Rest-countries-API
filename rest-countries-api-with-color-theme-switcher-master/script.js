// // select theme-toggle, and add event listener , using toggle function (classlist helps to manage the dom easily)


// const toggleButton = document.getElementById("theme-toggle");

// toggleButton.addEventListener('click',() => {
//     document.body.classList.toggle("dark-mode");
// })


//fetch url of rest country from the website
// for filetring the needed countries//

// const myCountries =[ "Germany", "United States Of America","Brazil", "Iceland","Afghanistan","Aland Islands", "Albania","Algeria"];

fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
.then((response) =>{
    return response.json();
})
.then ((countryData) =>{
    console.log(countryData);
    countryData.forEach((country)=>{
        console.log(country);
    })


//     const filteredCountries = countryData.filter(country =>myCountries.includes(country.name.common));
    
//     // filter only 8 countries//
//     //It checks if the country name from the API (country.name.common) exists in my custom list 'myCountries'//
// // const filteredCountries = myCountries.filter()

// filteredCountries.forEach((country)=>{
//     console.log ("Population:", country.population);
//       console.log ("Region:" ,country.region);
//         console.log ("Capital:" ,country.capital);
//         if(country.flags && country.flags.svg){
//           console.log ("Flag url:", country.flag.svg);
//         }else{
//             console.log("flag url: not available");
//         }
//             console.log("name" ,country.name.common);
// });
// });

//create DOM element for the country cards.//
const countryContainer = document.querySelector('.country-container')
const countrycards = document.createElement('div');
countrycards.classList.add('country-cards')
console.log(countrycards)

//create a img inside the card
//Option 1

// const cardsImg= document.createElement('img')
// cardsImg.src ='https://flagcdn.com/de.svg'
// countrycards.append(cardsImg)
// console.log(cardsImg)

//option2

const cardHTML= 
` <img src="https://flagcdn.com/de.svg" alt="Germany" />
        <div class="card-details">
          <h2 class="details-title">Germany</h2>
          <p><b>Population: </b>81,990,900</p>
          <p><b>Region: </b>Europe</p>
          <p><b>Capital: </b>Berlin</p>  
          </div> 
          `
          countrycards.innerHTML= cardHTML
          countryContainer.append(countrycards)
 

         