import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  ImageStyle,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import { FONTS, COLORS } from '../constants';

interface ITextIconButton {
  containerStyle: StyleProp<ViewStyle>;
  label: string;
  labelStyle: StyleProp<TextStyle>;
  icon: ImageSourcePropType;
  iconStyle: StyleProp<ImageStyle>;
  onPress(): void;
}

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
  onPress,
}: ITextIconButton) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          {
            ...FONTS.body3,
          },
          labelStyle,
        ]}>
        {label}
      </Text>
      <Image
        source={icon}
        style={[
          {
            marginLeft: 5,
            width: 20,
            height: 20,
            tintColor: COLORS.black,
          },
          iconStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default TextIconButton;
