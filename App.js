import React from 'react';
import {Linking} from 'react-native';
import {
  ViroText,
  ViroARScene,
  ViroARImageMarker,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
} from '@viro-community/react-viro';

ViroARTrackingTargets.createTargets({
  link: {
    physicalWidth: 1,
    orientation: 'Up',
    source: require('./src/link.jpg'),
  },
});

export default () => {
  const onAnchorFound = e => {
    // console.log('target found');
  };

  function navigateToLink() {
    Linking.openURL(
      'https://www.skysports.com/football/news/12691/12482950/chelsea-transfer-news-and-rumours-january-transfer-window-2022',
    );
  }

  return (
    <ViroARSceneNavigator
      autofocus
      style={{flex: 1}}
      initialScene={{
        scene: () => {
          return (
            <ViroARScene>
              <ViroARImageMarker target="link" onAnchorFound={onAnchorFound}>
                <ViroText
                  text="Click here"
                  rotation={[270, 0, 0]}
                  onClick={navigateToLink}
                />
              </ViroARImageMarker>
            </ViroARScene>
          );
        },
      }}
    />
  );
};
