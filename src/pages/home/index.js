import React, { Component, Text } from 'react';
import profile_image from '../../assets/profile_image.jpg'
import texture from '../../assets/texture.jpg'
import './styles.css'
import { render } from '@testing-library/react';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img id="texture" src={texture}></img>

                </div>
                <div id="divImagemProfileHome">
                    <img id="profile_image" src={profile_image}></img>
                </div>
                <div id='Divtext01'>


                    <text >Hello I'am</text>

                    <text id="textName"><br /><br />
                             CAIO VETTORE FERNANDES
                        </text>


                </div>


            </div>
        )
    }
}
export default Home