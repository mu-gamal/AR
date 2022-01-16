import React, {useRef} from 'react';
import {ViroVideo, ViroARImageMarker} from '@viro-community/react-viro';

export default ({target, source}) => {
  const videoRef = useRef();

  function handleVideo({trackingMethod}) {
    if (trackingMethod === 'tracking') {
      return videoRef.current.setNativeProps({paused: false});
    }
    videoRef.current.setNativeProps({paused: true});
  }

  return (
    <ViroARImageMarker target={target} onAnchorUpdated={handleVideo}>
      <ViroVideo ref={videoRef} source={source} rotation={[270, 0, 0]} />
    </ViroARImageMarker>
  );
};
