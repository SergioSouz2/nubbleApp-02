import React, {useState} from 'react';

import {Icon} from '../Icon/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

type PasswordInputProps = Omit<TextInputProps, 'RightComponet'>;

export function PasswordInput(props: PasswordInputProps) {
   const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

   function toggleSecureTextEntry() {
      setIsSecureTextEntry(prev => !prev);
   }

   return (
      <TextInput
         secureTextEntry={isSecureTextEntry}
         {...props}
         RightComponet={
            <Icon
               color="gray2"
               name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
               onPress={toggleSecureTextEntry}
            />
         }
      />
   );
}
