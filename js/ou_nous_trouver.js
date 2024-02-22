"use strict";

document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([43.3275, 5.3998], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    var latitude;
    var longitude;

    navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        setTimeout(function () {
            map.setView([latitude, longitude], 12);

            var marker = L.marker([latitude, longitude]).addTo(map);
            var marker2 = L.marker([43.380892127529464, 5.357347615392914]).addTo(map);

            marker.bindPopup("<b>Vous êtes içi !</b>").openPopup();
            marker2.bindPopup("<b>Le BAWA !</b>").openPopup();


            var distance = calculateDistance(latitude, longitude, 43.380892127529464, 5.357347615392914);
            document.querySelector('.distance').textContent = "Vous êtes à "+ distance +" Km du BAWA";
        }, 1000);
    });


    function calculateDistance(lat1, lon1, lat2, lon2) {
        var earthRadius = 6371; 
        var dLat = toRadians(lat2 - lat1);
        var dLon = toRadians(lon2 - lon1);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        var distance = earthRadius * c;
        return distance.toFixed(2);
    }

    
    function toRadians(degrees) {
        return degrees * Math.PI / 180;
    }
});
