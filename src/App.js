import React, { Component } from 'react';
import './App.css';
import finalScene from './images/FinalSceneWithTitle copy.png';
import screen1 from './images/ScreenShot_1.png';
import screen2 from './images/ScreenShot_2.png';
import pixelIcon from './images/PromoIconPoster.png';
import attackGif from './images/QuickAttackCombo.gif';


class App extends Component {

  poo(){

  }

  render() {
    return (
      <div className="App">
          <img src={finalScene} className="App-logo" alt="logo" />
          <br></br>
          <br></br>
          <p className="App-P-Opener">The Evil Peak Master has escaped the nega jail!</p>
          <br></br>
          <br></br>
          <img src={screen1} className="App-Screens-Element" alt="logo" />
            <p>He wants to turn errbody into pigeons! Punch his lights out and save Ultra Light City! </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <img src={attackGif} className="App-Screens-Element" alt="logo" />
            <p>Using a combination of wits and items, 
            you must pass through procedurally generated stages.
            <br></br>
            Collect valuable gems fragments to gain new powers!</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={screen2} className="App-Screens-Element" alt="logo" />
            <div className="App-List">
              <ul>
                Also...
                <li>Punch Dash across deadly spikes.</li>
                <li>Double Jump across deadly spikes.</li>
                <li>Triple Jump across deadly spikes.</li>
                <li>Air Dash across deadly spikes. </li>
                <li>Zany combinations each play through</li>
              </ul>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div >
            <a href="https://forums.tigsource.com/index.php?topic=57976.0">
              <img src={pixelIcon} className="App-Icon" alt="logo" />
              <p>Go to Devlog</p>
            </a>
            </div>

            <br></br>
            <br></br>
            <div className="App-Footer">
            <p>Thanks for checking out the Ultra Zultra Site, the game is still in development</p>
            <br></br>
            <p>If you want to follow the progress click on the icon to head to the devlog</p>
            <p>This game is being made by <a href="https://twitter.com/Moraleszez">Oscar </a>!</p>
            </div>
            <br></br>
            <br></br><br></br>
            <br></br>
      </div>
    );
  }
}

export default App;
