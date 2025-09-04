import { View, Text } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import { useTranslation } from 'react-i18next';

const SendFeedbackScreen = () => {
    const { t } = useTranslation();
    return (
        <SecondLayout screenName={t('feedback')}>

        </SecondLayout>
    )
}

export default SendFeedbackScreen