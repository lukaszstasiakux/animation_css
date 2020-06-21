import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationState = props => {
	const [aniamtion,changeParam] = useState([
		'',
	])
	
	const play = () => {
		changeParam([
			{name:moveBall,playState:'running'},
		])
	}
	const paused = () => {
		changeParam([
			{name:moveBall,playState:'paused'},
		])
	}

	return(
		<SingleWrapper>
		<div onClick={play}>play</div>
		<div onClick={paused}>paused</div>
			<Content>
					<Ball animation={aniamtion[0]} label="play / pause"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationState;

