import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {
    const redirect = useNavigate()

    const logout=()=>{
        localStorage.removeItem('Uloginid')
        localStorage.removeItem('Uname')
        toast.success("logout successfully")
        redirect("/ulogin")
    }
    return (
        <div>
            <div>
                <div className="container-fluid bg-light p-0">
                    <div className="row gx-0 d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                                <small className="fa fa-map-marker-alt text-primary me-2" />
                                <small>123 Street, New York, USA</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-3">
                                <small className="far fa-clock text-primary me-2" />
                                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                                <small className="fa fa-phone-alt text-primary me-2" />
                                <small>+012 345 6789</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center">
                                <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-twitter" /></a>
                                <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-sm-square bg-white text-primary me-0" href><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">WooDY</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                        <NavLink to="/project" className="nav-item nav-link">Project</NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu fade-up m-0">
                                <a href="feature.html" className="dropdown-item">Feature</a>
                                <a href="quote.html" className="dropdown-item">Free Quote</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        {(
                            ()=>{
                                if(localStorage.getItem("Uloginid"))
                                    {
                                        return(
                                            <>
                                                <NavLink to="/profile" className="nav-item nav-link">hii...{localStorage.getItem("Uname")}</NavLink>
                                            </>
                                        )
                                    }
                            }
                        )()}
                        {(
                            ()=>{
                                if(localStorage.getItem("Uloginid"))
                                {
                                    return(
                                        <>
                                        <Link className='nav-item nav-link' onClick={logout}>Logout</Link>
                                        </>
                                    )
                                }
                                else
                                {
                                    return(
                                        <>
                                            <NavLink to="/ulogin" className="nav-item nav-link" >login</NavLink>
                                        </>
                                    )
                                }
                            }
                        )()}
                        
                    </div>
                   
                </div>
            </nav>

        </div>
    )
}

export default Header
