const homesCardsAvailable = document.getElementById('homes-guests-wrapper');
const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

const renderMatches = (data) => {
    const cards = data.map(
        (card) => `<div class ="col-md-6 col-lg-12 col-6 homes-guests__container">
    <div class ="homes-guests__rectangle">
        <img class ="homes-guests__image" src=${card.imageUrl} alt=${card.name} />
        <a class ="homes-guests__subtitle-link" href="#">${card.name}</a>
        <div class ="homes-guests__subtitle-caption">${card.city}, ${card.country}</div>
    </div>
    </div>`).join('');
    homesCardsAvailable.innerHTML = ' ';
    homesCardsAvailable.insertAdjacentHTML('afterbegin', cards);
}

const filterMatches = async (val) => {
    if (sessionStorage.getItem('data')) {
        const storedData = JSON.parse(sessionStorage.getItem('data'));
        renderMatches(storedData, val);
    } else {
        const data = await fetch(url);
        const response = await data.json();
        sessionStorage.setItem('data', JSON.stringify(response));
        renderMatches(response, val);
    }
}
filterMatches()






