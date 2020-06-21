
import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationTiming = props => {
	const [aniamtion,changeParam] = useState([
		'','','','','',''
	])
	
	const onClick = () => {
		changeParam([
			{name:moveBall,timing:'ease'},
			{name:moveBall,timing:'linear'},
			{name:moveBall,timing:'ease-in'},
			{name:moveBall,timing:'ease-out'},
			{name:moveBall,timing:'ease-in-out'},
			{name:moveBall,timing:'cubic-bezier(0.35, 0.63, 0.57, 0.18)'},
		])
	}

	return(
		<SingleWrapper>
		<div onClick={onClick}>play</div>
			<Content>
					<Ball animation={aniamtion[0]} label="ease"/>
					<Ball animation={aniamtion[1]} label="linear"/>
					<Ball animation={aniamtion[2]} label="ease-in"/>
					<Ball animation={aniamtion[3]} label="ease-out"/>
					<Ball animation={aniamtion[4]} label="ease-in-out"/>
					<Ball animation={aniamtion[5]} label="cubic-bezier(0.35, 0.63, 0.57, 0.18)"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationTiming;

