import React from 'react'

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

const parseMemberBio = (member) => {
  
  switch(member) {
    case 'Saku':
      return "Roles: Product Owner, User Experience Designer. Saku is a 7th year Computer Science student majoring in Pervasive Computing with interests in Machine Learning, Artificial Intelligence and Digital Engineering as well as User Interface Design.";
      break;

    case 'Akseli':
      return "Roles: Programmer, QA, Agile coach. Akseli is 10th and last year Software Engineering student. His major is software engineering and minors hypermedia and logistics. Akseli has background in some hobby projects with full stack js-applications and  few years working experience in Operations as Systems Administrator and is currently working full time as Systems Specialist at Cybercom Finland. Akseli has strong intrests in DevOps and Agile methods.";
      break;

    case 'Pietari':
      return "Roles: Programmer. Pietari is studying his 7th (and last) year in Software Engineering. He has many years of experience from modern fullstack web development.";
      break;

    case 'Santtu':
      return "Roles: Programmer, Risk Management. Santtu is a 9th and a last year Computer Science student with strong background in finance. He is majoring in software engineering and is especially interested in machine learning, artificial intelligence and data science; topics he has studied extensively in both bachelor’s and master’s theses.";
      break;

    case 'Miika':
      return "Roles: Project Manager, programmer. Miika is a 7th year Software Engineering student. He has 2 years of experience in web development on .Net environment. He is also interested in mobile development, mostly with React Native.";
      break;

    case 'Lauri':
      return "Roles: Programmer. Lauri is a 7th year Software Engineering student. Interests lie in various web technologies, including both front end and back end technologies.";
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
        <img src={parseMemberHours()} className="memberTimeChart" />
        
        <h3>Burnup</h3>
        <img src={parseMemberBurn()} className="memberBurnChart" />

      </div>
    )
  }
})