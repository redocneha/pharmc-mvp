import 'bootstrap/dist/css/bootstrap.min.css';
import { faHome, faHeartbeat, faGolfBall, faClock, faBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss'

function Footer(){

    return(
<>

<footer class="page-footer font-small pt-4 footer_class">

  <div class="container footer_container">

  
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a className ="footer-icon-link" href="/home"> Home Page
        {/* <FontAwesomeIcon icon={faHome} /> */}
        </a>
      </li>
      <li class="list-inline-item">
        <a className ="footer-icon-link" href="https://twitter.com/">
        Twitter
        </a>
      </li>
      <li class="list-inline-item">
        <a className ="footer-icon-link" href="/Contactus">
        Contact Us
        </a>
      </li>
      <li class="list-inline-item">
        <a className ="footer-icon-link" href="https://pharmeasy.in/">
        About Us
        </a>
      </li>
    </ul>

  </div>
  <div class="footer-copyright text-center py-3">
      © 2020 Copyright:Pharmc
  </div>

</footer>
</>
    );
}
export default Footer;