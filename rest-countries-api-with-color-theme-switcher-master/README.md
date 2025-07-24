# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](preview.jpg)

## The challenge

My challenge was to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field(will add this shortly, knowledge block)
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page(working on it)
- Toggle the color scheme between light and dark mode *(optional)*
- 
**My Process**
  
Built With:

Semantic HTML5

CSS3 custom properties

Flexbox and CSS Grid

JavaScript 

REST Countries API 

Mobile-first responsive design

Dark/Light Mode Toggle  


**Screenshot of my project**

<img width="1920" height="1060" alt="Screenshot of Restcountries API" src="https://github.com/user-attachments/assets/1d7cb2bd-9536-4f49-8bbe-458facc2ebec" />


## Links
Solution URL: https://github.com/Sneha013084/PROJECT-1-Rest-countries-API

Live Site URL: Live Demo


## Building steps in my project:



1. Initialized my project as a public repository on [GitHub](https://github.com/Sneha013084/PROJECT-1-Rest-countries-API). 

2. Created a folder with three core files: index.html, style.css, script.js

3. Built the HTML Layout

        Added a main container using <div class="main-container">

            Included:

                      A theme toggle button (id="theme-toggle")

                      A search bar (not fully functional yet)

                      A region filter dropdown (class="filter-by-region")

                      An empty container for country cards (class="country-container")

4.Styled the Layout with CSS

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

     Endpoint:
     https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region

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

                  fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)

                Re-rendered only the filtered countries

                Cleared previous countries using countryContainer.innerHTML = ""


7.




4.  Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
5. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
6. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
7. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [community](https://www.frontendmentor.io/community). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi@frontendmentor.io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
