import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common';
import Button from "../components/Button";


const AnimationDirection = props => {
	const [animation,changeParam] = useState([
		'','','','',
	])
	
	const onClick = () => {
		changeParam([
			{name:moveBall,direction:'normal'},
			{name:moveBall,direction:'reverse'},
			{name:moveBall,direction:'alternate'},
			{name:moveBall,direction:'alternate-reverse'},
		])
	}

	return(
		<SingleWrapper>
		<Button onClick={() => onClick()} label="play"/>
			<Content>
					<Ball animation={animation[0]} label="normal"/>
					<Ball animation={animation[1]} label="reverse"/>
					<Ball animation={animation[2]} label="alternate"/>
					<Ball animation={animation[3]} label="alternate-reverse"/>					
			</Content>
		</SingleWrapper>
			)

}

export default AnimationDirection;

