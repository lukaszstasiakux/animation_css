import React,{useState} from 'react';
import {moveBall} from "../helpers/animation";
import Ball from "../components/Ball";
import {Content,SingleWrapper} from '../components/common';
import Button from "../components/Button";


const AnimationIteration = props => {
	const [animation,changeParam] = useState([
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
			<Button onClick={() => onClick()} label="play"/>
			<Content>
					<Ball animation={animation[0]} label="1"/>
					<Ball animation={animation[1]} label="3"/>
					<Ball animation={animation[2]} label="infinite"/>
			</Content>
		</SingleWrapper>
			)

}

export default AnimationIteration;

