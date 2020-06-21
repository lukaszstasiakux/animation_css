import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationDirection = props => {
	const [aniamtion,changeParam] = useState([
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
		<div onClick={onClick}>play</div>
			<Content>
					<Ball animation={aniamtion[0]} label="normal"/>
					<Ball animation={aniamtion[1]} label="reverse"/>
					<Ball animation={aniamtion[2]} label="alternate"/>
					<Ball animation={aniamtion[3]} label="alternate-reverse"/>					
			</Content>
		</SingleWrapper>
			)

}

export default AnimationDirection;

