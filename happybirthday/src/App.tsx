import { Marquee } from "./components/Marquee";
import "./css/app.scss";

function App() {
  return (
    <div className="hb-eleo">
      <div className="hb-eleo-container">
        <Marquee message="Happy Birthday Eleo!" />
        <div className="hb-eleo-title">
          Lunedì 4 Agosto festeggio il mio primo compleanno!!!
        </div>
        <div className="hb-eleo-title">
          Ti aspetto nel mio giardino a partire dalle 18:00
        </div>
      </div>
    </div>
  );
}

export default App;
