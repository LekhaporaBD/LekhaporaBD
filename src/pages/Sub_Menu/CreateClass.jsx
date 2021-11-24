import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from '../../components/utils/header';
import Styles from '../Authentication/Login.module.scss';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  handleChange = (e) => this.setState({ url: e.target.value });

  join = () => {
    if (this.state.url !== '') {
      var url = this.state.url.split('/');
      window.location.href = `/class/web-technology/${url[url.length - 1]}`;
    } else {
      var url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/class/web-technology/${url}`;
    }
  };

  render() {
    return (
      <>
      <Header data='Create Class' />
      <div className="container2">
        {/* <div
          style={{
            fontSize: '14px',
            background: 'white',
            width: '10%',
            textAlign: 'center',
            margin: 'auto',
            marginBottom: '10px',
          }}
        >
          Source code:
          <IconButton
            style={{ color: 'black' }}
            onClick={() =>
              (window.location.href = 'https://github.com/0x5eba/Video-Meeting')
            }
          >
            <GitHubIcon />
          </IconButton>
        </div> */}

        {/* <div>
          <h1 style={{ fontSize: '45px' }}>Video Meeting</h1>
          <p style={{ fontWeight: '200' }}>
            Video conference website that lets you stay in touch with all your
            friends.
          </p>
        </div> */}

        <div
          style={{
            background: '#ebecf0',
            width: '70%',
            minHeight: '60vh',
            padding: '20px',
            minWidth: '400px',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '100px',
            boxShadow :'9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #ffffff',

            display:'grid',
            justifyContent:'center',
            alignContent:'center'
          }}
        >
          <div>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize:27 , padding:20 , color:'#0d236d' }}>
              Start or join a meeting
            </p>
            {/* <Input placeholder="URL" onChange={(e) => this.handleChange(e)} /> */}
            <input placeholder="URL For Joining Class" className={Styles.input} onChange={(e) => this.handleChange(e)} />
              <br />
            <button style={{margin:30 , padding:'13px 65px',border:'1px solid #0d236d' , color:'#0d236d'}} className={Styles.button}> Join Class </button>
          </div>

        </div>
      </div>
      </>
    );
  }
}

export default Home;
