import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import {Link} from "react-router-dom";

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Link to="/sealed/player" className="navbar-brand">
                        CTD Sealed Helper
                    </Link>
                </Nav>
            </Container>
        )
    }
}

export default NavBar