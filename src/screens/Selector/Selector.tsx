import { ReactElement } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigation } from '../../types/stackParamList';
import { Screens } from '../../types/screens.enum';
import { SelectorTypes } from '../../types/selectors.enum';
import { List } from 'react-native-paper';
import ClassesList from '../../components/ClassesList/ClassesList';

type SelectorScreenProps = {
  navigation: StackNavigation,
  route: {
    params: {
      type: SelectorTypes,
    },
  },
}

const SelectorScreen = (selectorScreenProps: SelectorScreenProps): ReactElement => {
  const { navigation, route: { params: { type } } } = selectorScreenProps;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {type === SelectorTypes.Classes &&
        <ClassesList navigation={navigation} />}
    </View>
  );
}

export default SelectorScreen;