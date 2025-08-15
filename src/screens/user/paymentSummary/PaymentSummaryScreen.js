import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomHeaderLayout from '../../../components/CustomHeaderLayout'
import { useColorTheme } from '../../../context/ThemeContext';
import createStyles from '../../../constants/styles';
import CustomCard from '../../../components/CustomCard';
import Icon from 'react-native-vector-icons/MaterialIcons'

const PaymentSummaryScreen = ({ navigation }) => {
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    const [paymethodMethod, setPaymentMethod] = useState('cash');

    const footerButton = () => (
        <View style={{ paddingHorizontal: 20, marginBottom: 50 }}>
            <Pressable onPress={() => navigation.navigate('CompleteBookingScreen')} style={{ backgroundColor: themeColor.primary, paddingVertical: 10, borderRadius: 20, marginTop: 10 }}>
                <Text style={[styles.largeText, { textAlign: 'center' }]}>Done</Text>
            </Pressable>
        </View>
    )
    return (
        <CustomHeaderLayout screenName={'Payment Summary'} CustomBottom={footerButton} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ gap: 10 }}>
                    <View style={{ borderWidth: 1, borderColor: themeColor.border, padding: 10, borderRadius: 10, backgroundColor: themeColor.secondaryBackground }}>
                        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.largeText}>Appointment Date:</Text>
                            <Text style={styles.largeText}>15 AUg 2025</Text>
                        </View>
                        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.largeText}>Customer Name:</Text>
                            <Text style={styles.largeText}>Ganesh</Text>
                        </View>
                        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.largeText}>Customer phone no.:</Text>
                            <Text style={styles.largeText}>+91 89687141019</Text>
                        </View>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: themeColor.border, padding: 10, borderRadius: 10, backgroundColor: themeColor.secondaryBackground, gap: 10 }}>
                        <Text style={styles.header}>Summary</Text>
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />

                    </View>
                    <View style={{ borderWidth: 1, borderColor: themeColor.border, padding: 10, borderRadius: 10, backgroundColor: themeColor.secondaryBackground, gap: 10 }}>
                        <Text style={styles.header}>Payment Summary</Text>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.largeText}>Sub Total:</Text>
                                <Text style={styles.largeText}>$40</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.largeText}>Tex:</Text>
                                <Text style={styles.largeText}>$40</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.largeText}>Discount %:</Text>
                                <Text style={styles.largeText}>$2</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.largeText}>Total:</Text>
                                <Text style={styles.largeText}>$84</Text>
                            </View>
                        </View>



                    </View>
                    <View style={{ borderWidth: 1, borderColor: themeColor.border, padding: 10, borderRadius: 10, backgroundColor: themeColor.secondaryBackground, gap: 10 }}>
                        <Text style={styles.header}>Payment Method</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Pressable onPress={()=>setPaymentMethod('cash')}>
                                <Icon name={paymethodMethod==='cash'?'radio-button-checked':'radio-button-unchecked'} size={24} color={themeColor.primary} />
                            </Pressable>

                            <Text style={styles.largeText}>Cash</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Pressable onPress={()=>setPaymentMethod('online')}>
                                <Icon name={paymethodMethod==='online'?'radio-button-checked':'radio-button-unchecked'} size={24} color={themeColor.primary} />
                            </Pressable>

                            <Text style={styles.largeText}>Online</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>

        </CustomHeaderLayout>
    )
}

export default PaymentSummaryScreen