import { View, Text } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import CustomCalendar from '../../../components/CustomCalendar'

const BookAppointmentScreen = () => {
    return (
        <SecondLayout screenName={'Book Appointment'}>
            <CustomCalendar />
        </SecondLayout>


    )
}

export default BookAppointmentScreen