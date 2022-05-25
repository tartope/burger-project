//GET data from API
let characters = [];

fetch('https://bobsburgers-api.herokuapp.com/characters/')
    .then(response => response.json())
    .then(charactersData => {
        // console.log(charactersData)
        characters = charactersData
        charactersData.map(character =>{
            buildNavList(character)
        })
        buildCharacterInfo(charactersData[0])
        hookupSeenButton()
    })


const navList = document.getElementById('character-list')
// console.log(navList)
function buildNavList(character){
    const pic = document.createElement('img')
    pic.src = character.image
    navList.appendChild(pic)
    // console.log(pic)

    pic.addEventListener('click', (e)=>{
        // console.log('click')
        buildCharacterInfo(character)
    })
}

let oneCharacter;
const characterImage = document.getElementById('character-image')
const characterName = document.getElementById('character-name')
const occupation = document.getElementById('occupation')
const firstEpisode = document.getElementById('first-episode')
const seen = document.getElementById('seen')
// console.log(characterImage, characterName, occupation, firstEpisode)
function buildCharacterInfo(character){
    oneCharacter = character
    characterImage.src = character.image
    characterName.textContent = character.name
    occupation.textContent = character.occupation
    firstEpisode.textContent = `First episode: ${character.firstEpisode}`
    seen.textContent = seen ? 'Seen' : 'Not seen'

    
}

let seenButton = document.getElementById('seen')
function hookupSeenButton(){
    seenButton.addEventListener('click', (e)=>{
        // console.log('click')
        if(oneCharacter.seen === true){
            oneCharacter.seen = false
        }else{
            oneCharacter.seen = true
        }
        if(oneCharacter.seen === true){
            seenButton.textContent = 'Seen'
        }else{
            seenButton.textContent = 'Not seen'
        }
    })
}

const characterSearch = document.getElementById('character-search')
// console.log(characterSearch)
characterSearch.addEventListener('keyup', (e)=>{
    // console.log(e.target.value)
    // if searchString 'H' make it 'h'
    // if searchString 'h' make it 'h' 
    const searchString = e.target.value.toLowerCase();
    // // console.log(searchString)
    const filteredCharacters = characters.filter(character =>{
        //convert name to lowercare and compare
        return character.name.toLowerCase().includes(searchString)
    });
    if (filteredCharacters.length > 0) {
        navList.innerHTML = '';
        filteredCharacters.map(character => buildNavList(character));
        buildCharacterInfo(filteredCharacters[0]);
    }
    else {
        alert('No characters found');
    }
    // console.log(filteredCharacters)
    // characterSearch.reset();
});
