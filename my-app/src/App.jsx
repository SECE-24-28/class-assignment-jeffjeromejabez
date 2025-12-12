import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/parent'

function App() {
  const [fname, setFname] = useState("Harry")
  const [gift, setGift] = useState("PS5");
  
  const giftFromChild = (childGift) => {
    console.log("Gift from child:", childGift);
    setGift(childGift);
  };
  
  return (
    <>
     <h1>Welcome to React Session</h1>
     <h2>Hello,{fname}</h2>
     <button onClick={() => setFname("john")}>change name</button>
     <Parent gift={gift} 
     giftFromChild={giftFromChild} />
    </>
  );
}

export default App
