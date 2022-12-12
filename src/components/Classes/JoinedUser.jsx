import React from 'react';

const JoinedUser = ({ connectionId, displayName }) => {
  return (
    <div>
      <h2>{displayName}</h2>
      <div>
        <video id={connectionId} src="" autoPlay muted></video>
        <audio id={connectionId} src="" autoPlay controls muted></audio>
      </div>
    </div>
  );
};

export default JoinedUser;
