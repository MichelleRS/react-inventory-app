// react imports
import { Route, Switch, Redirect } from 'react-router-dom';
// local imports
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Inventory from './components/Main/Inventory/Inventory.js';
import Auth from './components/Main/Auth/Auth.js';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      {/* Switch with Routes to Auth/ or Inventory/ */}
      <Switch>
        {/* route to Auth */}
        <Route path="/auth/:type" component={Auth} />
        {/* route to Inventory/ */}
        <Route path="/inventory" component={Inventory} />
        <Route exact path="/">
          <>
            {/* if user redirect to Inventory */}
            {user && <Redirect to="/inventory" />}
            {/* if not a user, redirect to sign-in */}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
