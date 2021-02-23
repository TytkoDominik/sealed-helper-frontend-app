import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            secret: '',
            dokLink: '',
            deckName: '',
            helperState: 'waiting',
            errorMessage: '',
            errorCode: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputSecret = async event => {
        const secret = event.target.value
        this.setState({ secret })
    }

    getDeck = async () => {
        const { name, secret, dokLink, deckName } = this.state
        const payload = { name, secret }

        await api.getPlayerDeck(payload).then(res => {

            if (res.data.hasOwnProperty('errorData'))
            {
                this.setState({
                    helperState: "errorReceived",
                    errorCode: res.data.code,
                    errorMessage: res.data.message
                })

                return;
            }


            this.setState({
                helperState: "deckReceived",
                name: res.data.name,
                deckName: res.data.generatedDeck.name,
                dokLink: res.data.generatedDeck.dokLink
            })
        })
    }

    inputPhase()
    {
        const { name, secret } = this.state
        return (
            <Wrapper>
                <Title>Show me my deck</Title>
                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Secret: </Label>
                <InputText
                    type="text"
                    value={secret}
                    onChange={this.handleChangeInputSecret}
                />

                <Button onClick={this.getDeck}>Show Deck</Button>
            </Wrapper>
        )
    }

    showDeckPhase()
    {
        const { name, deckName, dokLink } = this.state
        return (
            <Wrapper>
                <Label>Player Name: {name}</Label>

                <Label>Deck Name: {deckName} </Label>

                <Label>Link: </Label>
                <a href={dokLink}>{dokLink}</a>

            </Wrapper>
        )
    }

    showErrorPhase()
    {
        const { errorMessage, errorCode } = this.state
        return (
            <Wrapper>
                <Label>Error: {errorCode}</Label>
                <Label>Message: {errorMessage} </Label>
            </Wrapper>
        )
    }

    render() {

        const { helperState } = this.state;
        switch (helperState)
        {
            case "waiting":
            {
                return this.inputPhase()
            }
            case "deckReceived":
            {
                return this.showDeckPhase()
            }
            case "errorReceived":
            {
                return this.showErrorPhase()
            }
        }
    }
}

export default MoviesInsert