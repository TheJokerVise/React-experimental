import "./css/app.scss";

function App() {
  const container = document.getElementById("bubble-container");

  function createBubble() {
    console.log("Creating bubble");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Random horizontal position
    const size = Math.random() * 20 + 20;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.bottom = "0px";

    if (container) {
      container.appendChild(bubble);

      // Explode after a set time (e.g., 3 seconds)
      const explodeTime = 3000; // ms

      setTimeout(() => {
        bubble.classList.add("explode");

        // Remove the element after animation
        setTimeout(() => {
          bubble.remove();
        }, 300);
      }, explodeTime);
    }
  }

  // Create bubbles every 300ms
  setInterval(createBubble, 300);

  return (
    <div className="hb-eleo">
      <div className="hb-eleo-container">
        <div className="hb-eleo-title">
          <h1>Happy Birthday Eleo!</h1>
        </div>
      </div>
      <div id="bubble-container"></div>
    </div>
  );
}

export default App;
