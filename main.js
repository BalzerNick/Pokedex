let currentNames = [];

function init() {
    getPokemon();
}

function visibilityDialog(index, status) {
    let overlayRef = document.getElementById('dialog');
    overlayRef.classList.toggle('dNone');
    overlayRef.classList.toggle('dialogOpenStyle')
    
    //Hier Funktion um das gedrückte Pokemon zu öffnen
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