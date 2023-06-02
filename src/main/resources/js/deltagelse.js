//VIS ALLE DELTAGELSER
fetch("http://localhost:8080/alleDeltagelser")
    .then((data) => data.json())
    .then((objectData) => {
        console.log(objectData);
        // Sorterer objectData baseret på point i en faldende rækkefølge
        objectData.sort((a, b) => a.point - b.point);

        let tableData = "";
        objectData.forEach((values) => {
            tableData += `<tr>
            <td>${values.deltagerId}</td>
            <td>${values.båd.bådId}</td>
            <td>${values.kapsejlads.kapsejladsId}</td>
            <td>${values.point}</td>
        </tr>`;
        });
        document.getElementById("t-body").innerHTML = tableData;
    });

//FJERN DELTAGELSE
function deleteDeltagelse() {
    let id = document.getElementById("deleteDeltagelse").value;
    if (id) {
        const endpoint = "http://localhost:8080/deltagelse/" + id;
        fetch(endpoint, {
            method: "DELETE"
        })
            .then(function(response) {
                if (response.ok) {
                    console.log("deltagelse slettet");
                    // Reload the page
                    location.reload();
                } else {
                    console.log("Fejl!");

                }
            })
            .catch(function(error) {
                console.log("En fejl opstod:", error);
                // Her håndteres netværk fejl
            });
    } else {
        console.log("Vær sød at indtaste et ID");

    }
}

//REDIGER DELTAGELSE -- VIRKER  -- INDSÆTTER IKKE BÅDID OG KAPSEJLADSID
function submitForm(event) {
    event.preventDefault(); // Gør formen ikke sendes ved en fejl

    // Henter form data
    let deltagerId = document.getElementById('deltagelseId').value;
    let point = document.getElementById('point').value;
    let bådId = document.getElementById('bådId2').value;
    let kapsejladsId = document.getElementById('navn').value;
    // Forbereder data object
    var data = {
        deltagerId: deltagerId,
        point: point,
        bådId: bådId,
        kapsejladsId: kapsejladsId
    };

    // Sender en put request til at opdatere deltagelser
    fetch(`http://localhost:8080/deltagelser/${deltagerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Deltagelse opdateret:', data);
            // Reloader siden efter sucess
            location.reload()
        })
        .catch(error => {
            console.error('Fejl opdatering deltagelse:', error);
            // Handle the error gracefully
        });
}
// Add event listener to the form
document.getElementById('editDeltagelseForm').addEventListener('submit', submitForm);