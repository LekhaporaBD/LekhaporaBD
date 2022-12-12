import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from './Sidebar/Sidebar';
import Loader from '../components/utils/Loader';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from '../config/axios';
import { setProfile } from '../store/ui';

const Layout = (props) => {
  const [activeSidedrawer, setActiveSidedrawer] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const medium = useMediaQuery('(max-width:768px)');

  const userType = useSelector(({ ui }) => ui.userType);
  const id_number = localStorage.getItem('id_number') 

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${userType}/getProfile` , { params: { id_number : id_number } }).then((res) => { 
      dispatch(setProfile({ profile: res?.data?.profile }));
    }).catch(err => console.log(err.msg));;
  }, [userType, dispatch]);

  (function () {
    let numberOfAjaxCAllPending = 0;
    axios.interceptors.request.use(
      function (config) {
        numberOfAjaxCAllPending++;
        setShowLoader(true);

        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
    axios.interceptors.response.use(
      function (response) {
        numberOfAjaxCAllPending--;
        if (numberOfAjaxCAllPending === 0) {
          setShowLoader(false);
        }
        return response;
      },
      function (error) {
        numberOfAjaxCAllPending--;
        if (numberOfAjaxCAllPending === 0) {
          setShowLoader(false);
        }
        return Promise.reject(error);
      },
    );
  })();
  return (
    <div style={{ display: 'flex', maxHeight: '100vh', maxWidth: '100vw' }}>
      {showLoader && <Loader />}
      {medium && (
        <Fab
          size="medium"
          // color="primary"
          aria-label="add"
          style={{
            position: 'absolute',
            left: '2rem',
            top: '2rem',
            zIndex: 100,
            boxShadow:
              '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFF',
            background: '#ebecf0',
            color: '#0d236d',
          }}
          onClick={() => setActiveSidedrawer(true)}
        >
          <MenuIcon style={{ height: '3rem', width: '3rem' }} />
        </Fab>
      )}
      <Sidebar
        open={activeSidedrawer}
        setOpen={setActiveSidedrawer}
        medium={medium}
      />
      <main className="layout-main">{props.children}</main>
    </div>
  );
};

export default Layout;
