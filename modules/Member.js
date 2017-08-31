import React from 'react'

export default React.createClass({
    
      render() {
        return (
          <div>
            <h2>{this.props.params.memberName}</h2>
          </div>
        )
      }
    })