import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const PicturesRoute = () => <Text>Pictures</Text>;

const VideosRoute = () => <Text>Videos</Text>;

const SavedRoute = () => <Text>Saved</Text>;


const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'camera', title: 'Pictures', focusedIcon: 'camera'},
    { key: 'video', title: 'Videos', focusedIcon: 'video' },
    { key: 'download', title: 'Saved', focusedIcon: 'download' },
  
  ]);

  const renderScene = BottomNavigation.SceneMap({
    camera: PicturesRoute,
    video: VideosRoute,
    download: SavedRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;