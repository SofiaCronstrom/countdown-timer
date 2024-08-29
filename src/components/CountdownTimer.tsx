import { useEffect, useRef, useState } from "react";
import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";
import Reset from "../assets/reset.svg";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isActive, setIsActive] = useState<boolean>(false);
  //sätt ref för att har en referens till timern
  const timeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isActive) {
      timeRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            if (timeRef.current) {
              clearInterval(timeRef.current);
              timeRef.current = null;
            }
            setIsActive(false); // Stoppa timern
            setTimeLeft(0);
          }
          return prevTimeLeft - 1;
        });
      }, 1000);

      return () => {
        if (timeRef.current) {
          clearInterval(timeRef.current);
          timeRef.current = null;
        }
      };
    }
  }, [isActive, timeLeft]);

  const handleReset = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
    setTimeLeft(60);
    setIsActive(false);
  };

  return (
    <main>
      
      <section className="timer-container">
        <article className="timeLeft-wrapper">
          <h2>{timeLeft}</h2>
        </article>
        <article className="button-wrapper">
          {/*knapp för att starta*/}
          <button onClick={() => setIsActive(true)}>
            <img src={Play} alt="Play button icon" />
          </button>
          {/*knapp för att pausa */}
          <button onClick={() => setIsActive(false)}>
            <img src={Pause} alt="Pause button icon" />
          </button>
          {/*knapp för att återställa*/}
          <button onClick={handleReset}>
            <img src={Reset} alt="Reset button icon" />
          </button>
        </article>
      </section>
    </main>
  );
}
