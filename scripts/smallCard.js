function renderSmallCard(pokemon){
    const smallContainer = document.getElementById("small_card_container");
    smallContainer.innerHTML = "";
    for (let index = 0; index < pokemon.length; index++) {
        smallContainer.innerHTML += getSmallCardTemplate(pokemon[index], pokemon[index].Type[0].TypeName);
        showColorSmall(pokemon[index].Type, pokemon[index].ID);
        renderTypeSmall(pokemon[index].Type,pokemon[index].ID ); 
    }
    smallContainer.innerHTML += getButtonTemplate();
}

function renderTypeSmall(types, id){
    const typeContainer = document.getElementById(`small_card_bottom${id}`);
    typeContainer.innerHTML = "";
    for (let index = 0; index < types.length; index++) {
        typeContainer.innerHTML += getSmallCardTypes(types[index])
    }
}

function showColorSmall(types, id) {
    const name = `small_card_middle${id}`;
    let color1 ="";
    let color2 ="";
    if (types.length > 1) {
        color1 = getColor(types[0].TypeName);
        color2 = getColor(types[1].TypeName);
    }
    else {
        color1 = getColor(types[0].TypeName);
        color2 = getColor(types[0].TypeName);
    }
    renderColor(color1, color2, name)
}

