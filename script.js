async function loadData() {
    const url = "https://opendata.bristol.gov.uk/api/records/1.0/search/?dataset=car-parks";

    const response = await fetch(url);
    const data = await response.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.records.forEach(record => {
        const li = document.createElement("li");
        li.textContent = record.fields.name || "Unknown car park";
        list.appendChild(li);
    });
}
