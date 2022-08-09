const parent = document.getElementById('homes-guests-wrapper');
/*const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';*/

const sessionStorage = Window.sessionStorage;
console.log(sessionStorage);
if (sessionStorage) {
    const cards = JSON.parse(sessionStorage.getItem('sessionCard')).map(
        (card) => `<div class ="col-md-6 col-lg-12 col-6 homes-guests__container">
    <div class ="homes-guests__rectangle">
        <img class ="homes-guests__image" src=${card.imageUrl} alt=${card.name} />
        <a class ="homes-guests__subtitle-link" href="#">${card.name}</a>
        <div class ="homes-guests__subtitle-caption">${card.city}, ${card.country}</div>
    </div>
</div>`
    );
    parent.insertAdjacentHTML('afterbegin', cards);
} else {
    /*   async function fetchData() {
        sessionStorage.setItem('sessionCard', JSON.stringify(data));
        const response = await fetch(url);
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
        parent.insertAdjacentHTML('afterbegin', cards);
    }
    fetchData();*/
}
