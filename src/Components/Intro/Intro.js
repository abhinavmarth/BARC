import React from 'react'
import './Intro.css';
import { Link } from 'react-scroll';
import BGG from '../../Assests/BGG.jpg';
import { IoBag } from "react-icons/io5";
import CP from '../../Assests/CP.jpg';
import Skills from '../Skills/Skills.js';
import Contact from '../Contact/Contact.js';
const Intro = () => {
  return (
    <section id="intro">
       <h2 className='intershipsheader'>INTERNSHIPS ON WEBDEVELOPMENT</h2>
      <div className='introContent'>
        {/* <span className="hello">Hello</span>
        <span className='introText'>I'm <span className="introName">Rahul</span><br/>competitive programer</span>
        <p className="intropara">I'm skilled at coding </p>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>HIRE ME</button></Link> */}
      
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2 className='skillBarTitle'>COMPETITIVE PROGRAMMING</h2>
                    <p className='skillBarText'>I have been actively engaged in competitive programming for the past three years, participating in numerous contests on platforms such as Codeforces, CodeChef, LeetCode, and others, where I have successfully solved over 500 problems, showcasing my dedication and proficiency in algorithmic problem-solving.</p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>




            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>

            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>
            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>

            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>

        </div>


      </div>
      <h2 className='intershipsheader'>INTERNSHIPS ON MACHINE LEARNING</h2>

      <div className='introContent'>
        {/* <span className="hello">Hello</span>
        <span className='introText'>I'm <span className="introName">Rahul</span><br/>competitive programer</span>
        <p className="intropara">I'm skilled at coding </p>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>HIRE ME</button></Link> */}
      
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2 className='skillBarTitle'>COMPETITIVE PROGRAMMING</h2>
                    <p className='skillBarText'>I have been actively engaged in competitive programming for the past three years, participating in numerous contests on platforms such as Codeforces, CodeChef, LeetCode, and others, where I have successfully solved over 500 problems, showcasing my dedication and proficiency in algorithmic problem-solving.</p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 
                </div>
            </div>




            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>

            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>
            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>

            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>APPLY NOW</button></Link> 

                </div>
            </div>

        </div>


      </div>
      

      {/* <img src={ BGG } alt="beauty" className='bg'/> */}
      
    </section>
  )
}

export default Intro