let currentNames = [];

function init() {
    getPokemon();
}

function visibilityDialog(mon, type) {
    let overlayRef = document.getElementById('bigPokemonCard');
     overlayRef.showModal();
    overlayRef.classList.toggle('dialogOpenStyle');
    
    //Hier Funktion um das gedrückte Pokemon zu öffnen
    //overlayRef.innerHTML = getBigCardTemplate(mon, type);
}

function openModal(){
    let overlayRef = document.getElementById('bigPokemonCard');
    overlayRef.showModal();
    overlayRef.classList.add('dialogOpenStyle');
}

function closeModal(){
      let overlayRef = document.getElementById('bigPokemonCard');
      overlayRef.classList.remove('dialogOpenStyle');
    //   overlayRef.innerHTML = "";
     overlayRef.close();
}

function noEvent(event){
    event.stopPropagation();
}

function filterAndShowNames(filterWord){
    if(filterWord.length >= 3){
        currentNames = pokeArray.filter(pokemon =>pokemon.Name.includes(filterWord));
        renderSmallCard(currentNames);
    }
    else if(filterWord.length == 0){
        currentNames = pokeArray;
        renderSmallCard(currentNames);
    } 
}

function showLoadingSpinner(){
    const smallContainer = document.getElementById("small_card_container");
    smallContainer.innerHTML = "";
    smallContainer.innerHTML = getSpinner();
}