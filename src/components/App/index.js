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

import AppPanel from './AppPanel.js';

import '../../cssresponsive/w3.css';
import './style.css';

const premadeWidth = 700;
const premadeHeight = 393;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pWidth: premadeWidth,
      pHeight: premadeHeight
    }
    this.handleVideo = this.handleVideo.bind(this);
   
  }

  handleVideo() {
    var video = document.getElementsByClassName("video");
    if(video.length > 0)
      {
        var useWidth = premadeWidth;
        var useHeight = premadeHeight;
        if(window.innerWidth < window.innerHeight)
        {
          useWidth = video[0].offsetWidth;
          useHeight = video[0].offsetWidth * (9/16);
        }
        this.setState({
          pWidth: useWidth,
          pHeight: useHeight
        })
      }
  }

  componentWillMount() {
    this.handleVideo();
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleVideo);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleVideo);
  }

  render() {
    const headerImgStyle = {
      width:'100%',
      height: '600px',
      border: '3px solid #211e26'
    }
    const imgStyle = {
      width : this.state.pWidth +'px',
      height : this.state.pHeight + 'px',
      border: '3px solid #211e26'
    };

    const iconStyle = {
      width : (this.state.pWidth * 0.7) +'px',
      height : (this.state.pHeight * 0.7) + 'px',
      border: '3px solid #211e26'
    };
    const defaultBox = {
      width : '100%',
      height: '600px'
    };
    const headLinerBox = {
      textAlign: 'center'
    };
    const punchLine = {
      textAlign: 'center',
      fontSize: '28pt'
    };
    
  
    return (
      <div className="App">
            <img src={finalScene} style={headerImgStyle} alt="logo" />
            <p style={punchLine}> Play Now At <a href="http://www.newgrounds.com/portal/view/698998">Newgrounds</a></p>
            <p style={punchLine}> Buy At <a href="https://vidsneezes.itch.io/ultra-zultra">Itch.io</a></p>
            <p style={punchLine}>Dash Punch the Evil Peak Society to stomp them from making errr'body into pigeons!</p>
            <br></br>
            <br></br>
            <div className="w3-container">
              <p style={headLinerBox}>Check out this gameplay montage!</p>
            </div>
            <div className="w3-container w3-center" >
              <div className="video" data-resolution-width="1920" data-resolution-height="1080">
                <iframe width={this.state.pWidth + 'px'} height={this.state.pHeight+'px'} src="https://www.youtube.com/embed/6KZa8tDlVhM" frameBorder="0" allowFullScreen ></iframe>
              </div>
            </div>
            <br></br>
            <br></br>
            <p style={headLinerBox}>Punch their lights out and save Ultra Light City! </p>
            <AppPanel>
              <img src={attackGif} className="App-Screens-Element" alt="logo" style={imgStyle}/>
            </AppPanel>
            <br></br>
            <br></br>
            <p style={headLinerBox}>Using a combination of wits and items, clear stages to reach them!</p>
            <AppPanel>
            <img src={aviaryYo} className="App-Screens-Element" alt="logo" style={imgStyle}/>
            </AppPanel>
            <br></br>
            <br></br>
            <p style={headLinerBox}>Collect valuable gems fragments to gain new powers! And defeat the Evil Peak Society</p>
            <AppPanel>
            <img src={bossHit} className="App-Screens-Element" alt="logo" style={imgStyle}/>
            </AppPanel>
            <br></br>
            <AppPanel>
            <p style={headLinerBox}>Coming To PC and others</p>
            <div >
            <a href="https://forums.tigsource.com/index.php?topic=57976.0">
              <img src={pixelIcon} className="App-Icon" alt="logo" style={iconStyle}/>
              <p>Go to Devlog</p>
            </a>
            </div>
            <br></br>
            <br></br>
            <div className="App-Footer">
            <p>In development</p>
            <br></br>
            <p>This is a game by <a href="https://twitter.com/Moraleszez">Oscar Morales</a>!</p>
            </div>
            <br></br>
            <h1 style={headLinerBox}>Coming Soon Presskit</h1>
            <br></br>
            <br></br>
            </AppPanel>
          </div>
    );
  }
}

/*   <Link to="/presskit">
<h1 style={headLinerBox}>Coming Soon Presskit</h1></Link>*/

export default App;
