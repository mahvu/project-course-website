import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'


export default React.createClass({

  render() {
    return (
    <div className="content">
      <h2>The Team</h2>
      <ul>
        <li><NavLink to="/team/akseli">Keba</NavLink></li>
        <li><NavLink to="/team/saku">Zacky</NavLink></li>
        <li><NavLink to="/team/miika">Soulid</NavLink></li>
        <li><NavLink to="/team/lauri">ufam</NavLink></li>
      </ul>
      {this.props.children}
    </div>
    )
  }
})