import { useState } from "react";
import Heading from './components/Heading';
import Button from './components/Button';
import Counter from './components/Counter';
import './App.css'; // Assume this is where styles for dark and light modes are

function App() {
  const [username, setUsername] = useState<string>("Guest");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChangeUsername = (newUsername: string) => {
    setUsername(newUsername);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Heading></Heading>
      <Counter
        setCount={setCount}
        handleIncreaseCount={}
        handleDecreaseCount={}
        >
          Count = {count}

      </Counter>
      

      <div>
        <h3>Username: {username}</h3>
        <button onClick={() => handleChangeUsername("Alice")}>Set Username to Alice</button>
        <button onClick={() => handleChangeUsername("Bob")}>Set Username to Bob</button>
        <button onClick={() => handleChangeUsername("Guest")}>Reset Username</button>
      </div>
      
      <Button title='login' color="red"></Button>
      <Button title='logout' color="black"></Button>
      <Button title='buy' color="darkblue"></Button>
      <Button title='sell' color="purple"></Button>

      {/* Dark Mode Toggle Button */}
      <div>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>


    



      
    </div>
  );
}

export default App;
