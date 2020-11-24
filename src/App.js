import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shoppage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
