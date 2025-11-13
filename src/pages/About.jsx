import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <article className="settingsContainer" >
        
        <div className="stylingAbout">
            <h1 className="landingHeader2">About</h1>
            <p className="MJEdescription2">
              MJE stands for MahJong Europa. It is a website that promotes alternative approach to learn 
                languages through gamification. MJE is a test approach created by Lukasz Galik - Edinburgh 
                Napier University student as part of the course. MahJong Europa will allow you to learn 
                most popular foreign languages and get enough vocabulary to achieve A2 level of language 
                comprehantion. The strength of MJE is that you can learn three languages at once. Thank you 
                for visiting this site and have fun.
            </p>
        </div>
        <div className="stylingQuickAccess">
          <h1 className="landingHeader">Quick Access</h1>
          <div className="quickBtn">
            <Link to='/playfruits'>
                <button className="startBtn">
                    The Fruits
                </button>
            </Link>
            <Link to='/playmoods'>
                <button className="startBtn">
                    The Moods
                </button>
            </Link>
            <Link to='/playvegetables'>
                <button className="startBtn">
                    The Vegetables
                </button>
            </Link>
            <Link to='/playtransport'>
                <button className="startBtn">
                    The Transport
                </button>
            </Link>
            <Link to='/playnumbers'>
                <button className="startBtn">
                    The Numbers
                </button>
            </Link>
            <Link to='/playhomeware'>
                <button className="startBtn">
                    The Homeware
                </button>
            </Link>
            <Link to='/playactions'>
                <button className="startBtn">
                    The Actions
                </button>
            </Link>
          </div>
        </div>
    </article>
    </>
  )
}

export default About