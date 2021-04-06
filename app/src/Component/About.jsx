import React from 'react'
import about from '../Images/about-us.png'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Pdf from '../data/satyam_resume.pdf'

function About() {
    return (
        <>
            <section id="header" className="about-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-image">
                            <img src={about} alt="About us" className="img-fluid animated" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 about-title">
                        <h2 class="text-uppercase pt-5">
                            <span>Let me </span>
                            <span>introduce </span>
                            <span>myself</span>
                        </h2>
                        <div class="paragraph py-4 w-75">
                            <p class="para">
                                
                            </p>
                            <p class="para">
                                
                            </p>
                        </div>
                        <Button className="hire_button"><Link to ={Pdf} target="_blank" download="Satyam-resume.pdf" className="cv">DOWLOAD</Link></Button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About
