import React from 'react';

const Classroom = () => {
  return (
    <div>
      <iframe
        src="https://lekhapora-video-chat.netlify.app/"
        title="description"
        allow="camera;microphone;display-capture"
        style={{
          minHeight: '100vh',
          minWidth: 'calc(100vw - 50rem)',
          border: 'none',
        }}
      ></iframe>
    </div>
  );
};

export default Classroom;
