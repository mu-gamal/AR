import React, {useRef} from 'react';
import {Linking} from 'react-native';
import {
  ViroText,
  ViroVideo,
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
  video: {
    physicalWidth: 1,
    orientation: 'Up',
    source: require('./src/video.png'),
  },
});

export default () => {
  const videoRef = useRef();

  function navigateToLink() {
    Linking.openURL(
      'https://www.skysports.com/football/news/12691/12482950/chelsea-transfer-news-and-rumours-january-transfer-window-2022',
    );
  }

  function handleVideo({trackingMethod}) {
    if (trackingMethod === 'tracking') {
      return videoRef.current.setNativeProps({paused: false});
    }

    videoRef.current.setNativeProps({paused: true});
  }

  return (
    <ViroARSceneNavigator
      autofocus
      style={{flex: 1}}
      initialScene={{
        scene: () => {
          return (
            <ViroARScene>
              <ViroARImageMarker target="link">
                <ViroText
                  text="Click here"
                  rotation={[270, 0, 0]}
                  onClick={navigateToLink}
                />
              </ViroARImageMarker>
              <ViroARImageMarker target="video" onAnchorUpdated={handleVideo}>
                <ViroVideo
                  ref={videoRef}
                  rotation={[270, 0, 0]}
                  source={require('./src/video.mp4')}
                />
              </ViroARImageMarker>
            </ViroARScene>
          );
        },
      }}
    />
  );
};
