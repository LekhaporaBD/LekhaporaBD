import React from 'react';

const Classroom = () => {
  return (
    <div>
      <iframe
        src="http://localhost:3000/"
        title="description"
        allow="camera;microphone"
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
