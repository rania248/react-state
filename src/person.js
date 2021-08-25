import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Timer from "./timer";
export default class Person extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='person'>
                 <Timer />
				<Card border='success' style={{ width: "40rem" }}>
					<Row>
						<Col>
							<Card.Img variant='top' src={this.props.Person.imgSrc} />
						</Col>
						<Col>
							<Card.Body>
								<Card.Title>
									<h4>{this.props.Person.fullName}</h4>
								</Card.Title>

								<Card.Text>
									{this.props.Person.profession}
									<p>{this.props.Person.bio}</p>
								</Card.Text>
							</Card.Body>
						</Col>
					</Row>
					<Col>
						<Card.Footer>
							<p>{this.props.Person.fullName}--{this.props.Person.profession}</p>
						</Card.Footer>
					</Col>
				</Card>
			</div>
		);
	}
}