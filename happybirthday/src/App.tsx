import { Marquee } from "./components/Marquee";
import "./css/app.scss";

function App() {
  const iconsDogs: string[] = [
    "/icons/beagle1.svg",
    "/icons/beagle1.svg",
    "/icons/beagle1.svg",
    "/icons/beagle1.svg",
    "/icons/beagle1.svg",
    "/icons/beagle1.svg",
    "/icons/beagle1.svg",
    "/icons/beagle1.svg",
    "/icons/beagle1.svg",
  ];

  return (
    <div className="hb-eleo">
      <div className="hb-eleo-container">
        <Marquee icons={iconsDogs} reverse={true} />
        <Marquee message="Happy Birthday Eleo!" />
        <div className="hb-eleo-title">
          <h1>Happy Birthday Eleo!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
