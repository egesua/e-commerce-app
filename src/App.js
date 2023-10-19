import './App.css';
import './components/Counter.css';

import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const userName = "egesua";

  const [email, setEmail] = useState("egesu06@gmail.com")

  const getFullName = () => {
    return "Ege Su Açıkgöz";
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Merhaba {userName ? userName : "Anonymus"}</h1>
        <hr></hr>
        <p className='highlight'>
          Tekrar merhaba.

          Your full name is: {getFullName()}
        </p>
      </header>
      <Counter greet="Merhaba" userName={userName} email={email} />
    </div>
  );
}

export default App;
