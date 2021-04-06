
import React from 'react'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import banner from "../Images/banner-image.png";
import { NavLink ,Link} from 'react-router-dom';
import Pdf from '../data/satyam_resume.pdf'
import "./App.css"
const Home=()=> {
    return (
        <>
        
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h5 className="hey">
                                Hey
                            </h5>
                            <h2 className="name">
                                I AM SATYAM
                            </h2>
                            <h4 className="occup">
                                WEB DEVELOPER
                            </h4>
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <Tooltip title="Hire"><Button className="hire_button"> <NavLink to="/contact" className="hire">HIRE ME</NavLink></Button></Tooltip> <Tooltip title="CV"><Button className="cv_button"><Link to ={Pdf} target="_blank" download="Satyam-resume.pdf" className="cv">GET CV</Link></Button></Tooltip>
                        </div>
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img width="800px"  src={banner} className="img-fluid animated" alt="Home"></img>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        </>
    )
}

export default Home
