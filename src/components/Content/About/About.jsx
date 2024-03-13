import { Component } from 'react';
import classes from './About.module.css';
import gayathriDeviPic from '../../../assets/images/Veda Gayathri Mata.jpg';
import agastyaMuniPic from '../../../assets/images/Agastya.jpg';
import swamijiPic from '../../../assets/images/AboutUs Right.jpeg';
import audio from '../../../assets/audio/Gayathri Mantra.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
  state = {
    mantraPlaying: false
  };

  componentWillUnmount() {
    this.pauseSloka();
  }
  
  pauseSloka = () => {
    this.setState({ mantraPlaying: false });
    let sloka = document.getElementById('mantra');
    sloka.src = "";
  };

  playSloka = () => {
    this.setState({ mantraPlaying: true });
    let sloka = document.getElementById('mantra');
    sloka.src = audio;
    sloka.play();
  };

  render() {
    let gmHindiSloka = ["ॐ भूर् भुवः स्वः |", "तत्सवितुर्वरेण्यं |", "भर्गो॑ देवस्य धीमहि ।", "धियो यो नः प्रचोदयात् ॥"];
    let gmEnglishSloka = ["Om Bhur Bhuvaḥ Swaḥ ", "Tat-savitur Vareñyaṃ ", "Bhargo Devasya Dheemahi", "Dhiyo Yonaḥ Prachodayāt"];  

    return (
            <div className={classes.About}>
                <img src={gayathriDeviPic} alt="Gayathri Mata" title="Gayathri Mata" className={classes.GayathriMaa} />
                                
                 <p className={classes.Sloka}>
                 {gmHindiSloka.map(line => (
                   <span key={line}>
                   {line}
                   <br />
                   </span>
                 ))} <FontAwesomeIcon icon={this.state.mantraPlaying === false ? faPlayCircle : faPauseCircle} id="playAndPauseMantra" onClick={this.state.mantraPlaying === false ? this.playSloka : this.pauseSloka} />
                 </p>

                <div className={classes.Agastya}>
                  <a href="https://en.wikipedia.org/wiki/Agastya" target="_blank" rel="noopener noreferrer">
                  <img src={agastyaMuniPic} alt="Agastya Maha Muni" title="Agastya Maha Muni" />
                  </a>   
                </div>

                <p className={classes.Sloka}>
                 {gmEnglishSloka.map(line => (
                   <span key={line}>
                   {line}
                   <br />
                   </span>
                 ))} <FontAwesomeIcon icon={this.state.mantraPlaying === false ? faPlayCircle : faPauseCircle} id="playAndPauseMantra" onClick={this.state.mantraPlaying === false ? this.playSloka : this.pauseSloka} />
                 </p>


                <img src={swamijiPic} alt="Swamiji" title="Shri Swami Sugunananda Gayathri" className={classes.Swamiji} />
            
                <p className={classes.AboutText}>
                    <b>The Divine Beginning</b>

                    <br />

                    Shri Agastya Peetam was founded on 22nd January 2018 on the auspicious day of Vasanta Panchami!

                    <br />
                    <br /> 
                                             
                    <b>Our Mission</b>

                    <br />
                    
                    Our mission is to bring Loka Shanthi and Kalyanam (universal peace and prosperity)
                    by doing Gayathri Maha Purashcharana and Deergha Sathra Yagam. 
                    <br />
                    <br />                    

        
                    <b>The Sacred Rituals</b>
                    
                    <br />
                    
                    Gayathri Maha Purascharana is a 24 year long ritual done under strict vedic rules by a Sadhaka following strict
                    <i> Brahmacharya</i>. Deergha Sathra Yagam is a 12 year long ritual.
                    Each of these rituals require complete dedication and devotion.                             
                    Learn about these sacred rituals in detail by clicking the respective tabs above! 
                </p>
           
              <audio id="mantra" src="">
               {/* changing source in JavaScript function and React.js componentWillUnmount function */}
              </audio>
          </div>
       );
   }
}

export default About;