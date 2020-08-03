
  const url_base = "https://www.trackcorona.live/api";
  var image= 'img/virus.png';

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4.5,
      center: unitedstates
    });
  
  const dataprovinces = (datavirus) => {
  var html = "";
  
  datavirus.data.forEach((row) => {
    let state = row.location;
    let confirmedcases = row.confirmed;
    let recoveredcases = row.recovered;
    let deadcases = row.dead;
    let totalcases = confirmedcases + recoveredcases + deadcases;

    if(!confirmedcases){
        confirmedcases=0;
    }else if(!recoveredcases){
        recoveredcases=0;
    }else if(!deadcases){
        deadcases=0;
    }else{
        confirmedcases = row.confirmed;
        recoveredcases = row.recovered;
        deadcases = row.dead;
    }

    html = `<div class="ventana">
    <div>
      <h1>${state}</h1>
      <h4>Total casos: &nbsp; &nbsp; <strong>${" "+totalcases}</strong></h4><hr>
      <p> Activos <strong>${" "+confirmedcases}</strong></p>
      <p> Recuperados <strong>${" "+recoveredcases}</strong></p>
      <p> Fallecidos <strong>${" "+deadcases}</strong></p>
    </div>  
  </div>`;

          if (state=='New York'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 40.714, lng: -74.005}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: newyork,
              radius: confirmedcases
            });
          }
          else if(state=='California'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 36.778261, lng: -119.4179324}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: california,
              radius: confirmedcases
            });
          }
          else if(state=='Oregon'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 43.8041334, lng:-120.554201}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: oregon,
              radius: confirmedcases
            });
          }
          else if(state=='Illinois'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 40.6331249, lng: -89.3985283}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: illinois,
              radius: confirmedcases
            });
          }
          else if(state=='Arkansas'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 35.20105, lng: -91.8318334}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: arkansas,
              radius: confirmedcases
            });
          }
          else if(state=='Maine'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 45.253783, lng: -69.4454689}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: maine,
              radius: confirmedcases
            });
          }
          else if(state=='Montana'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 46.8796822, lng: -110.3625658}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: montana,
              radius: confirmedcases
            });
          }
          else if(state=='New Hampshire'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 43.1938516, lng: -71.5723953}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: newHampshire,
              radius: confirmedcases
            });
          }
          else if(state=='Colorado'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 39.5500507, lng: -105.7820674}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: colorado,
              radius: confirmedcases
            });
          }
          else if(state=='Northern Mariana Islands'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 15.0979, lng: 145.6739}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: northernMarianaIslands,
              radius: confirmedcases
            });
          }
          else if(state=='Minnesota'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 46.729553, lng: -94.6858998}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: minnesota,
              radius: confirmedcases
            });
          }
          else if(state=='Mississippi'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 32.3546679, lng: -89.3985283}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: mississippi,
              radius: confirmedcases
            });
          }
          else if(state=='Rhode Island'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 41.5800945, lng: -71.4774291}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: rhodeIsland,
              radius: confirmedcases
            });
          }
          else if(state=='Vermont'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 44.5588028, lng: -72.57784149999999}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: vermont,
              radius: confirmedcases
            });
          }
          else if(state=='Nebraska'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 41.4925374, lng: -99.9018131}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: nebraska,
              radius: confirmedcases
            });
          }
          else if(state=='New Jersey'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 40.0583238, lng: -74.4056612}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: newJersey,
              radius: confirmedcases
            });
          }
          else if(state=='West Virginia'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 38.5976262, lng: -80.4549026}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: westVirginia,
              radius: confirmedcases
            });
          }
          else if(state=='Wisconsin'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 43.7844397, lng: -88.7878678}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: wisconsin,
              radius: confirmedcases
            });
          }
          else if(state=='Wyoming'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 43.0759678, lng: -107.2902839}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: wyoming,
              radius: confirmedcases
            });
          }
          else if(state=='Guam'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 13.4769474, lng: 144.7425932}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: guam,
              radius: confirmedcases
            });
          }
          else if(state=='New Mexico'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 34.5199402, lng: -105.8700901}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: newMexico,
              radius: confirmedcases
            });
          }
          else if(state=='Kansas'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 39.011902, lng: -98.4842465}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: kansas,
              radius: confirmedcases
            });
          }
          else if(state=='South Dakota'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 43.9695148, lng: -99.9018131}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: southDakota,
              radius: confirmedcases
            });
          }
          else if(state=='Maryland'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 39.0457549, lng: -76.64127119999999}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: maryland,
              radius: confirmedcases
            });
          }
          else if(state=='Tennessee'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 35.5174913, lng: -86.5804473}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: tennessee,
              radius: confirmedcases
            });
          }
          else if(state=='Missouri'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 37.9642529, lng: -91.8318334}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: missouri,
              radius: confirmedcases
            });
          }
          else if(state=='Virgin Island'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 18.335765, lng: -64.896335}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: virginIsland,
              radius: confirmedcases
            });
          }
          else if(state=='Nevada'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 38.8026097, lng: -116.419389}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: nevada,
              radius: confirmedcases
            });
          }
          else if(state=='Washington'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 47.7510741, lng: -120.7401385}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: washington,
              radius: confirmedcases
            });
          }
          else if(state=='Puerto Rico'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position:  {lat: 18.4238478, lng: -66.0648787}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: puertoRico,
              radius: confirmedcases
            });
          }
          else if(state=='Alaska'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 64.2008413, lng: -149.4936733}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: alaska,
              radius: confirmedcases
            });
          }
          else if(state=='Connecticut'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 41.6032207, lng: -73.087749}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: connecticut,
              radius: confirmedcases
            });
          }
          else if(state=='Indiana'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 40.2671941, lng: -86.1349019}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: indiana,
              radius: confirmedcases
            });
          }
          else if(state=='Iowa'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 41.8780025, lng: -93.097702}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: iowa,
              radius: confirmedcases
            });
          }
          else if(state=='Pennsylvania'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 41.2033216, lng: -77.1945247}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: pennsylvania,
              radius: confirmedcases
            });
          }
          else if(state=='Ohio'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 40.4172871, lng: -82.90712300000001}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: ohio,
              radius: confirmedcases
            });
          }
          else if(state=='Delaware'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 38.9108325, lng: -75.52766989999999}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: delaware,
              radius: confirmedcases
            });
          }
          else if(state=='Hawaii'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 19.8967662, lng: -155.5827818}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: hawaii,
              radius: confirmedcases
            });
          }
          else if(state=='Oklahoma'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 35.0077519, lng: -97.092877}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: oklahoma,
              radius: confirmedcases
            });
          }
          else if(state=='Massachusetts'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 42.4072107, lng: -71.3824374}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: massachusetts,
              radius: confirmedcases
            });
          }
          else if(state=='District of Columbia'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 36.9071923, lng: -77.0368707}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: districtofColumbia,
              radius: confirmedcases
            });
          }
          else if(state=='North Carolina'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 35.7595731, lng: -79.01929969999999}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: northCarolina,
              radius: confirmedcases
            });
          }
          else if(state=='North Dakota'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 47.5514926, lng: -101.0020119}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: northDakota,
              radius: confirmedcases
            });
          }
          else if(state=='Alabama'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 32.3182314, lng: -86.902298}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: alabama,
              radius: confirmedcases
            });
          }
          else if(state=='Arizona'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 34.0489281, lng: -111.0937311}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: arizona,
              radius: confirmedcases
            });
          }
          else if(state=='Idaho'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 44.0682019, lng: -114.7420408}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: idaho,
              radius: confirmedcases
            });
          }
          else if(state=='Louisiana'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 30.9842977, lng: -91.96233269999999}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: louisiana,
              radius: confirmedcases
            });
          }
          else if(state=='Michigan'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 44.3148443, lng: -85.60236429999999}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: michigan,
              radius: confirmedcases
            });
          }
          else if(state=='Texas'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 31.9685988, lng: -99.9018131}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: texas,
              radius: confirmedcases
            });
          }
          else if(state=='Virginia'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 37.4315734, lng: -78.6568942}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: virginia,
              radius: confirmedcases
            });
          }
          else if(state=='Florida'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 27.6648274, lng: -81.5157535}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: florida,
              radius: confirmedcases
            });
          }
          else if(state=='Georgia'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 32.1656221, lng: -82.9000751}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: georgia,
              radius: confirmedcases
            });
          }
          else if(state=='South Carolina'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 33.836081, lng: -81.1637245}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: southCarolina,
              radius: confirmedcases
            });
          }
          else if(state=='Utah'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 39.3209801, lng: -111.0937311}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: utah,
              radius: confirmedcases
            });
          }
          else if(state=='Los Angeles'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 34.052, lng: -118.243}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: losangeles,
              radius: confirmedcases
            });
          }
          else if(state=='Vancouver'){
            const infowindow = new google.maps.InfoWindow({content: html});
            let marker = new google.maps.Marker({
                position: {lat: 49.25, lng: -123.1}, 
                map: map, 
                icon: image
            });
                  marker.addListener("mouseover", () => {
                      infowindow.open(map, marker);
                  });
                  marker.addListener("mouseout", () => {
                      infowindow.close(map, marker);
                  });
            // Add the circle for this city to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 0.5,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: vancouver,
              radius: confirmedcases
            });
          }
    });
  }
    // const chicago = {lat: 41.878, lng: -87.629};

          fetch(`${url_base}/provinces`, { 
          method: "GET"
          }).then(function (response) {
          return response.json()
          }).then(function(response) {
          dataprovinces(response);
          })
}

      let dataAPI = {};
      const dataunitedstates = (datac) => {
      dataAPI = datac;
      var html = "";

      datac.data.forEach((row) => {

        let country = row.location;
        let confirmedcases = row.confirmed;
        let recoveredcases = row.recovered;
        let deadcases = row.dead;
        let totalcases = confirmedcases + recoveredcases + deadcases;
        
        html = `<div class="menu">
        <div>
          <br><br><hr><h1>Covid-19</h1>
          <h3>${country}</h3><br><hr><br>
          <p>Total de casos confirmados</p>
          <h2>${totalcases}</h2>
          <p>Casos activos <strong>${" "+confirmedcases}</strong></p>
          <p>Casos recuperados <strong>${" "+recoveredcases}</strong></p>
          <p>Casos mortales <strong>${" "+deadcases}</strong></p><br><br><hr>
          <h1>Instrucciones</h1>
          <p>Para información detallada sobre cada estado, sitúa el puntero del mouse encima del ícono de virus que se encuentran dentro del mapa.</p><br><hr>
        </div>  
      </div>`;
      });
      document.getElementById("content").innerHTML = html;
      }

      fetch(`${url_base}/countries/us`, { 
      method: "GET"
      }).then(function (response) {
      return response.json()
      }).then(function(response) {
      dataunitedstates(response);
      })
        
  