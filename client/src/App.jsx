import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
// import io from 'socket.io-client';

import Layout from './layout';
import Progress from './pages/Main_Menu/Dashboard/Progress';

import { changeUserType, changeAuth } from './store/ui';

import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import menuLists from './data/menu';
import Login from './pages/Authentication/Login';
import Classroom from './components/Classes/Classroom';
import axios from './config/axios';
import { useEffect } from 'react';

// const socket = io.connect('http://localhost:5000/');

const App = () => {
  const isAuthenticated = useSelector(({ ui }) => ui.isAuthenticated);
  const userType = useSelector(({ ui }) => ui.userType);

  const dispatch = useDispatch();

  useEffect(() => {
    async function setAuthToken() {
      const token = await localStorage.getItem('token');
      if (token) {
        dispatch(
          changeAuth({
            isAuthenticated: true,
            authToken: token,
          }),
        );

        const profile_type = localStorage.getItem('profile_type');
        if (profile_type === 'student_profile') {
          dispatch(changeUserType({ userType: 'student' }));
        } else if (profile_type === 'teacher_profile') {
          dispatch(changeUserType({ userType: 'teacher' }));
        }
      }
    }
    setAuthToken();
  }, [dispatch]);

  let route;
  if (isAuthenticated) {
    route = (
      <Layout>
        <Suspense fallback={<p>Loading.......</p>}>
          <Switch>
            <Route path={'/dashboard/progress'} component={Progress} />
            {menuLists[userType]['main'].map((nav) => (
              <Route
                key={nav}
                path={`/${nav.name.toLowerCase().replace(' ', '-')}`}
                component={nav.component}
              />
            ))}
            {menuLists[userType]['sub'].map((nav) => (
              <Route
                key={nav}
                path={`/class/:courseName/${nav.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
                component={nav.component}
              />
            ))}
            <Route
              path="/class/:courseCode/:mid"
              render={(props) => <Classroom {...props} />}
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
