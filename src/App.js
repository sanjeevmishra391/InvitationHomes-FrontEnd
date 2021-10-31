import './App.css';
import * as React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home-page/HomePage';
import AuthPage from './pages/auth-page/AuthPage';
import SignupPage from './pages/signup-page/SignupPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import PropertyPage from './pages/property-page/PropertyPage';
import Footer from './components/footer/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  loginUser = (data) => {
    this.setState({
      currentUser: data.user
    })
  }

  render() {
    return (
      <HashRouter basename="InvitationHomes-FrontEnd">
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <div className='round-container'>
              <Route exact path='/' component={HomePage} />
              {
                this.state.currentUser 
                  ? 
                    <Route exact path={`/user/:id`}  render={() => <ProfilePage user={this.state.currentUser} />} />
                  : 
                    <Route exact path= '/auth'  render={() => <AuthPage handleUser={this.loginUser} />} />
              }
              <Route exact path='/auth/signup' component={SignupPage} />
              <Route exact path='/property/:id' component={PropertyPage} />
            </div>
            
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
