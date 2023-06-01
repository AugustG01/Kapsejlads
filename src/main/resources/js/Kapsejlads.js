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



function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var kapsejladsId = document.getElementById('kapsejladsId').value;
    var navn = document.getElementById('navn').value;

    // Prepare the data object
    var data = {
        kapsejladsId: kapsejladsId,
        navn: navn
    };

    // Send the PUT request to update the boat
    fetch(`http://localhost:8080/kapsejlads/${kapsejladsId}`, {
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
document.getElementById('editKapsejladsForm').addEventListener('submit', submitForm);