import React, { Component } from 'react';

class Contestant extends Component {
  
    
    render() { 
        return ( 
            <div className="App" >
            <div className="wall" style={{border:`5px ${this.props.contest.bdc} solid`}}>
              <img src={this.props.contest.image} alt="this is to show contestant" className="img"/>
              <div className="info">
                <p className = 'name'> {this.props.contest.name} </p>
                <p> {this.props.contest.campaign}</p>
                <p> Number of votes: {this.props.contest.vote}</p><button onClick={()=>this.props.plus(this.props.contest)} className = "button">Vote</button>
                <span><i className='fa fa-heart' /></span>
              </div>
            </div>
          </div>
         );
    }
}
 
export default Contestant ;