import './footer.css'

export default function Footer(){
    return(
        <div className="footer">
        <div className="row">
          <div className="column">
            <h3 className="footerText1">About Us</h3>
            <span className="footerText">We are Digital Marketing agency working to soar brands.</span>
          </div>

          <div className="column">
            <h3 className="footerText1">Important Links</h3>
            <div className="footerText">Terms & Conditions</div>
            <div className="footerText"> Privacy Policy</div>
          </div>

          <div className="column">
            <h3 className="footerText1" id ="contactUS">Contact US</h3>
            <div className="footerText"> (+91) 8200459343 </div>
            <div className="footerText"> (+1) (443)-355-9449 </div>
            <div className="footerText"> Buzzbranding.in@gmail.com </div>
          </div>

        </div>
        <hr></hr>
        <div>
          <p className="footerText2">COPYRIGHT © 2021. Buzz Branding. ALL RIGHTS RESERVED. | PRIVACY POLICY</p>
        </div>
      </div>
    )
}