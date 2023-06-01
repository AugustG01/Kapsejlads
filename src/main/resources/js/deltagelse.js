//VIS ALLE DELTAGELSER
fetch("http://localhost:8080/alleDeltagelser")
    .then((data) => data.json())
    .then((objectData) => {
        console.log(objectData);
        // Sort objectData based on the point property in descending order
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
                    // You can handle the error response here.
                }
            })
            .catch(function(error) {
                console.log("En fejl opstod:", error);
                // You can handle any network errors here.
            });
    } else {
        console.log("Vær sød at indtaste et ID");
        // You can display an error message or perform other actions for missing ID.
    }
}

//REDIGER DELTAGELSE -- VIRKER  -- INDSÆTTER IKKE BÅDID OG KAPSEJLADSID
function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    let deltagerId = document.getElementById('deltagelseId').value;
    let point = document.getElementById('point').value;
    let bådId = document.getElementById('bådId2').value;
    let kapsejladsId = document.getElementById('navn').value;
    // Prepare the data object
    var data = {
        deltagerId: deltagerId,
        point: point,
        bådId: bådId,
        kapsejladsId: kapsejladsId
    };

    // Send the PUT request to update the boat
    fetch(`http://localhost:8080/deltagelser/${deltagerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Boat updated successfully:', data);
            // You can add any further logic or UI updates here
            location.reload()
        })
        .catch(error => {
            console.error('Error updating boat:', error);
            // Handle the error gracefully
        });
}
// Add event listener to the form
document.getElementById('editDeltagelseForm').addEventListener('submit', submitForm);