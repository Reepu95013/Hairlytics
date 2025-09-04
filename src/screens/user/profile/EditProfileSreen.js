import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SecondLayout from '../../../components/SecondLayout'
import { useTranslation } from 'react-i18next';
import CustomInputText from '../../../components/CustomInputText';
import CustomButton from '../../../components/CustomButton';

const EditProfileSreen = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");


    return (
        <SecondLayout screenName={t('your_profile')}>
            <CustomInputText label={t('name')}
                required
                placeholder={t('name')}
                value={name}
                onChangeText={setName}
                validationRules={[
                    {
                        validate: (text) => text.trim().length > 0,
                        message: "This field is required",
                    },
                    {
                        validate: (text) => text.trim().length > 10,
                        message: "Lenth should 10 max",
                    },
                ]}

            />

            <CustomInputText label={t('mobile')}
                required
                placeholder={t('mobile')}
                value={mobile}
                onChangeText={setMobile}
                keyboardType={'number-pad'}
                validationRules={[
                    {
                        validate: (text) => text.trim().length > 0,
                        message: "This field is required",
                    },
                    {
                        validate: (text) => text.trim().length > 10,
                        message: "Lenth should 10 max",
                    },
                ]}

            />

            <CustomInputText label={t('email')}
                required
                placeholder={t('email')}
                value={mobile}
                onChangeText={setMobile}
                keyboardType={'number-pad'}
                validationRules={[
                    {
                        validate: (text) => text.trim().length > 0,
                        message: "This field is required",
                    },
                    {
                        validate: (text) => text.trim().length > 10,
                        message: "Lenth should 10 max",
                    },
                ]}

            />

            <CustomButton
                label={t('update')}
                onPress={() => alert('helo')}

            />

        </SecondLayout>
    )
}

export default EditProfileSreen