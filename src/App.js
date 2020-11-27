import './App.scss';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shoppage.component';
import AuthenticationPage from './views/authentication/authentication.component';

import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/auth' component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
