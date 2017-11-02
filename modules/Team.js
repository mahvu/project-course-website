import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

const parseMemberBurn = () => {
  
  return "/burnSprint1.png";
  /*
  switch(member) {
    case 'Saku':
      return "/burnSprint1.png";
      break;

    case 'Akseli':
      return "/burnSprint1.png";
      break;

    case 'Pietari':
      return "/burnSprint1.png";
      break;

    case 'Santtu':
      return "/burnSprint1.png";
      break;

    case 'Miika':
      return "/burnSprint1.png";
      break;

    case 'Lauri':
      return "/burnSprint1.png";
      break;

      //doesnt render default, as return value is a relative url
      // '/team/jorma' handles poorly
    default:
      return "Unknown member";
      break;
  }
  */
}

const parseMemberHours = () => {
  
  return "/hoursSprint1.png";

  /*
  switch(member) {
    case 'Saku':
      return "/zackyImage.png";
      break;

    case 'Akseli':
      return "/zackyImage.png";
      break;

    case 'Pietari':
      return "/zackyImage.png";
      break;

    case 'Santtu':
      return "/zackyImage.png";
      break;

    case 'Miika':
      return "/zackyImage.png";
      break;

    case 'Lauri':
      return "/zackyImage.png";
      break;

      //doesnt render default, as return value is a relative url
      // '/team/jorma' handles poorly
    default:
      return "Unknown member";
      break;
  }
  */
}

export default React.createClass({
  render() {
    return (
      <div className="content">

        <h2>Hours</h2>
        <img src={parseMemberHours()} className="memberTimeChart" />
        
        <br/>
        <br/>
        <br/>


        <h2>Burnup</h2>
        <img src={parseMemberBurn()} className="memberBurnChart" />
        
        <br/>
        <br/>
        <br/>

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