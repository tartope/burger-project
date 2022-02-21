fetch('https://bobsburgers-api.herokuapp.com/characters/')
    .then(response => response.json())
    .then(charactersData => {
        // console.log(charactersData)
        charactersData.forEach(character =>{
            buildNavList(character)
        })
        buildCharacterInfo(charactersData[0])
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
// console.log(characterImage, characterName, occupation, firstEpisode)
function buildCharacterInfo(character){
    oneCharacter = character
    characterImage.src = character.image
    characterName.textContent = character.name
    occupation.textContent = character.occupation
    firstEpisode.textContent = `First episode: ${character.firstEpisode}`
}
