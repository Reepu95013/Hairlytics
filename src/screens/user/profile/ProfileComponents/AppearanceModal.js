import { View, Text, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useColorTheme } from '../../../../context/ThemeContext';
import createStyles from '../../../../constants/styles';
import { CloseIcon, RadioCheckIcon, RadioUnCheckIcon } from '../../../../iconComponents/IconComponents';
import { useTranslation } from 'react-i18next';


const AppearanceModal = ({ visible, onClose }) => {
    const { t } = useTranslation();
    const { themeColor, fontFamily, toggleTheme, themeType } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    const [appearance, setAppearance] = useState('dark');
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
                        <Text style={styles.header}>{t('appearance')}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
                        <Text style={styles.largeText}>{t('dark')}</Text>
                        <Pressable onPress={toggleTheme}>
                            {themeType === 'dark' ? <RadioCheckIcon size={28} color={themeColor.primary} /> : <RadioUnCheckIcon size={28} color={themeColor.primary} />}
                        </Pressable>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
                        <Text style={styles.largeText}>{t('light')}</Text>
                        <Pressable onPress={toggleTheme}>
                            {themeType === 'light' ? <RadioCheckIcon size={28} color={themeColor.primary} /> : <RadioUnCheckIcon size={28} color={themeColor.primary} />}
                        </Pressable>

                    </View>


                </View>
            </View>
        </Modal>

    )
}

export default AppearanceModal