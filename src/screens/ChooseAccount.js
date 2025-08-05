import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useColorTheme } from '../context/ThemeContext';

const ChooseAccount = ({ navigation }) => {
    const { t } = useTranslation();
    const { themeColor } = useColorTheme();
    const [accountType, setAccountType] = useState(null);

    const onChooseAccountType = (type) => {
        setAccountType(type);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, backgroundColor: '#000000' }}>
            <View style={{ width: 300, height: 300, padding: 5 }}>
                <Image source={require('../../assets/images/splashlogo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
            </View>
            <Text style={{ fontSize: 26, fontFamily: 'Merienda-VariableFont_wght', fontWeight: "600", marginBottom: 20, color: '#ffffff' }}>Choose Account Type</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <TouchableOpacity onPress={() => onChooseAccountType('user')} style={{ width: 150, height: 150, borderWidth: 2, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderColor: accountType == 'user' ? themeColor.primary : '#ffffff' }}>
                    <View style={{ width: 80, height: 80 }}>
                        <Image source={require('../../assets/images/man.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Merienda-VariableFont_wght', fontWeight: "600", color: '#ffffff' }}>Customer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onChooseAccountType('admin')} style={{ width: 150, height: 150, borderWidth: 2, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderColor: accountType == 'admin' ? themeColor.primary : '#ffffff' }}>
                    <View style={{ width: 80, height: 80 }}>
                        <Image source={require('../../assets/images/salonman.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Merienda-VariableFont_wght', fontWeight: "600", color: '#ffffff' }}>Salon Expert</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity
                disabled={accountType ? false : true}
                style={{
                    marginTop: 40,
                    backgroundColor: themeColor.primary, paddingVertical: 12,
                    paddingHorizontal: 25,
                    borderRadius: 10,
                    width: '100%',
                    opacity:accountType?1:0.5
                }}
                onPress={() => navigation.replace('ChooseAccount')}
            >
                <Text style={{ color: themeColor.textPrimary, textAlign: 'center' }}>{t('get_started')}</Text>
            </TouchableOpacity>
        </View>


    )
}

export default ChooseAccount
