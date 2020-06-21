import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationFill = props => {
	const [aniamtion,changeParam] = useState([
		'','','',''
	])
	
	const onClick = () => {
		changeParam([
			{name:moveBall,fillMode:'none',count:1},
			{name:moveBall,fillMode:'forwards',count:1},
			{name:moveBall,fillMode:'backwards',count:1},
			{name:moveBall,fillMode:'both',count:1},

		])
	}

	return(
		<SingleWrapper>
		<div onClick={onClick}>play</div>
			<Content>
					<Ball animation={aniamtion[0]} label="none"/>
					<Ball animation={aniamtion[1]} label="forwards"/>
					<Ball animation={aniamtion[2]} label="backwards"/>
					<Ball animation={aniamtion[3]} label="both"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationFill;

