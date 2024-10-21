import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Icon} from './src/components/Icon/Icon';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

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

               <Box flexDirection="row" alignItems="center" gap="s16">
                  <Icon name="profileFill" size={100} />
                  <Icon name="bellOn" size={50} color="carrotSecondary" />
                  <Icon name="chatOn" size={20} />
               </Box>
            </View>
         </SafeAreaView>
      </ThemeProvider>
   );
}

export default App;
