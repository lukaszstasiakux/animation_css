// import React from 'react';
// import Pendulum from "../components/Pendulum";
// import {Content,Actions,SingleWrapper,Area} from './common';
// // import styled  from 'styled-components';


// const SinglePendulum = props => {
// 	return(
// 		<SingleWrapper>
// 			<Content>
// 				<Area>
// 					<Pendulum animation={props.animation}/>
// 				</Area>
// 			</Content>
// 			<Actions>
// 				{props.children}
// 			</Actions>
// 		</SingleWrapper>
// 	)
// }

// export default SinglePendulum 

import React from 'react';
import Pendulum from './Pendulum';
import styled from 'styled-components';

const WrapperPendulum = styled.div`
	border-top: 6px solid #fdfdfd;
	/* width:50px; */
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