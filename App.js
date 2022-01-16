import React, { useState } from 'react';
import {
  ViroImage,
  ViroARScene,
  ViroARImageMarker,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
} from '@viro-community/react-viro';

const physicalWidth = 1;

ViroARTrackingTargets.createTargets({
  axe: {
    physicalWidth,
    orientation: 'Up',
    source: require('./src/1.png'),
  },
});

export default () => {
  const [details, setDetails] = useState({});

  const onAnchorFound = e => {
    setDetails(e);
  };

  return (
    <ViroARSceneNavigator
      autofocus
      style={{flex: 1}}
      initialScene={{
        scene: () => {
          return (
            <ViroARScene>
              <ViroARImageMarker target="axe" onAnchorFound={onAnchorFound}>
                <ViroImage
                  // rotation={[1, 1, 1]}
                  position={[0, 0, details.position ? details.position[2] : 0]}
                  source={require('./src/2.jpg')}
                />
              </ViroARImageMarker>
            </ViroARScene>
          );
        },
      }}
    />
  );
};
