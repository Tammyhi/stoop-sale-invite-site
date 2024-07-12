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


//Code for Share Buttons
const link = 'https://fontawesome.com/icons/square-facebook?f=brands&s=solid';
//encodeURI(window.location.href);
const shareMsg = encodeURIComponent("Who wants to go to this stoop sale with me?");
const title = encodeURIComponent(document.querySelector('title').textContent);

const shareLink = document.querySelector('.link');
shareLink.href = link;

const fb = document.querySelector('.fb');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const x = document.querySelector('.x');
x.href = `http://x.com/share?&url=${link}&text=${shareMsg}&hashtags=stoopSale`;

const whatsapp = document.querySelector('.whatsApp');
whatsapp.href = `https://wa.me/?text=${shareMsg}: ${link}`;


// Code for Google Map API
let map;

async function initMap() {
  // Closest matching location I could find on Google Map
  const position = { lat: 40.6813827, lng: -73.9960086 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Customizing the marker image and its size
  const PinImg = document.createElement("img");
  PinImg.height = 64;
  PinImg.width = 64;
  PinImg.src =
    "https://cdn-icons-png.flaticon.com/512/3205/3205438.png";

  // Set location and zoom level of the map
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "STOOP_SALE_LOCO",
    disableDefaultUI: true,
  });

  // The marker of the map
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    content: PinImg,
    title: "Stoop Sale",
    gmpClickable: true,
  });
}

initMap();
