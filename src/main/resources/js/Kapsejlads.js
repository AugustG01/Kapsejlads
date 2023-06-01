urlGetKapsejlads = "http://localhost:8080/alleKapsejlads"
urlGetBåde = "http://localhost:8080/allBoats"

urlPostKapsejlads = "http://localhost:8080/createKapsejlads"


function opretKapsejlads() {

    const selectElement = document.getElementById("kapsejlads");
    const selectedValue = selectElement.value;
    alert("hej")
    const kapsejlads = {
        navn: selectedValue
    };
    alert(kapsejlads.navn);

    postBåd(urlPostKapsejlads, JSON.stringify(kapsejlads));
}