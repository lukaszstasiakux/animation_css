import React,{useState} from 'react';
import { rotateCube} from "../helpers/animation";
import Cube from "../components/Cube";
import {Content,SingleWrapper} from '../components/common';
import styled from 'styled-components';
import Button from "../components/Button";

const TopOriginCube = styled(Cube)`
	transform-origin: top left;
`
const BottomOriginCube = styled(Cube)`
	transform-origin: bottom right;
`
const AnimationOrigin = props => {
	const [animation,changeParam] = useState([
		'','','',
	])
	
	const onClick = () => {
		changeParam(
			[{name:rotateCube}]
		)
	}

	return(
		<SingleWrapper>
			<Button onClick={() => onClick()} label="play"/>
			<Content>
			<Cube animation={animation[0]} label="Center Center"/>
			<TopOriginCube animation={animation[0]} label="Top Left"/>
			<BottomOriginCube animation={animation[0]} label="Bottom Right"/>

			</Content>
		</SingleWrapper>
			)

}

export default AnimationOrigin;

