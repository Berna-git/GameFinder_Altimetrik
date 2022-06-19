// variables Api
const URL_API = 'https://api.rawg.io/api/games';
const KEY_API = `6d932a01004d402fa0bde94a87890dc3`;
// Functions  
const getGameDescription = async (id) => {
    try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=6d932a01004d402fa0bde94a87890dc3`);
        const descripGame = await response.json();
        // console.log(descripGame)
        return descripGame;
    } catch (err) {
        console.log(err)
    }  
}

//  Get games and return Array of Games
const getGames = async () => {
    try {
        const response = await fetch(`${URL_API}?key=${KEY_API}`);
        const gamesResults = await response.json();
        return gamesResults.results;
    } catch (error) {
        console.log(error);
    }
}


const renderGames = async() => {
    let listgames = await getGames();
    let containerRender  = document.querySelector('.main-container__grid')
    listgames.forEach( async(game, index) => {
        let gameForId = await getGameDescription(game.id);
        containerRender.innerHTML += `<div id="item-grid" class="main-cards main-cards__small">
        <img src="${game.background_image}" alt="">
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33301 3.33342C4.47967 3.33342 2.99967 4.81742 2.99967 6.62275C2.99967 8.65475 4.17567 10.8228 5.99434 12.9468C7.52234 14.7294 9.37834 16.3374 10.9997 17.6348C12.621 16.3374 14.477 14.7281 16.005 12.9468C17.8237 10.8228 18.9997 8.65342 18.9997 6.62275C18.9997 4.81742 17.5197 3.33342 15.6663 3.33342C13.813 3.33342 12.333 4.81742 12.333 6.62275C12.333 6.97638 12.1925 7.31552 11.9425 7.56556C11.6924 7.81561 11.3533 7.95609 10.9997 7.95609C10.6461 7.95609 10.3069 7.81561 10.0569 7.56556C9.80682 7.31552 9.66634 6.97638 9.66634 6.62275C9.66634 4.81742 8.18634 3.33342 6.33301 3.33342ZM10.9997 2.87875C10.4351 2.18642 9.72327 1.62865 8.91602 1.24601C8.10876 0.863371 7.22636 0.665487 6.33301 0.666754C3.03167 0.666754 0.333008 3.32009 0.333008 6.62275C0.333008 9.62409 2.02234 12.4094 3.96901 14.6814C5.94367 16.9868 8.36501 18.9721 10.181 20.3854C10.4151 20.5675 10.7031 20.6663 10.9997 20.6663C11.2962 20.6663 11.5843 20.5675 11.8183 20.3854C13.6343 18.9721 16.0557 16.9854 18.0303 14.6814C19.977 12.4094 21.6663 9.62409 21.6663 6.62275C21.6663 3.32009 18.9677 0.666754 15.6663 0.666754C13.7863 0.666754 12.101 1.52809 10.9997 2.87875Z" fill="white"/>
        </svg>    
        <section class="section-card__information">
            <span class="section-card__name">
            <h3>${game.name}</h3>
            <p>#${index+ 1}</p>
            </span>
            <div id="bigcard-display" class="section-smallCard__display">
                <span class="section-card__date">
                    <p>Release date:</p>
                    <p>${game.released}</p>
                    <div id="smallcard-icon" class="date-smallcard__icons">
                        <img src="../assets/icons/playstation.svg" alt="">
                        <img src="../assets/icons/xbox.svg" alt="">
                        <img src="../assets/icons/windows.svg" alt="">
                    </div>
                </span>
                <span class="section-card__gneres">
                    <p>Genres:</p>
                    <p>${gameForId.genres[0].name}, ${gameForId.genres[1].name}</p>
                    <!-- <p></p> -->
                    <div id="bigcard-icon" class="date-bigcard__icons">
                        <img src="../assets/icons/playstation.svg" alt="">
                        <img src="../assets/icons/xbox.svg" alt="">
                        <img src="../assets/icons/windows.svg" alt="">
                    </div>
                </span>
            </div>
            <span id="card-description" class="section-card__description"> 
            <p id=render_description></p>
            </span>
        </section>
        </div>`
        // let descriptionGames = await getGameDescription(game.id);
        // document.querySelector('#render_description').innerHTML += descriptionGames; 
        
    });
    
}
renderGames()





