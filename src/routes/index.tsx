import { Switch, Route } from 'react-router-dom';

import { Explore } from '../pages/Explore';
import { Home } from '../pages/Home';

export function Routes() {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/explore' component={Explore} />
    </Switch>
  );
}