urlGetKapsejlads = "http://localhost:8080/alleKapsejlads"
urlGetBåde = "http://localhost:8080/allBoats"

urlPostKapsejlads = "http://localhost:8080/createKapsejlads"


function opretKapsejlads() {

    const selectElement = document.getElementById("kapsejlads");
    const selectedValue = selectElement.value;

    const kapsejlads = {
        navn: selectedValue
    };


    postBåd(urlPostKapsejlads, JSON.stringify(kapsejlads));
}



function submitForm(event) {
    event.preventDefault();

    // Henter data fra formen
    var kapsejladsId = document.getElementById('kapsejladsId').value;
    var navn = document.getElementById('navn').value;

    // Forbereder data objectet
    var data = {
        kapsejladsId: kapsejladsId,
        navn: navn
    };

    // Sender en PUT request til kapsejlads
    fetch(`http://localhost:8080/kapsejlads/${kapsejladsId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Kapsejlads opdateret:', data);
            // Her reloades siden når den er succesfuld
            location.reload()
        })
        .catch(error => {
            console.error('Fejl:', error);
            // Handle the error gracefully
        });
}

// Add event listener to the form
document.getElementById('editKapsejladsForm').addEventListener('submit', submitForm);