import { View, Text } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import { useTranslation } from 'react-i18next';

const RatingScreen = () => {
    const { t } = useTranslation();
    return (
        <SecondLayout screenName={t('your_rating')}>

        </SecondLayout>
    )
}

export default RatingScreen