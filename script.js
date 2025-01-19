// URL API
const apiUrl = 'https://api.mcstatus.io/v2/status/java/asasia_s3.aternos.me:49395';  // Gantikan dengan URL API sebenar
const host = document.getElementById("host");
const port = document.getElementById("port");
const stat = document.getElementById("stat");
const motd = document.getElementById("motd");
const ver = document.getElementById("ver");
const players = document.getElementById("players");

// Fungsi untuk mengambil dan parse data JSON dari API
async function getServerStatus() {
  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();

      host.innerHTML = data.host
      port.innerHTML = data.port
      ver.innerHTML = data.version.name_html
      players.innerHTML = `Players : ${data.players.online}/${data.players.max}`;
      motd.innerHTML = data.motd.html
      let str = "/●\sOffline/"
      if (str.test(data.version.name_clean)){
        stat.innerHTML = 'Offline';
      stat.style.color = 'red';
      }
      else{
        stat.innerHTML = 'Online';
      stat.style.color = 'lime';
      }
      
    } else {
      stat.innerHTML = 'Error';
      stat.style.color = 'red';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    stat.innerHTML = 'Kesalahan semasa mengambil data';
    stat.style.color = 'red';
  }
}

// Memanggil fungsi setiap 1 saat
setInterval(() => {
  getServerStatus();
}, 100);
