# IP Address Tracker - Using 2 API's

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [Dynamic Imports](#dynamic-imports)
    - [Adding titles to pages with Next.js](#adding-titles-to-pages-with-nextjs)
    - [Styled-components and Next.js](#styled-components-and-nextjs)
    - [Creating global styles with styled-components](#creating-global-styles-with-styled-components)
    - [Using external fonts with styled-components and Next.js](#using-external-fonts-with-styled-components-and-nextjs)
  - [Continued development](#continued-development)
  - [Returning to this project](#returning-to-this-project)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

This project is an IP Address Tracker app. Type in an IP address and see its location on the world map. I used two diffent [API's](#built-with). This project was my first time using a some of the technologies, e.g. styled-components, Next.js. This project also allowed me to continue learning React, JavaScript and working with API's, as well as improving on other skills such as HTML and CSS.

I was given a Figma design file from [Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) and had to replicate the design as close as possible. Please note that the design only included designs for two widths, 375px and 1440px. I therefore, only developed the app to those design widths but did add responsiveness where possible. Please see the [Returning to this project](#returning-to-this-project) section for how I will update this project in the future.

### Screenshot

![What the project looks like.](/public/screenshot.png)

### Links

- Solution URL: [Code](https://github.com/ioan-thomas/ip-address-tracker)
- Live Site URL: [Visit](http://ip-address-tracker-drab-gamma.vercel.app/)


## My process
### Built with

- HTML & CSS
- Flexbox
- Mobile-first workflow
- JavaScript
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [IP Geolocation API by IPify](https://geo.ipify.org/)
- [LeafletJS](https://leafletjs.com/) with [React Leaflet](https://react-leaflet.js.org/)

### What I learned

###### Environmental variables

A ***fundamental*** concept I learned whilst deploying this project was that local environmental variables in `.env.local` files to not work in production. I explored alternatives such as hosting a node server however, it was out of the scope of the project... Instead, I found that Vercel offers the ability to host environmental variables on the platform, that are accessible to the browser.

###### Dynamic imports

Next.js dynamic import support, which allowed me to import the component (that uses the react-leaflet package) with no SSR. The below function tells the component to only render after the Next.js server-side render has happened. See the code below:

  ```js
    const MapWithNoSSR = dynamic(() => import("../components/Map"), {
      ssr: false,
    })
  ```

###### Adding titles to pages with Next.js

Whilst I used the Head component provided by Next.js in [_document.js](/pages/_document.js), to add a title to a webpage with Next.js, it is advised in their [documentation](https://nextjs.org/docs/messages/no-title-in-document-head) to define titles at the page-level using the `next/head` import.
###### Styled-components and Next.js

Setting-up styled-components requires more work than getting it to work with standard CRA. The process is as follows: 

1. Install the `styled-components` package (NPM or Yarn).
2. Install the `babel-plugin-styled-components` package which is required for server-side-rendering.
3. Extend the `<Document />` and inject the server-side-rendered styles into the `<head>`. Please use the [link](https://github.com/ioan-thomas/ip-address-tracker/blob/main/pages/_document.js) to see an example.
4. Create a file named .babelrc and add the [following](https://github.com/ioan-thomas/ip-address-tracker/blob/main/.babelrc).

You're now up and running with Next.js and styled-components.

###### Creating global styles with styled-components

Creating global styles with styled-components is (as expected) different that standard css global styles. I initally created a global stylesheet and expected it to work, but was then greeted with a console error. I then discovered styled-components' `createGlobalStyle` function. Here is a basic guide to create global styles with styled-components:

1. Remove the default Next.js CSS style files and imports.
2. Create a globalStyles file and use the `createGlobalStyle` function from styled-components.
3. Add some global styles.
4. Place the GlobalStyle component at the top of the React tree (typically inside the App component) as a sibling component to your main application component.

You're now good to go! Check out the [Useful resources](#useful-resources) section for a link to a more in-depth guide.

###### Using external fonts with styled-components and Next.js

Styled-components does not work in the traditional CSS way, and this behaviour continues when importing external fonts. When working with Next.js, appending elements to the head of the page requires you to use Next.js' Head component.

  ```html 
    <Html>
      <Head>
        <title>IP Address Tracker</title>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  ```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

Here are some areas I want to continue focusing on in future projects.

###### Dynamic imports

Although included in my project, I would like to take the time to fully delve into this topic to understand it. 

###### Perfecting CSS 

Given this was my first time using CSS in a project that was made entirely from scratch by me, there were some teething issues. Some of these issues still require work. For example:

- Writing effective CSS selectors. I found myself overwriting styles.
- Working with media-queries. This project was the first time using media-queries, felt apprehensive using them and felt as though I was leaving a lot of unknowns on the table. 

I may also use a library such as MaterialUI that provides pre-made components that implements Google's Material Design. This would not only allow me to ship faster projects, but also allow for a better UI/UX - I can then focus on more important learning topics. 

##### Using different data-fetching methods

Next.js offers a host of ways to render content (aside from the React Client-side Rendering that I used in this project) such as, pre-rendering with SSR or Static Generation, or updating contnent at runtime with Incremental Static Regeneration. 

###### Utilising the styled-normalize package

This package will allow me to have consistent default-styles across the application instead of relying on mine - which I found to be overwriting frequently.

In projects not using styled-components, I could use CSS Normalize or a CSS reset package.  

###### Working with routing 

Given the scope of this project, being a single-use application, there was no need for routing but to provide more value to future development teams I would like to brush up on this topic on bigger projects. 


### Returning to this project

When I have continued my development, I would like to return to this project to implement the following: 

- Utilising the leaflet API to access the user's IP on load and subsequently, show that lcoation on the map - I could possibly display a cirlce on the map showing the accuracy of the location too.
- Adding a tablet design (one was not included by Frontend mentor, thus I will have to design this myself)
- Removing the placeholder text on smaller devices
- Persisting the fetched information (including the user's input) to local storage
- Using CSS Grid to display the fetched data instead of relying on absolutely-positioning elements. This would also clean-up some of the unnecessary styles.


### Useful resources

- [Create an Asset Tracker with Next.js and React Leaflet](https://www.paigeniedringhaus.com/blog/create-an-asset-tracker-with-next-js-and-react-leaflet) - This blog allowed me to get up and running with Next.js and React-leaflet, introducing me to dynamic imports. 

- [Using Next.js with styled-components](https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c) - This is an amazing article which helped me finally understand how to work with styled-components in Next.js. I'd recommend it to anyone learning this concept.


## Author

<!-- - Website - [Ioan Thomas](https://www.your-site.com) -->
- Twitter - [@iioanthomas](https://www.twitter.com/iioanthomas)

