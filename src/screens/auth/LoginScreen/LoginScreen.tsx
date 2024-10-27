import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../routes/Routes';

import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
   function navigateToSignUpScreen() {
      navigation.navigate('SignUpScreen');
   }

   function navigateToForgotPasswordScreen() {
      navigation.navigate('ForgotPasswordScreen');
   }

   return (
      <Screen>
         <Text marginBottom="s8" preset="headingLarge">
            Olá
         </Text>
         <Text marginBottom="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
         </Text>
         <TextInput
            boxProps={{marginBottom: 's20'}}
            label="E-mail"
            placeholder="Digite seu E-mail"
         />
         <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{marginBottom: 's10'}}
         />
         <Text
            onPress={navigateToForgotPasswordScreen}
            color="primary"
            preset="paragraphSmall"
            bold>
            Esqueci minha senha
         </Text>
         <Button title="Entrar" marginTop="s48" />
         <Button
            title="Criar uma conta"
            preset="outline"
            marginTop="s12"
            onPress={navigateToSignUpScreen}
         />
      </Screen>
   );
}
