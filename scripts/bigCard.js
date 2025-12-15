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

function contentSwitch(poke, content, url){
    if(content == "about"){
        getAbilities(poke.abilities);
    }else if(content == "baseStats"){

    }else if(content == "evolution"){

    }else if(content == "breeding"){

    }
}
