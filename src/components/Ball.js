import React from 'react';
import styled from 'styled-components';

const ComponentBall = styled.div`
	width:30px;
	height:30px;
	background-color:#fdfdfd;
	border-radius:50%;
	left:${p => p.left ? p.left : 0};
	top:25px;
	position:absolute;
	animation-name:${p => p.animation.name ? p.animation.name : ''};
	animation-delay:${p => p.animation.delay ? p.animation.delay : 0};
	animation-direction:${p=> p.animation.direction ? p.animation.direction : 'normal'};
	animation-duration:${p => p.animation.duration ? p.animation.duration : '3s'};
	animation-fill-mode:${p => p.animation.fillMode ? p.animation.fillMode : 'none'};
	animation-iteration-count: ${p => p.animation.count ? p.animation.count : 'infinite'};
	animation-play-state: ${p => p.animation.playState ? p.animation.playState : 'play'};
	animation-timing-function: ${p => p.animation.timing ? p.animation.timing : 'linear'};	
`
const WrapperBall = styled.div`
	display:flex;
	flex-direction:column;
	width:100%;
	max-width:350px;
	position:relative;
	margin-bottom:20px;
	height:55px;
`
const LabelBall = styled.div`
	color:#fdfdfd;
	font-size:16px;
	margin-bottom:10px;
`

const Ball = props => {
	// console.log(props)
	return(
		<WrapperBall>
			<LabelBall>
				{props.label}
			</LabelBall>
			<ComponentBall {...props}/>
		</WrapperBall>
	)
}

export default Ball;

