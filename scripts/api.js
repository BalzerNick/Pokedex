let pokeArray = [];

async function getPokemon(url){
    let response = await fetch(url);
    let toJson = await response.json();
    
    makePokeArray(toJson.results);
}


async function getPokemonInformations(url){
    let response = await fetch(url);
    let toJson = await response.json();
    
    let pokeData = {
        "PNG": toJson.sprites.other["official-artwork"].front_default,
        "ID": toJson.id,
        "Type": toJson.types
    }

    return pokeData;
}

async function getType(types) {
    let typeArray = [];
    for (let index = 0; index < types.length; index++) {
        let png = await getTypeInformations(types[index].type.url);

        let typeData = {
            TypePng: png,
            TypeName: types[index].type.name
        }
        typeArray.push(typeData)
    }

    return typeArray;
}

async function getTypeInformations(typeUrl){
    let response = await fetch(typeUrl);
    let toJson = await response.json();

    return toJson.sprites["generation-ix"]["scarlet-violet"].name_icon
}

async function makePokeArray(pokeList){
    for (const element of pokeList) {
        let data = await getPokemonInformations(element.url);    
        let types = await getType(data.Type);

        let Pokemon = {
           Name: element.name, 
           ID: data.ID,
           PNG: data.PNG,
           Type: types
        }
        pokeArray.push(Pokemon);
    }
    renderLittleCard(pokeArray)
    console.log(pokeArray); 
}