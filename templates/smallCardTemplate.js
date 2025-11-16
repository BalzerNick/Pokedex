function getSmallCardTemplate(mon, type) {
      return `
     <button class="cardSmall secondaryBackground"
         id="small_card"
         onclick='openModal("${mon.Url}")'>
      <div id="small_card_top" class="smallTop" >
        <span  id="number_small" class="numberSmall">#${mon.ID}</span>
        <span  id="name_small" class="nameSmall">${mon.Name}</span>
      </div>
      <div id="small_card_middle${mon.ID}" class="smallMiddle ">
        <img src="${mon.PNG}" alt="${mon.Name}">
      </div>
      <div id="small_card_bottom${mon.ID}" class="smallBottom"></div>
    </button>
  `;
}     

function getButtonTemplate(){
    return `
            <div class="smallCardButtonContainer">
                <button class="smallCardButton secondaryBackground" onclick="getPokemon()">Load more Pokemon</button>
            </div>
        `
}

//${type}

function getSmallCardTypes(type){
    return `
       <img src="${type.TypePng}" alt="">
    `
}

function getSpinner(){
    return `
        <div class="loading"> 
            <img src="assets/img/pokeball_color.png" class="spinner" alt="Pokeball in rot weiß">
            <p>...loading</p>
        </div>    
        `
}