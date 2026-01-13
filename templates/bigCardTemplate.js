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
            <p><span class="label">Species: </span>   ${mon.name}</p>
            <p><span class="label">Weight:  </span>  ${mon.height}0 cm</p>
            <p><span class="label">Height:  </span>  ${mon.weight} kg</p>
            <p id="abilities"><span class="label">Abilities:</span>  </p>
          </div>
  `
}

function getBigCardBaseStatsContent(mon){
  return `
        <div class="breeding">
            <p><span class="label">Hp:</span> ${mon.stats[0].base_stat} </p>
            <p><span class="label">Attak:</span> ${mon.stats[1].base_stat}</p>
            <p><span class="label">Defense:</span> ${mon.stats[2].base_stat}</p>
            <p><span class="label">Special Attak:</span> ${mon.stats[3].base_stat}</p>
            <p><span class="label">Special Defense:</span> ${mon.stats[4].base_stat}</p>
            <p><span class="label">Speed:</span> ${mon.stats[5].base_stat}</p>
        </div>
  `
}

function getBigCardEvolutionContent(){
  return `
          <div class="evo" id="evoLines">

          </div>
  `
}

async function getEvoContent(mon){
  return `
          <div class="evoLine">
            <img src="${mon.picUrl}"></img>
            <p>${mon.name}</p>
          </div>
  `
}

function getBigCardBreedingContent(mon){
  return `
      <div class="breeding">
            <p><span class="label">Gender Diffrent: </span><span id="gender"></span> </p>
            <p><span class="label">Egg Group:</span><span id="egg_group"></span>   </p>
            <p><span class="label">Capture Rate: </span><span id="capture_rate"></span>  </p>
            <p><span class="label">Color: </span><span id="color"></span>  </p>
        </div>
  `
}

function getBigCardFooter(id){
  return `
         <button id="left_button" onclick="anotherMon(${id}, '-')"></button>
         <button id="right_button" onclick="anotherMon(${id},'+')"></button>
        `
}