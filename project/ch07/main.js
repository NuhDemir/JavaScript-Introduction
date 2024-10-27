const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');
const movies = [
    { title: "Inception", price: 10, imdb: 8.7, description: "A mind-bending thriller about dreams." },
    { title: "The Dark Knight", price: 12, imdb: 9.0, description: "The caped crusader faces Joker." },
    { title: "Interstellar", price: 15, imdb: 8.6, description: "Space exploration and love." },
    { title: "Parasite", price: 8, imdb: 8.6, description: "A darkly comedic thriller about class divide." },
    { title: "The Matrix", price: 11, imdb: 8.7, description: "A computer hacker learns about the true nature of reality." },
    { title: "Pulp Fiction", price: 10, imdb: 8.9, description: "A series of interconnected stories in Los Angeles." },
    { title: "Forrest Gump", price: 9, imdb: 8.8, description: "The life story of a slow-witted but kind-hearted man." },
    { title: "The Shawshank Redemption", price: 12, imdb: 9.3, description: "Two imprisoned men bond over several years." },
    { title: "Fight Club", price: 11, imdb: 8.8, description: "An insomniac office worker forms an underground fight club." },
    { title: "The Social Network", price: 13, imdb: 7.7, description: "The founding of Facebook and the legal battles that followed." }
];

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();
    }
});

select.addEventListener('change', calculateTotal);

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatsArr = [...selectedSeats];
    const seatsArr = [...seats];
    const selectedSeatIndex = selectedSeatsArr.map(seat => seatsArr.indexOf(seat));
    count.innerText = selectedSeats.length;
    amount.innerText = selectedSeats.length * select.value;
    saveToLocalStorage(selectedSeatIndex);
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) seat.classList.add('selected');
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex != null) select.selectedIndex = selectedMovieIndex;
}

function saveToLocalStorage(indexes) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexes));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

function populateMovieList() {
    movies.forEach(movie => {
        const option = document.createElement("option");
        option.value = movie.price;
        option.textContent = `${movie.title} - ${movie.price} TL`;
        select.appendChild(option);
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.style.backgroundImage = `url('path/to/${movie.title}.jpg')`;
        movieCard.innerHTML = `
            <div class="card-content">
                <h1>${movie.title}</h1>
                <span><i class="fas fa-star"></i> ${movie.imdb}</span>
                <p>${movie.description}</p>
                <button class="watch">Buy Ticket</button>
            </div>`;
        document.querySelector(".gallery").appendChild(movieCard);
    });
}

populateMovieList();