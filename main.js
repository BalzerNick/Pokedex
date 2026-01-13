let currentNames = [];
let filterWordTemporary = ""
const typeColors = {
  bug: "#A6B91A",
  dark: "#705746",
  dragon: "#6F35FC",
  electric: "#F7D02C",
  fairy: "#D685AD",
  fighting: "#C22E28",
  fire: "#EE8130",
  flying: "#A98FF3",
  ghost: "#735797",
  grass: "#7AC74C",
  ground: "#E2BF65",
  ice: "#96D9D6",
  normal: "#A8A77A",
  poison: "#A33EA1",
  psychic: "#F95587",
  rock: "#B6A136",
  steel: "#B7B7CE",
  water: "#6390F0"
};

function init() {
    getPokemon();
}

function visibilityDialog(mon, type) {
    let overlayRef = document.getElementById('bigPokemonCard');
     overlayRef.showModal();
    overlayRef.classList.toggle('dialogOpenStyle');
     let card = document.getElementById('dialogCard');
    card.classList.add("bigCard");
    //Hier Funktion um das gedrückte Pokemon zu öffnen
    //overlayRef.innerHTML = getBigCardTemplate(mon, type);
}

async function openModal(url){
    let overlayRef = document.getElementById('bigPokemonCard');
    overlayRef.showModal();
    
    await renderBigCard(url);
}

function closeModal() {
    let overlayRef = document.getElementById('bigPokemonCard');
    overlayRef.classList.remove('dialogOpenStyle');
    overlayRef.close();
}

function noEvent(event){
    event.stopPropagation();
}

function filterAndShowNames(filterWord) {
    filterWordTemporary = filterWord;
    if (filterWord.length >= 3) {
        currentNames = pokeArray.filter(pokemon => pokemon.Name.includes(filterWord));
    }
    else if (filterWord.length < 3) {
        currentNames = pokeArray;
    }
    renderSmallCard(currentNames);
}

function showLoadingSpinner(){
    const smallContainer = document.getElementById("small_card_container");
    smallContainer.innerHTML = "";
    smallContainer.innerHTML = getSpinner();
}

function getColor(typeName) {
  const color = typeColors[typeName];
  return color || "#000000"; 
}

function renderColor(color1, color2, idName) {
    const container = document.getElementById(idName);
    let gradient =""
    if(idName.includes("big")){ 
        gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    }
    else{
        gradient = `linear-gradient(to bottom right, ${color1}, ${color2})`;
    }
    
    container.style.background = gradient;
}


function noEvent(event){
    event.stopPropagation();
}