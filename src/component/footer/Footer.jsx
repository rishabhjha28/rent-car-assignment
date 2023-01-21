import React from 'react'
import './footer.css'
import {BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-heading'>
          Rent Vroom
        </div>
        <div className='address'>
          <p>Rentvroom Pvt. Ltd.</p>
          <p>No:296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla Bengaluru, Karnataka 560034</p>
        </div>
        <div className='social'>
          <div>
            <BsTwitter/>
          </div>
          <div>
            <BsInstagram/>
          </div>
          <div>
            <BsLinkedin/>
          </div>
        </div>
        <div className='bottom-footer'>
          <div>
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms Of Services</p>
          </div>
        </div>
    </div>
  )
}

export default Footer 