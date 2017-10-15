import React from 'react'

const parseContent = () => {
  return "Rojektiluarnio is a group of software engineering student from Tampere University of Technology, enrolled on TIE-13106 2017-01 Project Work on Pervasive Systems. We are working on creating a new feature for Whappu application by Futurice. We are developing mainly with React Native and Node.js Express";
}

export default React.createClass({
  render() {
    return <div className="content"> {parseContent()} </div>
  }
})