import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = () => {
    return (

        
        <TouchableOpacity style={{ width: '50%', height: 46, borderRadius: 24, backgroundColor: '#ffd509', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '400' }}>Sign-in</Text>
        </TouchableOpacity>
    )
}

export default CustomButton