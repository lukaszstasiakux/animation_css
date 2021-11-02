import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
	width:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	margin: 0px 10px;
`
const ButtonElement = styled.div`
	margin: 10px auto;
	padding: 8px 30px;
	color:#ffffff;
	border:1px solid #ffffff;
	border-radius:2px;
	cursor:pointer;
	&:hover{
		background-color:rgba(255,255,255,0.1);
	}
`

export const Button = ({onClick, label}) => {
	
	return (
		<ButtonWrapper>
			<ButtonElement onClick={onClick}>{label}</ButtonElement>
		</ButtonWrapper>
	)
}

export default Button