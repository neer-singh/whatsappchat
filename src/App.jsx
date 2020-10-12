import React from 'react';
import './App.css';
import Chat from './componenets/Chat';
import Sidebar from './componenets/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './componenets/Login';
import { useStateValue } from './componenets/StateProvider';
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <BrowserRouter>
            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomId'>
                <Chat />
              </Route>
              <Route path='/'>
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
