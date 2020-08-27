import React from 'react';
import styled from 'styled-components';

const ComponentPendulum = styled.div`
	width:4px;
	height:200px;
	background-color:#fdfdfd;
	margin:0px 30px;
	position:relative;
	animation-name:${p => p.animation.name };
	animation-delay:${p => p.animation.delay};
	animation-direction:${p=> p.animation.direction};
	animation-duration:${p => p.animation.duration};
	animation-fill-mode:${p => p.animation.fillMode};
	animation-iteration-count: ${p => p.animation.count};
	animation-play-state: ${p => p.animation.playState};
	animation-timing-function: ${p => p.animation.timing};	
	&:after{
		content:'';
		position:absolute;
		width:40px;
		height:40px;
		left:-20px;
		bottom:-39px;
		border-radius:50%;
		background-color:#fdfdfd;
	}
`

const Pendulum = props => {
	return(
		<ComponentPendulum {...props}/>
	)
}

export default Pendulum;

