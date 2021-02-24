import React, { Component } from 'react'
import styled from 'styled-components'

import teamLogo from '../assets/ctd-logo.png';

const BottomLink = styled.a`
    position: absolute;
    bottom: 2px;
    left: 50%;
    margin-left: -40px;
`

class TeamLogo extends Component {
    render() {
        return (
            <BottomLink href="http://kluczdodis.pl">
                <img src={teamLogo} width="80" alt="kluczdodis.pl" />
            </BottomLink>
        )
    }
}

export default TeamLogo
