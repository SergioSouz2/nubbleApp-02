import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Icon} from './src/components/Icon/Icon';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
   return (
      <ThemeProvider theme={theme}>
         <SafeAreaView>
            <View style={{paddingHorizontal: 24}}>
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

               <TextInput
                  label="Senha"
                  placeholder="Digite sua senha"
                  errorMessage="mensagem de error"
                  RightComponet={<Icon name="eyeOff" color="gray2" />}
                  boxProps={{marginBottom: 's10'}}
               />

               <Text color="primary" preset="paragraphSmall" bold>
                  Esqueci minha senha
               </Text>

               <Button title="Entrar" marginTop="s48" />
               <Button
                  title="Criar uma conta"
                  preset="outline"
                  marginTop="s12"
               />
            </View>
         </SafeAreaView>
      </ThemeProvider>
   );
}

export default App;
