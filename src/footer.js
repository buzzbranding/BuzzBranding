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
            <div className="footerText"> Privaicy Policy</div>
          </div>

          <div className="column">
            <h3 className="footerText1">Follow Us</h3>
          </div>

        </div>
        <hr></hr>
        <div>
          <p className="footerText2">COPYRIGHT © 2021. Buzz Branding. ALL RIGHTS RESERVED. | PRIVACY POLICY</p>
        </div>
      </div>
    )
}