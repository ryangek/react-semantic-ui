import React from 'react'
import { Grid } from 'semantic-ui-react'
import { CommonCardMathew } from '../../components'

import './friends.css'

export default class Friends extends React.Component {

    constructor(props) {
        super(props)
        console.clear()
        this.state = {
            cards: [],
            loading: true
        }
    }

    componentDidMount() {
        this.addHandredCards()
        this.onLoadImage()
    }

    onLoadImage = () => {
        console.log("1")
        setTimeout(() => console.log("2"), 1000)
        setTimeout(() => console.log("3"), 1500)
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000)
    }

    addHandredCards = () => {
        let cards = []
        for (let i = 0; i < 100; i++) {
            cards.push(i)
        }
        this.setState({
            cards: cards
        })
    }

    getCards = () => {
        const { cards, loading } = this.state;
        return cards.map((obj, key) =>
            <Grid.Column key={key}>
                <CommonCardMathew loading={loading}></CommonCardMathew>
            </Grid.Column>
        );
    }

    render() {
        return (
            <Grid className='friends content' doubling columns={5}>
                {this.getCards()}
            </Grid>
        );
    }
    
}