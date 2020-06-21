import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationIteration = props => {
	const [aniamtion,changeParam] = useState([
		'','','',
	])
	
	const onClick = () => {
		changeParam([
			{name:moveBall,count:'1'},
			{name:moveBall,count:'3'},
			{name:moveBall,count:'5'},
		])
	}

	return(
		<SingleWrapper>
		<div onClick={onClick}>play</div>
			<Content>
					<Ball animation={aniamtion[0]} label="1"/>
					<Ball animation={aniamtion[1]} label="3"/>
					<Ball animation={aniamtion[2]} label="infinite"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationIteration;

