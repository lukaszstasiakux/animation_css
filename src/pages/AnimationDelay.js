import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationDelay = props => {
	const [aniamtion,changeParam] = useState([
		'','','',
	])
	
	const onClick = () => {
		changeParam([
			{name:moveBall,delay:'0'},
			{name:moveBall,delay:'1s'},
			{name:moveBall,delay:'2s'},
		])
	}

	return(
		<SingleWrapper>
		<div onClick={onClick}>play</div>
			<Content>
					<Ball animation={aniamtion[0]} label="0s"/>
					<Ball animation={aniamtion[1]} label="1s"/>
					<Ball animation={aniamtion[2]} label="2s"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationDelay;

