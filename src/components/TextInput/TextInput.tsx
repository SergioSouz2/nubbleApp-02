import React, {useRef} from 'react';
import {
   Pressable,
   TextInput as RNTextInput,
   TextInputProps as RNTextInputProps,
   TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface TextInputProps extends RNTextInputProps {
   label: string;
   errorMessage?: string;
   boxProps?: BoxProps;
   RightComponet?: React.ReactElement;
}

export function TextInput({
   label,
   errorMessage,
   boxProps,
   RightComponet,
   ...rnTextInputProps
}: TextInputProps) {
   const {colors} = useAppTheme();

   const inputRef = useRef<RNTextInput>(null);

   const $TextInputContainer: BoxProps = {
      flexDirection: 'row',
      padding: 's16',
      borderRadius: 's16',
      borderWidth: errorMessage ? 2 : 1,
      borderColor: errorMessage ? 'error' : 'gray4',
   };

   function focusInput() {
      inputRef.current?.focus();
   }

   return (
      <Box {...boxProps}>
         <Pressable onPress={focusInput}>
            <Text marginBottom="s4" preset="paragraphMedium">
               {label}
            </Text>
            <Box {...$TextInputContainer}>
               <RNTextInput
                  ref={inputRef}
                  placeholderTextColor={colors.gray2}
                  style={$textInputStyle}
                  {...rnTextInputProps}
               />
               {RightComponet && (
                  <Box justifyContent="center" marginLeft="s16">
                     {RightComponet}
                  </Box>
               )}
            </Box>
            {errorMessage && (
               <Text preset="paragraphSmall" bold color="error">
                  {errorMessage}
               </Text>
            )}
         </Pressable>
      </Box>
   );
}

const $textInputStyle: TextStyle = {
   flexGrow: 1,
   flexShrink: 1,
   padding: 0,
   fontFamily: $fontFamily.regular,
   ...$fontSizes.paragraphMedium,
};
