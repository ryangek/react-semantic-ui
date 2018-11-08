import React from 'react'
import { VerticalMenu, CommonComment } from '../../components'
import { Grid } from 'semantic-ui-react'

import './messages.css'

export default class Messages extends React.Component {

    constructor(props) {
        super(props)
        console.clear()
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.onLoad()
    }

    onLoad = () => {
        console.log("1")
        setTimeout(() => console.log("2"), 1000)
        setTimeout(() => console.log("3"), 1500)
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000)
    }

    render() {
        const { loading } = this.state;
        return (
            <Grid stackable>
                <Grid.Column width={4}>
                    <VerticalMenu></VerticalMenu>
                </Grid.Column>
                <Grid.Column width={12}>
                    <CommonComment loading={loading}></CommonComment>
                </Grid.Column>
            </Grid>
        );
    }

}