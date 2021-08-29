import React from 'react';
import {
  TouchableOpacity,
  Text,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { FONTS, COLORS } from '../constants';

interface ITextButton {
  label: string;
  labelStyle: StyleProp<TextStyle>;
  buttonContainerStyle: StyleProp<ViewStyle>;
  onPress(): void;
}

const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress,
}: ITextButton) => {
  return (
    <TouchableOpacity
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
        },
        buttonContainerStyle,
      ]}
      onPress={onPress}>
      <Text style={[{ color: COLORS.white, ...FONTS.h3 }, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
