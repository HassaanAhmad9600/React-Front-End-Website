// import React from 'react'
import styles from './Nav.module.css'
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "./images/logo.png"
import { useState } from 'react';


const Nav = ({ scrollToSection }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navigation = useNavigate()
    const location = useLocation()


    const handleNavigation = (e) => {
        const path = e.target.value;
        navigation(path);
        // window.scrollTo(0, 0);
    };


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })

    }


    const handleSectionClick = (section) => {
        if (location.pathname === '/') {
            scrollToSection(section)
        } else {
            navigation('/')
        }

    }



    return (

        <div>

            <nav className={styles.nav}>

                <div>
                    <img src={logo} alt="LOGO" />
                </div>


                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>



                <div className={`${styles.desktopMenu} ${isMenuOpen ? styles.showMenu : ''}`}>


                    <ul className={styles.navRight}>

                        <li onClick={scrollToTop}><Link to='/'>Home</Link></li>
                        <li onClick={() => { scrollToTop(); handleSectionClick('Men') }} >Men's  </li>
                        <li onClick={() => { scrollToTop(); handleSectionClick('Women') }}> Women's  </li>
                        <li onClick={() => { scrollToTop(); handleSectionClick('Kids') }}> Kid's  </li>


                        {/* <li>

                            <select onChange={handleNavigation}>
                                <option>Pages</option>

                                <option onClick={scrollToTop} value='/contactus' >Contact Us</option>
                                <option onClick={scrollToTop} value='/aboutus' >About Us</option>
                                <option onClick={scrollToTop} value='/products' >Products</option>
                                <option onClick={scrollToTop} value='/SingleProduct' >Single Product</option>

                            </select>

                        </li> */}


                        <li 
                            className={styles.dropdown} 
                            tabIndex="0"
                        >

                            <div 
                                className={styles.dropbtn}
                                onClick={(e) => {
                                    if (window.innerWidth <= 850) {
                                        e.stopPropagation();
                                        setOpenDropdown(openDropdown === 'pages' ? null : 'pages');
                                    }
                                }}
                            >Pages</div>

                            <ul className={`${styles.dropdownContent} ${openDropdown === 'pages' ? styles.showDropdown : ''}`}>

                                <li>
                                    <div onClick={(e) => { 
                                        e.stopPropagation();
                                        scrollToTop(); 
                                        handleNavigation({ target: { value: '/contactus' } }); 
                                        if (window.innerWidth <= 850) {
                                            setOpenDropdown(null);
                                        }
                                    }}>
                                        Contact Us
                                    </div>
                                </li>

                                <li>
                                    <div onClick={(e) => { 
                                        e.stopPropagation();
                                        scrollToTop(); 
                                        handleNavigation({ target: { value: '/aboutus' } }); 
                                        if (window.innerWidth <= 850) {
                                            setOpenDropdown(null);
                                        }
                                    }}>
                                        About Us
                                    </div>
                                </li>

                                <li>
                                    <div onClick={(e) => { 
                                        e.stopPropagation();
                                        if (window.innerWidth <= 850) {
                                            setOpenDropdown(null);
                                        }
                                        scrollToTop();
                                        navigation('/products');
                                    }}>
                                        Products
                                    </div>
                                </li>

                                <li>
                                    <div onClick={(e) => { 
                                        e.stopPropagation();
                                        scrollToTop(); 
                                        handleNavigation({ target: { value: '/SingleProduct' } }); 
                                        if (window.innerWidth <= 850) {
                                            setOpenDropdown(null);
                                        }
                                    }}>
                                        Single Product
                                    </div>
                                </li>

                            </ul>

                        </li>


                        {/* <li>

                            <select onChange={handleNavigation}>
                                <option>Features</option>

                                <option value='/'>Feature1</option>
                                <option value='/'>Feature2</option>
                                <option value='/'>Feature3</option>
                                <option value='/'>Feature4</option>

                            </select>

                        </li> */}


                        <li 
                            className={styles.dropdown} 
                            tabIndex="0"
                        >

                            <div 
                                className={styles.dropbtn}
                                onClick={(e) => {
                                    if (window.innerWidth <= 850) {
                                        e.stopPropagation();
                                        setOpenDropdown(openDropdown === 'features' ? null : 'features');
                                    }
                                }}
                            >Features</div>

                            <ul className={`${styles.dropdownContent} ${openDropdown === 'features' ? styles.showDropdown : ''}`}>

                                <li>
                                    <div onClick={(e) => {
                                        e.stopPropagation();
                                        scrollToTop();
                                        if (window.innerWidth <= 850) {
                                            setOpenDropdown(null);
                                        }
                                    }}>
                                        <Link to='/'>Feature 1</Link>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={(e) => {
                                        e.stopPropagation();
                                        scrollToTop();
                                        if (window.innerWidth <= 850) {
                                            setOpenDropdown(null);
                                        }
                                    }}>
                                        <Link to='/'>Feature 2</Link>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={(e) => {
                                        e.stopPropagation();
                                        scrollToTop();
                                        if (window.innerWidth <= 850) {
                                            setOpenDropdown(null);
                                        }
                                    }}>
                                        <Link to='/'>Feature 3</Link>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={(e) => {
                                        e.stopPropagation();
                                        scrollToTop();
                                        if (window.innerWidth <= 850) {
                                            setOpenDropdown(null);
                                        }
                                    }}>
                                        <Link to='/'>Feature 4</Link>
                                    </div>
                                </li>

                            </ul>

                        </li>


                        <li onClick={() => { scrollToTop(); handleSectionClick('Explore') }}>Explore</li>

                    </ul>

                </div >

            </nav >


        </div >

    )
}

export default Nav
