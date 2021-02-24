import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.png';

const Image = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 5px;
`

class Logo extends Component {
    render() {
        return (
            <div>
                <Image src={logo} alt="kluczdodis.pl" />
            </div>
        )
    }
}

export default Logo
