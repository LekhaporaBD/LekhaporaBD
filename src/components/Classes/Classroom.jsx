import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useQuery from '../../hooks/useQuery';

const iceConfig = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302',
      urls: 'stun:stun1.l.google.com:19302',
    },
  ],
};
const Classroom = ({ socket, user }) => {
  const query = useQuery();
  const meetingId = query.get('meeting');

  const [joinedUsers, setJoinedUsers] = useState([]);

  const displayName = window.prompt('Enter your Display Name');

  const serverProcess = (data, connectionId) => {
    socket.emit('SDPProcess', {
      message: data,
      connectionId,
    });
  };
  const setNewConnection = async (connectionId) => {
    const connection = new RTCPeerConnection(iceConfig);
    connection.onnegotiationneeded = async () => {
      // await setOffer(connectionId);
    };
    connection.onicecandidate = (event) => {
      if (event.candidate) {
        serverProcess(
          JSON.stringify({ iceCandidate: event.candidate }),
          connectionId,
        );
      }
    };
    connection.ontrack = (event) => {};
  };
  useEffect(() => {
    socket.on('connect', () => {
      if (socket.connected) {
        //! Will run init()
        socket.emit('user connect', {
          displayName,
          meetingId,
        });
      }
    });
  }, [socket, user]);

  useEffect(() => {
    socket.on('inform_others_about_me', (data) => {
      const newJoinedUsers = [...joinedUsers];
      newJoinedUsers.push({
        connectionId: data.connectionId,
        displayName: data.othersDisplayName,
      });
      setJoinedUsers(newJoinedUsers);
      setNewConnection();
    });
  }, [joinedUsers, socket]);

  console.log(joinedUsers);
  return (
    <div>
      Got into the classroom {meetingId}
      <h2>My name is {displayName}</h2>
      <h3>Joined Members</h3>
      {joinedUsers.map((user) => (
        <h1>{user.displayName}</h1>
      ))}
    </div>
  );
};

export default Classroom;
