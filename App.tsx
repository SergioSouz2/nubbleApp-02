import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
   return (
      <SafeAreaView>
         <Text preset="headingLarge">CoffStack</Text>
         <Text preset="headingLarge">CoffStack</Text>
         <Text italic preset="headingSmall">
            CoffStack
         </Text>
      </SafeAreaView>
   );
}

export default App;
