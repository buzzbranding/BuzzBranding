import './app.css'
import React from 'react';
import Header from './header'
import Footer from './footer'
import ContactCard from './contact'
import img1 from './images/1.svg'
import icon1 from './images/BB1(1).svg'
import social from './images/social.svg'
import design from './images/design.svg'


<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>



function App() {



  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
    window.setInterval(function () {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

      } else {
        con.className = 'console-underscore'

        visible = true;
      }

    }, 400)

    function gg() {
      console.log("D")
    }

    setTimeout(() => {
      consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
      gg();
    }, 3000);

  }
  return (
    <div className="App">
      <Header />

      <div className="container1">
        <div className="image1">
          <img alt={""} src={icon1} className="image"></img>
        </div>
      </div>
      <div className="container2">
        <h2 className="text"> What do we do?</h2>
      </div>
      <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>

      <div class="container">

        <div class="card" id="card1">
          <div class="imgBx">
            <img src={img1} className="card1Img"></img>
          </div>
          <span></span>
          <div class="content">
            <h3 id="angular">Website design</h3>
            <p>One stop solution to meet your customers.</p>
            <a href="https://angular.io/">Read More</a>
          </div>
        </div>

        <div class="card" id="card2">
          <div class="imgBx">
            <img src={social} className="card1Img"></img>
          </div>
          <div class="content">
            <h3 id="react">Social media marketing</h3>
            <p>Boost your market value through our network.</p>
            <a href="https://reactjs.org/">Read More</a>
          </div>
        </div>

        <div class="card" id="card3">
          <div class="imgBx">
            <img src={design} className="card1Img"></img>
          </div>
          <div class="content">
            <h3 id="vue">Identity Design</h3>
            <p>Perfect logo and banner designs that suit your brand.</p>
            <a href="https://vuejs.org/">Read More</a>
          </div>
        </div>

      </div>

      <ContactCard/>
      <Footer />
    </div>
  );
}

export default App;
