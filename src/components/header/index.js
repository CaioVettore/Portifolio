import React from 'react';
import './styles.css';


import Logo from '../../assets/logo.png';

import texture from '../../assets/texture.jpg';

const Header = () => (
    <header id="mainHeader" >
        <div class="navBar">
            <a href=" ">
                <img id="menuButton" src={Logo} />
            </a>
            <div class="brand">
                <a href="#home" id="home">
                    <text>Home</text>
                </a>
                <a href=" " id="about">
                    <text>About</text>
                </a>
                <a href=" " id="skills">
                    <text>Skills</text>
                </a>
                <a href=" " id="improvement">
                    <text>Improvement</text>
                </a>
                <a href=" " id="contact">
                    <text>Contact</text>
                </a>
            </div>
        </div>

    </header>

);



export default Header









