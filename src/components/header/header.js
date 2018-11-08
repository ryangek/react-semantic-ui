import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class CommonHeader extends Component {

    render() {
        return (
            <Menu className='fixed'>
                <NavLink className="item" activeClassName="active item" to="/home">
                    Home
                    </NavLink>
                <NavLink className="item" activeClassName="active item" to="/messages">
                    Messages
                    </NavLink>
                <NavLink className="item" activeClassName="active item" to="/friends">
                    Friends
                    </NavLink>
                {/* <Menu.Menu position='right'>
                    <NavLink className="item" activeClassName="active item" to="/logout">
                        Logout
                    </NavLink>
                </Menu.Menu> */}
            </Menu>
        )
    }
    
}