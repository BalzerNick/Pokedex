let lastClickedButton = "about";
const bigCardTemplates = {
    about: getBigCardAboutContent,
    baseStats: getBigCardBaseStatsContent,
    evolution: getBigCardEvolutionContent,
    breeding: getBigCardBreedingContent
}

async function renderBigCard(url){
    let poke = await getPokemonInformations(url, "big");
    const bigContainer = document.getElementById("bigCardHeader");
    bigContainer.innerHTML = getBigCardDescription(poke);

    const mainNav = document.getElementById("mainNavigation");
    mainNav.innerHTML = getBigCardMainNavigation(poke);

    const bigFooter = document.getElementById("bigFooter");
    bigFooter.innerHTML = getBigCardFooter(poke.id);

    showInformationsBigCard(poke)
}

async function showInformationsBigCard(poke){
    showColorBig(poke.type);
    let types = await getType(poke.type);
    renderTypeBig(types);
    loadInformation(lastClickedButton, poke.url);
    
}

function renderTypeBig(types){
    const typeContainer = document.getElementById(`typesBig`);
    typeContainer.innerHTML = "";
    for (let index = 0; index < types.length; index++) {
        typeContainer.innerHTML += getSmallCardTypes(types[index])
    }
}

async function loadInformation(buttonId, url){
    let poke = await getPokemonInformations(url, "big");
    lastClickedButton = buttonId;
    changeSelectedBottom(buttonId);
    const template = bigCardTemplates[buttonId](poke);
    const content = document.getElementById("bigCardMainContent");
    content.innerHTML = template;

    contentSwitch(poke, buttonId, url)
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

function anotherMon(id, operator){
    let url = getUrl(id, operator);
    renderBigCard(url);
}

function getUrl(index, operator, id){
    let newId= ""
    if(operator == "+"){
        newId = index +1
    }else{
        newId = index - 1
    }
    if(newId > pokeArray.length){
        newId = 1
    }else if(newId < 1){
        newId = pokeArray.length
    }
    return `https://pokeapi.co/api/v2/pokemon/${newId}`;
}

function changeSelectedBottom(id) {
    const container = document.getElementById('mainNavigation');
    const buttons = container.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('isSelected');
    }
    const button = document.getElementById(id)
    button.classList.add('isSelected');
}

function getAbilities(ab){
    const container = document.getElementById('abilities');
    let array = [];
    
    for (let index = 0; index < ab.length; index++) {
        array.push(ab[index].ability.name)
    }
    container.innerHTML += array.join(', ')
}

function getStats(stats){
    
}

async function contentSwitch(poke, content, url) {
    if (content == "about") {
        getAbilities(poke.abilities);
    } else if (content == "baseStats") {
        getStats(poke.stats);
    } else if (content == "evolution") {
        let data = await fetchPokeApi(poke.id);
        let evo = await getEvoChain(data.evolution_chain.url);
        await makeEvoLines(evo);
    } else if (content == "breeding") {
        let data = await fetchPokeApi(poke.id)
        await showSpeciesDetails(data);
    }
}

async function showSpeciesDetails(data){
    const gender = document.getElementById("gender");
    const egg_group = document.getElementById("egg_group");
    const color = document.getElementById("color");
    const capture_rate = document.getElementById("capture_rate");
    
    gender.innerHTML = data.has_gender_differences;
    egg_group.innerHTML = await getEggGroups(data.egg_groups);
    color.innerHTML = data.color.name;
    capture_rate.innerHTML = data.capture_rate;
}

async function makeEvoLines(evo){
    const base = await makeMon(evo.chain.species.name);
    let firstEvo = "";
    let secondEvo = "";
    if(evo.chain.evolves_to.length > 0){
        firstEvo = await makeMon(evo.chain.evolves_to[0].species.name);
    }
    if(evo.chain.evolves_to[0].evolves_to.length > 0){
        secondEvo =  await makeMon(evo.chain.evolves_to[0].evolves_to[0].species.name)
    }
    showEvoLines(base, firstEvo, secondEvo)
}

async function showEvoLines(base, first, second){
    const container = document.getElementById("evoLines");
    container.innerHTML = await getEvoContent(base);
    if(first.name != ""){
        container.innerHTML += await getEvoContent(first);
    }
    if(second.name != ""){
        container.innerHTML += await getEvoContent(second);
    }
}

async function makeMon(name){
    let pic = await getEvoPicture(name);
    let obj = {
        name: name,
        picUrl: pic
    }
    console.log(obj);
    
    return obj
}

async function getEggGroups(eggs){
    let groups = "";
    for (let index = 0; index < eggs.length; index++) {
        if(groups == ""){
            groups = eggs[index].name
        }
        else{
            groups = groups + ", "+ eggs[index].name
        }

    }
    return groups ;   
}
