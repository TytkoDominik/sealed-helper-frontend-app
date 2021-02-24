import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="http://kluczdodis.pl">
                <img src={logo} width="50" height="50" alt="kluczdodis.pl" />
            </Wrapper>
        )
    }
}

export default Logo
