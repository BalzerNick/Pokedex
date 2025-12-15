function getBigCardDescription(mon){
  return `<div class="dialogHeaderInformation">
           <p>#${mon.id}</p>
           <p>${mon.name}</p>
          </div>
          <div class="dialogHeaderImgs">
              <div id="typesBig" class="typesBig">
                  Type IMG
              </div>
              <img src="${mon.sprite}"></img>
          </div>`
}

function getBigCardMainNavigation(mon){
    return `
          <button id="about" onclick="loadInformation('about', '${mon.url}')">About</button>
          <button id="baseStats" onclick="loadInformation('baseStats', '${mon.url}')">Base Stats</button>
          <button id="evolution" onclick="loadInformation('evolution', '${mon.url}')">Evolution</button>
          <button id="breeding" onclick="loadInformation('breeding', '${mon.url}')">Breeding</button>
    `
}

function getBigCardAboutContent(mon) {
  return `
          <div class="about">
            <p>Species:    ${mon.name}</p>
            <p>Weight:    ${mon.height}0 cm</p>
            <p>Height:    ${mon.weight} kg</p>
            <p id="abilities">Abilities:  </p>
          </div>
  `
}

function getBigCardBaseStatsContent(){
  return `
        <div class="breeding">
            <p>Atk: </p>
            <p>Special Atk: </p>
            <p>Def: </p>
        </div>
  `
}

function getBigCardEvolutionContent(){
  return `
          <div class="breeding">
            <p>Gender: </p>
            <p>Egg Group: </p>
            <p>Egg Cycle: </p>
          </div>
  `
}

function getBigCardBreedingContent(){
  return `
          <div class="breeding">
            <p>Gender: </p>
            <p>Egg Group: </p>
            <p>Egg Cycle: </p>
          </div>
  `
}

function getBigCardFooter(id){
  return `
         <button onclick="anotherMon(${id}, '-')"><-</button>
         <button onclick="anotherMon(${id},'+')">-></button>
        `
}