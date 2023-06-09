const urlPostBoat ="http://localhost:8080/createBoat"


function opretBåd() {

    const selectElement = document.getElementById("bådstørrelse");
    const selectedValue = selectElement.value;

    const båd = {
        bådStørrelse: selectedValue
    };


    postBåd(urlPostBoat, JSON.stringify(båd));
}

function postBåd(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: data
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error posting:', error);
            throw error;
        });
}

const urlGetBoats = 'http://localhost:8080/allBoats'
const tableProduct = document.getElementById('båd-list')



function submitForm(event) {
    event.preventDefault(); // Gør formen ikke sendes ved en fejl



    // Henter form data
    var bådId = document.getElementById('bådId').value;
    var bådStørrelse = document.getElementById('bådstørrelse2').value;

    // Forbereder data til object
    var data = {
        bådId: bådId,
        bådStørrelse: bådStørrelse
    };

    // Send the PUT request to update the boat Sender en PUT request til boats
    fetch(`http://localhost:8080/boats/${bådId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Båd opdateret:', data);
            // Reloader wedsiden
            location.reload()
        })
        .catch(error => {
            console.error('Fejl opdatering af båd:', error);

        });
}

document.getElementById('editBoatForm').addEventListener('submit', submitForm);
