
import {keyframes} from 'styled-components';

export const moveBall = keyframes`
	0%{
		left:0%
	}
	100%{
		left:100%
	}
`
export const splashBall = keyframes`
	0%{
		height:40px
	}
	100%{
		height:2px;
	}
`
export const rotateCube = keyframes`
	0%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(360deg)
	}
`
export const demoLeft = keyframes`
	0%{
		transform:rotate(0deg)
	}
	25%{
		transform:rotate(25deg)
	}
	50%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(0deg)
	}
`
export const demoRight = keyframes`
	0%{
		transform:rotate(0deg)
	}
	25%{
		transform:rotate(-25deg)
	}
	50%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(0deg)
	}
`