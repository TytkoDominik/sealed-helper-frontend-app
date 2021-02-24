import React, { Component } from 'react'
import api from '../api'
import { toast, Toast } from 'react-toastify';
import styled from 'styled-components'
import { LoadingIndicator } from '../components/LoadingIndicator';
import eventLogo from '../assets/sealed-event-img-full.jpg';
import TeamLogo from '../components/TeamLogo';

const Title = styled.h1.attrs({
    className: 'h1',
})`
    align-self: center;
`

const Form = styled.form.attrs({
    className: 'form-group',
})`
    margin-top: 15px;
    width: 415px;
    display: flex;
    flex-direction: column;
`

const CenteredVertically = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Label = styled.label`
    margin-top: 10px;
    margin-bottom: 3px;
    margin-left: 2px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})``

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
    width: 150px;
    height: 40px;
    align-self: center;
`

const InfoContainer = styled.div`
    margin-top: 30px;
    padding: 15px;
`

const InfoLine = styled.div`
    font-size: 17px;
    margin-top: 5px;
`

const EventImage = styled.img`
    height: 215px;
`

const Shadow = styled.div`
    margin-top: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 515px;
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
            errorCode: '',
            loading: false,
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
        const { name, secret } = this.state
        const payload = { name, secret }

        this.setState({ loading: true });
        try {
            const { data } = await api.getPlayerDeck(payload);
            if (data.errorData) {
                toast.error(`Wystąpił błąd: ${data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

                this.setState({
                    errorCode: data.code,
                    errorMessage: data.message
                })
            } else {
                this.setState({
                    helperState: "deckReceived",
                    name: data.name,
                    deckName: data.generatedDeck.name,
                    dokLink: data.generatedDeck.dokLink
                })
            }
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ loading: false });
        }
    }

    inputPhase()
    {
        const { name, secret, loading } = this.state
        return (
            <Form onSubmit={(event) => {
                event.preventDefault();
                this.getDeck();
            }}>
                <Title>Show me my deck</Title>
                <Label>TCO Nickname: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                    required
                />
                <Label>Secret: </Label>
                <InputText
                    type="text"
                    value={secret}
                    onChange={this.handleChangeInputSecret}
                    required
                />
                <Button type="submit" disabled={loading}>
                    { loading ? <LoadingIndicator /> : "Show Deck"}
                </Button>
            </Form>
        )
    }

    showDeckPhase()
    {
        const { name, deckName, dokLink } = this.state
        return (
            <InfoContainer>
                <InfoLine>TCO Nickname: {name}</InfoLine>

                <InfoLine>Deck Name: {deckName}</InfoLine>

                <InfoLine>DoK Link:</InfoLine>
                <InfoLine><a href={dokLink}>{dokLink}</a></InfoLine>
            </InfoContainer>
        )
    }

    render() {
        const { helperState } = this.state;
        return (
            <CenteredVertically>
                <Shadow>
                    <EventImage src={eventLogo} />
                    {helperState === 'waiting' ? this.inputPhase() : this.showDeckPhase() }
                </Shadow>
            </CenteredVertically>

        )
    }
}

export default MoviesInsert
