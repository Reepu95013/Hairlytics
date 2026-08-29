import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import CustomBottomTabs from '../../../components/CustomBottomTabs'
import Layout from '../../../components/Layout'
import useLanguage from '../../../hooks/useLanguage'
import { key } from '../../../utils/key'
import { storage } from '../../../utils/storage'


const SettingScreen = () => {
  
  

  const { changeLanguage } = useLanguage();

  const onChnageLanguage = async (lang) => {
    changeLanguage(lang);
    await storage.setItem(key.STORAGE_KEYS.LANGUAGE, lang);
  }
  return (
    <Layout>
      <View style={{ alignItems: 'center', gap: 20 }}>
        <TouchableOpacity onPress={() => onChnageLanguage(key.LANGUAGES.HI)}>
          <Text>Hindi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChnageLanguage(key.LANGUAGES.EN)}>
          <Text style={{ fontFamily: 'Merienda-VariableFont_wght' }}>English</Text>
        </TouchableOpacity>

        
          <Button title="Switch to Admin" onPress={()=>console.log("hi")} />
          <Button title="Switch to User" onPress={()=>console.log('jhi')} />
        
      </View>

    </Layout>
  )
}

export default SettingScreen