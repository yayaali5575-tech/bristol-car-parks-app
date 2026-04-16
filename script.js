function loadData() {
    const carParks = [
        "Cabot Circus Car Park",
        "Trenchard Street Car Park",
        "Prince Street Car Park",
        "The Galleries Car Park",
        "Clifton Down Car Park"
    ];

    const list = document.getElementById("list");
    list.innerHTML = "";

    carParks.forEach(function(carPark) {
        const li = document.createElement("li");
        li.textContent = carPark;
        list.appendChild(li);
    });
}
