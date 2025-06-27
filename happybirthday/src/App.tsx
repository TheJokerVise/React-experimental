import { Marquee } from "./components/Marquee";
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
      <div className="hb-eleo-container">
        <img
          className="oliver-bottom"
          src="/images/beagle_2_no_back.png"
          alt="Oliver"
          data-aos="fade-up"
          data-aos-delay="1000"
        />

        <Marquee message="Happy Birthday Eleo!" />

        <div className="text-section">
          <div className="invitation-text chewy rem2">CIAO!</div>
          <div className="date-text chewy rem3">Lunedì 4 Agosto</div>
          <div className="invitation-text chewy rem2">
            TI ASPETTO PER FESTEGGIARE IL MIO
          </div>
          <div className="hb-eleo-title">
            <div className="birthday-counter-container">
              <img src="/images/1_.png" alt="One" />
            </div>
            <div className="simple-text chewy rem5">compleanno</div>
          </div>
          <div className="invitation-text chewy rem2">
            NEL MIO GIARDINO A PARTIRE DALLE ORE 18:00!
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
