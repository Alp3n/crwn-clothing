import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './views/homepage/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
