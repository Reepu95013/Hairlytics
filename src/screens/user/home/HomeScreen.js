import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Layout from '../../../components/Layout'
import { useTranslation } from 'react-i18next'
import useLanguage from '../../../hooks/useLanguage'
import { useColorTheme } from '../../../context/ThemeContext'
import CustomLoader from '../../../components/CustomLoader'
import { useLoader } from '../../../context/LoaderContext'

const HomeScreen = ({ navigation }) => {
  const { setLoaderVisible } = useLoader();
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();
  const { themeColor, toggleTheme } = useColorTheme();
  return (
    <Layout>
      <View>
        <Text>{t('welcome')}</Text>
        <Button title="Switch to Hindi" onPress={() => changeLanguage('hi')} />
        <Button title="Switch to English" onPress={() => changeLanguage('en')} />

        <TouchableOpacity onPress={toggleTheme} style={{ backgroundColor: themeColor.secondary }}>
          <Text>Switch</Text>
        </TouchableOpacity>
        <Button title="start" onPress={() => setLoaderVisible(true)} />

      </View>

    </Layout>

  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
  },
});