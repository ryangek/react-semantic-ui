import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CommonCard = props => {
    const { friends, description, yearJoin, userName } = props;
    return (
        <Card>
            <Image src='/assets/images/matthew.png' />
            <Card.Content>
                <Card.Header>{userName}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in {yearJoin}</span>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href="/">
                    <Icon name='user' />
                    {friends}
                </a>
            </Card.Content>
        </Card>
    )
}

const CommonCardMathew = props => {
    const { loading } = props;
    let image = (
        <div className="ui placeholder">
            <div className="square image"></div>
        </div>
    )
    let detail = (
        <div className="content">
            <div className="ui placeholder">
                <div className="header">
                    <div className="very short line"></div>
                </div>
                <div className="meta">
                    <span className="date">
                        <div className="medium line"></div>
                    </span>
                </div>
                <div className="description">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
    let extra = (
        <div className="extra content">
            <div className="ui placeholder">
                <div className="medium line"></div>
            </div>
        </div>
    )
    if (!loading) {
        image = (<Image src='/assets/images/matthew.png' />)
        detail = (
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
        )
        extra = (
            <Card.Content extra>
                <a href="/"><Icon name='user' /> 22 Friends</a>
            </Card.Content>
        )
    }
    return (
        <Card>
            {image}
            {detail}
            {extra}
        </Card>
    )
}

export { CommonCard, CommonCardMathew }
