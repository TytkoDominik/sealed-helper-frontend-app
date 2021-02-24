import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

const Title = styled.div`
    font-size: 22px;
    color: white;
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <Logo />
                <Title>CTD Sealed Helper</Title>
            </Nav>
        )
    }
}

export default NavBar
