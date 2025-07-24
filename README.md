# **Frontend Mentor - REST Countries API with color theme switcher

## **The challenge**
My challenge was to integrate with the REST Countries API to pull country data and display it like in the designs.

## Users should be able to:

          See all countries from the API on the homepage
          Search for a country using an input field(will add this shortly, knowledge block)
          Filter countries by region
          Click on a country to see more detailed information on a separate page
          Click through to the border countries on the detail page(working on it)
          Toggle the color scheme between light and dark mode (optional)

## **My Process**

## Built With:

          Semantic HTML5
          
          CSS3 custom properties
          
          Flexbox and CSS Grid
          
          JavaScript
          
          REST Countries API
          
          Mobile-first responsive design
          
          Dark/Light Mode Toggle

## Screenshot of my project


<img width="1920" height="1060" alt="image" src="https://github.com/user-attachments/assets/ec53939f-dacf-4910-bc59-1c60be4b6f22" />


## Links

## Solution URL: https://github.com/Sneha013084/PROJECT-1-Rest-countries-API

## Live Site URL: Live Demo

## Building steps in my project:

1. Initialized my project as a public repository on GitHub.

2. Created a folder with three core files: index.html, style.css, script.js

    ## Built the HTML Layout

             Added a main container using <div class="main-container">

     Included:

               A theme toggle button (id="theme-toggle")

               A search bar (not fully functional yet)

               A region filter dropdown (class="filter-by-region")

               An empty container for country cards (class="country-container")
   
4. Styled the Layout with CSS

    Used modern CSS techniques like:

                  Flexbox for layout (.country-container, .search-bar)

                  Box shadows and border radius for card visuals

                  Responsive image styles

  Implemented:

                Light and Dark themes using .dark-mode class

                Transition effects on hover

                Clean input styles for search and dropdown
5. Fetched Country Data using JavaScript

          Used the REST Countries API
          
          Endpoint: https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region
          
          Parsed the JSON response
          
          Looped through the countryData array using forEach()
          
          Created and inserted country cards dynamically using(document fragments):

                                  createElement()
                                  innerHTMl
                                  append()
6. Filtered Countries by Region
                              
                              Selected the region dropdown (.filter-by-region)
                              
                              Added change event listener
                              
                              Made dynamic API call based on selected region:
                              
                              Fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
                              
                              Re-rendered only the filtered countries

                              Cleared previous countries using countryContainer.innerHTML = ""
7. Implemented Theme Toggle

                         Selected the theme toggle button (#theme-toggle)
                    
                         Used classList.toggle('dark-mode') to apply dark styles
                    
                         Tested switching between light and dark modes
   
8.(In Progress) Started Search Functionality Created a search input inside .search-container
          
                  Planned to filter country cards based on user input
          
                  Functionality yet to be completed
## **What I learned**

          How to consume a REST API using fetch
          
          Event delegation and DOM manipulation
          
          Using innerHTML, createElement, and append
          
          Creating responsive layouts using Flexbox
          
          Implementing a light/dark theme switcher

## I'm proud of below code snippet :

  
  const countryContainer = document.querySelector(".country-container");
  const countrycards = document.createElement("div");
  countrycards.classList.add("country-cards");
  console.log(countrycards);
 
  const cardHTML = ` <img src="${country.flags.svg}" alt="country.name.common" />
    <div class="card-details">
      <h2 class="details-title">${country.name.common}</h2>
      <p><b>Population: </b>${country.population}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital}</p>  
      </div> 
      `;
  countrycards.innerHTML = cardHTML;
  countryContainer.append(countrycards);
})
})

## Continued development

          I want to improve how I break down large scripts into smaller,to help with better organization and reusability of code.
          
          Future Improvements Add detailed country pages on click
          
          Enable border country navigation
          
          Implement debounce for search input
          
          Optimize code and add error handling

## To run the project locally:

          Open the folder.
          
          Double-click index.html (opens in a browser).
          
          Use the dropdown to see filtered results.
          
          Click the "Switch Theme" button to change themes.

### Useful resources:

1. https://fontawesome.com/icons/arrow-left?f=duotone&s=solid
2. https://youtu.be/37vxWr0WgQk?si=ogOxZt_YPV2LHjc- : Helped me to fetch data from API.
3. https://youtu.be/aUzCq-uabhw?si=Lj9vBDn-ChW7fl4D : To work with document elements.
4. Lesson : HTML and CSS review with accessibility.
5. Lesson : The Document Object Model


## Acknowledgments:

Bryan helped me with the basic understanding of the project.








