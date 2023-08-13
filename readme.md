

This Single Page Application (SPA) allows users to search for movies using the Open Movie Database (OMDB) API and upvote their favorite movies. The application is built using HTML, CSS, and JavaScript.

***Features
Search Movies: Users can enter a minimum of three characters in the search input to retrieve a list of movies matching the query from the OMDB API.

Display Movie Cards: The retrieved movies are displayed as cards on the page, showing the movie poster, title, year, and upvote button.

Upvote Movies: Users can upvote their favorite movies by clicking the "Upvote" button on the movie card. The upvote count is displayed next to the button and is updated in real-time.

***Usage
Obtain OMDB API Key: Replace '287095b2' in the apiKey variable with your actual OMDB API key.

HTML Structure: The application's structure is defined in the HTML file. The search input and movie container elements are selected using JavaScript.

Fetch Movie Data: The fetchMovieData function sends a request to the OMDB API using the provided query. The API key is appended to the request URL.

Update Upvote Count: The updateUpvote function increments the upvote count for a specific movie and updates the corresponding element's content.

Display Movie Cards: The displayMovies function generates movie cards for the retrieved movies and appends them to the movieContainer element.

Search Input Event Listener: An event listener is added to the search input to trigger a movie search when the user enters at least three characters. The retrieved movies are displayed using the displayMovies function.

Upvote Button Event Listener: The movieContainer element has an event listener that responds to clicks on the "Upvote" buttons. The upvote count is updated using the updateUpvote function.

***Instructions
Replace '287095b2' with your actual OMDB API key in the apiKey variable.

Open the HTML file in a web browser to interact with the application.

Enter at least three characters in the search input to retrieve and display matching movies.

Click the "Upvote" button on a movie card to increase its upvote count.

***Technologies Used
HTML
CSS
JavaScript

***redits
The OMDB API for movie data: OMDB API

***Author
Theophilus Appiah-Mensah

***License
This project is licensed under the MIT License.






