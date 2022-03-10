"use strict;"


let getData = async () => {
    let response = await fetch('http://localhost:8080/getAll');
    if (response.status !== 200) {
        throw new Error("Request Failed");

    }
    console.log("Request Successful");
    let jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
}

let showData = async (i) => {
    let returnedData 
    if (i == 1) {returnedData = await getData();}
    if (i == 2) {returnedData = await getById(); return;}
    if (i == 3) {returnedData = await getBySong();}
    if (i == 4) {returnedData = await getByAlbum();}
    if (i == 5) {returnedData = await getByArtist();}
    if (i == 6) {returnedData = await getByReleaseDate();}
    if (i == 7) {returnedData = await getByArtistCountry();}
    let allTable =
        `<tr>
            <th>Id</th>
            <th>Song</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Release Date</th>
            <th>Artist Country</th>
        </tr>`;
    for (let d=0;d<returnedData.length;d++) {
            allTable += `<tr>
            <td>`+returnedData[d].id+`</td>
            <td>`+returnedData[d].song+`</td>
            <td>`+returnedData[d].album+`</td>
            <td>`+returnedData[d].artist+`</td>
            <td>`+returnedData[d].releaseDate+`</td>
            <td>`+returnedData[d].artistCountry+`</td>
        </tr>`;
        }
        console.log(allTable);
        document.getElementById("music").innerHTML = allTable;
    }

let getById = async () => {
    let i = parseInt(document.getElementById("id").value);
    let response = await fetch('http://localhost:8080/get/' + i);
    if (response.status !== 200) {
        throw new Error("Request Failed");

    }
    console.log("Request Successful");
    let jsonData = await response.json();
    console.log(jsonData);
    let allTable =
        `<tr>
            <th>Id</th>
            <th>Song</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Release Date</th>
            <th>Artist Country</th>
        </tr>`;
    
            allTable += `<tr>
            <td>${jsonData.id}</td>
            <td>${jsonData.song}</td>
            <td>${jsonData.album}</td>
            <td>${jsonData.artist}</td>
            <td>${jsonData.releaseDate}</td>
            <td>${jsonData.artistCountry}</td>
        </tr>`;
        
        console.log(allTable);
        document.getElementById("music").innerHTML = allTable;
}

let getBySong = async () => {
    let i = document.getElementById("song").value;
    let response = await fetch('http://localhost:8080/getBySong/' + i);
    if (response.status !== 200) {
        throw new Error("Request Failed");

    }
    console.log("Request Successful");
    let jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
}


let getByAlbum = async () => {
    let i = document.getElementById("album").value;
    let response = await fetch('http://localhost:8080/getByAlbum/' + i);
    if (response.status !== 200) {
        throw new Error("Request Failed");

    }
    console.log("Request Successful");
    let jsonData = await response.json();
    console.log(jsonData);
    return jsonData;

}

let getByArtist = async () => {
    let i = document.getElementById("artist").value;
    let response = await fetch('http://localhost:8080/getByArtist/' + i);
    if (response.status !== 200) {
        throw new Error("Request Failed");

    }
    console.log("Request Successful");
    let jsonData = await response.json();
    console.log(jsonData);
    return jsonData;

}

let getByReleaseDate = async () => {
    let i = document.getElementById("releaseDate").value;
    let response = await fetch('http://localhost:8080/getByReleaseDate/' + i);
    if (response.status !== 200) {
        throw new Error("Request Failed");

    }
    console.log("Request Successful");
    let jsonData = await response.json();
    console.log(jsonData);
    return jsonData;

}

let getByArtistCountry = async () => {
    let i = document.getElementById("artistCountry").value;
    let response = await fetch('http://localhost:8080/getByArtistCountry/' + i);
    if (response.status !== 200) {
        throw new Error("Request Failed");

    }
    console.log("Request Successful");
    let jsonData = await response.json();
    console.log(jsonData);
    return jsonData;

}

let createData = async () => {
    const music = {
        song: document.getElementById("cSong").value,
        album: document.getElementById("cAlbum").value,
        artist: document.getElementById("cArtist").value,
        releaseDate: document.getElementById("cRD").value,
        artistCountry: document.getElementById("cAC").value
    };
    fetch("http://localhost:8080/create/", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(music)})
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => error);
    
    }

let updateData = async () => {
    let i = document.getElementById("updateId").value;
    const music = {
        song: document.getElementById("uSong").value,
        album: document.getElementById("uAlbum").value,
        artist: document.getElementById("uArtist").value,
        releaseDate: document.getElementById("uRD").value,
        artistCountry: document.getElementById("uAC").value
    };
    fetch("http://localhost:8080/update/" + i, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(music)})
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => error);
}

let deleteData = async () => {
    let i = document.getElementById("deleteId").value;
    fetch("http://localhost:8080/delete/" + i, {
    method: 'DELETE'
})
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => error);
}

function showHide(obj) {
    for(x=1;x<=2;x++) {
        if (x == obj) {
        document.getElementById('m'+x).style.display = 'block'; 
        } else { 
        document.getElementById('m'+x).style.display = 'none';
        }
    }
}

function openF(obj) {
    for(x=1;x<=9;x++) {
        if (x == obj) {
        document.getElementById('f'+x).style.display = 'block';
        }
    }
}

    function closeF(obj) {
        for(x=1;x<=9;x++) {
            if (x == obj) {
            document.getElementById('f'+x).style.display = 'none';
            }
        }
    }