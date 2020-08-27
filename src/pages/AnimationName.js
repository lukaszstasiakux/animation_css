import React,{useState} from 'react';
import {moveBall, splashBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common';
import Button from "../components/Button";


const AnimationName = props => {
	const [animation,changeParam] = useState([
		'',''
	])
	
	const onClick = () => {
		changeParam([{name:moveBall},{name:splashBall}])
	}

	return(
		<SingleWrapper>
			<Button onClick={() => onClick()} label="play"/>
			<Content>
					<Ball animation={animation[0]} label="moveBall"/>
					<Ball animation={animation[1]} label="splashBall"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationName;

