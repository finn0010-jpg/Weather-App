// Variables & DOM Elements
const header = document.querySelector('header');
const main = document.querySelector('main');

// Function to display location search on page load
function loadLocationSearch() {
    main.innerHTML = `
        <section id="location-search">
            <p id="location-search-label">Enter a city below to get the current weather:</p>
            <input type="text" id="location-input" placeholder="Enter your location">
            <button id="search-button">Search</button>
        </section>
    `;

    document.getElementById('search-button').addEventListener('click', () => {
        loadHeader();
    });
}

loadLocationSearch();

// Function to update the header
function loadHeader() {
    


    header.innerHTML = `
        <div id="current-weather-header">
            <div id="current-weather-summary">
                <p id="current-temperature">
                    60F    
                </p>
                <p id="current-conditions">
                    Partly Cloudy
                </p>
                <p id="current-humidity">
                    Humidity: 50%
                </p>
                <p id="current-wind">
                    Wind: 10 mph
                </p>
            </div>
        </div>
    `;

    main.innerHTML = `
        <div id="7-day-forecast">
            <div>
                <!-- Forecast cards will be dynamically inserted here -->
                <div id="forecast-card-one" class="forecast-card">
                    <p>Day 1 Forecast</p>
                    <p>Temperature: 65F</p>
                    <p>Conditions: Sunny</p>
                </div>
            </div>
        </div>

        <section id="interactive-radar">
        </section>
    `;

    document.querySelector('#interactive-radar').innerHTML = `
        <div id="interactive-radar-map">
            <img src="./assets/radar-map.png" alt="Interactive Radar Map">
        </div>
    `;
}


function loadInteractiveRadar() {
    document.querySelector('#interactive-radar').innerHTML = `
        <div id="interactive-radar-map">
            <img src="./assets/radar-map.png" alt="Interactive Radar Map">
        </div>
    `;
}