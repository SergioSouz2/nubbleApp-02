import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';

import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
   function goBackToBegin() {
      return navigation.goBack();
   }

   return (
      <Screen>
         <Icon name={route.params.icon.name} color={route.params.icon.color} />
         <Text preset="headingLarge" marginTop="s24">
            {route.params.title}
         </Text>
         <Text preset="paragraphLarge" marginTop="s16">
            {route.params.description}
         </Text>
         <Button
            onPress={goBackToBegin}
            title="Voltar ao início"
            marginTop="s40"
         />
      </Screen>
   );
}
