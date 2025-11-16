async function renderBigCard(url){
    let poke = await getPokemonInformations(url);
    showColorBig(poke.Type);
}

async function loadInformation(){
    //Informationen per API laden, jenachdem um welches Pokemon es geht
}

function showColorBig(types) {
    const name = `bigPokemonCard`;
    let color1 = "";
    let color2 = "";
    if (types.length > 1) {
        color1 = getColor(types[0].type.name);
        color2 = getColor(types[1].type.name);
    }
    else {
        color1 = getColor(types[0].type.name);
        color2 = getColor(types[0].type.name);
    }
    renderColor(color1, color2, name)
}

function previousMon(index){
    //vorheriges Pokemon anzeigen
}

function nextMon(index){
    //nächstes Pokemon anzeigen
}