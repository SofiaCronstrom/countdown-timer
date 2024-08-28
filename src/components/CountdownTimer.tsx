import { useEffect, useRef, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<number>(6);
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
            setIsActive(false);  // Stoppa timern
            setTimeLeft(0);
          }
          return prevTimeLeft - 1;
        });
      }, 1000);

      
      return () => {
        if (timeRef.current) {
          clearInterval(timeRef.current);
          timeRef.current = null; // Reset the ref to null
        }
      };
    }
  }, [isActive, timeLeft]);
   

  return (
    <main>
      <h1>Nedräkningstimer</h1>
      <h2>{timeLeft} sekunder kvar</h2>
      {/*knapp för att starta*/}
      <button onClick={() => setIsActive(true)}>Starta</button>
      {/*knapp för att pausa */}
      <button onClick={() => setIsActive(false)}>Pausa</button>
      {/*knapp för att återställa*/}
      <button>Återställ</button>
    </main>
  );
}
