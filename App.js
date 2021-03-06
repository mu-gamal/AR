import React from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
} from '@viro-community/react-viro';
import ARLink from './src/components/ARLink';
import ARVideo from './src/components/ARVideo';

const sources = [
  {
    id: '1',
    Component: ARLink,
    target: require('./src/assets/link.png'),
    source: 'https://al-sharq.com',
  },
  {
    id: '2',
    Component: ARVideo,
    target: require('./src/assets/video.png'),
    source: require('./src/assets/video.mp4'),
  },
];

const targets = {};
sources.forEach(({id, target}) => {
  targets[id] = {
    source: target,
    physicalWidth: 1,
    orientation: 'Up',
  };
});

ViroARTrackingTargets.createTargets(targets);

export default () => (
  <ViroARSceneNavigator
    autofocus
    style={{flex: 1}}
    initialScene={{
      scene: () => {
        return (
          <ViroARScene>
            {sources.map(({id, source, Component}) => (
              <Component key={id} target={id} source={source} />
            ))}
          </ViroARScene>
        );
      },
    }}
  />
);
