function init() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    getPokemon(url);
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

