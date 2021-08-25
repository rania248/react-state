import "./App.css";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Person from "./person";


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			Person: {
				fullName: "rania kthiri",
				bio:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				imgSrc: "./rania.jpg",
				profession: " Full-Stack Devlopper",
			},
		};

		this.shownow = () => {
			this.setState({ show: !this.state.show });
		};
	}
	render() {
		return (
			<div className='App'>
       
				<Button variant='success' onClick={this.shownow}>
					Show Profile
				</Button>
				{this.state.show ? (<Person Person ={this.state.Person}/> ) : ( <h2> Clik to activate the Show function </h2> )}
        
			</div>
		);
	}
}