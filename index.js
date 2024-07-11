// Code for Like Button
let heartbtn = document.getElementById("heart-btn");
function toggleLike(){
    if(heartbtn.style.color == "grey"){
        heartbtn.style.color = "red";
    }
    else{
        heartbtn.style.color = "grey";
    }
    // <i class="fa-solid fa-heart" style="color: #d80ea5;"></i>
} 


// Code for Google Map API
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 40.6813827, lng: -73.9960086 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // A marker with a with a URL pointing to a PNG.
  const PinImg = document.createElement("img");
  PinImg.height = 50;
  PinImg.width = 50;
  PinImg.src =
    "https://cdn-icons-png.flaticon.com/512/3205/3205438.png";

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "SALE_LOCO",
    disableDefaultUI: true,
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    content: PinImg,
    title: "Stoop Sale",
    gmpClickable: true,
  });
}

initMap();
