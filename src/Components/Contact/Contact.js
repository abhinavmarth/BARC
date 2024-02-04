import React,{useRef} from 'react'
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vx0j3xe','template_6tjc3js',form.current,'sbrmr4xWPmIeQroZN')
    //emailjs.sendForm('service_4qk7knj', 'template_59zjn1u', form.current, 'Nsz41MHFExod-dJVl')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email-sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact ME</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email'name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' ></textarea> 
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                  <Link to="https://www.instagram.com/namely_rahul/" className='link'><FaInstagram/></Link>
                  <Link to="mailto:lingalarahul94@gmail.com" className='link'><MdEmail/></Link>
                  <Link to="https://www.instagram.com/namely_rahul/" className='link'><FaFacebook/></Link>
                  {/* <span className='link'><MdEmail /></span>
                  <span className='link'><FaFacebook /></span> */}
                  {/* <img src={<FaInstagram />} alt='Instagram' className='link'/>
                  <img src={<MdEmail />} alt='E-mail' className='link'/>

                  <img src="<FaFacebook />" alt='Facebook' className='link'/> */}

                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact