import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useColorTheme } from '../../../context/ThemeContext'
import createStyles from '../../../constants/styles'
import CustomServiceCardList from '../../../components/CustomServiceCardList'
import CustomPhotoCardList from '../../../components/CustomPhotoCardList'
import { useTranslation } from 'react-i18next'


const SalonScreen = ({ navigation }) => {
    const { themeColor, fontFamily } = useColorTheme();
      const { t } = useTranslation();
    const styles = createStyles(themeColor, fontFamily);

    const salonHeader = () => (
        <ImageBackground source={require('../../../../assets/images/salonthumb.png')} style={{ marginBottom: 12, height: 350, flexDirection: 'row', justifyContent: 'space-between' }} imageStyle={{ resizeMode: 'cover', borderRadius: 12 }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 60 }}>
                <Icon name='chevron-left' size={32} color={themeColor.iconSecondary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 60 }}>
                <Icon name='favorite' size={32} color={themeColor.primary} />
            </TouchableOpacity>
        </ImageBackground>
    )

    const salonBottom = () => (
        <View style={{paddingHorizontal:20, marginBottom:50}}>
            <Pressable onPress={()=>navigation.navigate('BookAppointmentScreen')} style={{ backgroundColor: themeColor.primary, paddingVertical: 10, borderRadius: 20, marginTop: 10 }}>
                <Text style={[styles.largeText, { textAlign: 'center' }]}>{t('book_appointment')}</Text>
            </Pressable>
        </View>
    )
    return (
        <SecondLayout CustomHeader={salonHeader} CustomBottom={salonBottom}>
            <View style={{ gap: 16 }}>
                <View style={{ borderBottomWidth: 1, borderColor: themeColor.border, paddingBottom: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <View style={{ backgroundColor: themeColor.surface, borderRadius: 6, width: 64, height: 32, gap: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name={'star-rate'} size={16} color={themeColor.primary} />
                                <Text style={{ color: themeColor.primary, fontFamily: fontFamily }}>5/5</Text>
                            </View>
                            <Text style={{ color: themeColor.secondaryText, fontFamily: fontFamily }}>5/5 (40 {t('reviews')})</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                            <Icon name={'schedule'} size={14} color={themeColor.secondaryText} />
                            <Text style={{ fontWeight: "400", fontSize: 12, color: themeColor.secondaryText, fontFamily: fontFamily }}>9:00am : 5:00pm</Text>
                        </View>

                    </View>
                    <Text style={styles.header}>Glam Goddess Salon</Text>
                    <Text style={styles.text}>123 Ramnager Ludhiana Punjab India 141010.</Text>
                    <Text style={styles.header}>$10 - $38</Text>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ width: 80, height: 80, backgroundColor: themeColor.surface, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='phone-in-talk' size={28} color={themeColor.primary} />
                        <Text style={[styles.text, { color: themeColor.surfacetText }]}>{t('call')}</Text>
                    </View>
                    <View style={{ width: 80, height: 80, backgroundColor: themeColor.surface, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='chat' size={28} color={themeColor.primary} />
                        <Text style={[styles.text, { color: themeColor.surfacetText }]}>{t('message')}</Text>
                    </View>
                    <View style={{ width: 80, height: 80, backgroundColor: themeColor.surface, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='location-on' size={28} color={themeColor.primary} />
                        <Text style={[styles.text, { color: themeColor.surfacetText }]}>{t('direction')}</Text>
                    </View>
                    <View style={{ width: 80, height: 80, backgroundColor: themeColor.surface, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='share' size={28} color={themeColor.primary} />
                        <Text style={[styles.text, { color: themeColor.surfacetText }]}>{t('share')}</Text>
                    </View>
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={styles.header}>{t('all_service')}</Text>
                    <CustomServiceCardList />
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={styles.header}>{t('photos')}</Text>
                    <CustomPhotoCardList />
                </View>
            </View>
        </SecondLayout>

    )
}

export default SalonScreen