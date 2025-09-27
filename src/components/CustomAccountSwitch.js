import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useColorTheme } from '../context/ThemeContext';
import createStyles from '../constants/styles';
import { CloseIcon, RadioCheckIcon, RadioUnCheckIcon } from '../iconComponents/IconComponents';
import { useAuth } from '../context/AuthContext';
import { key } from '../utils/key';
import { storage } from '../utils/storage';
import { useLogin } from '../context/LoginContext';

const CustomAccountSwitch = ({ visible, onClose }) => {
    const { t } = useTranslation();
    const { isAdmin, setIsAdmin } = useAuth()
    const { signOut } = useLogin();
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);

    const onSwitchAccount = async (type) => {
        setIsAdmin(type);
        signOut();
        await storage.setItem(key.STORAGE_KEYS.ACCOUNT_TYPE, type);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
                gap: 12
            }}>

                <Pressable style={{ backgroundColor: themeColor.secondaryBackground, borderColor: themeColor.secondaryBackground, borderWidth: 1, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={onClose}>
                    <CloseIcon size={28} color={themeColor.iconSecondary} />
                </Pressable>
                <View style={{
                    width: "100%",
                    backgroundColor: themeColor.secondaryBackground,
                    borderRadius: 15,
                    elevation: 5,
                    maxHeight: 300,
                    gap: 20,
                    paddingBottom: 50
                }}>
                    <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, paddingVertical: 10, borderColor: themeColor.border }}>
                        <Text style={styles.header}>{t('switch_account')}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
                        <Text style={styles.largeText}>{t('owner')}</Text>
                        <Pressable onPress={() => onSwitchAccount(key.STORAGE_KEYS.ADMIN)}>
                            {isAdmin === key.STORAGE_KEYS.ADMIN ? <RadioCheckIcon size={28} color={themeColor.primary} /> : <RadioUnCheckIcon size={28} color={themeColor.primary} />}
                        </Pressable>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
                        <Text style={styles.largeText}>{t('customer')}</Text>
                        <Pressable onPress={() => onSwitchAccount(key.STORAGE_KEYS.USER)}>
                            {isAdmin === key.STORAGE_KEYS.USER ? <RadioCheckIcon size={28} color={themeColor.primary} /> : <RadioUnCheckIcon size={28} color={themeColor.primary} />}
                        </Pressable>

                    </View>


                </View>
            </View>
        </Modal>
    )
}

export default CustomAccountSwitch