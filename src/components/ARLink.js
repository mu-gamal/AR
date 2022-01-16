import React from 'react';
import {Linking} from 'react-native';
import {ViroText, ViroARImageMarker} from '@viro-community/react-viro';

export default ({target, source}) => {
  function navigateToLink() {
    Linking.openURL(source);
  }

  return (
    <ViroARImageMarker target={target}>
      <ViroText
        text="Click here"
        style={{color: 'red'}}
        rotation={[270, 0, 0]}
        onClick={navigateToLink}
      />
    </ViroARImageMarker>
  );
};
