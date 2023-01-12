const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('random');

const searchButton = document.getElementById('search-btn')

const searchInput = document.getElementById('form-control')


const showSuperheroDetails = (data) => {
    console.log(data);
    document.querySelector('.app-body-content-thumbnail').innerHTML = `
        <img src = "${data.image.url}">
    `;

    document.querySelector('.name').textContent = data.name;
    document.querySelector('.powerstats').innerHTML = `
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>intelligence</span>
        </div>
        <span>${data.powerstats.intelligence}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>strength</span>
        </div>
        <span>${data.powerstats.strength}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>speed</span>
        </div>
        <span>${data.powerstats.speed}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>durability</span>
        </div>
        <span>${data.powerstats.durability}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>power</span>
        </div>
        <span>${data.powerstats.power}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>combat</span>
        </div>
        <span>${data.powerstats.combat}</span>
    </li>
    `;
}

const getSuperHero = (id, name) => {
    // name 👉 base_url/search/batman
    // json.results[0].image.url
    // id: 👉 base_url/id
    // json.image.url
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.powerstats)
            const superHero = json
            showSuperheroDetails(superHero)
        })
}


const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    searchInput.value=""
    fetch(`${BASE_URL}/search/${name}`)
      .then(response => response.json())
      .then(json => {
        const hero = json.results[0]
        console.log(hero)
        showSuperheroDetails(hero) 
      })
  }

const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}

searchButton.onclick = () => getSearchSuperHero(searchInput.value)

newHeroButton.onclick = () => getSuperHero(randomHero())

