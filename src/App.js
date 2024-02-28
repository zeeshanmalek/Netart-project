import logo from './images/logo.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
      <header>

        <div className='left'>
          <img src={img1} alt='img1'/>
        </div>
        <div className='right'>
          <p> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <img src={img2} alt='img2'/>
          <p> Government of India has awarded the<b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </header>
      <br/>
      <section>
        <p className='sec-p1'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={img3} alt='img3'/>
        <p className='sec-p2'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        
      </section>
      <hr className='red-line'/>
      
      <footer>
        <p className='foot-p'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p className='foot-p2'>CHEMICALS & PROCESS <b>|</b> POWER <b>|</b> WATER & WASTE WATER<b>|</b> OILS & GAS<b>|</b> PHARMA<b>|</b> SUGARS & DISTILLERIES<b>|</b> PAPER & PULP<b>|</b> MARINE & DEFENCE<b>|</b> METAL & MINING<b>|</b> FOOD & BEVERAGE<br/><b>|</b> PETROCHEMICAL & REFINERIES<b>|</b> SOLAR<b>|</b> BUILDING<b>|</b> HVAC<b>|</b> FIRE FIGHTING<b>|</b> AGRICULTURE & RESIDENTIAL</p>
        
        <div className='foot-links'><div className='foot-link'>
        <LocalPhoneRoundedIcon className='icons'></LocalPhoneRoundedIcon><a href='link1'>TollFree 1800 200 1234 </a>
        </div>
        <div className='foot-link'>
        <FacebookRoundedIcon className='icons'></FacebookRoundedIcon><a href='www.facebok.com/cripumps'>www.facebok.com/cripumps </a>
        </div>
        <div className='foot-link'><LanguageRoundedIcon className='icons'></LanguageRoundedIcon><a href='www.crigroups.com'> www.crigroups.com </a>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
