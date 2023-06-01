console.log("jeg er i dropdown")
const urlKapsejlads = "http://localhost:8080/alleKapsejlads"

const pbFillDropDown = document.getElementById("pbFillDropDown")
const ddKapsejlads = document.getElementById("ddKapsejlads")

function fetchKapsejlads(url){
    return fetch(url).then((response) => response.json())
}

function showKapsejlads(kapsejlads){
    console.log(kapsejlads)
}

function actionShowKapsejlads(){
    showAlleKapsejlads()
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

function fillDropDown(kapsejlList) {
    kapsejlList.forEach(addKapsejladsToDropDown)
}

pbFillDropDown.addEventListener("click", actionShowKapsejlads)
ddKapsejlads.addEventListener("change", select)