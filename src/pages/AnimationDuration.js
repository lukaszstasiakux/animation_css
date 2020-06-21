import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common'


const AnimationDuration = props => {
	const [aniamtion,changeParam] = useState([
		'',''
	])
	
	const onClick = () => {
		changeParam([
			{name:moveBall,duration:'3s'},
			{name:moveBall,duration:'1s'}])
	}

	return(
		<SingleWrapper>
		<div onClick={onClick}>play</div>
			<Content>
					<Ball animation={aniamtion[0]} label="3s"/>
					<Ball animation={aniamtion[1]} label="1s"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationDuration;

