import { Link } from 'react-scroll'
import './header.css'
import icon2 from './images/BB2.svg'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Header(){
    const ele = document.getElementById('dropdownContent');
    

    return (
        <header className="header">
        <div>
          <img alt="" src={icon2} className="headericon"></img>
        </div>
        
        <a  className="headerText" ><Link to="card1" spy={true} smooth={true}>Development</Link> </a>
        <a className="headerText"><Link to="card2" spy={true} smooth={true}>Designing</Link> </a>
        <a className="headerText"><Link to="card3" spy={true} smooth={true}>Branding</Link> </a>
        
        <a className="headerTextContact" href="https://instagram.com/buzzbranding.in?igshid=z0caeqj7bcun" > Connect on:
        </a>
        <InstagramIcon className ="instagram" />
        <a className="headerText"><Link to="contactUS" spy={true} smooth={true}>Contact Us </Link> </a>

        <div class="dropdown">
    <div class="dropbtn" >
      <DragIndicatorIcon className="dropdownImage"/>
    </div>
    <div class="dropdown-content" id="dropdownContent">
      <a href="#"><Link to="card1" spy={true} smooth={true}>Development</Link></a>
      <a href="#"><Link to="card2" spy={true} smooth={true}>Designing</Link> </a>
      <a href="#"><Link to="card3" spy={true} smooth={true}>Branding</Link> </a>
    </div>
    </div>

      </header>

    )
}