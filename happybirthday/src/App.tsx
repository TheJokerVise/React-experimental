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

  setTimeout(() => {
    createBalloon();
    // Genera palloncini ogni 300ms
    setInterval(createBalloon, 300);
  }, 1000); // Ritardo iniziale per l'effetto di caricamento

  function createBalloon() {
    const container = document.getElementById("balloon-container");

    // Carica suono
    // const popSound = new Audio("pop.mp3");
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Posizione e colore casuali
    balloon.style.left = Math.random() * 100 + "vw";
    const colors = ["#ff69b4", "#00bfff", "#adff2f", "#ffa07a", "#9370db"];
    balloon.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Durata casuale
    const duration = 4 + Math.random() * 4;
    balloon.style.animationDuration = duration + "s";

    // Click: scoppio
    balloon.addEventListener("click", () => {
      console.log("Balloon popped!");
      balloon.classList.add("pop");
      balloon.style.pointerEvents = "none";

      // Suono
      // popSound.currentTime = 0; // Riavvia se già in riproduzione
      // popSound.play();

      // Messaggio auguri
      const message = document.createElement("span");
      message.classList.add("popup-message");
      message.textContent = "Auguri! 🎉";

      // Posizione del messaggio
      message.style.left = balloon.style.left;
      message.style.top = balloon.getBoundingClientRect().top + "px";

      if (container) container.appendChild(message);

      // Rimuovi messaggio dopo 1.5s
      setTimeout(() => {
        message.remove();
      }, 1500);

      // Rimuovi palloncino dopo scoppio
      setTimeout(() => {
        balloon.remove();
      }, 300);
    });

    if (container) container.appendChild(balloon);

    // Rimuovi automaticamente dopo la salita
    setTimeout(() => {
      if (balloon.parentElement) balloon.remove();
    }, duration * 1000);
  }

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
