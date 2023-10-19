import './App.css';

function App() {

  const userName = "";

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
    </div>
  );
}

export default App;
