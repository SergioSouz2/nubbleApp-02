import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ScreenProps {
   children: React.ReactNode;
   canGoBack?: boolean;
   scrollable?: boolean;
}

export function Screen({
   children,
   canGoBack = false,
   scrollable = false,
}: ScreenProps) {
   const {top, bottom} = useAppSafeArea();
   const {colors} = useAppTheme();

   const Container = scrollable ? ScrollViewContainer : ViewContainer;

   return (
      <KeyboardAvoidingView
         style={{flex: 1}}
         behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
         <Container backgroundColor={colors.background}>
            <Box
               paddingBottom="s24"
               paddingHorizontal="s24"
               style={{paddingTop: top, paddingBottom: bottom}}>
               {canGoBack && (
                  <Box marginBottom="s24" flexDirection="row">
                     <Icon name="arrowLeft" color="primary" />
                     <Text preset="paragraphMedium" semiBold marginLeft="s8">
                        Voltar
                     </Text>
                  </Box>
               )}
               {children}
            </Box>
         </Container>
      </KeyboardAvoidingView>
   );
}
