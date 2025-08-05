import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ text, width, height, borderRadius, backgroundColor, alignItems, justifyContent, textColor, fontSize, fontWeight }) => {
    return (
        <TouchableOpacity style={{ width: width || '100%', height: height || 46, borderRadius: borderRadius || 24, backgroundColor: backgroundColor || '#ffd509', alignItems: alignItems || 'center', justifyContent: justifyContent || 'center' }}>
            <Text style={{ color: textColor || '#000000', fontSize: fontSize || 20, fontWeight: fontWeight || '400' }}>{text||'Text'}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton