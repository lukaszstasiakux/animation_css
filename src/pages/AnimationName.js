import React,{useState} from 'react';
import {moveBall, splashBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationName = props => {
	const [aniamtion,changeParam] = useState([
		'',''
	])
	
	const onClick = () => {
		changeParam([{name:moveBall},{name:splashBall}])
	}

	return(
		<SingleWrapper>
		<div onClick={onClick}>play</div>
			<Content>
					<Ball animation={aniamtion[0]} label="moveBall"/>
					<Ball animation={aniamtion[1]} label="splashBall"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationName;

