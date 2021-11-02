import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {PageContent} from "../components/common"

const AppLink = styled(Link)`
	color:#ffffff;
	text-decoration:none;
	font-size:16px;
	line-height:24px;
`
const PageIndex = () => {
	return(
		<PageContent>
			<h2>Spis treści:</h2>
			<AppLink to="/demo">Newton's pendulum - Demo</AppLink>
			<AppLink to="/name">animation-name</AppLink>
			<AppLink to="/duration">animation-duration</AppLink>
			<AppLink to="/timing">animation-timing-function</AppLink>
			<AppLink to="/delay">animation-delay</AppLink>
			<AppLink to="/iteration">animation-iteration-count</AppLink>
			<AppLink to="/direction">animation-direction</AppLink>
			<AppLink to="/fill">animation-fill-mode</AppLink>
			<AppLink to="/state">animation-play-state</AppLink>
			<AppLink to="/origin">transform-origin</AppLink>
		</PageContent>
	)
}

export default PageIndex;