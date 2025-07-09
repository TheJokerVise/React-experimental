import "./css/app.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa gli stili di AOS

function App() {
  // function startCascade() {
  //   const container = document.getElementById("container");
  //   if (container) {
  //     container.innerHTML = ""; // reset
  //   }

  //   const imageUrls = [
  //     "/images/smack_no_back.png",
  //     "/images/smack_no_back.png",
  //     "/images/smack_no_back.png",
  //     "/images/smack_no_back.png",
  //     "/images/smack_no_back.png",
  //     "/images/smack_no_back.png",
  //     "/images/smack_no_back.png",
  //     "/images/smack_no_back.png",
  //     "/images/smack_no_back.png",
  //   ];

  //   imageUrls.forEach((url, index) => {
  //     setTimeout(() => {
  //       const img = document.createElement("img");
  //       img.src = url;
  //       img.className = "falling-image";
  //       img.style.left = `${5 + index * 20}%`; // distribuzione orizzontale
  //       if (container) container.appendChild(img);
  //     }, index * 400); // intervallo a cascata
  //   });
  // }

  const container = document.getElementById("balloon-container");

  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Posizione orizzontale casuale
    balloon.style.left = Math.random() * 100 + "vw";

    // Colore casuale
    const colors = ["#ff69b4", "#00bfff", "#adff2f", "#ffa07a", "#9370db"];
    balloon.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Durata e ritardo casuali
    const duration = 4 + Math.random() * 4;
    balloon.style.animationDuration = duration + "s";

    if (container) container.appendChild(balloon);

    // Rimuovi il palloncino dopo che ha finito di salire
    setTimeout(() => {
      balloon.remove();
    }, duration * 1000);
  }

  // Crea un palloncino ogni 300ms
  setInterval(createBalloon, 300);

  useEffect(() => {
    AOS.init({
      duration: 500, // durata dell'animazione in ms
      once: true, // se TRUE, l'animazione avviene solo una volta
    });
  }, []);

  return (
    <div className="hb-eleo">
      <div
        id="container"
        className="hb-eleo-cascade-container image-container"
      ></div>
      <div id="balloon-container" className="hb-eleo-balloon-container"></div>
      <div className="hb-eleo-container">
        <img
          className="oliver-bottom"
          src="/images/beagle_2_no_back.png"
          alt="Oliver"
          data-aos="fade-up"
          data-aos-delay="3000"
        />

        {/* <Marquee message="Happy Birthday Eleo!" /> */}

        <div className="text-section">
          <div className="invitation-text chewy rem2">Ciao!</div>
          <div className="date-text chewy rem3">LUNEDì 4 AGOSTO</div>
          <div className="invitation-text chewy rem2">
            ti aspetto per festeggiare il mio
          </div>
          <div className="hb-eleo-title">
            <div className="birthday-counter-container">
              <img src="/images/1_.png" alt="One" />
            </div>
            <div className="simple-text chewy rem3">compleanno</div>
          </div>
          <div className="invitation-text chewy rem2">
            nel mio giardino a partire dalle 18:30!
          </div>
        </div>
        {/* <div className="button-container">
          <button className="button" onClick={() => startCascade()}>
            Kiss
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
