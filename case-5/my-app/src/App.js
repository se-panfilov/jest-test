import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  let [text, setText] = useState('Before Change');

  function change() {
    setText('After Change');
  }

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>{text}</div>
          <button onClick={change}>test</button>
        </header>
      </div>
  );
}

export default App;
