import React from 'react';
import Pendulum from './Pendulum';
import styled from 'styled-components';

const WrapperPendulum = styled.div`
	border-top: 6px solid #fdfdfd;
	display:flex;
	justify-content:center;
`


const SinglePendulum = props => {

	return(
		<WrapperPendulum >
			<Pendulum {...props}/>
		</WrapperPendulum>
	)
}

export default SinglePendulum;