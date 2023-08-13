const searchInput = document.getElementById('searchInput');
const movieContainer = document.getElementById('movieContainer');

// Function to fetch movie data from the json-server API
async function fetchMovieData(query = '') {
    const response = await fetch(`http://localhost:3000/movies?Title_like=${query}`);
    const data = await response.json();
    return data;
}

// Function to update upvote count for a movie
async function updateUpvote(movieId, updatedMovie) {
    const response = await fetch(`http://localhost:3000/movies/${movieId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMovie)
    });

    if (response.ok) {
        const updatedData = await fetchMovieData();
        displayMovies(updatedData);
    }
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
            <span class="upvote-count">${movie.likes || 0}</span>
        `;

        const upvoteButton = movieCard.querySelector('.upvote-btn');
        const upvoteCountElement = movieCard.querySelector('.upvote-count');

        upvoteButton.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent the default behavior
            event.stopPropagation(); // Prevent event bubbling

            movie.likes = (movie.likes || 0) + 1;
            await updateUpvote(movie.id, movie);
        });

        movieContainer.appendChild(movieCard);
    });
}

// Event listener for search input
searchInput.addEventListener('input', async (event) => {
    const query = event.target.value;

    if (query.length >= 3) {
        const filteredMovies = await fetchMovieData(query);
        displayMovies(filteredMovies);
    } else {
        const allMovies = await fetchMovieData();
        displayMovies(allMovies);
    }
});

// Initial load of all movies
(async () => {
    const allMovies = await fetchMovieData();
    displayMovies(allMovies);
})();
