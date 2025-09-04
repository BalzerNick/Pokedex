function renderSmallCard(pokemon){
    const smallContainer = document.getElementById("small_card_container");
    smallContainer.innerHTML = "";
    for (let index = 0; index < pokemon.length; index++) {
        smallContainer.innerHTML += getSmallCardTemplate(pokemon[index], pokemon[index].Type[0].TypeName);
        renderTypeSmall(pokemon[index].Type,pokemon[index].ID );
  
        
    }

   
}

function renderTypeSmall(types, id){
    console.log(types);
    
    const typeContainer = document.getElementById(`small_card_bottom${id}`);
    typeContainer.innerHTML = "";
    for (let index = 0; index < types.length; index++) {
        typeContainer.innerHTML += getSmallCardTypes(types[index])
    }
}

