const parent = document.querySelector('.homes-guests__container');
const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    const cards = data.map(card => `<div class="homes-guests__rectangle">
                <img
                        class="homes-guests__image"
                        src=${card.imageUrl}
                        alt=${card.name}
                />
                <a class="homes-guests__subtitle-link" href="#"
                >${card.name}</a
                >
                <div class="homes-guests__subtitle-caption">
                </div>
                <svg class="homes-guests__button-arrow2"></svg>
            </div>`).join();
    parent.insertAdjacentHTML('afterbegin', cards);
}

fetchData();

/*
const cards = data.map(card => `<figure class="homes_pic">
    <img src=${card.imageUrl} alt=${card.name}>
                    <figcaption class="homes_desc">
                        ${card.name}
                    </figcaption>
                    <figcaption class="homes_desc_two">
                        ${card.city}, ${card.country}
                        </figcaption>
    </figure>`).join();*/
