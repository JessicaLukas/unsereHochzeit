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


<script>
  const form = document.getElementById("form");
  const danke = document.getElementById("rsvp-danke");

  form.addEventListener("submit", function (event) {
    // NICHT verhindern – das Formular wird in ein iframe geschickt
    // aber wir zeigen selbstständig den Danketext an
    setTimeout(() => {
      form.style.display = "none";
      danke.style.display = "block";
    }, 300); // kurze Verzögerung für bessere UX

    // Optional: Formular nach 5 Sekunden zurücksetzen und wieder anzeigen
    setTimeout(() => {
      form.reset();
      form.style.display = "block";
      danke.style.display = "none";
    }, 5000); // nach 5 Sekunden zurücksetzen
  });
</script>
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

