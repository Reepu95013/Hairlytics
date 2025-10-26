import { View, Text, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useColorTheme } from '../../../context/ThemeContext'
import createStyles from '../../../constants/styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomHeaderLayout from '../../../components/CustomHeaderLayout'
import CustomCalendarModal from '../../../components/CustomCalendarModal'
import AppointmentPackageModal from './BookAppointmentComponents/AppointmentPackageModal'
import AppointmentServiceCard from './BookAppointmentComponents/AppointmentServiceCard'
import { useTranslation } from 'react-i18next'


const BookAppointmentScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    const [selectAllToggle, setSelectAllToggle] = useState(false);
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [packageVisible, setPackageVisible] = useState(false);

    const renderHeader = () => (
        <View style={{ gap: 10 }}>
            <Text style={styles.largeText}>{t('select_date')}</Text>
            <TouchableOpacity onPress={() => setCalendarVisible(true)} style={{ height: 46, width: '100%', borderWidth: 1, borderColor: themeColor.border, borderRadius: 12, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row' }}>
                <Text style={styles.largeText}>15/Aug/2025</Text>
                <Icon name='calendar-month' size={24} color={themeColor.text} />
            </TouchableOpacity>
            <Text style={styles.largeText}>{t('select_package')}</Text>
            <TouchableOpacity onPress={() => setPackageVisible(true)} style={{ height: 46, width: '100%', borderWidth: 1, borderColor: themeColor.border, borderRadius: 12, justifyContent: 'center', paddingHorizontal: 10 }}>
                <Text style={styles.largeText}>{t('select_package')}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.largeText}>{t('select_service')}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={styles.largeText}>{t('select_all')}</Text>
                    <Pressable onPress={() => setSelectAllToggle(!selectAllToggle)}>
                        <Icon name={selectAllToggle ? 'toggle-on' : 'toggle-off'} size={42} color={selectAllToggle ? themeColor.primary : themeColor.icon} />
                    </Pressable>
                </View>

            </View>
        </View>
    )

    const renderItem = () => (
        <AppointmentServiceCard />
    )

    const footerButton = () => (
        <View style={{ paddingHorizontal: 20, marginBottom: 50 }}>
            <Pressable onPress={() => navigation.navigate('PaymentSummaryScreen')} style={{ backgroundColor: themeColor.primary, paddingVertical: 10, borderRadius: 20, marginTop: 10 }}>
                <Text style={[styles.largeText, { textAlign: 'center', color:themeColor.primaryText }]}>{t('next')}</Text>
            </Pressable>
        </View>
    )
    return (
        <CustomHeaderLayout screenName={t('book_appointment')} CustomBottom={footerButton} >
            {/* <CustomCalendar /> */}

            <View>
                <FlatList
                    data={[1, 2, 3, 4, 5,]}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={renderHeader}
                    contentContainerStyle={{ gap: 10, paddingBottom: 150 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <CustomCalendarModal visible={calendarVisible} setVisible={setCalendarVisible} />
            <AppointmentPackageModal visible={packageVisible} setVisible={setPackageVisible} />

        </CustomHeaderLayout>


    )
}

export default BookAppointmentScreen