import { View, Text, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useColorTheme } from '../../../../context/ThemeContext';
import createStyles from '../../../../constants/styles';
import { CloseIcon, RadioCheckIcon, RadioUnCheckIcon } from '../../../../iconComponents/IconComponents';
import useLanguage from '../../../../hooks/useLanguage';
import { storage } from '../../../../utils/storage';
import { key } from '../../../../utils/key';
import { useTranslation } from 'react-i18next';


const LanguageModal = ({ visible, onClose }) => {
    const { t } = useTranslation();
    const { changeLanguage, currentLanguage } = useLanguage();
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    const [language, setLanguage] = useState('english');

    const onChnageLanguage = async (lang) => {
        changeLanguage(lang);
        await storage.setItem(key.STORAGE_KEYS.LANGUAGE, lang);
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
                        <Text style={styles.header}>{t('language')}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
                        <Text style={styles.largeText}>{t('english')}</Text>
                        <Pressable onPress={() => onChnageLanguage(key.LANGUAGES.EN)}>
                            {currentLanguage === key.LANGUAGES.EN ? <RadioCheckIcon size={28} color={themeColor.primary} /> : <RadioUnCheckIcon size={28} color={themeColor.primary} />}
                        </Pressable>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
                        <Text style={styles.largeText}>{t('hindi')}</Text>
                        <Pressable onPress={() => onChnageLanguage(key.LANGUAGES.HI)}>
                            {currentLanguage === key.LANGUAGES.HI ? <RadioCheckIcon size={28} color={themeColor.primary} /> : <RadioUnCheckIcon size={28} color={themeColor.primary} />}
                        </Pressable>

                    </View>


                </View>
            </View>
        </Modal>

    )
}

export default LanguageModal