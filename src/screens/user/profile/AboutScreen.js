import { View, Text } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import { useTranslation } from 'react-i18next';

const AboutScreen = () => {
    const { t } = useTranslation();
    return (
        <SecondLayout screenName={t('about')}>

        </SecondLayout>
    )
}

export default AboutScreen