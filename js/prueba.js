// const url_base = "https://www.trackcorona.live/api"

// let dataAPI = {};
// const printData = (datac) => {
// dataAPI = datac;
// var html = "";

// datac.data.forEach((row) => {
// var prueba=row.confirmed;
//   html += `<div class="menu">
//   <div>
//   <h2>Covid-19</h2>
//   <h4>Total de casos confirmados</h4>
//     <h1>${row.confirmed}</h1>
//     <p>Casos recuperados: <strong>${" "+row.recovered}</strong></p>
//     <p>Total Muertes: <strong>${" "+row.dead}</strong></p>
    
//   </div>  
// </div>`;console.log(prueba);
// });
// document.getElementById("contenido").innerHTML = html;
// }


// fetch(`${url_base}/countries/us`, { 
// method: "GET"
// }).then(function (response) {
// return response.json()
// }).then(function(response) {

//   printData(response);
// })

    //This example displays a marker at the center of Australia.
//When the user clicks the marker, an info window opens.
function initMap() {
  const us = { lat: 37.09024, lng: -95.712891 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.5,
    center: us
  });
var image= 'img/greenvi.png';
const url_base = "https://www.trackcorona.live/api"

let dataAPI = {};
const printData = (datac) => {
dataAPI = datac;
var html = "";

datac.data.forEach((row) => {

  html = `<div class="menu">
  <div>
  <h2>Covid-19</h2>
  <h4>Total de casos confirmados</h4>
    <h1>${row.confirmed}</h1>
    <p>Casos recuperados: <strong>${" "+row.recovered}</strong></p>
    <p>Total Muertes: <strong>${" "+row.dead}</strong></p>
    
  </div>  
</div>`;
const infowindow = new google.maps.InfoWindow({
  content:html
});
const marker1 = new google.maps.Marker({
  position: {lat: 35.09024, lng: -92.712891},
  map: map,
  icon: image
});
marker1.addListener("mouseover", () => {
  infowindow.open(map, marker1);
});
marker1.addListener("mouseout", () => {
  infowindow.close(map, marker1);
});
});
document.getElementById("contenido").innerHTML = html;
}


fetch(`${url_base}/countries/us`, { 
method: "GET"
}).then(function (response) {
return response.json()
}).then(function(response) {

  printData(response);
})
// var p=prueba.contentString;
  // const contentString = 
  //   '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   "</div>" +
  //   '<h1 id="firstHeading" class="firstHeading">Covid</h1>' +
  //   '<div id="bodyContent">';
  // const infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  const marker = new google.maps.Marker({
    position: {lat: 37.09024, lng: -95.712891},
    map: map,
    // icon: image
  });
  marker.addListener("mouseover", () => {
    infowindow.open(map, marker);
  });
  marker.addListener("mouseout", () => {
    infowindow.close(map, marker);
  });

  const marker1 = new google.maps.Marker({
    position: {lat: 35.09024, lng: -92.712891},
    map: map,
    icon: image
  });
  marker1.addListener("mouseover", () => {
    infowindow.open(map, marker1);
  });
  marker1.addListener("mouseout", () => {
    infowindow.close(map, marker1);
  });

const markerNY = new google.maps.Marker({
    position: {lat: 40.7127753, lng: -74.0059728},
    map: map,
    // icon: image
  });
  markerNY.addListener("mouseover", () => {
    infowindow.open(map, markerNY);
  });
  markerNY.addListener("mouseout", () => {
    infowindow.close(map, markerNY);
  });
}

