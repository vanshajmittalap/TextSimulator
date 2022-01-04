import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark static" style={{color: 'white',backgroundColor:'#660066', width:'100%'}}>
            <div className="container-fluid">
                <Link className="navbar-brand active strong" to="/"><img src="favicon.ico" alt="" width="40" height="40" className='rounded-circle'/>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div>
                        <button type="button" className="btn btn-light btn-lg rounded-circle" onClick={()=>{props.toggleMode('light')}}></button>
                        <button type="button" className="btn btn-dark btn-lg rounded-circle" onClick={()=>{props.toggleMode('dark')}}></button>
                        <button type="button" className="btn btn-primary btn-lg rounded-circle" onClick={()=>{props.toggleMode('primary')}}></button>
                        <button type="button" className="btn btn-warning btn-lg rounded-circle" onClick={()=>{props.toggleMode('warning')}}></button>
                        <button type="button" className="btn btn-success btn-lg rounded-circle" onClick={()=>{props.toggleMode('success')}}></button>
                        <button type="button" className="btn btn-danger btn-lg rounded-circle" onClick={()=>{props.toggleMode('danger')}}></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };