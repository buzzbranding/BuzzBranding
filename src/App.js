import './app.css'
import React from 'react';
import Header from './header'
import Page3 from './page3'
import Page4 from './page4'
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
        <h4 className="heading">Here at the team of Buzz marketing we are dedicated towards designing, editing and developing your brand which creates a better experience and high perceived value to customers.</h4>
      </div>


      <div className="para1">
       <h3 className="para1h3"> Mission Statement </h3>
         <ul className="ul1">
      Our mission is to create and strengthen customer expirience towards your brand through digital platforms and visual media 
    </ul>
       <h3 className="para1h3"> Core Value </h3>
        <ul className="ul1">
        From the beginning we are obsessed in providing the competitive advantage to our clients through our innovatiev, influencing and appealing work. we all belive in one common thing 
           ' let's create a Buzz '  
    </ul>

      </div>
      <div className="container2">
        <h2 className="text"> What do we do?</h2>
        <p className="para2"> We build a strong brand design and digital marketing plans which creates a strong bond between your customer and your brand.</p>
        <p  className="para21"> we also advertise your brand to targeted customers through digital ads, promotions and offline platform</p>
      </div>

      {/* <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div> */}

      <div class="container">

        <div class="card" id="card1">
          <div class="imgBx">
            <img src={img1} className="card1Img"></img>
          </div>
          <span></span>
          <div class="content">
            <h3 id="angular">Website design</h3>
            <p>A website is often a brand’s first and most meaningful point of interaction with its audience. We create websites that delivers a powerful first impression.</p>
            <ul className="ul">
      <li>Web and mobile app </li>
    </ul>
    <ul className="ul">
      <li>Website design </li>
    </ul>
    <ul className="ul">
      <li>Analytics </li>
    </ul>

          </div>
        </div>

        <div class="card" id="card2">
          <div class="imgBx">
            <img src={social} className="card1Img"></img>
          </div>
          <div class="content">
            <h3 id="react">Digital marketing</h3>
            <p>Our designing and communication team come together and develop impressive brand of your product which
               stimulates your customer group and have a digital positioning of your brand 
               Social media marketing</p>

            {/* <a href="https://reactjs.org/">Read More</a> */}
          </div>
        </div>

        <div class="card" id="card3">
          <div class="imgBx">
            <img src={design} className="card1Img"></img>
          </div>
          <div class="content">
            <h3 id="vue">Brand strategy and Identify </h3>
            <p>Our creative team rediscover your brand and reposition it in a way which complements your company mission and vision </p>
<ul className="ul">
      <li>	visual identify </li>
    </ul>
    <ul className="ul">
      <li>	Videos and motion </li>
    </ul>
    <ul className="ul">
      <li>Logo design </li>
    </ul>
    <ul className="ul">
      <li>Brand positioning  </li>
    </ul>

            {/* <a href="https://vuejs.org/">Read More</a> */}
          </div>
        </div>

      </div>
      <Page3/>
      <Page4/>
      <ContactCard/>
      <Footer />
    </div>
  );
}

export default App;
