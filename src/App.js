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
				vote: 0,
				bdc:'red'
			},
			{
        image:logo2,
				id: 2,
				name: "Nero Claudius Caesar",
				campaign: "Call ye upon me if need be to conquer Boudicca",
				vote: 0,
				bdc:"red"
			}
		]
	};

  plus = (contestant) =>{
    const newval = [...this.state.contestant]
		newval[newval.indexOf(contestant)].vote+=1
		newval.sort((a,b)=>b.vote-a.vote)
		if(newval[0].vote>newval[1].vote){
		newval[0].bdc='green'
		newval[1].bdc='red'
		}
		else if(newval[0].vote < newval[1].vote){
			newval[1].bdc='green'
			newval[0].bdc='red'
		}
		else{
			newval[0].bdc='red'
		newval[1].bdc='red'
		}
    this.setState({
      contestant:newval
    })
  }
	render() {
		return (
			<div className='App'>
				{this.state.contestant.map(contest => {
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
