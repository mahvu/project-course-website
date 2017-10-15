import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div className="content">
        <h2>The Team</h2>
          <ul>
            <li><NavLink to="/team/Akseli">Akseli</NavLink></li>
            <li><NavLink to="/team/Saku">Saku</NavLink></li>
            <li><NavLink to="/team/Miika">Miika</NavLink></li>
            <li><NavLink to="/team/Lauri">Lauri</NavLink></li>
            <li><NavLink to="/team/Santtu">Santtu</NavLink></li>
            <li><NavLink to="/team/Pietari">Pietari</NavLink></li>
          </ul>
      {this.props.children}
    </div>
    )
  }
})