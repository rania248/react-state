import React, { Component } from "react";

class timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	render() {
        const {count} = this.state
		return <div>
            <h1>current count : {count}</h1>
            {/* {this.state.count >= 5 && clearInterval(this.myInterval)} count stop on 5*/} 
        </div>;
	}
	//setIntervall
	//clearIntervall
	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count + 1
			}));
		}, 1000);
	}
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default timer;