import React from 'react'
import './Skills.css';
import CP from '../../Assests/CP.jpg';
import WEB from '../../Assests/WEB.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Iam a skilled and passionate web designer in creating visual appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail.Iam proficient in HTML,CSS and JAVASCRIPT.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={CP} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2 className='skillBarTitle'>COMPETITIVE PROGRAMMING</h2>
                    <p className='skillBarText'>I have been actively engaged in competitive programming for the past three years, participating in numerous contests on platforms such as Codeforces, CodeChef, LeetCode, and others, where I have successfully solved over 500 problems, showcasing my dedication and proficiency in algorithmic problem-solving.</p>
                </div>
            </div>




            <div className='skillBar'>
                <img src={WEB} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBDEVELOPMENT</h2>
                    <p>I have acquired comprehensive proficiency in web development, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Through dedicated learning and practical application, I have cultivated the ability to design and implement robust and dynamic web solutions. My expertise extends to crafting interactive and user-friendly interfaces, leveraging technologies such as React.js, coupled with backend proficiency using Node.js and Express.js, all supported by a solid foundation in database management with MongoDB. </p>
                </div>
            </div>

        </div>
       
    </section>
  )
}

export default Skills