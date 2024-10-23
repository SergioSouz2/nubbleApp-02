import React from 'react';

import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
   function submitForm() {
      //TODO: implementar
   }

   return (
      <Screen canGoBack scrollable>
         <Text marginBottom="s32" preset="headingLarge">
            Criar uma conta
         </Text>
         <TextInput
            label="Seu username"
            placeholder="@"
            boxProps={{marginBottom: 's20'}}
         />
         <TextInput
            label="Name completo"
            placeholder="Digite seu nome completo"
            boxProps={{marginBottom: 's20'}}
         />
         <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{marginBottom: 's20'}}
         />
         <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{marginBottom: 's48'}}
         />
         <Button
            title="Criar minha conta"
            preset="primary"
            onPress={submitForm}
         />
      </Screen>
   );
}
