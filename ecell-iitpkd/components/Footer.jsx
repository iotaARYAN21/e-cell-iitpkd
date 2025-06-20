import React from 'react'
import './footer.css'
import { NavLink ,Link } from 'react-router-dom';
const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer>
        <div className="footer_div1">
            <div className="footer_r1">
            <img src="./ecell_final_logo.png" alt="logo" />
            <h3>E-Cell IIT PALAKKAD</h3>
            <h3>The Fire Within</h3>
            </div>
            <div className="footer_r2">
                <ul>
                    <li><h3>Social Media</h3></li>
                    <li><a href="https://www.instagram.com/ecell_iitpkd?igsh=MXg1b3RjYzlibXU5dg==" target="_blank"><img src="../ig.svg" alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/company/ecell-iitpkd/" target="_blank"><img src="../linkedin.svg" alt="" /></a></li>
                    <li><a href="https://x.com/E_Cell_IITPKD" target="_blank"><img src="../twitter.svg" alt="" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCMBYD5neK0bhsYHuios9KPw" target="_blank"><img src="../yt.svg" alt="" /></a></li>
                </ul>
            </div>
            <div className="footer_r3">
                
                <ul>
                    <li><h3>Useful Links</h3> </li>
                    <li><Link to='/' style={{textDecorationLine:'none' , color:'#fbc45e'}}>Home</Link></li>
                    <li><Link to='/contact' style={{textDecorationLine:'none' , color:'#fbc45e'}}>Contact</Link></li>
                    <li><Link to='/allevents' style={{textDecorationLine:'none' , color:'#fbc45e'}}>Events</Link></li>
                </ul>
            </div>
            <div className="footer_r4">
                <h3>CONTACT</h3>
                <address>Indian Institute of Technology Palakkad <br></br>
                        Kanjikode | Palakkad <br />
                        Kerala | Pin: 678623</address>
                <p>Mail : Surge@iitpkd.ac.in</p>
            </div>
        </div>
        <div className="footer_div2">
            © {date} Copyright: E-Cell IIT Palakkad
        </div>
    </footer>
  )
}

export default Footer
