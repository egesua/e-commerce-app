import './App.css';
import './components/Counter.css';

import { useState } from 'react';
import Main from './layout/Main';

function App() {

  const [userName, setUserName] = useState("Anonymus")

  return (
    <Main userName={userName}/>
  );
}

export default App;
