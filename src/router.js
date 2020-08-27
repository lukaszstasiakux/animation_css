import React from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import {AppWrapper} from "./components/common";
import PageIndex from './pages/PageIndex';
import AnimationName from './pages/AnimationName';
import AnimationDuration from './pages/AnimationDuration';
import AnimationTiming from './pages/AnimationTiming';
import AnimationDelay from './pages/AnimationDelay';
import AnimationIteration from './pages/AnimationIteration';
import AnimationDirection from './pages/AnimationDirection';
import AnimationFill from './pages/AnimationFill';
import AnimationState from './pages/AnimationState';
import AnimationOrigin from './pages/AnimationOrigin';


import Demo from './pages/Demo';

const AppRouter = props => {
  return (
		<BrowserRouter>
			<AppWrapper>
					<Switch>
						<Route path="/" component={PageIndex} exact={true} />
						<Route path="/name" component={AnimationName} exact={true} />
						<Route path="/duration" component={AnimationDuration} exact={true} />
						<Route path="/timing" component={AnimationTiming} exact={true} />
						<Route path="/delay" component={AnimationDelay} exact={true} />
						<Route path="/iteration" component={AnimationIteration} exact={true} />
						<Route path="/direction" component={AnimationDirection} exact={true} />
						<Route path="/fill" component={AnimationFill} exact={true} />
						<Route path="/state" component={AnimationState} exact={true} />
						<Route path="/origin" component={AnimationOrigin} exact={true} />
						


						
						<Route path="/demo" component={Demo} exact={true} />
					</Switch>
			</AppWrapper>
    </BrowserRouter>
    
  );
}

export default AppRouter;

