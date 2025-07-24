

const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener('click',() => {
    document.body.classList.toggle("dark-mode");
})

// fetch(https://restcountries.com/v3.1/name/{countryName}?fullText=true)