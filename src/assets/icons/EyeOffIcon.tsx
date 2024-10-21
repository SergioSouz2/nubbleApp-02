import React from 'react';

import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function EyeOffIcon({size = 20, color = 'black'}: IconBase) {
   return (
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.31317 0.225299C1.01277 -0.0751046 0.525721 -0.0751046 0.225318 0.225299C-0.0750854 0.525702 -0.0750854 1.01275 0.225318 1.31316L4.18788 5.27572C2.63545 6.50712 1.32734 8.08681 0.171154 9.51625C-0.0360466 9.77242 -0.0570958 10.1321 0.118809 10.4107C1.13209 12.0155 2.55057 13.6297 4.22857 14.8495C5.90505 16.0682 7.88377 16.9231 10 16.9231C11.623 16.9231 13.1652 16.4199 14.5497 15.6376L18.6869 19.7747C18.9873 20.0751 19.4743 20.0751 19.7747 19.7747C20.0751 19.4743 20.0751 18.9872 19.7747 18.6868L1.31317 0.225299ZM1.72139 10.048C2.82182 8.7014 3.97294 7.3796 5.28379 6.37162L7.53702 8.62485C7.30944 9.03181 7.17949 9.50123 7.17949 9.99999C7.17949 11.5576 8.44222 12.8205 10 12.8205C10.4988 12.8205 10.9682 12.6905 11.3751 12.463L13.414 14.5018C12.3183 15.0602 11.1661 15.3846 10 15.3846C8.3026 15.3846 6.63442 14.6964 5.13317 13.6051C3.79033 12.6289 2.61556 11.3542 1.72139 10.048ZM10.1815 11.2694L8.73063 9.81847C8.72227 9.87772 8.71795 9.93832 8.71795 9.99999C8.71795 10.708 9.29194 11.282 10 11.282C10.0617 11.282 10.1223 11.2777 10.1815 11.2694ZM10 3.07693C9.57517 3.07693 9.23077 3.42132 9.23077 3.84616C9.23077 4.27099 9.57517 4.61539 10 4.61539C13.5082 4.61539 15.9785 7.2364 18.2785 10.0481C18.0469 10.3863 17.7961 10.7232 17.5278 11.0537C17.2601 11.3836 17.3105 11.8681 17.6404 12.1358C17.9703 12.4035 18.4547 12.3531 18.7224 12.0232C19.15 11.4963 19.5382 10.9537 19.8812 10.4108C20.0571 10.1322 20.0361 9.77245 19.8289 9.51626C17.5165 6.6573 14.5335 3.07693 10 3.07693Z"
            fill={color}
         />
      </Svg>
   );
}
