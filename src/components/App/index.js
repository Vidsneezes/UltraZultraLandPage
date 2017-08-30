import React, { Component } from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

import finalScene from './images/FinalSceneWithTitle copy.png';
import screen1 from './images/ScreenShot_1.png';
import screen2 from './images/ScreenShot_2.png';
import pixelIcon from './images/PromoIconPoster.png';
import attackGif from './images/QuickAttackCombo.gif';
import savingDay from './images/SavingTheDay.gif';
import aviaryYo from './images/AviaryYo.gif';
import bossHit from './images/BossHit.gif';

import '../../cssresponsive/w3.css';
import './style.css';


class App extends Component {

  render() {
    const imgStyle = {
      width : '100%',
      height : '600px',
      border: '3px solid #211e26'
    };
    const defaultBox = {
      width : '100%',
      height: '200px'
    };

    return (
      <div className="App">
          <div className="w3-container">
            <img src={finalScene} style={imgStyle} alt="logo" />
            <div className="w3-display-container" style={defaultBox}>
              <div className="w3-display-middle" style={defaultBox}>
                <p className="App-P-Opener">Dash Punch the Evil Peak Society to stomp them from making errr'body into pigeons!</p>
              </div>
            </div>
            <div className="w3-display-container" style={defaultBox}>
              <div className="w3-display-middle" style={defaultBox}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6KZa8tDlVhM" frameborder="0" allowfullscreen style={imgStyle}></iframe>
              </div>
            </div>
            <p>Check out this gameplay montage!</p>
            <br></br>
            <br></br>
            <img src={attackGif} className="App-Screens-Element" alt="logo" />
            <br></br>
            <br></br>
              <p>Punch their lights out and save Ultra Light City! </p>
              <br></br>
              <br></br>
              <br></br>
              <img src={aviaryYo} className="App-Screens-Element" alt="logo" />
              <p>Using a combination of wits and items, 
              clear stages to reach them!</p>
              <br></br>
              <br></br>
              <br></br>
              <img src={bossHit} className="App-Screens-Element" alt="logo" />
              <p>Collect valuable gems fragments to gain new powers! And defeat the Evil Peak Society</p>
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
              <div>
              Coming To PC!
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
              <Link to="/presskit">Presskit</Link>
              <br></br>
              <br></br>
            </div>
          </div>
    );
  }
}

export default App;
