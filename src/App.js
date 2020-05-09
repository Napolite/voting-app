import React, { Component } from "react";
import "./App.css";
import Contestant from "./votr";
import logo from './ryan.jpg'
import logo2 from './eva.jpg'
class App extends Component {
	state = {
		contestant: [
			{
        image:logo,
				id: 1,
				name: "Flavius Aurelius Constantino",
				campaign:
					"Promise to conquer the rest of the world, Christinize the great roman empire and name cities after me",
				vote: 0
			},
			{
        image:logo2,
				id: 2,
				name: "Nero Claudius Caesar",
				campaign: "Call ye upon me if need be to conquer Boudicca",
				vote: 0
			}
		]
	};

  plus = (contestant) =>{
    const newval = [...this.state.contestant]
    newval[newval.indexOf(contestant)].vote+=1
    this.setState({
      contestant:newval
    })
  }
	render() {
		return (
			<div className='App'>
				{this.state.contestant.sort((a,b)=>b.vote-a.vote).map(contest => {
					return (
						<Contestant
              key={contest.id}
              contest = {contest}
              plus ={this.plus}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
