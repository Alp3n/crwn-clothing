import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Homepage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shoppage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
