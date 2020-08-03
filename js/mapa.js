let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.09024, lng: -95.712891 },
    zoom: 4.5
  });
}


// const url_base = "https://www.trackcorona.live/api"

//   let dataAPI = {};
//   const printData = (datac) => {
//   dataAPI = datac;
//   var html = "";

//   datac.data.forEach((row) => {
  
//     html += `<div class="menu">
//     <div>
//     <h2>Covid-19</h2>
//     <h4>Total de casos confirmados</h4>
//       <h1>${row.confirmed}</h1>
//       <p>Casos recuperados: <strong>${" "+row.recovered}</strong></p>
//       <p>Total Muertes: <strong>${" "+row.dead}</strong></p>
      
//     </div>  
//   </div>`;
//   });
//   document.getElementById("contenido").innerHTML = html;
//   }


const url_base = "https://www.trackcorona.live/api"

  let dataAPI = {};
  const printData = (datac) => {
  dataAPI = datac;
  var html = "";

  datac.data.forEach((row) => {
  
    html += `<div class="menu">
    <div>
    <h2>Covid-19</h2>
    <h4>Total de casos confirmados</h4>
      <h1>${row.confirmed}</h1>
      <p>Casos recuperados: <strong>${" "+row.recovered}</strong></p>
      <p>Total Muertes: <strong>${" "+row.dead}</strong></p>
      
    </div>  
  </div>`;
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


  // let dataAP = {};
  // const printDat = (datast) => {
  // dataAP = datast;
  // let html = "";

  // datast.data.forEach((row) => {
  
  //   html += `<div class="menu">
  //   <div>
  //     <p>${row.location}</p>
  //     <p>${row.conf irmed}</p>
  //     <p>${row.dead}</p>
  //     <p>${row.recovered}</p>
  //   </div>  
  // </div>`;
  // });
  // document.getElementById("content").innerHTML = html;
  // }

  // fetch(`${url_base}/provinces/new%20york`, { 
  //   method: "GET"
  //   }).then(function (response) {
  //   return response.json()
  //   }).then(function(response) {
    
  //     printDat(response);
  //   })

//   "location": "United States",
//   "country_code": "us",
//   "latitude": 37.09024,
//   "longitude": -95.712891,
//   "confirmed": 4705889,
//   "dead": 156747,
//   "recovered": 2327572,
//   "updated": "2020-08-01 03:45:05.907318+00:00"