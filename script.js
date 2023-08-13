const apiKey = '287095b2'; // Replace with your actual API key
const searchInput = document.getElementById('searchInput');
const movieContainer = document.getElementById('movieContainer');
let movies = [];

// Function to fetch movie data from the OMDB API
async function fetchMovieData(query) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
    const data = await response.json();
    return data.Search;
}

// Function to update upvote count for a movie
function updateUpvote(movieCard, movie) {
    const upvoteCountElement = movieCard.querySelector('.upvote-count');
    movie.upvotes = (movie.upvotes || 0) + 1;
    upvoteCountElement.textContent = movie.upvotes;
}

// Function to display movie cards
function displayMovies(movies) {
    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
            <button class="upvote-btn">Upvote</button>
            <span class="upvote-count">${movie.upvotes || 0}</span>
        `;

        movieContainer.appendChild(movieCard);
    });
}

// Event listener for search input
searchInput.addEventListener('input', async (event) => {
    const query = event.target.value;
    
    if (query.length >= 3) {
        movies = await fetchMovieData(query);
        displayMovies(movies);
    }
});

// Event listener for upvote buttons
movieContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('upvote-btn')) {
        const movieCard = event.target.closest('.movie-card');
        const movieTitle = movieCard.querySelector('h2').textContent;

        const selectedMovie = movies.find(movie => movie.Title === movieTitle);
        if (selectedMovie) {
            updateUpvote(movieCard, selectedMovie);
        }
    }
});
