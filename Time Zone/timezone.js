const container = document.getElementById('container');

function setTime(cities) {
    cities.map(city => {
        const p = document.createElement('p');
        p.innerText = `${city} 
        Email received at 11:00 AM (on 25 August 2022)`;
        container.appendChild(p);
    })
}

function getCityNames() {
    const url = 'http://worldtimeapi.org/api/timezone/';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setTime(data);
        });
}

getCityNames();