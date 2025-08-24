function getSmallCardTemplate(mon) {
    return `
            <div class="cardSmall" id="small_card" onclick="toggleOverlay()">
                <div id="small_card_top" class="smallTop">
                    <div id="number_small" class="numberSmall">#${mon.ID}</div>
                    <div id="name_small" class="nameSmall">${mon.Name}</div>
                </div>
                <div id="small_card_middle" class="smallMiddle bug">
                    <img src="${mon.PNG}" alt="${mon.Name}">
                </div>
                <div id="small_card_bottom${mon.ID}" class="smallBottom">
                       
                </div>
            </div>
    `
}

function getSmallCardTypes(type){
    return `
       <img src="${type.TypePng}" alt="">
    `
}