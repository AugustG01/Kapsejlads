console.log("jeg er i dropdown")
const urlKapsejlads = "http://localhost:8080/alleKapsejlads"
const urlBåde = "http://localhost:8080/allBoats"


const pbFillDropDown = document.getElementById("pbFillDropDown")
const ddKapsejlads = document.getElementById("kapsejladsId")
const ddBåde = document.getElementById("bådId")
const point = document.getElementById("ddPoint")

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
    el.textContent = item.kapsejladsId;
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

//sender informationen fra dropdown tabellen


function postDeltager(url, data){
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    });

}
function sendTableData() {

    const data = {
        bådId: ddBåde.value,
        kapsejladsId: ddKapsejlads.value
    };

    let deltager = {point: point.value}
    alert(deltager.point)

    postDeltager("http://localhost:8080/createDeltagelser"+"/"+data.kapsejladsId+"/"+data.bådId, JSON.stringify(deltager))
}




function sendData(kapsejladsId, bådId, point) {
    const url = "http://localhost:8080/createDeltagelser/" + kapsejladsId+"/"+bådId;

    // Set up the fetch request
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error: ' + response.status);
            }
        })
        .then(data => {
            console.log(data); // Handle the response data
        })
        .catch(error => {
            console.error(error); // Handle any errors
        });
}

function postDeltager(url, data){
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
});

}