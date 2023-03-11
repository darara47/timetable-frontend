import { ReactElement } from 'react';
import { View } from 'react-native';
import { StackNavigation } from '../../types/stackParamList';
import ClassesList from '../../components/ClassesList/ClassesList';
import { SectionTypes } from '../../types/sections.types';

type SelectorScreenProps = {
  navigation: StackNavigation,
  route: {
    params: {
      type: SectionTypes,
    },
  },
}

const SelectorScreen = (selectorScreenProps: SelectorScreenProps): ReactElement => {
  const { navigation, route: { params: { type } } } = selectorScreenProps;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {type === SectionTypes.class &&
        <ClassesList navigation={navigation} />}
    </View>
  );
}

export default SelectorScreen;