let pokeArray = [];

async function getPokemon(){
    showLoadingSpinner()
    let amount = pokeArray.length;
    let url = `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${amount}`;
    let response = await fetch(url);
    let toJson = await response.json();
    
    makePokeArray(toJson.results, "small");
}


async function getPokemonInformations(url, card){
    let response = await fetch(url);
    let toJson = await response.json();
    let pokeData = "";
    if(card == "small"){
        pokeData = getSmallData(toJson);
    }
    else if(card == "big"){
        pokeData = getBigData(toJson, url)
    }
    return pokeData;
}

async function getSmallData(json){
    let pokeData = {
        "PNG": json.sprites.other["official-artwork"].front_default,
        "ID": json.id,
        "Type": json.types
    }
    return pokeData;
}

async function getBigData(json, url){
    let data = {
        "sprite": json.sprites.other["showdown"].front_default,
        "id": json.id,
        "type": json.types,
        "name": json.species.name,
        "abilities": json.abilities,
        "height" : json.height,
        "weight" :json.weight / 10,
        "stats" : json.stats ,
        "url": url
    }
    return data;
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

async function makePokeArray(pokeList, card){
    for (const element of pokeList) {
        let data = await getPokemonInformations(element.url, card);    
        let types = await getType(data.Type);
        let Pokemon = {
           Name: element.name, 
           ID: data.ID,
           PNG: data.PNG,
           Type: types,
           Url: element.url
        }
        pokeArray.push(Pokemon);
    }
    currentNames = pokeArray;  
    filterAndShowNames(filterWordTemporary);
}

async function getSpeciesDetails(id){
    let url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    return url;
}

async function getEvoChain(url){
    let response = await fetch(url);
    let toJson = await response.json();
    console.log(toJson);
    
    return toJson;
}

async function fetchPokeApi(id){
    let url  = await getSpeciesDetails(id);
    let response = await fetch(url);
    let toJson = await response.json();
    return toJson;
}

async function getEvoPicture(name){
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(url);
    let toJson = await response.json();

    return toJson.sprites.front_default;
}