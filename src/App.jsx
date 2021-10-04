import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

import Layout from './layout';
import Progress from './pages/Main_Menu/Dashboard/Progress';

import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import menuLists from './data/menu';
import Login from './pages/Authentication/Login';
import Classroom from './components/Classes/Classroom';

const socket = io.connect('http://localhost:5000/');

const App = () => {
  const isAuthenticated = useSelector(({ ui }) => ui.isAuthenticated);
  const userType = useSelector(({ ui }) => ui.userType);

  let route;
  if (isAuthenticated) {
    route = (
      <Layout>
        <Suspense fallback={<p>Loading.......</p>}>
          <Switch>
            <Route path={'/dashboard/progress'} component={Progress} />
            {menuLists[userType]['main'].map((nav) => (
              <Route
                path={`/${nav.name.toLowerCase().replace(' ', '-')}`}
                component={nav.component}
              />
            ))}
            {menuLists[userType]['sub'].map((nav) => (
              <Route
                path={`/class/:courseName/${nav.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
                component={nav.component}
              />
            ))}
            <Route
              path="/class/:courseCode/"
              render={(props) => <Classroom socket={socket} {...props} />}
            />
            <Redirect to="/dashboard" />
          </Switch>
        </Suspense>
      </Layout>
    );
  } else {
    route = (
      <div>
        <Switch>
          <Route path="/" component={Login} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
  return route;
};

export default App;

//font-family: 'Raleway', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;
