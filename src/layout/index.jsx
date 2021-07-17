import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Layout = (props) => {
  const [activeSidedrawer, setActiveSidedrawer] = useState(false);
  const medium = useMediaQuery('(max-width:768px)');

  return (
    <div style={{ display: 'flex' }}>
      {medium && (
        <Fab
          size="medium"
          color="primary"
          aria-label="add"
          style={{
            position: 'absolute',
            left: '1.3rem',
            top: '1.3rem',
            zIndex: 100,
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
