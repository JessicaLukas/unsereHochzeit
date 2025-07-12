// === COUNTDOWN ZUM HOCHZEITSDATUM ===

const countdownEl = document.getElementById("countdown");

// Zieldatum (hier: 20. September 2025)
const targetDate = new Date("2025-09-20T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownEl.innerText = "Heute ist unser großer Tag!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerText = `${days} Tage, ${hours} Std, ${minutes} Min, ${seconds} Sek`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const form = document.getElementById("form");
const danke = document.getElementById("rsvp-danke");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Seite nicht neu laden

  const data = new FormData(form);

  fetch("https://formsubmit.co/jessica.gasser.jg@gmail.com", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        form.style.display = "none";
        danke.style.display = "block";
        form.reset();
      } else {
        alert("Leider konnte das Formular nicht gesendet werden.");
      }
    })
    .catch(error => {
      console.error("Fehler beim Senden:", error);
      alert("Fehler beim Senden des Formulars.");
    });
});


function initMap() {
  const ort = { lat: 47.28056561777685, lng: 9.890711652770793 }; // Beispiel: Bad Tölz
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ort,
  });
  new google.maps.Marker({
    position: ort,
    map: map,
    title: "Ort der Feier",
  });
}
defer
