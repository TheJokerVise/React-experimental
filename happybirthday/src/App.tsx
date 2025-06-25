import { Marquee } from "./components/Marquee";
import "./css/app.scss";

function App() {
  return (
    <div className="hb-eleo">
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
              <textPath href="#arc" startOffset="50%" text-anchor="middle">
                Il mio primo compleanno!!!
              </textPath>
            </text>
          </svg>
        </div>
        <div className="hb-eleo-title">
          Ti aspetto nel mio giardino a partire dalle 18:00 per festeggiare
          insieme!
        </div>
      </div>
    </div>
  );
}

export default App;
