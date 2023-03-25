import clock from "./images/icon-clock.svg";
import ethereum from "./images/icon-ethereum.svg";
import equilibrium from "./images/image-equilibrium.jpg";
import avatar from "./images/image-avatar.png";

import './App.css';


function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={equilibrium} />
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>

      <div class="info">
      <p><img src={ethereum}/> 0.041 ETH</p>
      <p><img src={clock}/> 3 days left</p>
      </div>

      <footer>
      <img src={avatar}/>
      <p><span>Creation of </span>Jules Wyvern</p>        
      </footer>
    
      
    </div>
  );
}

export default App;
