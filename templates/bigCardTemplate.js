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

function getBigCardAboutContent() {
  return `
          <div class="about">
            <p>Species: </p>
            <p>Weight: </p>
            <p>Height: </p>
            <p>Abilities: </p>
          </div>
          <div class="breeding">
            <h3>Breeding</h3>
            <p>Gender: </p>
            <p>Egg Group: </p>
            <p>Egg Cycle: </p>
          </div>
  `
}

function getBigCardBaseStatsContent(){
  return ``
}

function getBigCardEvolutionContent(){
  return ``
}

function getBigCardMovesContent(){
  return ``
}

function getBigCardFooter(id){
  return `
         <button onclick="anotherMon(${id}, '-')"><-</button>
         <button onclick="anotherMon(${id},'+')">-></button>
        `
}