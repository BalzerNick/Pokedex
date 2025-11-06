function renderSmallCard(pokemon){
    const smallContainer = document.getElementById("small_card_container");
    smallContainer.innerHTML = "";
    for (let index = 0; index < pokemon.length; index++) {
        smallContainer.innerHTML += getSmallCardTemplate(pokemon[index], pokemon[index].Type[0].TypeName);
        renderColor(pokemon[index].Type, pokemon[index].ID);
        renderTypeSmall(pokemon[index].Type,pokemon[index].ID ); 
    }
    smallContainer.innerHTML += getButtonTemplate();
}

function renderTypeSmall(types, id){
    console.log(types);
    
    const typeContainer = document.getElementById(`small_card_bottom${id}`);
    typeContainer.innerHTML = "";
    for (let index = 0; index < types.length; index++) {
        typeContainer.innerHTML += getSmallCardTypes(types[index])
    }
}

function renderColor(types, id) {
    const middle = document.getElementById(`small_card_middle${id}`);
    if (types.length > 1) {
        let color1 = getColor(types[0].TypeName);
        let color2 = getColor(types[1].TypeName);
        let gradient = `linear-gradient(to bottom right, ${color1}, ${color2})`;
        middle.style.background = gradient;
    }
    else {
        let color1 = getColor(types[0].TypeName);
        middle.style.backgroundColor = color1;
    }
}

