import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useColorTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { storage } from '../utils/storage';
import { key } from '../utils/key';

const ChooseAccount = () => {
    const { t } = useTranslation();
    const { setIsAdmin, setChooseAccountStatus } = useAuth();
    const { themeColor, fontFamily } = useColorTheme();
    const [accountType, setAccountType] = useState(null);

    const onChooseAccountType = async (type) => {
        setAccountType(type);
        setIsAdmin(type);
        if (type === 'admin') {
            await storage.setItem(key.STORAGE_KEYS.ACCOUNT_TYPE, type);
        } else {
            await storage.setItem(key.STORAGE_KEYS.ACCOUNT_TYPE, type);

        }
    }

    const onClickContinueButton = async () => {
        await storage.setItem(key.STORAGE_KEYS.CHOOSEACCOUNTS_STATUS, true);
        setChooseAccountStatus(true);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, backgroundColor: '#000000' }}>
            <View style={{ width: 300, height: 300, padding: 5 }}>
                <Image source={require('../../assets/images/splashlogo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
            </View>
            <Text style={{ fontSize: 26, fontFamily: fontFamily, fontWeight: "600", marginBottom: 20, color: themeColor.primaryText }}>{t('choose_account_type')}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <TouchableOpacity onPress={() => onChooseAccountType('user')} style={{ width: 150, height: 150, borderWidth: 2, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderColor: accountType == 'user' ? themeColor.primary : '#ffffff' }}>
                    <View style={{ width: 80, height: 80 }}>
                        <Image source={require('../../assets/images/man.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: fontFamily, fontWeight: "600", color: themeColor.primaryText }}>{t('customer')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onChooseAccountType('admin')} style={{ width: 150, height: 150, borderWidth: 2, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderColor: accountType == 'admin' ? themeColor.primary : '#ffffff' }}>
                    <View style={{ width: 80, height: 80 }}>
                        <Image source={require('../../assets/images/salonman.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: fontFamily, fontWeight: "600", color: themeColor.primaryText }}>{t('salon_expert')}</Text>
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
                    opacity: accountType ? 1 : 0.5
                }}
                onPress={onClickContinueButton}
            >
                <Text style={{ color: themeColor.primaryText, textAlign: 'center', fontFamily: fontFamily, }}>{t('continue')}</Text>
            </TouchableOpacity>
        </View>


    )
}

export default ChooseAccount
