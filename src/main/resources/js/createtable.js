urlGetBåde = "http://localhost:8080/allBoats"

//Her vises alle både hvor vi hiver BådID og bådStørrelsen ud og viser dem i den td
fetch(urlGetBåde).then((data) => {return data.json();
}).then((objectData) => {
    console.log(objectData[0].bådId);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
            <td>${values.bådId}</td>
            <td>${values.bådStørrelse}</td>
        </tr>`

    });
    document.getElementById("table_body").innerHTML=tableData;
})


//SLET BÅD
function deleteBoat() {
    var id = document.getElementById("text-field").value;
    if (id) {
        var endpoint = "http://localhost:8080/boat/" + id;
        fetch(endpoint, {
            method: "DELETE"
        })
            .then(function(response) {
                if (response.ok) {
                    console.log("Båd slettet");
                    // Reloader websiden
                    location.reload();
                } else {
                    console.log("Fejl!");

                }
            })
            .catch(function(error) {
                console.log("En fejl opstod:", error);

            });
    } else {
        console.log("Vær sød at indtaste et ID");

    }
}

//KAPSEJLADS
fetch("http://localhost:8080/alleKapsejlads").then((data) => {return data.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
            <td>${values.kapsejladsId}</td>
            <td>${values.navn}</td>
        </tr>`

    });
    document.getElementById("table-body").innerHTML=tableData;
})

function deleteKapsejlads() {
    var id = document.getElementById("text-field").value;
    if (id) {
        var endpoint = "http://localhost:8080/kapsejlads/" + id;
        fetch(endpoint, {
            method: "DELETE"
        })
            .then(function(response) {
                if (response.ok) {
                    console.log("Kapesejlads slettet.");
                    // Reloader websiden
                    location.reload();
                } else {
                    console.log("Fejl!");

                }
            })
            .catch(function(error) {
                console.log("En fejl opstod:", error);

            });
    } else {
        console.log("Vær sød at indtaste et ID");

    }
}
