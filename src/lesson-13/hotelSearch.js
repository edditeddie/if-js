const searchHotel = document.getElementById('open-search-form');

const parent = document.querySelector('.homes-guests__wrapper');

searchHotel.addEventListener('submit', (event) => fetchData(event));

async function fetchData(event) {
    event.preventDefault();
    const countryName = document.getElementById('name-hotel').value;
    const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels?search=' + countryName);
    const data = await response.json();
    const cards = data.map(
        (card) => `<div class ="col-md-6 col-lg-12 col-6 homes-guests__container">
    <div class ="homes-guests__rectangle">
        <img class ="homes-guests__image" src=${card.imageUrl} alt=${card.name} />
        <a class ="homes-guests__subtitle-link" href="#">${card.name}</a>
        <div class ="homes-guests__subtitle-caption">${card.city}, ${card.country}</div>
    </div>
</div>`
    );
    parent.innerHTML = ' ';
    parent.insertAdjacentHTML('afterbegin', cards);
}

fetchData();
