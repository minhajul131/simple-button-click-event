import './App.css';
import { useState } from 'react';

function App() {

  const [buttonText, setButtonText] = useState('click me');

  const [count, setCount] = useState(1);

  const handleClick = () => {
    inc();
  }

  const inc = () => {

    setCount(count + 1);
    
    if (count % 3 == 0) {
      setButtonText('bang');
    }
    else {
      setButtonText('click me');
    }
  }

  return (
    <div className="App">
      <button onClick={() => { handleClick(); inc(); }} className="design">
        {buttonText}
      </button>
    </div>
  );
}

export default App;
