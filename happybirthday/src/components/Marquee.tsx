import type { JSX } from "react";
import type { MarqueeProps } from "../models/MarqueeProps";
import "../css/marquee.scss";

export const Marquee: React.FC<MarqueeProps> = ({
  icons,
  reverse = false,
  message,
}): JSX.Element => {
  return (
    <div className={`marquee-container ${reverse ? "reverse" : ""}`}>
      <div className="marquee">
        {/* Duplicate icons and concat to obtain the icons array combined */}
        {icons &&
          [...icons, ...icons].map((src, index) => (
            <img key={index} src={src} alt={`Icona vintage ${index}`} />
          ))}
        {message && (
          <>
            <div className="marquee-message">{message}</div>
            <div className="marquee-message">{message}</div>
            <div className="marquee-message">{message}</div>
          </>
        )}
      </div>
    </div>
  );
};
