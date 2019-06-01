# ArcTouch code challenge - Upcoming Movies Web App
https://at-code-challenge.herokuapp.com/
## Main architecture

### Back-end:
The application needed an back-end to access a 3rd pary API (The Movies Database) and serve as an API to the client APP.
##### Node.Js
I've been working with javascript for a while now, so it's first a matter of personal preference, besides all advantes to work with it.
##### Express
It's one of the most stabilished server modules for Node enviroment, and I have a lot of experience with it, so it was used to both implement the API, and serve the static files of the front-end.

##### Considerations
The 3rd party API used as data source has most of the needed information scaterred into some endpoints, so the main goal for this back-end application was to parse this data and deliver an API with simpler objects responses to the client. As this is an MVP, the next iteration would be having a caching system for the 3rd party API data, to avoid the API reaching it's limit with higher access, as it has some limits on how many request can be made per minute.

### Front-end:
The front end needed to show a lista of upcoming movies, the detailed info for the movies and movie search capability.
##### React.JS
The choice for React.js was made because I've been working with some React Native projects lately, but had never worked with React for webapps, so it presented a good oportunity try and learn some new stuff, and it is a good, well stabilished framework as well.
##### Bootstrap
It just get the job done, as I am not a very artful designer, I choose to focus on usability, and bootstrap offers a lot of quality of life when wrinting markups. Also used a themede version of bootstrap from bootswatch.com just to avoid that vanilla bootstrap feel.
##### Considerations
The design of the app took a minimalist approach, probably because this is my take o style, and as two of the three main roles of the app could be represented as a list, I focused on making the browsing experience as good as possible, considering that there would have to be pagination, I opted to make an infinite scroll with dynamic load of the data, as most of the users are used to this kind of approach in any social network, thus improving the user experience.

### Instructions
The project structure consists on the back-end on the root of the project, started by `server.js` and the front-end inside `client` folder.
To run the project:
`~/$ npm install`
`~/client$  npm install && npm run build`
`~/$ npm start`

