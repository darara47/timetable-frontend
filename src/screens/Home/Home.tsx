import { ReactElement } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { StackNavigation } from '../../types/StackParamList';
import { Screens } from '../screens.enum';

type HomeScreenProps = {
  navigation: StackNavigation,
}

const HomeScreen = (homeScreenProps: HomeScreenProps): ReactElement => {
  const { navigation } = homeScreenProps;

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Selector"
        onPress={() => navigation.navigate(Screens.Selector)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;