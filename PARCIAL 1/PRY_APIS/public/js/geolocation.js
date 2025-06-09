//geolocation

let geolocation = navigator.geolocation;

if (geolocation) {
    geolocation.getCurrentPosition(
        function (position) {
            let latitud = position.coords.latitude;
            document.getElementById("latitud").value=latitud;
            
            let longitud = position.coords.longitude;
            document.getElementById("longitud").value=longitud;

            var map = L.map('map').setView([latitud, longitud], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        })
} else {
    alert("No soporta la geolocalización");
}