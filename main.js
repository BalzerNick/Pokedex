let currentNames = [];

function init() {
    getPokemon();
}

function visibilityDialog(string,mon, type) {
    let overlayRef = document.getElementById('dialog');
    overlayRef.classList.toggle('dNone');
    overlayRef.classList.toggle('dialogOpenStyle')
    
    //Hier Funktion um das gedrückte Pokemon zu öffnen
    overlayRef.innerHTML = getBigCardTemplate(mon, type);
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