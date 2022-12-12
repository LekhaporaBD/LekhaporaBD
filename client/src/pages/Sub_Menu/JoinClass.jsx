import React from 'react';
import gif from '../../assets/spinner5.gif';


const JoinClass = () => {
  return <iframe 
                  width="100%" height="100%" 
                  title="Online Class | Lekhapora"
                  src="https://lekhapora-video-chat.netlify.app" 
                  style={{
                    background:`URL(${gif})`,
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center'
                  }}
                  frameborder="0">
          </iframe>  // return <Redirect to="https://dev.to/reiallenramos/create-an-express-api-static-and-dynamic-routes-33lb" />;
};

export default JoinClass;
 