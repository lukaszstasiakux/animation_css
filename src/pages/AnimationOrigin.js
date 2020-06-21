import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationOrigin = props => {
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

			</Content>
		</SingleWrapper>
			)

}

export default AnimationOrigin;

