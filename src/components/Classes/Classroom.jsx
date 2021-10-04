import React from 'react';
import { useEffect } from 'react';
import useQuery from '../../hooks/useQuery';

const Classroom = ({ socket }) => {
  const query = useQuery();
  const meetingId = query.get('meeting');
  const user = {
    displayName: 'Wahid Hoque',
    meetingId,
  };
  useEffect(() => {
    socket.on('connect', () => {
      // alert('Socket Connected with Client');
      if (socket.connected) {
        socket.emit('userconnect', user);
      }
    });
  }, [socket, user]);
  return <div>Got into the classroom {meetingId}</div>;
};

export default Classroom;
