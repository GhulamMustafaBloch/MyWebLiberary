import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assats/monogram.png";

const Footer = () => {
    return (
        <div>
            
    <footer className="footer">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav_links">
                        <li>
                            <Link to="/">ہوم</Link>
                        </li>
                        <li>
                            <Link to="/about">تعارف</Link>
                        </li>
                        <li>
                            <Link to="/contact">رابطہ</Link>
                        </li>
                        <li>
                            <Link to="/galry">گیلری</Link>
                        </li>
        </ul>
        <div className="sociol_links">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-square-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
        </div>
    </footer>
        </div>
    )
}

export default Footer
