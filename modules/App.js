import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Rojektiluarnio's Homepage</h1>
        <ul role="nav" className="header">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
})
