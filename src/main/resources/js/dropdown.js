console.log("jeg er i dropdown")
const urlKapsejlads = "http://localhost:8080/alleKapsejlads"
const urlBåde = "http://localhost:8080/allBoats"

const pbFillDropDown = document.getElementById("pbFillDropDown")
const ddKapsejlads = document.getElementById("ddKapsejlads")
const ddBåde = document.getElementById("ddBåde")

function fetchKapsejlads(url){
    return fetch(url).then((response) => response.json())
}

function showKapsejlads(kapsejlads){
    console.log(kapsejlads)
}
function showBåde(både){
    console.log(både)
}

function actionShowBåde(){
    showAlleBåde()
}

function actionShowKapsejlads(){
    showAlleKapsejlads()
}

async function showAlleBåde(){
    const bådeList = await fetchKapsejlads(urlBåde);
    console.log(bådeList)
    bådeList.forEach(showBåde)
    fillDropDownBåde(bådeList)
}

async function showAlleKapsejlads(){
    const kapsejlList = await fetchKapsejlads(urlKapsejlads);
    console.log(kapsejlList)
    kapsejlList.forEach(showKapsejlads)
    fillDropDown(kapsejlList)
}

function addKapsejladsToDropDown(item){
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.navn;
    ddKapsejlads.append(el)
}

function addBådeToDropDown(item){
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.bådId;
    ddBåde.append(el)
}

function fillDropDown(kapsejlList){
    kapsejlList.forEach(addKapsejladsToDropDown)
}

function fillDropDownBåde(bådeList){
    bådeList.forEach(addBådeToDropDown)
}

pbFillDropDown.addEventListener("click", actionShowKapsejlads)
pbFillDropDown.addEventListener("click", actionShowBåde)
ddKapsejlads.addEventListener("change", select)




