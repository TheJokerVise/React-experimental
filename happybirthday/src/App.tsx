import { Marquee } from "./components/Marquee";
import "./css/app.scss";

function App() {
  function startCascade() {
    const container = document.getElementById("container");
    if (container) {
      container.innerHTML = ""; // reset
    }

    const imageUrls = [
      "/images/smack_no_back.png",
      "/images/smack_no_back.png",
      "/images/smack_no_back.png",
      "/images/smack_no_back.png",
      "/images/smack_no_back.png",
      "/images/smack_no_back.png",
      "/images/smack_no_back.png",
      "/images/smack_no_back.png",
      "/images/smack_no_back.png",
    ];

    imageUrls.forEach((url, index) => {
      setTimeout(() => {
        const img = document.createElement("img");
        img.src = url;
        img.className = "falling-image";
        img.style.left = `${20 + index * 20}%`; // distribuzione orizzontale
        if (container) container.appendChild(img);
      }, index * 400); // intervallo a cascata
    });
  }

  return (
    <div className="hb-eleo">
      <div
        id="container"
        className="hb-eleo-cascade-container image-container"
      ></div>
      <div className="hb-eleo-container">
        <img
          className="oliver"
          src="/images/beagle_1_no_back.png"
          alt="Oliver"
        />

        <img
          className="oliver-bottom"
          src="/images/beagle_2_no_back.png"
          alt="Oliver"
        />
        <Marquee message="Happy Birthday Eleo!" />
        <div className="hb-eleo-title">
          <svg viewBox="0 0 500 200">
            <path
              id="arc"
              d="M 50 150 A 200 100 0 0 1 450 150"
              fill="transparent"
              // stroke="lightgray"
              // stroke-dasharray="5,5"
            />

            <text>
              <textPath href="#arc" startOffset="50%" textAnchor="middle">
                Il mio primo compleanno!!!
              </textPath>
            </text>
          </svg>
        </div>
        <div className="hb-eleo-title">
          Ti aspetto nel mio giardino a partire dalle 18:00 per festeggiare
          insieme!
        </div>
        <div className="button-container">
          <button className="button" onClick={() => startCascade()}>
            Kiss
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
