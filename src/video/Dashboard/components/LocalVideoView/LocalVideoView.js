import React, { useRef, useEffect } from 'react';

const styles = {
  videoContainer: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    position: 'absolute',
    top: '5%',
    right: '23%'
  },
  videoElement: {
    width: '100%',
    height: '100%'
  }
};

const LocalVideoView = props => {
  let { localStream } = props;
  const localVideoRef = useRef();

  localStream = Object.keys(localStream).length === 0 ? JSON.parse(localStorage.getItem('localStream')) : localStream

console.log(JSON.parse(localStorage.getItem('localStream')));
console.log('localStream', localStream);

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);

  return (
    <div style={styles.videoContainer} className='background_secondary_color'>
      <video style={styles.videoElement} ref={localVideoRef} autoPlay muted />
    </div>
  );
};

export default LocalVideoView;
