import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const RightArrowIcon = ({ size, color }) => (
    <Icon name='chevron-right' size={size || 24} color={color || 'black'} />
)

export const CloseIcon = ({ size, color }) => (
    <Icon name='close' size={size || 24} color={color || 'black'} />
)

export const RadioCheckIcon = ({ size, color }) => (
    <Icon name='radio-button-checked' size={size || 24} color={color || 'black'} />
)

export const RadioUnCheckIcon = ({ size, color }) => (
    <Icon name='radio-button-unchecked' size={size || 24} color={color || 'black'} />
)


