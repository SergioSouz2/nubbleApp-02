import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
   return (
      <ThemeProvider theme={theme}>
         <SafeAreaView>
            <View style={{paddingHorizontal: 24}}>
               <Text preset="headingLarge">CoffStack</Text>

               <Button marginBottom="s24" title="Primary" preset="primary" />

               <Button
                  marginBottom="s24"
                  title="Primary"
                  preset="primary"
                  disabled
               />

               <Button marginBottom="s24" title="Outline" preset="outline" />

               <Button
                  marginBottom="s24"
                  title="Outline"
                  preset="outline"
                  disabled
               />
               <Button
                  marginBottom="s24"
                  preset="primary"
                  loading
                  title="Entrar"
               />
            </View>
         </SafeAreaView>
      </ThemeProvider>
   );
}

export default App;
