import { useEffect, useState } from "react";




function App() {
const [timeLeft, setTimeLeft] = useState<number>(6);
const [isActive, setIsActive] = useState<boolean>(false);
//sätt ref för att har en referens till timern

useEffect(() =>{
  //påverka timern hurvida den är aktiv eller ej
  //timeLeft - 1
  //rensa timern vid remounting eller om strat/stopp ändra
  console.log('hej')
}, [timeLeft, isActive])

  return (
   <main>
    <h1>Nedräkningstimer</h1>
    <h2>{timeLeft} sekunder kvar</h2>
    {/*knapp för att starta*/}
    <button onClick={() => setIsActive(true)}>Starta</button>
    {/*kanpp för att pausa */}
    <button onClick={() => setIsActive(false)}>Pausa</button>
    {/*kanpp för att återställa*/}
   </main>
  )
}

export default App
