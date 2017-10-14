import React from 'react'

const parseMemberHours = (member) => {
  
  switch(member) {
    case 'saku':
      return "/zackyImage.png";
      break;

    case 'akseli':
      return "/zackyImage.png";
      break;

    case 'Pietari':
      return "/zackyImage.png";
      break;

    case 'Santtu':
      return "/zackyImage.png";
      break;

    case 'miika':
      return "/zackyImage.png";
      break;

    case 'lauri':
      return "/zackyImage.png";
      break;

      //doesnt render default, as return value is a relative url
      // '/team/jorma' handles poorly
    default:
      return "Unknown member";
      break;
  }
}

const parseMemberBio = (member) => {
  
  switch(member) {
    case 'saku':
      return "saku on asdadsf";
      break;

    case 'akseli':
      return "que pasa";
      break;

    case 'Pietari':
      return "pr0ph3t";
      break;

    case 'Santtu':
      return "hanppari";
      break;

    case 'miika':
      return "el hefe";
      break;

    case 'lauri':
      return "ufam";
      break;

    default:
      return "Unknown member";
      break;
  }
}


export default React.createClass({  
  render() {
    return (
      <div>
        <h2>{this.props.params.memberName}</h2>
        
        <h3>Bio</h3>
        <p className="memberBio"> {parseMemberBio(this.props.params.memberName)} </p>

        <h3>Hours</h3>
        <img src={parseMemberHours(this.props.params.memberName)} className="memberTimeChart" />
        
      </div>
    )
  }
})